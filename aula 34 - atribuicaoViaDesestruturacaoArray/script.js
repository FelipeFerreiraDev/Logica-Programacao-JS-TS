const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [num1, num2, ...resto] = num; // operador rest se for apenas para pegar os valores
console.log(num1, num2, resto);

const [um, , tres, , cinco] = num;
console.log(um, tres, cinco);

//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(numeros[1][2]);

const [list1, lista2, lista3] = numeros;
console.log(list1, lista2, lista3);