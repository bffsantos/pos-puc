// VISIBLIDADE-ENCAPSULAMENTO
// VARIÁVEIS LOCAIS
function Individuo() {
    let nome = "Fulano"; // variável local
    let anoDeNascimento = 1990;
    let profissao = "Estudante";
    this.calculaIdade = function() { // método exposto, uso da palavra 'this'
        return new Date().getFullYear() - anoDeNascimento;
    }
};

const pessoa = new Individuo();
console.log(pessoa);

// VARIÁVEIS PRIVADAS
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

class Estudante extends Pessoa {
    
    #matricula; // variável privada, uso do símobolo '#'
    
    constructor(nome, anoDeNascimento, profissao, matricula) {
        super(nome, anoDeNascimento, profissao);
        this.#matricula = matricula;
    };

    getMatricula() {
        return this.#matricula;
    };

    setMatricula(valor) {
        this.#matricula = valor;
    };
};

const aluno = new Estudante("Fulano", 1990, "Estudante", 120901);
console.log(aluno);

// ACESSO A VARIÁVEL PRIVADA
console.log(aluno.getMatricula());

// ATRIBUIÇÃO A VARIÁVEL PRIVADA
aluno.setMatricula(158590);
console.log(aluno.getMatricula());
