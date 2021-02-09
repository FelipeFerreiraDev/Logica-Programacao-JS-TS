// Objeto literal
const pessoa1 = {
    nome: 'Felipe',
    sobrenome: 'Ferreira',
    idade: 18
};

console.log(pessoa1.nome);

// Criar função para criar objetos 
// assim não precisa ficar criando vários objetos
// apenas um resolveria o problema

// O argumento passa o conteúdo para o parametro
function criaPessoa(nome, sobrenome, idade) { // Paramentro
    return {
        nome,
        sobrenome,
        idade,
        /*
                nome: nome,
                sobrenome: sobrenome,
                idade: idade, 
        */
    };
}

const pessoa2 = criaPessoa('Luiz', 'Otavio', 25); //Argumento
const pessoa3 = criaPessoa('Sandy', 'Lima', 39);
const pessoa4 = criaPessoa('Ana', 'Clara', 15);
const pessoa5 = criaPessoa('Durval', 'Junior', 37);
console.log(pessoa5.sobrenome, pessoa3.nome);


// Funções dentro de objetos

const pessoas = {
    nome: 'Felipe',
    sobrenome: 'Ferreira',
    idade: 18,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi... Minha idade é de ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoas.fala();
pessoas.incrementaIdade();
pessoas.fala();
pessoas.incrementaIdade();
pessoas.fala();
pessoas.incrementaIdade();
pessoas.fala();