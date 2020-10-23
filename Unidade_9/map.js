// Mesma coisa que objeto, mas a Chave aceita outros tipos de dado alem de String

const tecnologias = new Map()
tecnologias.set('React', { framework: false })
tecnologias.set('Angular', { framework: true })

console.log(tecnologias.react)
console.log(tecnologias.get('React'))
console.log(tecnologias.get('React').framework)

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})