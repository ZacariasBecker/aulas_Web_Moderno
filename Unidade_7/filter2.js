Array.prototype.filter2 = function (callback) {
    newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) { newArray.push(this[i]) }
    }
    return newArray
}

const produtos = [
    { nome: 'Note', preco: '4299', fragil: true },
    { nome: 'iPad', preco: '4199', fragil: true },
    { nome: 'Copo de vidro', preco: '12.49', fragil: true },
    { nome: 'Copo de plástico', preco: '18.99', fragil: false },
]

console.log(produtos.filter2(p => p.preco > 2500))