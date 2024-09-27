// OBJETO
var pessoa = {
    nome: "Valentina",
    idade: 60,
    saudar: function(nomeAmigo) {
        console.log("Olá "+ nomeAmigo);
    }
};

// ACESSO A PROPRIEDADE
console.log(pessoa.nome);
console.log(pessoa["nome"]);

// ATRIBUIÇÃO
pessoa.idade = 30;
console.log(pessoa.idade);
console.log(pessoa["idade"]);

// ACESSAR MÉTODO
pessoa.saudar("Joana");

// ADICIONAR ATRIBUTO OU MÉTODO
pessoa.cpf = 12345678901;
console.log(pessoa);

// ALTERAR ATRIBUTO OU MÉTODO
pessoa.nome = "Joana";
console.log(pessoa.nome);

// DELETAR ATRIBUTO OU MÉTODO
delete pessoa.cpf;
console.log(pessoa);


