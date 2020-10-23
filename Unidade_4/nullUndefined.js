let valor;
console.log(valor)
console.log("---------------")

valor = null
console.log(valor)
console.log("---------------")

const produto = {}
console.log(produto.preco)
console.log(produto)
console.log("---------------")

produto.preco = 3.50
console.log(produto)
console.log("---------------")

produto.preco = null
console.log(produto.preco)
console.log("---------------")

delete produto.preco
console.log(produto.preco)
console.log(produto)
console.log("---------------")