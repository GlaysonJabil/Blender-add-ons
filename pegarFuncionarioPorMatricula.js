const data = require('./database');

function pegarFuncionarioPorMatricula(Registration) {
    return data.lista.find((Register) => Register.Registration === '1002191');
    }

console.log(pegarFuncionarioPorMatricula(1002191));