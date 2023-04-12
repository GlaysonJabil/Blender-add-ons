const data = require('./database')

const ordenar = data.lista.sort((a, b) => a.Name.localeCompare(b.Name));

console.log(ordenar);




