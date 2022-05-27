//Nível I  

const adicionar = (a,b) => {
    return (a + b);
}

//console.log(adicionar(1,2)); 

const subtração = (a,b) => {
    return (a - b);
}

//console.log(subtração(1,2));

const multiplicação = (a,b) => {
    return (a * b);
}

//console.log(multiplicação(1,2))

const divisão = (a,b) => {
    return (a / b);
}

//console.log(divisão(1,2))

//Nível II

console.log("-------Teste de Operação/Calculadora-------")

console.log(adicionar(1,2));

console.log(subtração(1,2));

console.log(multiplicação(1,2));

console.log(divisão(1,2));

console.log(divisão(0,2));

//Nível III - Funções Extras

const quadradoDoNumero = (a) => {
    return (multiplicação(a,a));
}

console.log(quadradoDoNumero(4))

const mediaDeTresNumeros = (a,b,c) => {
    return (a + b + c) / 3;
}

console.log(mediaDeTresNumeros(20,20,20))

const calculaPorcentagem = (a,b) => {
    return (a * b) / 100;
}

console.log(calculaPorcentagem(300,15));

const geradorDePorcentagem = (a,b) => {
    return (a / b) * 100;
}

console.log(geradorDePorcentagem(50,200))