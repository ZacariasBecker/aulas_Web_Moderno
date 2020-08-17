function planoDeSaude(idade) {
    let valor = 100

    if (idade < 10) {
        valor += 80
    } else if (idade < 30) {
        valor += 50
    } else if (idade < 60) {
        valor += 95
    } else {
        valor += 130
    }
    return ((valor).toFixed(2)).replace('.', ',')
}

console.log(`Valor a ser pago: R$${planoDeSaude(5)}`)
console.log(`Valor a ser pago: R$${planoDeSaude(25)}`)
console.log(`Valor a ser pago: R$${planoDeSaude(55)}`)
console.log(`Valor a ser pago: R$${planoDeSaude(65)}`)