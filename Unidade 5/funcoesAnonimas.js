const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

mult = (x, y) => x * y

imprimirResultado(3, 4)
imprimirResultado(3, 4, mult)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})
imprimirResultado(12, 4, (x, y) => x / y)

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()