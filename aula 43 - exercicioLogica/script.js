/**
 * Função que recebe 2 números e retorna o maior
 */

const n1 = 10;
const n2 = 5;

function maior(x, y) {
    if (x > y) {
        console.log(x);
    } else {
        console.log(y);
    }
}

maior(n1, n2);

/**
 * Escreva uma função ePaisagem que recebe dois argumentos
 * larura e altura de uma imagem(number).
 * retorne true se a imagem estiver no modo paisagem
 */

const altura = 250;
const largura = 500;

ePaisagem = () => console.log(largura > altura);

ePaisagem();

/**
 * Escreva uma função que recebe um número e
 * retorn o seguinte:
 * Número é divisivel por 3 = Fizz
 * Número é divisivel por 5 = Buzz
 * Número é divisivel por 3 e 5 = Retorna o número
 * Checar se o número é realmente um número
 * Use a função com números de 0 a 100
 */

function numero(n) {
    if (typeof n !== 'number') {
        return 'Não é um número';
    } else if (n % 3 === 0 && n % 5 === 0 && n !== 0) {
        return n;
    } else if (n % 3 === 0 && n !== 0) {
        return 'Fizz';
    } else if (n % 5 === 0 && n !== 0) {
        return 'Buzz';
    } else {
        return 'Não é divisivel'
    }
}

for (let i = 0; i <= 100; i++) {
    console.log(i, '= ', numero(i));
}