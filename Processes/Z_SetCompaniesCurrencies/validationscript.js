
//**** ********* ****//
//**** FUNCIONES ****//
//**** ********* ****//

function SetCurrencyRecord(record,companyCode,fromCurr,exchRate,fromFactor,toFactor,isNewRecord){

    if(record){

        var field = null;

        if(isNewRecord){
            field = record.GetVars();
        }
        else{
            field = record.GetUninheritedVars();
        }

        if(field){
            field.AddValue_String("CompanyCode__", companyCode, true);
            field.AddValue_String("CurrencyFrom__", fromCurr, true);
            field.AddValue_String("RatioFrom__", fromFactor, true);
            field.AddValue_String("RatioTo__",toFactor, true);
            field.AddValue_String("Rate__", exchRate, true);
            
            if(isNewRecord){
                record.Commit();
            }
            else{
                record.Process();
            }
        }
    }
}

function CreateOrUpdateCurrencyRecord(companyCode,fromCurr,exchRate,fromFactor, toFactor){

    var tableName = "P2P - Exchange rate__";
    var filter = "&(CompanyCode__=" + companyCode + ")(CurrencyFrom__=" + fromCurr + ")";
    var query = Process.CreateQueryAsProcessAdmin();

    query.Reset();
	query.SetSpecificTable("CDNAME#" + tableName);
	query.SetAttributesList("*");
    query.SetFilter(filter);

    if (query.MoveFirst()){

        var record = query.MoveNext();
        if(record){
            
            Log.Info("The currency " + fromCurr + " already exists. The exchange rate will be updated to : " + exchRate);
            SetCurrencyRecord(record,companyCode,fromCurr,exchRate,fromFactor,toFactor,false);
        }
        else{

            Log.Info("The currency " + fromCurr + " doesn't exist in the table. The exchange rate to the new currency is : " + exchRate);
            var newRecord = Process.CreateTableRecord(tableName);
            SetCurrencyRecord(newRecord,companyCode,fromCurr,exchRate,fromFactor,toFactor,true);
        }
    }
    else{

        Log.Error("MoveFirst failed! Table: " + tableName);
    }
}

function TomarCodigosEmpresa()
{
    var tableName = "PurchasingCompanycodes__";
    var query = Process.CreateQueryAsProcessAdmin();

    query.Reset();
	query.SetSpecificTable("CDNAME#" + tableName);
	query.SetAttributesList("*");
    query.SetFilter("");

    var companyCodes = [];

    if (query.MoveFirst()){
        
        var records = query.MoveNext();
        while(records){
            
            var record = records.GetUninheritedVars();
            companyCodes.push(record.GetValue_String("CompanyCode__", 0));
            records = query.MoveNext();
        }
    }
    else{
    Log.Error("MoveFirst failed! Table: " + tableName);
    }

    return companyCodes;
}

function TomarMonedasDefault()
{   
    var monedasCargadas = [];
    if(Data.GetValue("Z_Monedas__") &&  Data.GetValue("Z_Monedas__") != "")
    {
        var monedas = Data.GetValue("Z_Monedas__").split(/\n/gm);
        
        if(monedas.length == 0)
        {
            Data.SetWarning("Z_Monedas__", "Debe seperar por saltos de linea cada registro de moneda.");
        }
        
        for(var i = 0; i < monedas.length; i++)
        {
            var detalleMoneda = {};
            if(monedas[i] && monedas[i] != "")
            {
                Data.SetWarning("Z_Monedas__", "");
                if(monedas[i].split(",").length == 4)
                {
                    Data.SetWarning("Z_Monedas__", "");
                    detalleMoneda.currencyFrom = monedas[i].split(",")[0];
                    detalleMoneda.ratioFrom = monedas[i].split(",")[1];
                    detalleMoneda.ratioTo = monedas[i].split(",")[2];
                    detalleMoneda.rate = monedas[i].split(",")[3];

                    monedasCargadas.push(detalleMoneda);
                }
                else
                {
                    Data.SetWarning("Z_Monedas__", "El formato de monedas especificado en la linea " + (i+1) + " no es el correcto.");
                }
            }
            else
            {
                Data.SetWarning("Z_Monedas__", "Debe seperar por saltos de linea cada registro de moneda, exceptuando el ultimo registro.");
            }
        }
    }
    else
    {
        Data.SetWarning("Z_Monedas__", "Debe especificar las monedas que desee cargar por default en este campo.");
    }

    return monedasCargadas;
}

function Init()
{
    var companyCodes = TomarCodigosEmpresa();
    var monedas = TomarMonedasDefault();

    Log.Info(JSON.stringify(companyCodes));
    
    for(var i= 0; i < companyCodes.length; i ++)
    {
        for(var k = 0; k < monedas.length; k++)
        {
            CreateOrUpdateCurrencyRecord(companyCodes[i],monedas[k].currencyFrom,monedas[k].rate,monedas[k].ratioFrom, monedas[k].ratioTo);
        }
    }

    Process.PreventApproval();
}

//**** ****** ****//
//**** INICIO ****//
//**** ****** ****//

Init();