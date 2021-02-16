const data = new Date();

function organiza() {
    const resposta = document.querySelector('.resposta');

    const diaSemana = data.getDay();
    const dia = data.getDate();
    const mesAno = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();

    let semana;
    let mes;

    switch (diaSemana) {
        case 0:
            semana = 'Domingo';
            break;
        case 1:
            semana = 'Segunda';
            break;
        case 2:
            semana = 'Terça';
            break;
        case 3:
            semana = 'Quarta';
            break;
        case 4:
            semana = 'Quinta';
            break;
        case 5:
            semana = 'Sexta';
            break;
        case 6:
            semana = 'Sábado';
            break;
        default:
            semana = 'Erro';
            break;
    }

    switch (mesAno) {
        case 0:
            mes = 'Janeiro';
            break;
        case 1:
            mes = 'Fevereiro';
            break;
        case 2:
            mes = 'Março';
            break;
        case 3:
            mes = 'Abril';
            break;
        case 4:
            mes = 'Maio';
            break;
        case 5:
            mes = 'Junho';
            break;
        case 6:
            mes = 'Julho';
            break;
        case 7:
            mes = 'Agosto';
            break;
        case 8:
            mes = 'Setembro';
            break;
        case 9:
            mes = 'Outubro';
            break;
        case 10:
            mes = 'Novembro';
            break;
        case 11:
            mes = 'Dezembro';
            break;
    }

    return resposta.innerHTML = `<p>${semana}, ${dia} de ${mes} de ${ano} ${hora}:${min}</p>`


}

organiza();