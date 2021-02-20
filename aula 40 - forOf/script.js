/**
 * Especifico para objetos interaveis (aqueles que possuem indice)
 */

//             012345...   -> interavel
const nome = 'Felipe Ferreira';

// Ele não retorna o indice e sim o valor 
for (let valor of nome) {
    console.log(valor);
}

console.log('');

let nomes = [
    'Felipe',
    'Ferreira',
    'Henrique'
]

// Executa uma função para cada elemento
nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});



/**
 * For classico - Geralmente com interaveis (array ou string)
 * For in - Retorna o índice ou chave (strings, arrays objects)
 * For of - Retorna o valor em si (iteraveis, arrays ou strings)
 */