function cardapio(codigo, quantidade) {
    let preco
    let precototal
    switch (codigo) {
        case 100:
            preco = 3.00
            precototal = quantidade * preco
            console.log(`Pedido: ${quantidade}x cachorro quente (R$ ${preco}): R$${(precototal).toFixed(2)}`)
            break
        case 200:
            preco = 4.00
            precototal = quantidade * preco
            console.log(`Pedido: ${quantidade}x Hamburguer Simples (R$ ${preco}): R$${precototal.toFixed(2)}`)
            break
        case 300:
            preco = 5.50
            precototal = quantidade * preco
            console.log(`Pedido: ${quantidade}x Cheeseburguer (R$ ${preco}): R$${precototal.toFixed(2)}`)
            break
        case 400:
            preco = 7.50
            precototal = quantidade * preco
            console.log(`Pedido: ${quantidade}x Bauru (R$ ${preco}): R$${precototal.toFixed(2)}`)
            break
        case 500:
            preco = 3.50
            precototal = quantidade * preco
            console.log(`Pedido: ${quantidade}x Refrigerante (R$ ${preco}): R4${precototal.toFixed(2)}`)
            break
        case 600:
            preco = 2.80
            precototal = quantidade * preco
            console.log(`Pedido: ${quantidade}x Suco (R$ ${preco}): R$${precototal.toFixed(2)}`)
            break
        default:
            console.log('Codigo inexistente')
    }
}

cardapio(100, 5)
cardapio(200, 5)
cardapio(300, 5)
cardapio(400, 5)
cardapio(500, 5)
cardapio(600, 5)
cardapio(700, 5)