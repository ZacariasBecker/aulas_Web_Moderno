const produtos = [
    { nome: 'Note', preco: '4299', fragil: true },
    { nome: 'iPad', preco: '4199', fragil: true },
    { nome: 'Copo de vidro', preco: '12.49', fragil: true },
    { nome: 'Copo de plástico', preco: '18.99', fragil: false },
]

console.log(produtos.filter(function (p) {
    return p.preco > 2500
}))

console.log(produtos.filter(p => p.preco > 2500 && p.fragil === false))