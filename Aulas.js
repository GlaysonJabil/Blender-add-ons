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


// --- Booleans -----

// const usuarioLogado = true
// const contaPaga = false

// --- truth ou falsy -----

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


// console.log(typeof numero) \\ pede para mostrar tipo da variável = Number
// console.log(typeof texto)  \\ pede para mostrar tipo da variável = String 

// console.log(typeof minhaVar)
// console.log(typeof varNull)

// --- CONVERSÃO IMPLICITA E EXPLICITA -----

// const nuremo1 = 345;
// const numeroString1 = "345";

// console.log(nuremo1 === numeroString1) // Explicita - 3 iguais compara o tipo Boolean 345 com o tipo String "345" e os valores delas = False

// const nuremo2 = 345;
// const numeroString2 = "345";

// console.log(nuremo2 == numeroString2) // Implicita - 2 uguais compara o conteuro do Booleam 345 com o conteúdo da String "345" = True
// console.log(nuremo1 + numeroString1)

// console.log(nuremo1 + nuremo2)

// Conversão explicita Number() e String()

// const nuremo1 = 345;
// const numeroString1 = "345";

// const nuremo2 = 345;
// const numeroString2 = "345";

// console.log(nuremo1 === Number(numeroString1)) // 

// console.log(nuremo1 === String(nuremo2))

// console.log(nuremo2 == numeroString2)  

// console.log(nuremo1 + numeroString1)

// console.log(nuremo2 + Number(numeroString2))

// console.log(nuremo1.toString() + nuremo2.toString())

// console.log(Number(numeroString1) + Number(numeroString2))


// ----- VARIAVEIS E A RESPOSTA DE TUDO -----


// const usuario = "Glayson Ribeiro"; 
// const matricula = 10001614
// let cargo1 = "Mechacical especialist";
// let cargo2 = "Desenvolvedor JAva";
// let cargo3 = "Toolings"
// let cargoAtual = "meuCargo";
// let idade = 37;
// let tempoDeCasa = idade - 19;
// let treinamentoJava = 3;
// let turno = "Turno de trabalho"


// if (treinamentoJava == 1) {
//     cargoAtual = cargo2;   
// } else if(treinamentoJava == 0 ) {
//     cargoAtual = cargo1
// } else{
//     cargoAtual = cargo3
// }


// console.log("Nome" + " " + usuario + " " + "Matricula" + " " + matricula + " " + "Idade" + " " + idade)
// console.log("Cargo atual " + cargoAtual)
// console.log("Tempo de casa " + tempoDeCasa)

//----- OPERADORES -----
// OPERADOR TERNARIO 

// const idadeMinima = 18;
// const idadeClient = 19;

// if (idadeClient >= idadeMinima) {
//     console.log("Cerveja")
// }   else    {
//     console.log("Suco")
// }

            // condição                   // true     //False  
// console.log(idadeClient >= idadeMinima ? "Cerveja" : "suco") 


// ----- TEMPLATE STRING ----- 

// const nome = "Bodex";
// const idade = 2023-1985;
// const cidadeDeNascimento = "Minas Gerais";

// // const apresentação = "Meu nome é " + nome + ", minha iadade é " + idade +", e nasci na ciadade de " + cidadeDeNascimento;

// const apresentação = `Meu nome é ${nome}, minha idade é ${idade}, e nasci na ciadade de ${cidadeDeNascimento}`;

// console.log(apresentação)

// ----- OPERADORES -----

// const a = [];
// const b = 20;
// const c = true;
// const d = ''

// if (b === 20 && c != false && d == 0) {
//     console.log('verdade')
// } else {
//     console.log('falso')
// }

// if ( a == 0) {
//     console.log('verdade')
// } else {
//     console.log('falso')
// }

// if (d) {
//     console.log('verdade')
// } else {
//     console.log('falso')
// }

// if (b == '20') {
//     console.log('verdade')
// } else {
//     console.log('falso')
// }

// ----- TESTE OPERADORES -----

const nome = ("Léo");
const idade = ("19");
const deMenor = ("suco");
const deMaior = ("Cerveja;")
const marcaCerveja = ("Buduvieser");
const marcaSuco = ("tang")
const pedido = `${nome} diz: "por favor quero beber ${idade >= 18 ? deMaior : deMenor}"`
const entrega = `"aqui esta, hoje temos ${idade >= 18 ? marcaCerveja : marcaSuco}"`


console.log(pedido)
console.log(entrega)