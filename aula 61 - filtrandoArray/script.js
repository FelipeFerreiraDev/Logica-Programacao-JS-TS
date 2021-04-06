const numeros = [5, 50, 80, 1, 2, 3, 4, 11, 15, 22];

function callbackFilter(valor, indice, array) {
    return valor > 10;
}

const filtro = numeros.filter(callbackFilter);
console.log(filtro);