for (let index = 0; index <= 500; index++) {
    console.log(`Olá mundo ${index}`);

    if (index === 7) {
        return 'Número 7';
    }
}

function tabuada (lista) {
    console.log(lista);
    console.log(lista.lenght);

    for(let item = 0; item <= lista.length; item++) {
        console.log(`Item exibido atualmente: ${lista[item]}`)
    }
}

function tabuada2(lista) {
    for(let item = 0; item < lista.length; item++) {
        for (let indice = 1; indice <= 10; indice++) {
            console.log(`${lista[item]} x ${indice} = ${lista[item]*indice}`)
        }
    }
}


