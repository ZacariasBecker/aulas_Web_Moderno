criaPessoa = (nome, idade) => {
    return {
        nome: nome, // não otimizado
        idade: idade, // não otimizado
        matricula: 'ok'
    }
}

const pessoa1 = criaPessoa('João', 15)
console.log(pessoa1)

criaPessoa = (nome, idade) => {
    return {
        nome: nome, // otimizado
        idade: idade, // otimizado
    }
}

function criaProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1,
    }
}

const produto1 = criaProduto('Note', 150)
console.log(produto1)