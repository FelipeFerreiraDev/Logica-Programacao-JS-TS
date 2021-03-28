function* geradora1() {
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1.next().value);  // A função executa passo a passo
console.log(g1.next().value);   // ela só vai para o próximo assim q ela for chamada
console.log(g1.next().value);     // nesse caso foi necessário chamar 3 vezes para chegar no ultimo valor

function* geradora2() {
    let i = 0;
    while(true) {
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);