// Função construtora retorna Objetos
// Função fabrica retorna Objetos
// Funções sempre deve ser criado com nome maiúsculo

function Pessoa(nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Luiz', 'Otávio');