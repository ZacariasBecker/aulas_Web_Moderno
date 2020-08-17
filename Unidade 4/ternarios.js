const resultado = nota => nota >= 7? 'Aprovado' : 'Reprovado'
const fechou = (nota) => nota === 10? 'Parabens':'N'

nota=6
console.log(`Nota: ${nota}, ${resultado(nota)}, ${fechou(nota)}`)

nota = 7
console.log(`Nota: ${nota}, ${resultado(nota)}, ${fechou(nota)}`)

nota = 8
console.log(`Nota: ${nota}, ${resultado(nota)}, ${fechou(nota)}`)

nota = 10
console.log(`Nota: ${nota}, ${resultado(nota)}, ${fechou(nota)}`)
