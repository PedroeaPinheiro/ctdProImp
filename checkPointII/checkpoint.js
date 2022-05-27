// 1
function soma(valor1, valor2) {
    return valor1 + valor2
}

const total = soma(5,5);

console.log(total * 2);

const fs = require('fs');
const filmes = require('../Aula 14/ex1');

fs.writeFileSync('./arquivo.txt', 'Aula14'); //Escrever num arquivo

const arquivo = fs.readFileSync('./arquivo.txt', 'utf-8'); //Ler num arquivo
console.log(arquivo)

fs.appendFileSync('./arquivo.txt', '23/11'); //Concatenar um arquivo

filmes.sort().reverse(); //função alinhada
//console.log(filmes)

filmes = [
    'Matrix 4',
]

const filmesMaiusculo = filmes.map(function(item) {
    return item.toUpperCase();
})

console.log(filmesMaiusculo)

let valor = 10;

if (valor == 10) {
    console.log('O valor é igual a 10');
}

// node interpretador de javascript na parte de servidor, que executa no servidor