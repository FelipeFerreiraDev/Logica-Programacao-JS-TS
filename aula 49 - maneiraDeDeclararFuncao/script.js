/**
 * Apenas quando declarada desta maneira podemos chamar a função
 * antes de declarar ela
 */
function falaOi() {
    console.log('oie');
}

/**
 * Podemos usar as funções também como dado
 * Ex:
 */
const souUmDado = function() {
    console.log('Sou um dado.');
};
souUmDado();

/*
function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo: ');
    funcao();
}
executaFuncao(souUmDado);*/


// Arrow function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando ....');
    }
}

obj.falar();