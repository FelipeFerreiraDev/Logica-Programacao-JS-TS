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

ePaisagem = () => console.log(largura>altura);

ePaisagem();