// com promisse
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

// Recurso ES8
// Objetivo de simplificar o uso de promises...
let obterAlunos = async () => {
    const tumaA = await getTurma('A')
    const tumaB = await getTurma('B')
    const tumaC = await getTurma('C')
    return [].concat(tumaA, tumaB, tumaC)
} // retorna objeto do tipo AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(turma => turma.nome))
    .then(nomes => console.log(nomes))
