const pessoa = { nome: 'João' }

pessoa.nome = 'Maria'
pessoa.idade = 3

console.log(pessoa)

//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Lucas'
pessoa.rua = 'ABC'
delete pessoa
delete pessoa.idade

console.log(pessoa)

const pessoaConstante = Object.freeze({nome:'Jonas'})