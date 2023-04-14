const data = require('./database');

function filtrarUsuarioComMail(Mail) {
    return data.lista.filter((listaSome) => {
        return listaSome.Mail === filtrarUsuarioComMail;
    });
}

console.log(filtrarUsuarioComMail("Mail"));


// GARREI NESSA AQUI