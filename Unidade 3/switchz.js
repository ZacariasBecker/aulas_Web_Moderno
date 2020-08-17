
const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
            console.log('Perfeito')
            break
        case 9:
            console.log('Perfeito')
            break
        case 8:
            console.log('Bom')
            break
        case 7:
            console.log('Bom')
            break
        case 6:
            console.log('Ruim')
            break
        case 5:
            console.log('Ruim')
            break
        case 4:
            console.log('Pessimo')
            break
        case 3:
            console.log('Pessimo')
            break
        case 2:
            console.log('horrivel')
            break
        case 1:
            console.log('horrivel')
            break
        case 0:
            console.log('Horroroso')
        default:
            console.log('Gênio')
            break
    }

}

imprimirResultado(-1)
imprimirResultado(0)
imprimirResultado(1)
imprimirResultado(2)
imprimirResultado(3)
imprimirResultado(4)
imprimirResultado(5)
imprimirResultado(6)
imprimirResultado(7)
imprimirResultado(8)
imprimirResultado(9)
imprimirResultado(10)