/*
const valor = 10;

if (valor == 10) {
    console.log('O valor é igual a 10');
} else if (valor > 10) {
    console.log('O valor é maior do que 10')
} else {
    console.log('O valor é diferente de 10 ou o tipo não é numérico');
}

console.log('Finalizado')
*/

const valor = 9; 

const teste = (valor) => {
    switch(valor) {
        case 1:
            return('O valor é igual a 1')
        case 2:
            return('O valor é igual a 2');
        case 3:
            return('O valor é igual a 3');
        case 4:
            return('O valor é igual a 4');
        default:
            return('O valor não é 1, 2, 3, 4');
    }
}

console.log(teste)