// Arrays em JS aceita vários tipos de valores como: inteiros, textos, ...
// Tambem pode acessar valores que não existem
// Array é um objeto typeof = object
// Arrays diferentes de outros tipos são mutaveis
const alunos = ['Felipe', 'Henrique', 'Camargos', 'Ferreira']; 
console.log(alunos[3]);

// Editar um valor de um array
alunos[0] = 'Epilef';

// Adicionar elemento
alunos[alunos.length] = 'Ana';
console.log(alunos);

/*OU*****************************/

alunos.push('Clara')
console.log(alunos);

// Adicionar no começo
alunos.unshift('Maria');
console.log(alunos);

// Saber o tamanho do array
console.log(alunos.length);

// Remover do final
alunos.pop();
console.log(alunos);

// Ver qual foi removido
const removido = alunos.pop();
console.log(removido);

// Remover do começo
alunos.shift();
console.log(alunos);

// Remover de uma posição
delete alunos[1];
console.log(alunos);

// Pegar no array um elemento x para o elemento y
console.log(alunos.slice(0,3));

// Verificar se é um Array
console.log(alunos instanceof Array);