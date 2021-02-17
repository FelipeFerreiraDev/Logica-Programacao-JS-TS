const pessoa = {
    nome: 'Felipe',
//  sobrenome: 'Ferreira',
    idade: 18,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

const { nome, sobrenome = 'Não possui', idade: num } = pessoa; // Como o nome da constante é igual ao do campo do objeto eu posso deixar assim mesmo
console.log(nome, sobrenome, num,'\n');

const { endereco: {rua, numero } } = pessoa;
console.log(rua, numero);
