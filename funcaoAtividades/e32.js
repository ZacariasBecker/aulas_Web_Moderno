vet = [1, 2, 3, 4, 5, 6, 7, 8, 9]

mediaAritimetica = (vet) => {
    let result = 0

    for (let i in vet) {
        result += vet[i]
    }
    result /= vet.length
    console.log(result)
}

mediaAritimetica(vet)