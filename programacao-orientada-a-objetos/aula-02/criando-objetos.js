// CRIANDO OBJETOS: LITERAL
var pessoa = {
    nome: "Fulano",
    anoDeNascimento: 1990,
    profissao: "Estudante",
    calculaIdade: function() {
        return new Date().getFullYear() - this.anoDeNascimento;
    }
};

console.log(pessoa);

// CRIANDO OBJETOS: FÁBRICAS
function criarPessoa(nome, anoDeNascimento, profissao) {
    return {
        nome,
        anoDeNascimento,
        profissao,
        calculaIdade: function() {
            return new Date().getFullYear() - this.anoDeNascimento;
        }
    };
}

const pessoa2 = criarPessoa("Fulano", 1990, "Estudante");
console.log(pessoa2);

// CRIANDO OBJETOS: CONSTRUTORES
function Pessoa (nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
    this.calculaIdade = function() {
        return new Date().getFullYear() - this.anoDeNascimento;
    }
};

const pessoa3 = new Pessoa("Fulano", 1990, "Estudante");
console.log(pessoa3);

// CRIANDO OBJETOS: CONSTRUTOR Object()
const pessoa4 = new Object();

console.log(pessoa4);

pessoa4.nome = "Fulano";
pessoa4.anoDeNascimento = 1990;
pessoa4.profissao = "Estudante";
pessoa4.calculaIdade = function() {
    return new Date().getFullYear() - this.anoDeNascimento;
};

console.log(pessoa4);

// CRIANDO OBJETOS: CLASSES
class Individuo {
    constructor(nome, anoDeNascimento, profissao) {
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;
    };

    ola() {
        console.log("Olá");
    };

    calculaIdade() {
        return new Date().getFullYear() - this.anoDeNascimento;
    };
};

const pessoa5 = new Individuo("Fulano", 1990, "Estudante");
console.log(pessoa5);