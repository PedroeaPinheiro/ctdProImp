const loopDePares = num => {
    for(let i = 0; i <= 100; i++) {
        let result = i + num;
        if(result % 2 === 0 ) {
            console.log(`O número do laço é: ${i}, o número digitado foi: ${num}, e a soma: ${result} é par`);
        } else {
            console.log(`O número do laço é: ${i}`);
        }
    }
}
// loopDePares(10);

const loopDeImpares = (num, message) => {
    for(let i = 0; i <= 100; i++) {
        console.log(i);
        let result = num + i;
        if(result % 2 !== 0) {
            console.log(result,message);
        }
        
    }
}
// loopDeImpares(5, "Testando loop de impares");

const soma = num => {
    let acc = num;
    for(let i = num - 1; i > 0; i--) {
        acc = acc + i;       
    }
    return acc;
}
// console.log(soma(8));

const novoArray = num => {
    let array = [];
    for(let i = num; i > 0; i--) {
        array.unshift(i);
    }
    return array;
}
// console.log(novoArray(12));

const split = string => {
    let array = []
    for(let i = string.length -1; i >= 0; i--) {
        array.unshift(string[i]);
    }
    return array;
}
// console.log(split("estou testando de novo"));

const moverZeros = array => {
    let index;
    for(let i = array.length -1;i > 0; i-- ){
        index = array.indexOf(0);
        let zero = array.splice(index, 1);
        if(!zero) continue
        array.push(zero[0]);

    }
    console.log(array);
}
// moverZeros([1,2,3,0,false,0,"quatro",0,9,0,0,0 ,6,7]);

const arrayHandler = (array1, array2) => {
    for(let i = 0; i < array1.length; i++) {
        console.log(`Eu sou ${array1[i]} e eu sou ${array2[i]}`);
    }
}
// arrayHandler([1,2,3], ["o", "l", "á"]);

const arrayObjects = num => {
    let array = [];
    for(let i = 1; i <= num; i++) {
        array.push({valor: i});
    }
    return array;
}
// console.log(arrayObjects(5));

const arrayObjectsTwo = (num, message) => {
    let array = [];
    for(let i = 1; i <= num; i++) {
        array.push({[message]: i});
    }
    return array;
}
console.log(arrayObjectsTwo(5, "olá Teste"));