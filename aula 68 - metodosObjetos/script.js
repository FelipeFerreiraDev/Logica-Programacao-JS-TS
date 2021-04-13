const produto = {
    nome: 'Caneta',
    preco: 1.8
}
/*
const outroProduto = {...produto }; // Copiando as propriedades de um objeto para outro
outroProduto.nome = 'Outro nome';
outroProduto.preco = 2.5;
console.log(produto);
console.log(outroProduto);
*/

/*****  Copia o objeto ******/
const caneca = Object.assign({}, produto);

caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);

Object.freeze(produto) // Produto não pode ser alterado
console.log(Object.keys(produto)) // Mostra as chaves do objeto
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // Descreve as Property
console.log(Object.values(produto)); // Mostra os valores
console.log(Object.entries(produto)) // Mostra as chaves e os valores


