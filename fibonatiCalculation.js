let num1 = 0 
let num2 = 1 
let num3;

while (num1 < 5000) {
    console.log(num1);
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3
}

