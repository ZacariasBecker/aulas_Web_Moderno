function fruta(nome) {
    switch (nome) {
        case 'maçã':
            console.log('Não vendemos essa fruta aqui')
            break
        case 'kiwi':
            console.log('Acabou o kiwi')
            break
        case 'melancia':
            console.log('Trezentos reais o quilo')
            break
        default:
            'Erro'
    }
}

fruta('maçã')
fruta('kiwi')
fruta('melancia')
fruta('tamarindo')