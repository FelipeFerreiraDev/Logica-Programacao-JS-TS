let varA = 'A';
let varB = 'B';
let varC = 'C';

const aux = varA;
varA = varB;
varB = varC;
varC = aux;

console.log(varA, varB, varC);
