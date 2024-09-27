// REFERENCIAS
function criarPessoa () {
    return {
        nome: "Fulano",
        anoDeNascimento: 1990,
        profissao: "Estudante"
    };
};

const pessoa1 = criarPessoa();

const pessoa2 = pessoa1;

pessoa2.anoDeNascimento = 1983;

console.log(pessoa1);
console.log(pessoa2);

// ATRIBUTOS ESTATICOS
class Pessoa {

    static NOME_CLASSE = "Pessoa";

    constructor(nome, anoDeNascimento, profissao) {
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;
    };

    static ola() {
        console.log("Olá");
    };

    calculaIdade() {
        return new Date().getFullYear() - this.anoDeNascimento;
    };
};

// CHAMADA DO ATRIBUTO ESTÁTICO
console.log(Pessoa.NOME_CLASSE);

// CHAMADA DO MÉTODO ESTÁTICO
Pessoa.ola();