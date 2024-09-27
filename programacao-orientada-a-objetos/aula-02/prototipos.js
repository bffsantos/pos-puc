// PROTOTIPOS
function Pessoa (nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
    this.calculaIdade = function() {
        return new Date().getFullYear() - this.anoDeNascimento;
    }
};
    
const pessoa = new Pessoa("Fulano", 1990, "Estudante");

// ACESSANDO valueOf()
console.log(pessoa.valueOf());

// ACESSANDO PROTOTIPOS
console.log(Object.getPrototypeOf(pessoa));

// CRIANDO OBJETOS POR MEIO DE PROTOIPOS
const pessoa2 = Object.create(pessoa);

console.log(Object.getPrototypeOf(pessoa2));

// HERANCA PROTOTIPADA
const pessoa3 = new Pessoa("Fulano", 1990, "Estudante");
console.log(pessoa3);

Pessoa.prototype.saudar = function() {
    console.log("Olá");
};
console.log(pessoa3);