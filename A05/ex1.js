const exibir = () => {
    const total = soma(5, 10);
    console.log(total);
}

const soma = (valorA, valorB) => valorA + valorB;

const objeto = {
    nome: 'Pedro',
    sobrenome: 'Pinheiro',
    nomeCompleto: () => {
        return `Nome completo: ${this.nome} ${this.sobrenome}`
    }
}

exibir();

const potencia = Math.floor(2.5);

console.log(potencia);