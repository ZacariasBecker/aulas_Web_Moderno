// Arrow function
const soma = (a, b) => a + b
const mult = (a, b) => { return a * b }

console.log(soma(2, 3))

// Arrow function (this)
const lexico1 = () => console.log(this === exports)
lexico1()

// parametro default
function log1(texto = 'Node') {
    console.log(texto)
}
log1()
log1('Deno')

const log2 = (texto = 'Done') => console.log(texto)
log2()
log2('Nedo')

// Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1, 2, 3, 4, 5))