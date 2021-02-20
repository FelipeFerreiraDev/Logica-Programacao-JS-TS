const frutas = [
    'Maça', 'Uva', 'Banana'
];

// Este tipo de for percorre o index das frutas até encontrar um fim.
for(let i in frutas) {
    console.log(i);
}

console.log('');

const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Ferreira',
    idade: 18,
}


// No objeto ele percorre cada chave
for(let chaves in pessoa) {
    console.log(chaves,':', pessoa[chaves]);
}