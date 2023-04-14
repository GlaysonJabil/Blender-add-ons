//Operação de negação (!):

var x = true;
var y = !x; // atribui o valor booleano false a y, pois o operador ! inverte o valor de x

console.log(y); // imprime "false" no console

// Operação de conjunção lógica (&&):

var x = true;
var y = false;
var z = x && y; // atribui o valor booleano false a z, pois a conjunção lógica && só retorna true se ambos os valores forem true

console.log(z); // imprime "false" no console

// Operação de disjunção lógica (||):

var x = true;
var y = false;
var z = x || y; // atribui o valor booleano true a z, pois a disjunção lógica || retorna true se pelo menos um dos valores for true

console.log(z); // imprime "true" no console

// Comparação de igualdade (==):

var x = true;
var y = false;
var z = x == y; // atribui o valor booleano false a z, pois x é true e y é false

console.log(z); // imprime "false" no console

// Comparação de desigualdade (!=):

var x = true;
var y = false;
var z = x != y; // atribui o valor booleano true a z, pois x é true e y é false

console.log(z); // imprime "true" no console

// Comparação de identidade (===):

var x = true;
var y = 1;
var z = x === y; // atribui o valor booleano false a z, pois x é do tipo boolean e y é do tipo number

console.log(z); // imprime "false" no console
// A comparação de identidade (===) verifica se os valores e tipos de dados são iguais. Neste exemplo, x é do tipo boolean e y é do tipo number, então a comparação retorna false.

// Comparação de não-identidade (!==):

var x = true;
var y = 1;
var z = x !== y; // atribui o valor booleano true a z, pois x é do tipo boolean e y é do tipo number

console.log(z); // imprime "true" no console
// A comparação de não-identidade (!==) verifica se os valores ou os tipos de dados são diferentes. Neste exemplo, x é do tipo boolean e y é do tipo number, então a comparação retorna true.

// Operador ternário (?):

var x = true;
var y = x ? "verdadeiro" : "falso"; // atribui o valor da string "verdadeiro" a y, pois x é true

console.log(y); // imprime "verdadeiro" no console
// O operador ternário (?) é uma forma abreviada de escrever uma instrução if-else. Neste exemplo, se x for true, y é atribuído à string "verdadeiro", caso contrário, é atribuído à string "falso".

// Operador de atribuição condicional (||=):

var x = null;
x ||= "valor padrão"; // atribui o valor da string "valor padrão" a x, pois x é null e o operador ||= atribui o valor à variável se ela for falsy

console.log(x); // imprime "valor padrão" no console