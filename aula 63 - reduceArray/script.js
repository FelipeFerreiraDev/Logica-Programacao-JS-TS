// Some todos os números e reduz o array para um elemento


const numeros = [5, 10, 50, 25, 100, 33, 28];

const total = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador += valor;
    return acumulador;
}, 0);
console.log(total);