//Validation Change Process Owner
// Add this lib in Include: Sys/Sys_Helpers_Attach

///#GLOBALS Lib Sys

/*
### ########### ###
### INFORMATION ###
### ########### ###

-Important: Set the user language in "English" so that the name of the process arrives 
correctly in the csv before executing the scheduled report.

-Columns of CSV received: "Long identifier","Owner","Process"

- Description of the process: 
  Obtain the Long Identifiers of the process from the CSV file of 
the report and change the respective owner of each one by the owner specified in the "Z_NewOwner__" field.
  If it is desired to change an old owner only, it is specified in the field "Z_OldOwnerIdentifier__", 
and only the records that have this old owner will be modified.
  If the field "Z_OldOwnerIdentifier__" is empty, all the records of the CSV will be modified.
*/

//### ######### ###
//### FUNCTIONS ###
//### ######### ###

var ReadFromCSV =
{
    hasHeader: true,
    
    getRegisters: function()
	{

        function GetCSVAttach()
        {
            var xmlIdx = 0;
            for (var i=0; i< Attach.GetNbAttach(); i++)
            {
                if (Attach.GetExtension(i).toUpperCase() == ".CSV")
                {
                    xmlIdx = i;
                    Log.Info(">> CSV attachment found " + xmlIdx);
                    break;
                }
            }

            return xmlIdx;
        }

		var reader = Sys.Helpers.Attach.getReader(GetCSVAttach());
        var line;

		// Skip first line if CSV has header
		if (ReadFromCSV.hasHeader)
		{
            Log.Info("Saltea el header.");
            changeProcessOwnerGlobalParameters.ProcessMessagesInformation += "\n Saltea el header.";
			reader.getLine();
		}
        var lines = [];
		while ((line = reader.getLine()) != null)
		{
			lines.push(ReadFromCSV.extractRegisterFromLine(line));
        }
		return lines;
    },
    
    extractRegisterFromLine: function(line)
	{
	    line = line.replace(/"/g, "");
        var splitResult = line.split(",");
        return splitResult;
	},
};

function BuildNewOwner(OldOwner)
{
    //Ejemplo de cadena a modificar cn=nvenencio.prd@request.com.ar,ou=PROD,ou=00362710,ou=ESK,s=eoo
    var processOwnerRegExp = changeProcessOwnerGlobalParameters.processOwnerRegExp;
    var processOwnerParts = processOwnerRegExp.exec(OldOwner);

    if(processOwnerParts)
    {       
        var NewIdentifierVendor = Data.GetValue("Z_NewOwner__");//"30710857950";
        var NewOwner = OldOwner.replace(processOwnerRegExp,"cn=" + NewIdentifierVendor);
        
        changeProcessOwnerGlobalParameters.ProcessMessagesInformation += "\n OldOwner: " + OldOwner + " --- NewOwner: " + NewOwner;
    
        return NewOwner;
    }
    return null;
}

function BuildNewOwnerToPortal(OldOwner)
{
    //Ejemplo de cadena a modificar cn=1884675104$30582981341,ou=Vendors list,ou=QA,ou=00362710,ou=ESK,s=eoo
    //Exprecion regular utilizada para modificarlo (cn=[0-9]+)(\$[A-Za-z0-9.@_-]+)
    var vendorPortalOwnerRegExp = changeProcessOwnerGlobalParameters.vendorPortalOwnerRegExp;
    var vendorPortalOwnerParts = vendorPortalOwnerRegExp.exec(OldOwner);
    
    if(vendorPortalOwnerParts)
    {
        var vanderPortalAccountID = vendorPortalOwnerParts[1];
        var newVendorPortalOwner = Data.GetValue("Z_NewOwner__");//"Excample: 30710857950";
        newVendorPortalOwner = OldOwner.replace(vendorPortalOwnerParts, vanderPortalAccountID + "$" + newVendorPortalOwner);

        changeProcessOwnerGlobalParameters.ProcessMessagesInformation += "\n OldOwner: " + OldOwner + " --- NewOwner: " + newVendorPortalOwner;
        return newVendorPortalOwner;
    }
    
    return null;
}

function BuildNewOwnerChangeEnvironment()
{
    // Ejemplo de cadena a armar cn=nvenencio.prd@request.com.ar,ou=PROD,ou=00362710,ou=ESK,s=eoo
    //User.accountId LA NACION: QAS = 1884675104; DEV = 1881154991; PRD = 1884675149//  identificador igual en todas las cuentas =00362710

    if(Data.GetValue("Z_NewOwner__") && Data.GetValue("Z_NewOwner__") != "" && Data.GetValue("Z_Environment__") && Data.GetValue("Z_Environment__") != "" && Data.GetValue("Z_AccountID__") && Data.GetValue("Z_AccountID__") != "")
    {
        var newOrnderId = "cn=" + Data.GetValue("Z_NewOwner__") + ",ou=" + Data.GetValue("Z_Environment__") + ",ou=" + Data.GetValue("Z_AccountID__") + ",ou=ESK,s=eoo";
        return newOrnderId;
    }

    return null;
}

function GetOldOwnerIdentifier(OldOwner)
{
    //For Example, Get this part "30582981341" from cn=1884675104$30582981341,ou=Vendors list,ou=QA,ou=00362710,ou=ESK,s=eoo
    var regExp = /(cn=[0-9]+)(\$([A-Za-z0-9.@_-]+))/g;
    
    var OldIdentifierParts = regExp.exec(OldOwner);

    if(OldIdentifierParts)
    {
        return OldIdentifierParts[3];
    }

    return null;
}

function GetTransports(processName,filter, atributes ,debug, limit)
{
	if(debug == true)
	{
        Log.Warn("GetTransports() atributes: " + processName + " | " + filter + " | " + debug + " | " + limit);
        changeProcessOwnerGlobalParameters.ProcessMessagesInformation += "\n GetTransports() atributes: " + processName + " | " + filter + " | " + debug + " | " + limit;
	}
	
	var results = [];
	var count = 0;
	limit = (limit ? limit : 100);
	if(debug == true){Log.Error(".    Limit: " + limit);}
	var query = Process.CreateQueryAsProcessAdmin();
	
    //query.Reset();
    if(processName && processName!= "")
    {
        query.SetSpecificTable("CDNAME#" + processName);
    }
    query.SetAttributesList(atributes);
    query.SetSearchInArchive(true);
	query.SetFilter(filter);
	
	if (query.MoveFirst())
	{
		var instance = query.MoveNext();
		while(instance)
		{
			if(debug == true)
			{
			//	Log.Info(".    Instance " + count + " exists. LongID: " + instance.GetUninheritedVars().GetValue_String("RUIDEX", 0));
			}
			results[count] = instance;
			instance = query.MoveNext();
			count++;
            if(count > limit) 
            {
                break;
            }
		}
	}	
    else
	{
		if(debug == true){Log.Error(".    MoveFirst failed!");}
		return null;
	}
	
	if(debug == true)
	{
		Log.Info(".    Records founded: " + count);
	}
	
	return results;
}

function buildProcessFilter(registers)
{
    var filter = "|";
    for(var i=0; i<registers.length; i++)
    {
        filter += "(MsnEx=" + registers[i][0] + ")";
    }
    return filter
}

function ProcessRegisters(registers)
{
    var filter = buildProcessFilter(registers);
    var resultProcessMessage = GetTransports(Data.GetValue("Z_ProcessName__"),filter, "OwnerID,MsnEx,RUIDEX",true);
    changeProcessOwnerGlobalParameters.ProcessMessagesInformation += "\n resultProcessMessage: " + JSON.stringify(resultProcessMessage);

    if(resultProcessMessage.length > 0)
    {
        for(var i = 0; i < resultProcessMessage.length; i++)
        {

            var ProcessMessageData = resultProcessMessage[i].GetUninheritedVars();
            var OldOwner = ProcessMessageData.GetValue_String("OwnerID",0);
            var longIdentifier = ProcessMessageData.GetValue_String("MsnEx",0);

            Log.Info("ExOwnerID: " + OldOwner);
            changeProcessOwnerGlobalParameters.ProcessMessagesInformation += "\n ExOwnerID: " + OldOwner;

            if(Data.GetValue("Z_OldOwnerIdentifier__") == GetOldOwnerIdentifier(OldOwner) || Data.GetValue("Z_OldOwnerIdentifier__") == "")
            {   
                var NewOwner = null;
                if(Data.GetValue("Z_isPortalProcess__") == 1)
                {
                    NewOwner = BuildNewOwnerToPortal(OldOwner);
                }
                else
                {
                    if(Data.GetValue("Z_ChangeEnvironment__") == 1)
                    {
                        NewOwner = BuildNewOwnerChangeEnvironment();
                    }
                    else
                    {
                        NewOwner = BuildNewOwner(OldOwner);
                    }
                }
                
                if(NewOwner)
                {
                    ProcessMessageData.AddValue_String("OwnerID",NewOwner,true);
                    
                    try
                    {
                        // I try process the changes in vendor invoice message
                        resultProcessMessage[i].Process();
                        
                        changeProcessOwnerGlobalParameters.longIdentifierFixed.push({MsnEx: longIdentifier, newOwnerId: NewOwner, oldOwnerId: OldOwner});
                        changeProcessOwnerGlobalParameters.ProcessMessagesInformation += "\n Ruidex updated: " + ProcessMessageData.GetValue_String("RUIDEX",0);
                        changeProcessOwnerGlobalParameters.successCount ++;
                    }
                    catch(err)
                    {
                        Log.Error("Error at try set OwnerID in a process message. Error Message: " + err.message);
                        changeProcessOwnerGlobalParameters.ProcessMessagesInformation += "\n Error at try set OwnerID in a process message. Error Message: " + err.message;
                        changeProcessOwnerGlobalParameters.errorCount ++;
                    }
                }
                else
                {
                    Log.Info("Can´t build New Owner");
                    changeProcessOwnerGlobalParameters.ProcessMessagesInformation += "\n Can´t build New Owner";
                }
            }
            else
            {
                Log.Info("The Field Z_OldOwnerIdentifier__ not found. Set field empty if want use data of CSV");
                changeProcessOwnerGlobalParameters.ProcessMessagesInformation += "\n The Field Z_OldOwnerIdentifier__ not found. Set field empty if want use data of CSV";
            }
        }
    }
    else
    {
        Log.Info("There aren't records to process");
        changeProcessOwnerGlobalParameters.ProcessMessagesInformation += "\n There aren't records to process";
    }
}

function ChangeOwnerWithCSVReport()
{
    // Get records of Process Message from CSV attached
    var registers = ReadFromCSV.getRegisters();

    // Process the registers with a limit
    if(registers)
    {
        var limit = 100;
        var control = 0;
        var RegistersToProcess = [];
        for(var i = 0; i < registers.length; i++ )
        {
            RegistersToProcess.push(registers[i]);
            control ++;
            changeProcessOwnerGlobalParameters.globalProcessingCount++;

            if(control == limit || (limit < changeProcessOwnerGlobalParameters.globalProcessingLimit && control > 0))
            {
                ProcessRegisters(RegistersToProcess);
                RegistersToProcess = [];
                control = 0;

                if(changeProcessOwnerGlobalParameters.globalProcessingCount >= changeProcessOwnerGlobalParameters.globalProcessingLimit)
                {
                    Log.Info("Global limit: " + changeProcessOwnerGlobalParameters.globalProcessingLimit + " // global count: " + changeProcessOwnerGlobalParameters.globalProcessingCount);
                    break;
                }
            }
        }
        
        if(RegistersToProcess.length > 0 && changeProcessOwnerGlobalParameters.globalProcessingCount < changeProcessOwnerGlobalParameters.globalProcessingLimit)
        {
            ProcessRegisters(RegistersToProcess);
        }
    }
}


//[NAV 2019-11-14] Automatic fix vendor login
function GetVendorLoginToFix()
{
    var vendorLoginToFix = {};
    var query = Process.CreateQueryAsProcessAdmin();
    query.SetSpecificTable("ODUSER");
    var sAccountId = Users.GetUser(Data.GetValue("OwnerID")).GetVars().GetValue_String("accountid", 0);
    var queryFilter = "&(login=*" + sAccountId + "$*_*)(login!=" + sAccountId + "$_vendor_template_)";//Find login in error

    query.SetFilter(queryFilter);

    if (query.MoveFirst())
    {
        var record = query.MoveNextRecord();

        while(record)
        {
            var recordVars = record.GetVars();
            var recordVendorLogin = recordVars.GetValue_String("login",0);

            if(recordVendorLogin.split("_") && recordVendorLogin.split("_").length > 2)
            {
                changeProcessOwnerGlobalParameters.ProcessMessagesInformation += "\n Record with more that one _ , login skipped : " + recordVendorLogin;
                record = query.MoveNextRecord();
                continue;
            }

            var loginRegExp = /[$a-zA-Z0-9]+[^_]/gm;

            var CorrectLogin = loginRegExp.exec(recordVendorLogin);
            if(CorrectLogin)
            {
                if(vendorLoginToFix.hasOwnProperty(CorrectLogin))
                {
                    vendorLoginToFix[CorrectLogin].push(recordVendorLogin);
                }
                else
                {
                    vendorLoginToFix[CorrectLogin] = [];
                    vendorLoginToFix[CorrectLogin].push(recordVendorLogin);
                }
            }
            else
            {
                Log.Error("The correct login can not be obteined.");
            }

            record = query.MoveNextRecord();
        }
    }

    return vendorLoginToFix;
}

function FixVendorLoginByProcessName(processName, filter, vendorLoginFixed)
{
    var resultProcessMessage = GetTransports(processName, filter, "OwnerID,MsnEx,RUIDEX", false);
    Log.Info("FixVendorLoginByProcessName filter: " + filter);
    
    var processFixed = 0;
    for(var i = 0; i < resultProcessMessage.length; i++)
    {
        if(resultProcessMessage.length > 0)
        {
            var ProcessMessageData = resultProcessMessage[i].GetUninheritedVars();
            var OldOwner = ProcessMessageData.GetValue_String("OwnerID",0);
            var longIdentifier = ProcessMessageData.GetValue_String("MsnEx",0);
    
            Data.SetValue("Z_NewOwner__", vendorLoginFixed);
            var newOwner = BuildNewOwner(OldOwner);
    
            if(newOwner)
            {
                ProcessMessageData.AddValue_String("OwnerID", newOwner, true);
                
                try
                {
                    // I try process the changes in vendor invoice message
                    resultProcessMessage[i].Process();
                    changeProcessOwnerGlobalParameters.longIdentifierFixed.push({MsnEx: longIdentifier, newOwnerId: newOwner, oldOwnerId: OldOwner});
                    Variable.SetValueAsString("vendorLoginToFix", JSON.stringify(vendorLoginToFix));
                    changeProcessOwnerGlobalParameters.ProcessMessagesInformation += "\n Ruidex updated: " + ProcessMessageData.GetValue_String("RUIDEX",0);
                    changeProcessOwnerGlobalParameters.successCount ++;
                }
                catch(err)
                {
                    Log.Error("Error at try set OwnerID in a process message. Error Message: " + err.message);
                    changeProcessOwnerGlobalParameters.ProcessMessagesInformation += "\n Error at try set OwnerID in a process message: " + longIdentifier + ". Error Message: " + err.message;
                    changeProcessOwnerGlobalParameters.errorCount ++;
                }
            }
            else
            {
                Log.Info("Can´t build New Owner");
                changeProcessOwnerGlobalParameters.ProcessMessagesInformation += "\n Can´t build New Owner";
            }
        }
        else
        {
            Log.Info("There aren't records to process");
            changeProcessOwnerGlobalParameters.ProcessMessagesInformation += "\n There aren't records to process for vendor login: " + vendorLoginFixed;
        }

        processFixed++;
    }

    return processFixed;
}

//### #### ###
//### INIT ###
//### #### ###

var changeProcessOwnerGlobalParameters = {
    processingTimeOut: 3600,
    globalProcessingLimit: 1000,
    globalProcessingCount: 0,
    successCount: 0,
    errorCount: 0,

    vendorPortalOwnerRegExp: /(cn=[0-9]+)(\$[A-Za-z0-9.@_-]+)/g,
    processOwnerRegExp: /(cn=)([$A-Za-z0-9.@_-]+)/g,

    longIdentifierFixed: [],
    ProcessMessagesInformation: ""
};

Process.SetTimeOut(changeProcessOwnerGlobalParameters.processingTimeOut);

var currentName = Data.GetActionName();

Log.Info("Action name: " + currentName + " --- Data.IsFormInError() = " + Data.IsFormInError());

switch(currentName)
{
    case "Change_Owner":
        if(!Data.IsFormInError())
        {
            ChangeOwnerWithCSVReport();
        }
        break;

    case "AutoFixVendorLogin":
        var vendorLoginToFix = GetVendorLoginToFix();
        Variable.SetValueAsString("vendorLoginToFix", JSON.stringify(vendorLoginToFix));

        for(var vendorLoginFixed in vendorLoginToFix)
        {
            var processNameToFind = Data.GetValue("Z_ProcessName__");

            var filter = "|";
            for(var i=0; i< vendorLoginToFix[vendorLoginFixed].length; i++)
            {
                filter += "(OwnerID=*" + vendorLoginToFix[vendorLoginFixed][i] + "*)";
            }

            if(processNameToFind != "")
            {
                processNameToFind = processNameToFind.split(",");

                var mustDeleteTableRecord = true;
                var currentErrorCount = changeProcessOwnerGlobalParameters.errorCount;

                for(var i = 0; i < processNameToFind.length; i++)
                {
                    if(changeProcessOwnerGlobalParameters.globalProcessingCount > changeProcessOwnerGlobalParameters.globalProcessingLimit)
                    {
                        mustDeleteTableRecord = false;
                        break;
                    }

                    var processFixed = FixVendorLoginByProcessName(processNameToFind[i], filter, vendorLoginFixed);
                    changeProcessOwnerGlobalParameters.globalProcessingCount = changeProcessOwnerGlobalParameters.globalProcessingCount + processFixed;

                    if(processFixed >= 100 || changeProcessOwnerGlobalParameters.errorCount > currentErrorCount)
                    {
                        mustDeleteTableRecord = false;
                    }
                }

                if(mustDeleteTableRecord)
                {
                    var filterToDeleteLoginInError = "login=*" + vendorLoginFixed + "_*";
                    changeProcessOwnerGlobalParameters.ProcessMessagesInformation += "\n Login filter to remove: " + filterToDeleteLoginInError;
                    Sys.Helpers.Database.RemoveTableRecord("ODUSER", filterToDeleteLoginInError);
                }
            }

            if(changeProcessOwnerGlobalParameters.globalProcessingCount > changeProcessOwnerGlobalParameters.globalProcessingLimit)
            {
                break;
            }
        }

        break;
}

Variable.SetValueAsString("longIdentifierFixed", JSON.stringify(changeProcessOwnerGlobalParameters.longIdentifierFixed));
Variable.SetValueAsString("changeProcessOwnerGlobalParameters.ProcessMessagesInformation", changeProcessOwnerGlobalParameters.ProcessMessagesInformation);

Log.Info("Process change success: " + changeProcessOwnerGlobalParameters.successCount + " || Process change error: " + changeProcessOwnerGlobalParameters.errorCount);
changeProcessOwnerGlobalParameters.ProcessMessagesInformation += "\n Process change success: " + changeProcessOwnerGlobalParameters.successCount + " || Process change error: " + changeProcessOwnerGlobalParameters.errorCount;
Data.SetValue("Z_ProcessMessagesInformation__", changeProcessOwnerGlobalParameters.ProcessMessagesInformation);

Process.PreventApproval();