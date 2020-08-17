const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica' // Possivel mas não usar
produto.preco = 220

console.log(produto)

delete produto.preco
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        endereco: {
            logradouro: 'rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorDoSeguro: function () { }
}

console.log(carro)
console.log(carro.proprietario.endereco.numero)
carro.proprietario.endereco.numero = 10000
console.log(carro.proprietario.endereco.numero)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorDoSeguro
console.log(carro)
console.log(carro.condutores)
//console.log(carro.condutores.length)
