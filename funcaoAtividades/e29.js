const vet0 = [11, 55, 33, 22, 44, 11, 02, 15, 18, 13] // 5 numeros entre 10 e 20

quantosNumerosEmUmvetor = (vetor) => {
    contador = 0

    for (let i in vetor) {
        if ((vetor[i] >= 10) && (vetor[i] <= 20)) {
            contador++
        }
    }
    console.log(`${contador} numeros no vetor entre os valores 10 e 20`)
}

quantosNumerosEmUmvetor(vet0)