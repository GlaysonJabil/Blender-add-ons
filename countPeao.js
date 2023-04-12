const database = require('./database')
const activeinative = require('./database')

function countActive(Status) {
    if(Status === 'A' || Status === 'I'){
        return database.lista.filter((lista) => lista.Status === Status).length;  // Contar funcionarios Ativo 
    } else {
        return "Sem status"
    }
}

console.log(countActive('A'));
