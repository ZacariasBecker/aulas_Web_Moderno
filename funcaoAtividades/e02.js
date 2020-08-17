const tri = function triangulo(a, b, c) {

    let tipoTri

    if (a === b && b === c) {
        tipoTri = 'Equilatero'
    } else if ((a !== b || b !== c || a !== c)&& (a == b || b === c || a === c)){
        tipoTri = 'Isoceles'
    }else {
        tipoTri = 'Escaleno'
    }

    return tipoTri
}

console.log(tri(0, 0, 0))
console.log(tri(0, 1, 0))
console.log(tri(0, 1, 2))