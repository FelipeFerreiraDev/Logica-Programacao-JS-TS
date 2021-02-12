const hora = 1;

if(hora < 12) {
    console.log('Bom dia');
} else if(hora == 12) {
    console.log('Meio dia');
}else if (hora > 12 && hora < 18) {
    console.log('Boa tarde');
} else if (hora >= 18) {
    console.log('Boa noite');
} else {
    console.log('Hora invalida')
}

/* 
 * if ternario
 */
hora >= 10 ? console.log('oi') : console.log('kk');