// Operador ...rest(juntar),spread(espalhar)
// usar rest com parametro da função

// ysar spread com objeto
const funcionario = { nome: 'Maria', salario: 12345.67 }
const clone = { ativo: true, ...funcionario }
console.log(funcionario)
console.log(clone)

// Usar spread com arry
const grupoA = ['a', 'b', 'c']
const grupoB = ['d', 'e', ...grupoA]
console.log(grupoA)
console.log(grupoB)