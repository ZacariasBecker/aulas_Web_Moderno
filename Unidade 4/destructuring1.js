const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade, + "\n")

const { nome: n, idade: i } = pessoa
console.log(n, i + '\n')

const { sobrenome, viagem = true } = pessoa
console.log(sobrenome, viagem + '\n')

console.log(pessoa.viagem)
console.log(pessoa + '\n')

console.log('---------------\n')

const { logradouro} = pessoa.endereco
console.log(logradouro+'\n')

const {endereco: {numero, cep}} = pessoa
console.log(numero, cep)