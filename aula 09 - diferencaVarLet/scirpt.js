var nome = 'Felipe';
var nome = 'Ferreira';

console.log(nome);

//Não gera erro com "var" já com "let" gera o erro

//nome = 'Ferreira'; // Cria uma variavel global do tipo var e pode gerar bugs

// Var só tem escopo em função
// Let tem escopo de bloco ex:
let nome3 = 'Luiz'; // criando dentro de um escopo
var nome4 = 'Luiz';

{ // Tudo que está dentro da chave é um bloco
    let nome3 = 'Felipe'; // criando dentro de outro escopo
    console.log(nome3, nome4);
}