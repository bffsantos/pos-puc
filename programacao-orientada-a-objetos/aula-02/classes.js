// CLASSES
class Pessoa {
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

const pessoa = new Pessoa("Fulano", 1990, "Estudante");
console.log(pessoa);

// HERANÇA
class Estudante extends Pessoa {
    constructor(nome, anoDeNascimento, profissao, matricula) {
        super(nome, anoDeNascimento, profissao);
        this.matricula = matricula;
    };

    // polimorfismo
    ola() {
        super.ola();
        console.log(" colega!");
        };
};

const aluno = new Estudante("Ciclano", 2000, "Estudante", 120901);
console.log(aluno);

// POLIMORFISMO
aluno.ola();