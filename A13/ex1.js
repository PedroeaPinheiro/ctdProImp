let objeto = {
    nome: 'Rodrigo',
    sobrenome: 'Sarri',
    exibirNome: function() {
        console.log(`${this.nome} ${this.sobrenome}`);
    }
}

objeto.exibirNome();

class Aluno {
    constructor(nome) {
        this.nome = nome;
    }

    exibirNome() {
        return this.nome;
    }

    exibirNomeENota() {
        return this.nome + ' Sua nota foi de 9';
    }
}

const teste = new Aluno('Rodrigo');

console.log(teste.exibirNome());

console.log(teste.exibirNomeENota());



