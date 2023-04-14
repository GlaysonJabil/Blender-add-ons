// ----- ESTRUTURA CONDICIONAL IF E ELSE -----

if (condição) {
    // código a ser executado se a condição for verdadeira
  } else {
    // código a ser executado se a condição for falsa
  }



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

//==============================================

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

//===============================================

const carros = ['não lavado', 'lavado', 'não lavado', 'lavado', 'lavado'];

const filaLavagem = [];
const filaPagamento = [];

for (let i = 0; i < carros.length; i++) {
  if (carros[i] === 'lavado') {
    filaPagamento.push(carros[i]);
  } else {
    filaLavagem.push(carros[i]);
  }
}

console.log('Fila de lavagem: ', filaLavagem);
console.log('Fila de pagamento: ', filaPagamento);