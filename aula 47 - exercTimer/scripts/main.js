const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', function (event) {
    let seconds = 00;
    let minutes = 00;
    let hours = 00;
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
    alert('cliquei');
});