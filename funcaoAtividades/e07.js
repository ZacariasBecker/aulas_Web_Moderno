const delta = (a, b, c) => (Math.pow(b, 2)) - 4 * a * c

const segGrau = (a, b=0, c = 0) => {
    valorDeDelta = delta(a, b, c)
    if (valorDeDelta < 0) {
        console.log('Delta é negativo')
    } else {
        const resultado1 = ((-b + Math.sqrt(valorDeDelta)) / (2 * a))
        const resultado2 = ((-b - Math.sqrt(valorDeDelta)) / (2 * a))

        console.log(`x1: ${resultado1}, x2: ${resultado2}`)
    }
}

segGrau(1,-1,-12)