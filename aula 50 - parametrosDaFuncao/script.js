function funcao() {
    console.log(arguments);    // Arguments = tudo que foi passado para a função
}
funcao('Valor', 1, 2, 3, 4, 5, 6);

/* Se não tiver um paramentro*/
function funcaoB(a, b = 2, c) { //Caso B não seja passado ele irá valer 2
    console.log(a + b +c)
}
funcaoB(2, undefined, 10);//Unica maneira de pular B e usar o valor padrão