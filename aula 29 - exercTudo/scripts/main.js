function escopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(event) {
        event.preventDefault();

        let peso = form.querySelector('.input-teste-1');
        let altura = form.querySelector('.input-teste-2');

        peso = peso.value;
        altura = altura.value;
        altura = altura / 100;

        const imc = peso / (altura * altura);

        if (peso == isNaN || peso == undefined || peso == '') {
            resultado.innerHTML = `<p>Peso não especificado</p>`
        } else if (altura == isNaN || altura == undefined || altura == '') {
            resultado.innerHTML = `<p>Altura não especificada</p>`
        } else if (imc < 18.5) {
            resultado.innerHTML = `<p>${imc.toFixed(2)} Abaixo do peso</p>`
        } else if (imc >= 18.5 && imc <= 24.9) {
            resultado.innerHTML = `<p>${imc.toFixed(2)} Peso normal</p>`
        } else if (imc >= 25 && imc <= 29.9) {
            resultado.innerHTML = `<p>${imc.toFixed(2)} Sobrepeso</p>`
        } else if (imc >= 30 && imc <= 34.9) {
            resultado.innerHTML = `<p>${imc.toFixed(2)} Obesidade I</p>`
        } else if (imc >= 35 && imc <= 39.9) {
            resultado.innerHTML = `<p>${imc.toFixed(2)} Obesidade II</p>`
        } else if (imc >= 40) {
            resultado.innerHTML = `<p>${imc.toFixed(2)} Obesidade III</p>`
        }
    }

    form.addEventListener('submit', recebeEventoForm);
}

escopo();