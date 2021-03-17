function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        btnClear: document.querySelector('.btn-clear'),

        clearDisplay() {
            this.display.value = ''; 
        },

        inicia() {
            this.cliqueBotoes();
        },

        cliqueBotoes() {
            document.addEventListener('click', event => {
                const el = event.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
            });
        },
        
        btnParaDisplay(valor) {
            this.display.value += valor;
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();