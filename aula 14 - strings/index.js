// Strings são indexadas
//               01234567
let umaString = "Um Texto";

/*****************************/

// Texto com aspas duplas duas vezes
umaString = "Um \"Texto\"";


// Pega o caracter do indece indicado
console.log(umaString[0]);
console.log(umaString.charAt(0));

/*******************************/

// Para unir strings
console.log(umaString.concat(' ', 'em', ' ', 'um', ' ', 'dia'));
console.log(umaString + ' em um dia');
console.log(`${umaString} em um dia`);

// Pegar a posição de onde começa uma string
console.log(umaString.indexOf('Texto'));
// De tras para frente
console.log(umaString.lastIndexOf('Um'));

// Retornar letras minusculas
console.log(umaString.match(/[a-z]/g)); // Usando expressão regular
