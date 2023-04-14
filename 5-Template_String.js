//template string OU template Literal 

var nome = "Glayson";
var profissão = "Programador";
console.log(`Meu nome é ${nome} e eu sou um ${profissão}`);


//Inclusão de variáveis:

const name = "Alice";
const age = 25;
console.log(`Meu nome é ${name} e eu tenho ${age} anos.`);
// Output: "Meu nome é Alice e eu tenho 25 anos."

//Expressões aritméticas embutidas:

const a = 10;
const b = 5;
console.log(`A soma de ${a} e ${b} é igual a ${a + b}.`);
// Output: "A soma de 10 e 5 é igual a 15."

//Inclusão de objetos:

const person = {
  name: "Bob",
  age: 30,
  city: "New York"
};
console.log(`Meu nome é ${person.name}, eu tenho ${person.age} anos e moro em ${person.city}.`);
// Output: "Meu nome é Bob, eu tenho 30 anos e moro em New York."

//Inclusão de funções:

function calculateTotal(price, quantity) {
  return price * quantity;
}
const product = "Notebook";
const price = 2500;
const quantity = 2;
console.log(`Comprei ${quantity} ${product}(s) por R$ ${price} cada, totalizando R$ ${calculateTotal(price, quantity)}.`);
// Output: "Comprei 2 Notebook(s) por R$ 2500 cada, totalizando R$ 5000."

//Inclusão de arrays:

const fruits = ["Maçã", "Banana", "Laranja"];
console.log(`Eu gosto de comer ${fruits.join(", ")}.`);
// Output: "Eu gosto de comer Maçã, Banana, Laranja."

//Inclusão de expressões ternárias:

const age1 = 17;
console.log(`Você ${age1 >= 18 ? "pode" : "não pode"} dirigir.`);
// Output: "Você não pode dirigir."

//Inclusão de HTML:

const user = {
  name: "Marina",
  age: 28,
  job: "Designer"
};
const html = `
  <div class="user">
    <h2>${user.name}</h2>
    <p>Idade: ${user.age}</p>
    <p>Profissão: ${user.job}</p>
  </div>
`;
console.log(html);
// Output: "<div class="user"><h2>Marina</h2><p>Idade: 28</p><p>Profissão: Designer</p></div>"

//Inclusão de múltiplas linhas:

const address = {
  street: "Rua das Flores",
  number: 123,
  city: "São Paulo"
};
const message = `
  Endereço:
  ${address.street}, ${address.number}
  ${address.city}
`;
console.log(message);
// Output: "Endereço: Rua das Flores, 123 São Paulo"


