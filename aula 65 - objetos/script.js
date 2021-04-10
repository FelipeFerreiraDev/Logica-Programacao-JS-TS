/* Utilizando o literal
const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Ferreira'
};

const chave = 'sobrenome';
console.log(pessoa[chave]);
console.log(pessoa.nome);
//      OU
console.log(pessoa['nome']); 

//Utilizando o construtor
const pessoa1 = new Object();
pessoa1.nome = 'Felipe';
pessoa1.sobrenome = 'Ferreira';
console.log(pessoa1.nome);

*/

// Criando funções dentro de objetos
const pessoa1 = new Object();
pessoa1.nome = 'Felipe';
pessoa1.sobrenome = 'Ferreira';
pessoa1.falarNome = function() {
    console.log(`${this.nome} oi`);
};

pessoa1.falarNome();