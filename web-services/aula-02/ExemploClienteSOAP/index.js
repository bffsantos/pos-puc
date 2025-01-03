var soap = require('soap');
var url = 'http://www.dneonline.com/calculator.asmx?wsdl'

soap.createClient(url, function (err, client){
    //console.log('Descrever o WSDL', client.describe().Calculator.CalculatorSoap)

    client.Add({intA: 2, intB: 2}, function (err, result){
        if(err){
            console.log(err);
        } else {
            console.log('A soma é: ' + result.AddResult);
        }
    });

    client.Divide({intA: 2, intB: 2}, function (err, result){
        if(err){
            console.log(err);
        } else {
            console.log('A divisão é: ' + result.DivideResult);
        }
    });

    client.Subtract({intA: 2, intB: 2}, function (err, result){
        if(err){
            console.log(err);
        } else {
            console.log('A subtração é: ' + result.SubtractResult);
        }
    });

    client.Multiply({intA: 2, intB: 2}, function (err, result){
        if(err){
            console.log(err);
        } else {
            console.log('A multiplicação é: ' + result.MultiplyResult);
        }
    });

}
);
