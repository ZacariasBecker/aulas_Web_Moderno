notas = (vet) => {
    let resultado = []

    for (let i in vet) {
        if (vet[i] > 8) {
            resultado.push(vet[i] + " A")
        } else if (vet[i] > 6) {
            resultado.push(vet[i] + " B")
        } else if (vet[i] > 4) {
            resultado.push(vet[i] + " C")
        } else {
            resultado.push(vet[i] + " D")
        }
    }
    console.log(resultado)
}

vet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
notas(vet)