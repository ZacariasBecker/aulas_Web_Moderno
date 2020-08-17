function trocaTroca(vet1, vet2) {
    for (let i in vet1) {
        [vet1[i], vet2[i]] = [vet2[i], vet1[i]]
    }
    console.log(vet1)
    console.log(vet2)
}

vet1 = [1, 2, 3, 4, 5]
vet2 = [6, 7, 8, 9, 10]

trocaTroca(vet1, vet2)