const jogos = [10, 20, 20, 8, 25, 3, 0, 30, 1]

function bateuRecorde(jogos) {
    let nRecordes = 0

    for(let i in jogos){
        if(jogos[i] > jogos[i-1]){
            nRecordes++
        }
    }
    return nRecordes
}

function pior(jogos){
    let iPior = jogos[0]

    for(let j in jogos){
        if(jogos[j] < iPior){
            iPior = j-1
        }
    }

    return iPior
}

function analisaDesempenho(jogos) {
    let resultado = []
    resultado.push(bateuRecorde(jogos))
    resultado.push(pior(jogos))

    console.log(resultado)
}

analisaDesempenho(jogos)