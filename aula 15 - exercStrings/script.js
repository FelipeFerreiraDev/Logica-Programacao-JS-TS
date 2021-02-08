const nome = prompt('Digite seu nome');
let letras = nome.length;



/*Exibir ==============================================*/
document.body.innerHTML += (`Seu nome é <strong>${nome}</strong> </br>`);
document.body.innerHTML += `Seu nome tem <strong>${letras}</strong> letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong><br />`;
document.body.innerHTML += `Qual o primeiro índice da letra P no seu nome? <strong>${nome.indexOf('p')}</strong><br />`;
document.body.innerHTML += `Qual o último índice da letra E no seu nome? <strong>${nome.lastIndexOf('e')}</strong><br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(nome.length-3)}</strong><br />`;
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong> <br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong><br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong><br />`;