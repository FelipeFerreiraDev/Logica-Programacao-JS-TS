// Calcule o dobro dos números usando map
// Filtre os elementos pares
// Some os números pares e reduza o array para um elemento

const numeros = [5, 10, 50, 80, 1, 2, 3, 500, 1.5];

function FunctionMap(numeros) {
    const dobro = numeros.map(valor => valor * 2);
    return FunctionFilter(dobro);
}

function callbackFiltro(valor, indice, array) {
    if(valor % 2 === 0) {
        return valor;
    }
}

function FunctionFilter(dobro) {
    const pares = dobro.filter(callbackFiltro);
    return FunctionReduce(pares);
}

function FunctionReduce(pares) {
    const total = pares.reduce((acumulador, valor, indice, array) => {
        acumulador += valor;
        return acumulador;
    }, 0);
    return total;
}

console.log(FunctionMap(numeros));