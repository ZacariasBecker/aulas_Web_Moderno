let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo =1
console.log(!!isAtivo)

console.log("\nSão verdadeiros:")
console.log(!!3)
console.log(!!-3)
console.log(!!' ')
console.log(!!'Texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)

console.log("\nSão falsos:")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

console.log("\nPara finalizar:")
console.log(!!('' || null || 0 || ' '))
console.log('' || null || 0 || 'verdadeiro')
console.log('' || null || 0 || 'imprime o primeiro verdadeiro' || 123)