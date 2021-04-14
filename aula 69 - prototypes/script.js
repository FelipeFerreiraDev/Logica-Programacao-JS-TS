function pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new pessoa('Felipe', 'F.');
const pessoa2 = new pessoa('Maria', 'C.');

pessoa.prototype.estouAqui = 'HAAHHAHA'

console.dir(pessoa1);
console.dir(pessoa2);

console.log(pessoa1.estouAqui);