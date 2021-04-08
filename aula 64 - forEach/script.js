// Disponivel só em array

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let total = 0;
a1.forEach((valor, indice, array) => {
    total += valor;
});

console.log(total);