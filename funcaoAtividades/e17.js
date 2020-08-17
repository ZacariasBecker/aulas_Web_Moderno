function trabalho(plano, salario) {
    switch (plano) {
        case 'A':
            console.log(salario = salario + (0.1 * salario))
            break
        case 'B':
            console.log(salario = salario + (0.15 * salario))
            break
        case 'C':
            console.log(salario + (0.2 * salario))
            break
        default:
            console.log('Numero fora do intervalo')
    }
}

trabalho('A', 1000)
trabalho('B', 1000)
trabalho('C', 1000)