// --- var 

// var autura = 5;
// var comprimento = 7;

// area = autura * comprimento;
// console.log(area)
// var area;

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

// const forma = 'triangulo';
// const altura = 5;
// const comprimento = 7;
// let area;

// if (forma === 'quadrado') {
//     area = altura * comprimento;
// }   else {
//     area = (altura * comprimento) / 2;
// }

// console.log(area)


// --- Booleans 

// const usuarioLogado = true
// const contaPaga = false

// --- truth ou falsy 

// 0 => false 
//1 => true 

// Aonsole.log(0 == false)
// console.log("" == false)
// console.log(1 == true)

// let minhaVar;
// let varNull = null

// let numero = 3;
// let texto = "Alura"

// console.log(minhaVar)
// console.log(varNull)


// console.log(typeof numero)
// console.log(typeof texto)

// console.log(typeof minhaVar)
// console.log(typeof varNull)

// --- Conversões implicita

// const nuremo1 = 345;
// const numeroString1 = "345";

// console.log(nuremo1 === numeroString1) // 3 iguais compara o tipo -Boolean 345 === String "345" = False

// const nuremo2 = 345;
// const numeroString2 = "345";

// console.log(nuremo2 == numeroString2) // 2 uguais compara o conteuro Booleam 345 == String "345"
// console.log(nuremo1 + numeroString1)

// console.log(nuremo1 + nuremo2)

// Conversão explicita Number() e String()

const nuremo1 = 345;
const numeroString1 = "345";


const nuremo2 = 345;
const numeroString2 = "345";

console.log(nuremo1 === Number(numeroString1)) // 

console.log(nuremo1 === String(nuremo2))

console.log(nuremo2 == numeroString2)  

console.log(nuremo1 + numeroString1)

console.log(nuremo2 + Number(numeroString2))

console.log(String(nuremo1) + String(nuremo2))

console.log(Number(numeroString1) + Number(numeroString2))