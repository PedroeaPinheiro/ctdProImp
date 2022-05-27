/* const soma = (num1, num2, callback) => {
    const total = num1 + num2;
    callback(total);
}

function msg(total) {
    console.log(`O valor total da soma é de ${total}`);
}

const total = (valor) => {
    console.log(valor);
}

soma(5, 5, total);
soma(5, 5, msg); */

const acaoCarro(callback) {
    callback();
}

const andar = () => {
    console.log('O carro está andando');
}

const parar = () => {
    console.log('O carro parou');
}

acaoCarro(andar);
acaoCarro(parar);