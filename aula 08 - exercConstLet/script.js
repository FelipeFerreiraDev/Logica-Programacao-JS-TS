const nome = 'Felipe';
const sobrenome = 'Ferreira'
const idade = 18;
const peso = 55.50;
const altura = 1.64;
let imc = peso / (altura*altura);
let anoNascimento = 2021 - idade; 

console.log(nome, 'tem ', idade, 'anos, pesa ', peso, 'Kg');
console.log('tem ', altura, ' de altura e seu IMC é de ', imc);
console.log(nome, sobrenome, 'nasceu em ', anoNascimento);