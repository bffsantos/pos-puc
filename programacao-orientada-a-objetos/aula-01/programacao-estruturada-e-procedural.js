// EXEMPLO 1
let numero1 = 10;
let numero2 = 20;

function add(n1, n2){
    return n1 + n2;
}

let z = add(numero1, numero2);

console.log(z);

// EXEMPLO 2
let horaExtra = 100;
let qtHoras = 20;
let salarioFixo = 5000;

function calcularSalario(horaExtra, qtHoras){
    return salarioFixo + (horaExtra * qtHoras);
}

let total = calcularSalario(horaExtra, qtHoras);
console.log(total);