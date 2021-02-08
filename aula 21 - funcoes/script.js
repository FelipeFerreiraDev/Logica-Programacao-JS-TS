function saudacao(nome) {
    console.log(`Oi ${nome}`);
}

saudacao('Felipe');

function soma(x, y) {
    const resultado = x + y;
    return resultado;  // Chegou no return a função termina e não executa nada que esta abaixo
}

console.log(soma(2, 10));


// Colocar valores pré definidos como:
function sub(x = 5, y = 10) {
    const resultado = x - y;
    return resultado;  // Chegou no return a função termina e não executa nada que esta abaixo
}

console.log(sub(2, 10)); // se eu não passar os valores, eles serão pré definidos


// Função anonima 
const raiz = function(n) {
    return n ** 0.5;
}
console.log(raiz(9));


// Arrow Function
const potencia = (n) => n ** 2;
console.log(potencia(9))
