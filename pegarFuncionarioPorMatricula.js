const data = require('./database');

function pegarFuncionarioPorMatricula() {
    return data.lista.find((Registration) => Registration.Registration === '1007805');
    }

console.log(pegarFuncionarioPorMatricula(1007805));