/*try{
    console.log(naoExiste);
} catch(error) {
    console.log('Não existe essa variavel\n');
    console.log(error); // NUNCA EXIBA ESTÁ LINHA PARA O USUÁRIO
}*/

function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('X e Y precisam ser números');// cria um erro como se fosse do próprio JS
    }

    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(error) {
    console.log(error);
}