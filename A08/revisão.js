function produto(tipo, valor) {
    let mensagem = 'Seja bem vindo à loja\n';

    switch(tipo) {
        case 'celular' :
            mensagem += 'Você selecionou o produto celular\n';
            if (valor >= 2000) {
                mensagem += 'O seu produto tem um valor alto, deseja fazer um seguro?\n';
            }
       break;
       case 'Televisão':
           mensagem += 'Você selecionou o produto televisão\n';
        break;   
        case 'mouse-teclado':
            mensagem += 'Você selecionou o produto mouse e teclado\n';
            if (valor >=600) {
                mensagem += 'Gostaria de comprar um mousepad por R$50,00\n';
            } else {
                mensagem += 'Você ganhou um mousepad. Retire no caixa\n';
            } 
        break;   
        default:
            mensagem += 'Você ainda não selecionou nenhum produto, precisa de ajuda?\n';
    }
    mensagem += msgPadrao();
    return mensagem;
}

function msgPadrao() {
    return 'Obrigado por visitar a nossa loja\n';
}

console.log(produto('celular', 2000));
console.log('\n-------------------\n')
console.log(produto('Televisão', 2000));
console.log('\n-------------------\n')
console.log(produto('mouse-teclado', 500));
console.log('\n-------------------\n')
console.log(produto('mouse-teclado', 600));
