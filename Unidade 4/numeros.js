const peso1 = 1.5
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(typeof peso1, typeof peso2)
console.log(Number.isInteger(peso1), Number.isInteger(peso2))

console.log('-------------')

const avaliacao1 = 9.875
const avaliacao2 = 8.14565

const total =  avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/(peso1 + peso2)
console.log("Media: " + media.toFixed(2)) // converte em binario 
console.log("Em binario: " + media.toString(2))
