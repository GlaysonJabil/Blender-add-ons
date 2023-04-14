// atribuição de valores numéricos
let a = 10;
let b = 3;

// operações aritméticas básicas
let soma = a + b;      // 13
let subtracao = a - b; // 7
let multiplicacao = a * b; // 30
let divisao = a / b;   // 3.3333333333333335
let resto = a % b;     // 1

// operações de incremento e decremento
let c = 5;
c++;  // c é agora igual a 6
c--;  // c é agora igual a 5

// operações de comparação
let maior = a > b;     // true
let menor = a < b;     // false
let igual = a === b;   // false
let diferente = a !== b; // true

// funções matemáticas
let valorAbsoluto = Math.abs(-10); // 10
let raizQuadrada = Math.sqrt(64); // 8
let arredondamento = Math.round(4.7); // 5
let arredondamentoParaBaixo = Math.floor(4.7); // 4
let arredondamentoParaCima = Math.ceil(4.3); // 5

// operações de atribuição com operadores aritméticos
a += b; // a é agora igual a 13
a -= b; // a é agora igual a 10 novamente
a *= b; // a é agora igual a 30
a /= b; // a é agora igual a 10 novamente

// operações bit a bit
let x = 5; // 101 em binário
let y = 3; // 011 em binário

let resultadoAnd = x & y; // 001 em binário, ou seja, 1 em decimal
let resultadoOr = x | y;  // 111 em binário, ou seja, 7 em decimal
let resultadoXor = x ^ y; // 110 em binário, ou seja, 6 em decimal
let resultadoShiftLeft = x << 1; // 1010 em binário, ou seja, 10 em decimal
let resultadoShiftRight = x >> 1; // 10 em binário, ou seja, 2 em decimal

// operador ternário
let idade = 20;
let podeDirigir = idade >= 18 ? "Sim" : "Não"; // "Sim"

// Ponto Flutuante 

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao)



//============================
// var autura = 5;
// var comprimento = 7;
// area = autura * comprimento;

// console.log(area)

//============================


// let forma = "retângulo"
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === "retângulo") {
//    area = altura * comprimento;    
// } else {
//    area = (altura * comprimento) / 2;
// } 

// console.log(area)

//===========================

const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
    area = altura * comprimento;
}   else {
    area = (altura * comprimento) / 2;

}

console.log(area);
