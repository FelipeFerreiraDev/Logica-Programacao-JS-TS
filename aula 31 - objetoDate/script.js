let data = new Date(0); // Marco 0 época unix
console.log(data.toString()); 

data = new Date();
console.log(data.toString());

data = new Date(2019, 1, 15, 20, 05, 10, 500); // ano, mes, dia, hora, minuto, segundos, milésimos de segundo 
console.log(data.toString());

data = new Date('2019-04-20 20:20:59'); // Formato mais utilizado
console.log(data.toString());

data = new Date();
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); // Mes começa no 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - domingo e 6 - sabado

console.log(Date.now()); // Contabiliza os milesimos de segundos desde o marco 0

