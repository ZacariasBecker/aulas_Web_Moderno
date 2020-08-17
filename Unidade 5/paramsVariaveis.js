function soma() {
    let soma = 0
    for (i in arguments) {
        console.log(i)
        soma += arguments[i]
        console.log('--------')
    }
    return (`Soma: ${soma}`)
}

console.log(soma(7, 10, 3))
