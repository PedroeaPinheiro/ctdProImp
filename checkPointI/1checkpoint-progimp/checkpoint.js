const microondas = (tipo, tempo) => {
    let aviso = 'Bem-vindo ao Menu\n';

    switch(tipo) {
        case 'pipoca':
            aviso += 'Você escolheu a pipoca\n';
            if (tempo >=  20) {
                aviso += 'Sua comida queimou\n';
            } else if (tempo < 10) {
                aviso += 'Tempo insuficiente\n';
            } else if (tempo >= 30) {
                aviso += 'kabuum\n';
            } else if (tempo > 10 < 20) {
                aviso += 'Prato pronto, bom apetite!\n';
            } 
        break;
        case 'macarrão':
            aviso += 'Você escolheu o macarrão\n';
            if (tempo >= 16) {
                aviso += 'Sua comida queimou\n';
            } else if (tempo < 8) {
                aviso += 'Tempo insuficiente\n';
            } else if (tempo >= 24) {
                aviso += 'kabuum\n'
            } else if (tempo > 8 < 16) {
                aviso += 'Prato pronto, bom apetite!\n';
            }
        break;
        case 'carne':
            aviso += 'Você escolheu a carne\n';
            if (tempo >= 30) {
                aviso += 'Sua comida queimou\n';
            } else if (tempo < 15) {
                aviso += 'Tempo insuficiente\n';
            } else if (tempo >= 45) {
                aviso += 'kabuum\n';
            } else if (tempo > 15 < 30) {
                aviso += 'Prato pronto, bom apetite!\n';
            }
        break;
        case 'feijão':
            aviso += 'Você escolheu o feijão\n';
            if (tempo > 24) {
                aviso += 'Sua comida queimou\n';
            } else if (tempo < 12) {
                aviso += 'Tempo insuficiente\n';
            } else if (tempo >= 36) {
                aviso += 'kabumm';
            } else if (tempo > 12 < 24) {
                aviso += 'Prato pronto, bom apetite!\n';
            }
        break;
        case 'brigadeiro':
            aviso += 'Você escolheu o brigadeiro\n';
            if (tempo > 16) {
                aviso += 'Sua comida queimou\n';
            } else if (tempo < 8) {
                aviso += 'Tempo insuficiente\n';
            } else if (tempo >= 24) {
                aviso += 'kabumm\n';
            } else if (tempo > 8 < 16) {
                aviso += 'Prato pronto, bom apetite!\n';
            }
        break;
        default: aviso += 'Prato inexistente\n';
    } 
    aviso += padrao();
    return aviso;
}

function padrao() {
    return 'Obrigado por usar nosso microondas!'
} 

console.log(microondas('pipoca', 35));
