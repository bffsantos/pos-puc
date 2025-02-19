const axios = require('axios');

const funcoes = {

    somarDoisValores: (v1, v2) => v1 + v2,

    sempreNulo: () => null,

    codigoValido: function (codigo) {
        if(codigo >= 100 && codigo <= 999)
            return true; // codigo valido
        else
            return false; //codigo invalido
    },

    inverterString: str => str.split('').reverse().join(''),

    funcaoNaoTestada: (v) => v + 1,

    buscarUsuario1: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => 'erro ao recuperar o usuario')

}

module.exports = funcoes