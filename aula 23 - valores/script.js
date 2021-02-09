/*
 * Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valor
 * 
*/

//Não muda o valor por mais que seja let
let nome = 'Felipe'
nome[0] = 'R';
console.log(nome[0], nome);

let c = 'C';
let d = c;
console.log(c, d);

c = 'Outra coisa';
console.log(c, d);

/*
 * Referência (mutável) - array, object, function
 * 
 */

// Muda o valor ele faz referencia de uma variavel a outra
// Se uma se altera a outra também muda

let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(4);
b.pop();
console.log(a, b);
// Para copiar apenas o valor sem usarmos a referencia podemos fazer:

a = [1, 2, 3];
b = [...a];
console.log('\n',a,b);

a.push(4);
b.pop();
console.log(a, b);