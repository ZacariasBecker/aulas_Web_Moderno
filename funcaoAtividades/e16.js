function calculadora(operacao) {
    switch (operacao[1]) {
        case '+':
            console.log(`${operacao[0]} + ${operacao[2]}: ${parseFloat(operacao[0]) + parseFloat(operacao[2])}`)
            break
        case '-':
            console.log(`${operacao[0]} - ${operacao[2]}: ${parseFloat(operacao[0]) - parseFloat(operacao[2])}`)
            break
        case '*':
            console.log(`${operacao[0]} * ${operacao[2]}: ${parseFloat(operacao[0]) * parseFloat(operacao[2])}`)
            break
        case '/':
            console.log(`${operacao[0]} / ${operacao[2]}: ${parseFloat(operacao[0]) / parseFloat(operacao[2])}`)
            break
        default:
            console.log('Operação inválida')
    }

}

calculadora('3+5')
calculadora('3-5')
calculadora('3*5')
calculadora('3/5')