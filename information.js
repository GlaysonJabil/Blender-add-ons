const data = require('./database');

function information() {
    return data.lista.map((list) => `${list.Name} está em situação ${list.Status}`);
};
console.log(information());
