// declaração de strings
let nome = "João";
let sobrenome = "Silva";

// concatenação de strings
let nomeCompleto = nome + " " + sobrenome; // "João Silva"

// template literals
let idade = 30;
let mensagem = `Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos.`;

// comprimento de uma string
let text = "Olá, mundo!";
let comprimento = texto.length; // 11

// acesso a caracteres individuais
let letra = texto[0]; // "O"

// transformação de maiúsculas/minúsculas
let textoMinusculo = texto.toLowerCase(); // "olá, mundo!"
let textoMaiusculo = texto.toUpperCase(); // "OLÁ, MUNDO!"

// divisão de uma string em substrings
let frase = "O cachorro pulou a cerca";
let palavras = frase.split(" "); // ["O", "cachorro", "pulou", "a", "cerca"]

// substituição de substrings
let novaFrase = frase.replace("cachorro", "gato"); // "O gato pulou a cerca"

// comparação de strings
let palavra1 = "maçã";
let palavra2 = "banana";

if (palavra1 < palavra2) {
   console.log(`${palavra1} vem antes de ${palavra2} no dicionário.`);
} else {
   console.log(`${palavra2} vem antes de ${palavra1} no dicionário.`);
}

// busca por substrings
let texto = "O rato roeu a roupa do rei de Roma";
let posicao = texto.indexOf("roupa"); // 13

// extração de partes de uma string
let textoCompleto = "abcdefghi";
let trecho = textoCompleto.slice(2, 5); // "cde"
let parteFinal = textoCompleto.slice(-3); // "ghi"
let caracteres = textoCompleto.split(""); // ["a", "b", "c", "d", "e", "f", "g", "h", "i"]

// remoção de espaços em branco
let textoEspacos = "   texto com espaços   ";
let textoSemEspacos = textoEspacos.trim(); // "texto com espaços"

// formatação de números como strings
let numero = 12345.6789;
let numeroFormatado = numero.toLocaleString("pt-BR"); // "12.345,6789"

// const nome = ("Léo");
// const idade = ("19");
// const deMenor = ("suco");
// const deMaior = ("Cerveja;")
// const marcaCerveja = ("Buduvieser");
// const marcaSuco = ("tang")
// const pedido = `${nome} diz: "por favor quero beber ${idade >= 18 ? deMaior : deMenor}"`
// const entrega = `"aqui esta, hoje temos ${idade >= 18 ? marcaCerveja : marcaSuco}"`

//===================================================

// const idade = 2;
// const nome = "lara";
// const sobrenome = "Ayumi";
// const bacharel = false;
// const dezAnosDepois = "12";
// const nomeCompleto = nome + sobrenome;
// const resultado = idade + dezAnosDepois;

// console.log(nomeCompleto)
// console.log(resultado)
// console.log(bacharel == 1)

// const soma = 34 + 56;
// const multiplicacao = soma * 5;
// const subtracao = (soma * 5) - 25;
// const operação = subtracao / 2;

// console.log(subtracao)