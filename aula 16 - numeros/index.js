// Padrão do JS para mostrar a precisão de números
// IEEE 754 - 2008
// Sendo assim temos uma imprecisão muito pequena mais existe
// Ela sempre deve ser tratada sem usar o toFixed pois o programa
// ainda vai reconhecer o número como um quebrado

let num1 = 0.7;
let num2 = 0.1;

console.log(num1 + num2);

num1 = 10;
num2 = 2.518312312;

// Unir os dois números como strings
console.log(num1.toString() + num2.toString());

// Pegar o número como binario
console.log(num1.toString(2));

// Arredondar casas
console.log(num2.toFixed(2));

// Verificar se o número é inteiro
console.log(Number.isInteger(num1));

// NaN = Not a number
// Verificar se é NaN
console.log(Number.isNaN(num1));

