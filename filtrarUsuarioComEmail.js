const data = require('./database');

function filtrarUsuarioComMail(Mail) {
    return data.lista.some((listaSome) => listaSome.Mail === filtrarUsuarioComMail);
}

console.log(filtrarUsuarioComMail("Mail"));


// GARREI NESSA AQUI