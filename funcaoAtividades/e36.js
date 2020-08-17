const vet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

f1 = (vet, n) => {
    novoVet = []
    for (let i in vet) {
        novoVet.push(vet[i] * n)
    }
    console.log(novoVet)
}

f2 = (vet, n) => {
    novoVet = []
    for (let i in vet) {
        if (vet[i] > 5) {
            novoVet.push(vet[i] * n)
        } else {
            novoVet.push(vet[i])
        }
    }
    console.log(novoVet)
}

f1(vet, 4)
f2(vet, 5)