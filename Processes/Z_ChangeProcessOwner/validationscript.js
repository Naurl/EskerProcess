///#GLOBALS Lib Sys
/*
Validation script Z_ChangeProcessOwner

Add this lib in Include Libriries: Sys/Sys_Helpers_Attach

### ########### ###
### INFORMATION ###
### ########### ###

-Important: The language set in the header in the csv file is not important, however the same order of the column header is needed.

-Columns of CSV received: "Long identifier","Owner","Process"

- Description of the process: 
  Obtain the Long Identifiers of the process from the CSV file of 
the report and change the respective owner of each one by the owner specified in the "Z_NewOwner__" field.
  If you want only change an old owner, you could specify in the "Z_OldOwnerIdentifier__" field, and only the records that have this old owner will be modified.
  If the field "Z_OldOwnerIdentifier__" is empty, all the records of the CSV will be modified.
*/

//### ######### ###
//### FUNCTIONS ###
//### ######### ###

//Get the first file attached with the extension .csv
function GetFirstCSVAttached()
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

function ReadFromCSV(csvAttached)
{
    var readFromCSV =
    {
        hasHeader: true,
        
        getRegisters: function()
        {
            var reader = Sys.Helpers.Attach.getReader(csvAttached);
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

    return readFromCSV;
}

function BuildNewOwner(oldOwner)
{
    //Example of string to modify cn=nvenencio.prd@request.com.ar,ou=PROD,ou=00362710,ou=ESK,s=eoo
    var processOwnerRegExp = changeProcessOwnerGlobalParameters.processOwnerRegExp;
    var processOwnerParts = processOwnerRegExp.exec(oldOwner);
    
    var newOwner = null;
    
    if(processOwnerParts)
    {       
        var newIdentifierVendor = Data.GetValue("Z_NewOwner__");//Examples: "customeruser.qa@customerdomain.com" -- "test_ap_qa@request.com.ar"
        newOwner = oldOwner.replace(processOwnerRegExp,"cn=" + newIdentifierVendor);
        
        changeProcessOwnerGlobalParameters.ProcessMessagesInformation += "\n OldOwner: " + oldOwner + " --- NewOwner: " + newOwner;
    }

    return newOwner;
}

function BuildNewOwnerToPortal(oldOwner)
{
    //Example of string to modify cn=1884675104$30582981341,ou=Vendors list,ou=QA,ou=00362710,ou=ESK,s=eoo
    var vendorPortalOwnerRegExp = changeProcessOwnerGlobalParameters.vendorPortalOwnerRegExp;
    var vendorPortalOwnerParts = vendorPortalOwnerRegExp.exec(oldOwner);
    
    var newVendorPortalOwner = null;

    if(vendorPortalOwnerParts)
    {
        var vanderPortalAccountID = vendorPortalOwnerParts[1];
        newVendorPortalOwner = Data.GetValue("Z_NewOwner__");//Examples: "30710857950" -- "lanacionsa"
        newVendorPortalOwner = oldOwner.replace(vendorPortalOwnerParts, vanderPortalAccountID + "$" + newVendorPortalOwner);

        changeProcessOwnerGlobalParameters.ProcessMessagesInformation += "\n OldOwner: " + oldOwner + " --- NewOwner: " + newVendorPortalOwner;
    }
    
    return newVendorPortalOwner;
}

function BuildNewOwnerChangeEnvironment()
{
    //Example of string to modify cn=nvenencio.prd@request.com.ar,ou=PROD,ou=00362710,ou=ESK,s=eoo
    //User.accountId LA NACION: QAS = 1884675104; DEV = 1881154991; PRD = 1884675149//  The identifier "00362710" is equal in all of environment of our customer "LA NACION"
    var newOrnderId = null;

    if(Data.GetValue("Z_NewOwner__") && Data.GetValue("Z_NewOwner__") != "" && Data.GetValue("Z_Environment__") && Data.GetValue("Z_Environment__") != "" && Data.GetValue("Z_AccountID__") && Data.GetValue("Z_AccountID__") != "")
    {
        newOrnderId = "cn=" + Data.GetValue("Z_NewOwner__") + ",ou=" + Data.GetValue("Z_Environment__") + ",ou=" + Data.GetValue("Z_AccountID__") + ",ou=ESK,s=eoo";
        return newOrnderId;
    }

    return newOrnderId;
}

function GetOldOwnerIdentifier(oldOwner)
{
    //First example, if the old owner identifier is a vendor portal identifier, get this part "30582981341" from cn=1884675104$30582981341,ou=Vendors list,ou=QA,ou=00362710,ou=ESK,s=eoo
    //Second example, if the old owner identifier is a common user identifier, get this part "30582981341" from cn=30582981341,ou=Vendors list,ou=QA,ou=00362710,ou=ESK,s=eoo
    var oldOwnerRegExp = Data.GetValue("Z_isPortalProcess__") == 1 ? changeProcessOwnerGlobalParameters.vendorPortalOwnerRegExp: changeProcessOwnerGlobalParameters.processOwnerRegExp;
    var oldOwnerRegExpIndex = Data.GetValue("Z_isPortalProcess__") == 1 ? 3 : 2;

    var oldIdentifierParts = oldOwnerRegExp.exec(oldOwner);
    var oldOwnerIdentifier = null;

    if(oldIdentifierParts)
    {
        oldOwnerIdentifier = oldIdentifierParts[oldOwnerRegExpIndex];
    }

    return oldOwnerIdentifier;
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
    var query = Process.CreateQueryAsProcessAdmin();
    
    limit = (limit ? limit : 100);
    
	if(debug == true){Log.Error(".    Limit: " + limit);}
	
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
				Log.Info(".    Instance " + count + " exists. LongID: " + instance.GetUninheritedVars().GetValue_String("RUIDEX", 0));
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

function BuildProcessFilter(registers)
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
    var filter = BuildProcessFilter(registers);
    var resultProcessMessage = GetTransports(Data.GetValue("Z_ProcessName__"), filter, "OwnerID,MsnEx,RUIDEX", changeProcessOwnerGlobalParameters.debug);
    changeProcessOwnerGlobalParameters.ProcessMessagesInformation += "\n resultProcessMessage: " + JSON.stringify(resultProcessMessage);

    if(resultProcessMessage.length > 0)
    {
        for(var i = 0; i < resultProcessMessage.length; i++)
        {

            var processMessageData = resultProcessMessage[i].GetUninheritedVars();
            var oldOwner = processMessageData.GetValue_String("OwnerID",0);
            var longIdentifier = processMessageData.GetValue_String("MsnEx",0);

            Log.Info("ExOwnerID: " + oldOwner);
            changeProcessOwnerGlobalParameters.ProcessMessagesInformation += "\n ExOwnerID: " + oldOwner;

            if(Data.GetValue("Z_OldOwnerIdentifier__") == GetOldOwnerIdentifier(oldOwner) || Data.GetValue("Z_OldOwnerIdentifier__") == "")
            {   
                var newOwner = null;

                if(Data.GetValue("Z_isPortalProcess__") == 1)
                {
                    newOwner = BuildNewOwnerToPortal(oldOwner);
                }
                else
                {
                    if(Data.GetValue("Z_ChangeEnvironment__") == 1)
                    {
                        newOwner = BuildNewOwnerChangeEnvironment();
                    }
                    else
                    {
                        newOwner = BuildNewOwner(oldOwner);
                    }
                }
                
                if(newOwner)
                {
                    processMessageData.AddValue_String("OwnerID", newOwner, true);
                    
                    try
                    {
                        // I try process the changes in vendor invoice message
                        resultProcessMessage[i].Process();
                        
                        changeProcessOwnerGlobalParameters.longIdentifierFixed.push({MsnEx: longIdentifier, newOwnerId: newOwner, oldOwnerId: oldOwner});
                        changeProcessOwnerGlobalParameters.ProcessMessagesInformation += "\n Ruidex updated: " + processMessageData.GetValue_String("RUIDEX",0);
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

//Read csv report and change owners each one hundred registers per request.
function ChangeOwnerWithCSVReport()
{
    // Get records of Process Message from CSV attached
    var registers = ReadFromCSV(GetFirstCSVAttached()).getRegisters();

    // Process the registers with a limit
    if(registers)
    {
        var limit = changeProcessOwnerGlobalParameters.limitPerQueryRequest;
        var control = 0;
        var registersToProcess = [];

        for(var i = 0; i < registers.length; i++ )
        {
            registersToProcess.push(registers[i]);

            control ++;
            changeProcessOwnerGlobalParameters.globalProcessingCount++;

            if(control == limit || (limit < changeProcessOwnerGlobalParameters.globalProcessingLimit && control > 0))
            {
                ProcessRegisters(registersToProcess);

                registersToProcess = [];
                control = 0;

                if(changeProcessOwnerGlobalParameters.globalProcessingCount >= changeProcessOwnerGlobalParameters.globalProcessingLimit)
                {
                    Log.Info("Global limit: " + changeProcessOwnerGlobalParameters.globalProcessingLimit + " // global count: " + changeProcessOwnerGlobalParameters.globalProcessingCount);
                    break;
                }
            }
        }
        
        if(registersToProcess.length > 0 && changeProcessOwnerGlobalParameters.globalProcessingCount < changeProcessOwnerGlobalParameters.globalProcessingLimit)
        {
            ProcessRegisters(registersToProcess);
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

            var correctLogin = loginRegExp.exec(recordVendorLogin);
            if(correctLogin)
            {
                if(vendorLoginToFix.hasOwnProperty(correctLogin))
                {
                    vendorLoginToFix[correctLogin].push(recordVendorLogin);
                }
                else
                {
                    vendorLoginToFix[correctLogin] = [];
                    vendorLoginToFix[correctLogin].push(recordVendorLogin);
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
            var processMessageData = resultProcessMessage[i].GetUninheritedVars();
            var oldOwner = processMessageData.GetValue_String("OwnerID",0);
            var longIdentifier = processMessageData.GetValue_String("MsnEx",0);
    
            Data.SetValue("Z_NewOwner__", vendorLoginFixed);
            var newOwner = BuildNewOwner(oldOwner);
    
            if(newOwner)
            {
                processMessageData.AddValue_String("OwnerID", newOwner, true);
                
                try
                {
                    // I try process the changes in vendor invoice message
                    resultProcessMessage[i].Process();
                    changeProcessOwnerGlobalParameters.longIdentifierFixed.push({MsnEx: longIdentifier, newOwnerId: newOwner, oldOwnerId: OldOwner});
                    Variable.SetValueAsString("vendorLoginToFix", JSON.stringify(vendorLoginToFix));
                    changeProcessOwnerGlobalParameters.ProcessMessagesInformation += "\n Ruidex updated: " + processMessageData.GetValue_String("RUIDEX",0);
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

    vendorPortalOwnerRegExp: /(cn=[0-9]+)(\$([A-Za-z0-9.@_-]+))/g,
    processOwnerRegExp: /(cn=)([$A-Za-z0-9.@_-]+)/g,

    longIdentifierFixed: [],
    ProcessMessagesInformation: "",

    limitPerQueryRequest: 100,
    debug: false
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

Process.PreventApproval();//Prevent approval in order to give the posibility to fix the register of the same csv report in errors case.