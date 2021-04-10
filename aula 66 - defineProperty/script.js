function Produto(nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // Exibir o campo vem como undefined
            value: nome, // Exibir a quantia troca undefined pelo número passado
            writable: false, // Pode alterar o valor
            configurable: true // Pode reconfigurar a chave
        },

        preco: {
            enumerable: true, // Exibir o campo vem como undefined
            value: preco, // Exibir a quantia troca undefined pelo número passado
            writable: false, // Pode alterar o valor
            configurable: true // Pode reconfigurar a chave    
        }
    });


    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Exibir o campo vem como undefined
        value: estoque, // Exibir a quantia troca undefined pelo número passado
        writable: false, // Pode alterar o valor
        configurable: true // Pode reconfigurar a chave
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 5000 // não vai ser modificado
console.log(p1);