var ancestorsRuid = Variable.GetValueAsString("AncestorsRuid");
if (ancestorsRuid == null || ancestorsRuid == "")
{
    // Technical error.
    throw "No ancestor RUIDs found.";
	
}
else
{
	Log.Info("ancestorsRuid: "+ ancestorsRuid);
}
var listRuid = ancestorsRuid.split('|');
Log.Info("listRuid Length: " + listRuid.length);
Data.SetValue("SelectedInvoices__",listRuid.length);

var filter = "";
var Message = "";
var limit = listRuid.length;
if(limit > 100)
{
	limit = 100;
    Message = "<div class=\"icon-warning\">&nbsp;</div> Se ha superado el limite de documentos seleccionados, solo se 'Reprocesaran' los primeros "+ limit +" documentos. </br></br>";
}
else
{
    Message = "<div class=\"icon-info\">&nbsp;</div>Se han enviado "+ limit +" documento/s a 'Reprocesar'. </br></br>";
}

for (var i=0; i< limit; i++)
{
	filter += "(RUIDEX=" + listRuid[i] + ")";
}
	
var resubmitted = 0;
var errors = 0;
var errorMessage = "";
var skipped = 0;
var total;
var longIdentifier = "";

if (filter != "")
{
	filter = "(|" + filter + ")";
	
	Log.Info("filter: " + filter);
	var processQuery = Process.CreateQueryAsProcessAdmin();
	processQuery.AddAttribute("RUIDEX");
    processQuery.AddAttribute("DataFile");
    processQuery.AddAttribute("State");
    processQuery.AddAttribute("StatusCode");
    processQuery.AddAttribute("ShortStatus");
	processQuery.SetSearchInArchive(true);
	processQuery.SetFilter(filter);

	if (processQuery.MoveFirst()) // Initializing the query.
	{
		var xTransport = processQuery.MoveNext(); // Retrieves the entry matching the filter as an xTransport object.
		while (xTransport)
		{			
			var xvars = xTransport.GetUninheritedVars();
			if (xvars)
			{
                var state = xvars.GetValue_String("State", 0); 
                switch(state)
                {
                    case "200":                  
                        failedProcessAction(xTransport, xvars);
                    break;

                    case "100":
                    case "300":
                    case "400":
                        successProcessAction(xTransport, xvars);
                    break;

                    case "70":
                    default:
                        validateProcessAction(xTransport, xvars);
                    break;
                }
            }
			else
			{
				skipped++;
            }
            
            total = resubmitted + skipped + errors;
            if(total!=0 && (total % 25)==0)
            {
                Log.Warn("Total: " + total);
                Log.Info("Resubmitted: " + resubmitted);
                Log.Info("Skipped: " + skipped);
                Log.Info("Errors: " + errors);
            }
			xTransport = processQuery.MoveNext(); // Retrieves the entry matching the filter as an xTransport object.
		}
	}
	else
	{
		skipped = listRuid.length;
    }
    
    if(resubmitted > 0)
    {
        Message += "</br><div class=\"icon-success\">&nbsp;</div> Se han reprocesado "+ resubmitted +" documento/s correctamente. </br>";
    }
    else
    {
        Message += "</br><div class=\"icon-info\">&nbsp;</div> No se han podido reprocesar ninguno de los documentos. </br>";
    }    

    Variable.SetValueAsString("Message", Message);
    Data.SetValue("ResubmittedInvoices__",resubmitted);
    Data.SetValue("SkippedInvoices__",skipped);
    Data.SetValue("Errors__",errors);
    Data.SetValue("Z_ErrorMessage__", errorMessage);
}

function failedProcessAction(xTransport, xvars)
{    
    longIdentifier = xvars.GetValue_String("RUIDEX", 0).split("."); 
    xvars.AddValue_String("State","70", true); //Change state to "to validate"
    xvars.AddValue_String("StatusCode","0", true);
    xvars.AddValue_String("ShortStatus","0", true);

    //Try modify state
    try
    {   
        xTransport.Process();
        validateProcessAction(xTransport, xvars);
    }
    catch(err)
    {
        errorMessage += "[" + errors + "] **Try modify state** --> "+ err.message + " || ";
        errors++;
        Message += "<div class=\"icon-error\">&nbsp;</div> El documento <a href=\"" + Process.GetProcessURL(xvars.GetValue_String("RUIDEX", 0)) + "\" target=\"_blank\">" + longIdentifier[1] + "</a> no ha podido ser procesado. </br>";
    }
}

function successProcessAction(xTransport, xvars)
{
    longIdentifier = xvars.GetValue_String("RUIDEX", 0).split("."); 
    skipped++;
    Message += "<div class=\"icon-info\">&nbsp;</div> El documento <a href=\"" + Process.GetProcessURL(xvars.GetValue_String("RUIDEX", 0)) + "\" target=\"_blank\">" + longIdentifier[1] + "</a> ha sido ignorado, ya que se encuentra rechazado o contabilizado. </br>";
}

function validateProcessAction(xTransport, xvars)
{
    //Try Resubmit
    try
    {
        xTransport.Resubmit(); // Clears the form content and executes the extraction and validation scripts of the filtered job.
        resubmitted++;               
    }
    catch(err)
    {
        longIdentifier = xvars.GetValue_String("RUIDEX", 0).split("."); 
        errorMessage += "[" + errors + "] Try Resubmit --> "+ err.message + " || ";
        errors++;                        
        Message += "<div class=\"icon-error\">&nbsp;</div> El documento <a href=\""+ longIdentifier[1] +"\" target=\"_blank\">"+ xvars.GetValue_String("RUIDEX", 0) +"</a> no ha podido ser procesado. </br>";
    }
}