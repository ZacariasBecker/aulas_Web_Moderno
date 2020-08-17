vet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

encontraMaior = vetorMaior => {
    let maior = vetorMaior[0]

    for (let i in vetorMaior) {
        if (vetorMaior[i] > maior) {
            maior = vetorMaior[i]
        }
    }
    return (maior)
}

encontraMenor = vetorMenor => {
    let menor = vetorMenor[0]

    for (let i in vetorMenor) {
        if (vetorMenor[i] < menor) {
            menor = vetorMenor[i]
        }
    }
    return (menor)
}

encontra = vetor => {
    console.log(encontraMaior(vetor))
    console.log(encontraMenor(vetor))
}

encontra(vet)