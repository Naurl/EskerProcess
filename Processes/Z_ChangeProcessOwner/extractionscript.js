//Extraction Change Process Owner
// Add this lib in Include: Sys/Sys_Helpers_Attach

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

function FillFields()
{
    var ReadFromCSV =
    {
        hasHeader: true,
        
        getRegisters: function()
        {
            var reader = Sys.Helpers.Attach.getReader(0);
            var line;
    
            // Skip first line if CSV has header
            if (ReadFromCSV.hasHeader)
            {
                Log.Info("Saltea el header.");
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

    // Get records of Process Message from CSV attached
    var registers = ReadFromCSV.getRegisters();

    if(registers)
    {
        //Fill Fields With the FIrst Record
        var FirstRecord = 0;

        Data.SetValue("Z_OldOwnerIdentifier__",registers[FirstRecord][1]);
        Data.SetValue("Z_ProcessName__",registers[FirstRecord][2]);
    }
}

//### ############# ###
//### END FUNCTIONS ###
//### ############# ###

var nbAttach = Attach.GetNbAttach();

for (var i=0; i< nbAttach; i++)
{
    if (Attach.GetExtension(i).toUpperCase() == ".CSV")
    {
        var xmlIdx = i;
        Log.Info(">> csv attachment found " + xmlIdx);
        FillFields();
        break;
    }
}