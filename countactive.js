const database = require('./database')
const activeinative = require('./database')

activeinative.lista 

// Contar funcionarios Ativo 

function countActive(Status) {
    if(Status === 'A' || Status === 'I'){
        return database.lista.filter((lista) => lista.Status === Status).length;      
    } else {
        return "Sem stauts"
    }
}

console.log(countActive('A'));
