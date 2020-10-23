const imprimirResulutado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResulutado(10)
imprimirResulutado(1)
imprimirResulutado('Epa!') // cuidado!
