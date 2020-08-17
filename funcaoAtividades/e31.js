vet = [0, -1, 2, -3, 4, -5, 6, -7, 8, -9]

encontraPositivo = vet => {
    let nPosi = 0
    for (let i in vet) {
        if (vet[i] > 0) {
            nPosi++
        }
    }
    return (nPosi)
}
encontraNegativo = vet => {
    let nNega = 0
    for (let i in vet) {
        if (vet[i] < 0) {
            nNega++
        }
    }
    return (nNega)
}

encontraZero = vet => {
    let nZero = 0
    for (let i in vet) {
        if (vet[i] === 0) {
            nZero++
        }
    }
    return (nZero)
}

encontraGeral = vet => {
    console.log('Positivos:', encontraPositivo(vet))
    console.log('Zeros:', encontraZero(vet))
    console.log('Negativos:', encontraNegativo(vet))

}

encontraGeral(vet)