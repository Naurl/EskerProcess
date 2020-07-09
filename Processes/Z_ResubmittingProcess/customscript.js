var HTMLContent = Controls.Z_Results__.GetHTML();
debugger;
var data = "<div class=\"icon-info\">&nbsp;</div> Aqui ira el resultado de la consulta";
data = Variable.GetValueAsString("Message");
HTMLContent = HTMLContent.replace("@Data", data);
Controls.Z_Results__.SetHTML(HTMLContent);