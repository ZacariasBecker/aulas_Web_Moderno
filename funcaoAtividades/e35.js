vetorPilha = [1, 2, 3, 4, 5]
vetorAdiciona = [6, 7, 8, 9, 10]

insere = (vP, vA) => {
    for (let i in vA) {
        vP.push(vA[i])
    }
    console.log(vP)
    console.log(vA)
}

insere(vetorPilha, vetorAdiciona)