const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const reiniciar = document.querySelector('.reiniciar');

let seconds = 00;
let minutes = 00;
let hours = 00;
iniciar.addEventListener('click', function (event) {
    relogio.classList.remove('pausado');
    timer = setInterval(function () {
        seconds++;
        if (seconds > 59) {
            minutes++;
            seconds = 0;
        }
        if (minutes > 59) {
            minutes = 0;
            hours ++;
        }
        relogio.innerHTML = `
        ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}
        `;
    }, 1000);
});

pausar.addEventListener('click', function (event) {
    setTimeout(function() {
        clearInterval(timer);
        relogio.classList.add('pausado');
    }, 0);
});

reiniciar.addEventListener('click', function (event) {
    setTimeout(function() {
        clearInterval(timer);
    }, 0);
    minutes=0;
    seconds=0;
    hours=0
    relogio.innerHTML = `
        00:00:00
        `;
});