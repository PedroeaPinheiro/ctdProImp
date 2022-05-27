let numeros = [ 5, 20, 30, 10, 5, 9 ];
let filmes = [ 'Matrix 4' ];


console.log(numeros);

const dobro = numeros.map(function(numero) {
    return numero * 2;
});

console.log(dobro);

const filmesMaisculo = filmes.map(filme => filme.toUpperCase());

console.log(filmesMaisculo);

console.log(numeros)

const numeros10 = numeros.filter(numero => numero > 10);

console.log(numeros10);

const procurar = filmes.find(filme => filme === 'Matrix 4');

const procurar = filmes.find(filme => filme === 'o tigre e o dragao teste');

console.log(!!procurar);

const soma = numeros.reduce((total, numero) => total + numero);

console.log(soma);

const filmesObjetos = [
    {
        titulo: 'Matrix 4',
        valor: 39,
        avaliacao: 9
    },
    {
        titulo: 'Alerta Vermelho',
        valor: 10,
        avaliacao: 7
    },
    {
        titulo: 'O poderoso chefão',
        valor: 25,
        avaliacao: 10
    },
];

const filmesFiltro = filmeObjeto.filter(function(filme) {
    return filme.valor === 10 && filme.avaliacao > 5;
});

console.log(filmesFiltro);