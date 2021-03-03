try {
    console.log(a);
    console.log('Abri');
    console.log('Manipulei');
    console.log('Fechei');
    // É executada quando não há erros
} catch(e) {
    console.log('ERRO');
    // É executada quando há erros
} finally {
    console.log('SEMPRE');
    // SEMPRE é executada
}