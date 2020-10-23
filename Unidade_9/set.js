// não aceita repetição e não é indexado
const times = new Set()
times.add('a')
times.add('b').add('c').add('d').add('e')
times.add('a').add('a').add('a').add('a')

console.log(times)
console.log(times.size)
console.log(times.has('a'))
console.log(times.delete('a'))

const nomes = ['1', '2', '3', '1', '2']
const nomesSet = new Set(nomes)
console.log(nomesSet)