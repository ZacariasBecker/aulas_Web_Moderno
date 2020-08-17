const vet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

determinaParImparEmUmVetor = (vetor) => {
    let par = 0
    let impar = 0

    for (let i in vetor) {
        if ((vetor[i] % 2 === 0)) {
            par++
        }else{
            impar++
        }
    }
    console.log(`Impar: ${impar} Par: ${par}`)
}

determinaParImparEmUmVetor(vet)