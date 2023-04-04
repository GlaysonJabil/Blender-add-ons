const texto1 = "Olá mundo";
const texto2 = 'Olá mundo';
const senha = "senhaDoBode123@";
const StringdeNumeros = "123456789";

const citacao = "Meu nome é ";
const meuNome = "Glayson";

// Codificação de String 

var cifrao = "\u0024"
var aMaiusculo = "\u0041"
var tique = "\u2705"
var hiragana = "\u3041"

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// trabalhando com String 

var cidade = "belo horizonte";
var input = "Belo Horizonte";

console.log(cidade === input)

var inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo)

var senha2 = "minhasenha123";

console.log(senha2.length)


// Concatenação (+)

console.log(citacao + meuNome)

//template string OU template Literal 

var nome = "Glayson";
var profissão = "Programador";
console.log(`Meu nome é ${nome} e eu sou um ${profissão}`);

// cotatenação de Strings 

// Var nome = "Bodex";
// var idade = 29;
// console.log("meu nome é " + nome + " eu tenho " + idade + " anos");

