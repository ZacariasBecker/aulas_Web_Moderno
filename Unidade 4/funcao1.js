//Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // no caso se passar só um valor o segundo será undefinied
imprimirSoma(2, 3, 5, 6, 7) // no caso, ele irá ignorar o excedente
imprimirSoma() // ainda sim valido

//Função com retorno
console.log('--------------')

function soma(a, b = 1) {
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))