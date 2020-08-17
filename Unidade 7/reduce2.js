const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Maria', nota: 8.7, bolsista: true },
]

// Desafio 1: Todos os alunos são bolsistas ?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista

const desafio1 = alunos.map(m1 => m1.bolsista).reduce(todosBolsistas)
console.log(desafio1)

// Desafio 2: Algum dos alunos é bolsista ?
const algumBolsista = (resultado,bolsista) => resultado || bolsista

const desafio2 = alunos.map(m2 => m2.bolsista).reduce(algumBolsista)
console.log(desafio2)