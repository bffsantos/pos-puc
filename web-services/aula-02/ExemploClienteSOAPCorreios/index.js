var soap = require('soap');
var url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl'

soap.createClient(url, function (err, res){
    //console.log('Descreve ' + res.describe().AtendeClienteService.AtendeClientePort);

    res.consultaCEP({cep: '88010400'}, function(err, res){
        if(err){
            console.log(err);
        } else {
            console.log(res);
        }
    })
}
);