function concecionaria(carro) {
    switch (carro) {
        case 'hatch':
            console.log('compra efetuada com sucesso')
            break
        case 'sedan':
            console.log('Tem certeza, não prefere esse modelo ?')
            break
        case 'motocicleta':
            console.log('Tem certeza, não prefere esse modelo ?')
            break
        case 'caminhonete':
            console.log('Tem certeza, não prefere esse modelo ?')
            break
        default:
            console.log('Não trabalhamos com esse tipo de veiculo')
    }
}

concecionaria('hatch')
concecionaria('sedan')
concecionaria('motocicleta')
concecionaria('caminhonete')
concecionaria('quadriciclo')