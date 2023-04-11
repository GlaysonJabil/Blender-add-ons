//========== DECLARAÇÂO DE FUNÇÂO ==========
//FUNÇÂO NOMINARIA

function soma(numero1, numero2) {
    return numero1 + numero2
}
console.log(soma(20, 20))

//=====================
//FUNÇÂO ANÔNIMA

const exemple = function (numero1, numero2){
    return numero1 + numero2;
}

console.log(exemple(17, 0.6))

//====================
//ARROW FUNCTION 

const arrowFunction = (numero1, numero2) => numero1 + numero2;

console.log(arrowFunction(18, 8));

//=====================
//HOFS - HIGHER ODER FUNCTION

const array = ['GOKU', 'GOHAN', 'BUMA', 'MESTRE KAME']; 

array.forEach((personagem) => console.log(`DBZ - ${personagem}`));
    


// ----- ARROW FUNCTION => -----


// function apresentar(nome) {
//     return`Meu nome é ${nome}`;
// }

// const apresentacao = nome => `Meu nome é ${nome}`;
// const soma = (num1, num2) => num1 + num2;

// Arrow Function com Return

// const somaNumerosPequenos = (num1, num2) => {
//     if (num1 > 10 || num2 > 10) {
//       return "somente números de 1 a 9"    
//     } else {
//       return num1 + num2;
//     } 
// }

// function verificaNumero (numero) {
//     if (numero > 10) {
//         return 'número maior que 10';
//     } else {
//         hello();
//         return 'número não é maior que 10';
//     }
// }

// function hello(){
//     console.log("teste");
// }

// const retorno = verificaNumero(9);
// console.log(retorno);

// function soma() {
//     return 2 + 3 
//    }
// console.log(soma())
// nota = (soma() + 6)

// if (nota >= 10) {
//     console.log("Nota Maxima")
//    } else {
//     console.log("Desta vez foi quase")
//    }

// const boletim = `${nota >= 10 ? "Seus pais vão adorar" : "é hoje que o coro vai comer"}`

// console.log(boletim)