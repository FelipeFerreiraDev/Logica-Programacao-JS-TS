function Produto(nome, preco, estoque) {
        this.nome = nome;

        this.preco = preco;


    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Exibir o campo vem como undefined
        configurable: true, // Pode reconfigurar a chave
        get: function() {
            return estoque; // Getter serve para pegar o valor
        },
        set: function(valor) {
            console.log(valor) // Seta o valor
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);