const data = require('./database');

function somenteUserName() {
    return data.lista.reduce((prev, curr) => {
        return [...prev, curr.Username];
    }, []);
}

console.log(somenteUserName());