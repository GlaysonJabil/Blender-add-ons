// ----- FUNÇÔES -----
// DECLARAÇÂO DE FUNÇÂO
// 1 declara a Function 

// function imprimetexto(texto) {
//     console.log(texto)
// }

// imprimetexto("oi");
// imprimetexto("Bom dia glayson, nota da priva foi ")

// function soma() {
//     return 1 + 1 
// }

// console.log(soma())
// nota = (soma() + 6)

// if (nota >= 10) {
//     console.log("Nota Maxima")
// } else {
//     console.log("Desta vez foi quase")
// }

// const boletim = `${nota >= 10 ? "Seus pais vão adorar" : "é hoje que o coro vai comer"}`

// console.log(boletim)

// ----- PARAMETROS E ARGUMENTOS -----

// function soma(numero1, numero2) {
//     return numero1 + numero2
// }
// console.log(soma(20, 20))

// //----- Ordem x arqumentos--------

// function nomeIdade(nome, idade) {
//     return `Meu nome é ${nome} e minha idade é ${idade}`;
// }
//console.log(nomeIdade("Glayson" ,40)) // se vc inverter os parametros o Js vai printar erra, então não pode inverter a sequencia

// function soma( numero1, numero2) {
//     return numero1 + numero2;
// }function multiplica( numero3, numero4) {
//     return numero3 * numero4;
// }

// console.log(multiplica(soma(5, 5), soma(10 ,10))
// )


// ----- ARROW FUNCTION => -----


function apresentar(nome) {
    return`Meu nome é ${nome}`;
}

const apresentacao = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// Arrow Function com Return

const somNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
     return "somente números de 1 a 9"    
  } else {
    return num1 + num2;
  } 
}  