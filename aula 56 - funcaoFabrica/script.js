function criaPessoa(nome, sobrenome) {
    return {
        nome, sobrenome,
        fala: function(assunto) {
            return `${nome} está falando ${assunto} ele pesa ${this.peso}.`;
        },
        peso: 55
    };
}

const p1 = criaPessoa('Felipe', 'Ferreira');
console.log(p1.fala('Falando sobre JS'));
