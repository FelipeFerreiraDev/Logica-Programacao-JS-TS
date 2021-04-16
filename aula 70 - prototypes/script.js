const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB: 'B'
};

Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA)

const objC = new Object();
objC.chaveC = 'C'; 

Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA)