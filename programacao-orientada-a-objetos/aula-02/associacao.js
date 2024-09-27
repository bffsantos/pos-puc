// ASSOCIAÇÃO
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
    
    #matricula;
    notas = [];
    
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

    addNota(nota){
        this.notas.push(nota);
    };
};

class Nota {

    constructor(disciplina, grau) {
        this.disciplina = disciplina;
        this.grau = grau;
    }
};

const aluno = new Estudante("Joao", 1990, "Estudante", 165484);

console.log(aluno.notas);

// ASSOCIACAO DE OBJETO
const nota1 = new Nota("História", 9);

aluno.addNota(nota1); // Guardando um objeto dentro de outro - Aluno contem várias notas.

console.log(aluno.notas);

const nota2 = new Nota("Matemática", 10);
const nota3 = new Nota("Inglês", 8);

aluno.addNota(nota2);
aluno.addNota(nota3);

console.log(aluno.notas);