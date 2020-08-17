//par nome/valor

const saudacao = 'Opa' // contexto léxico 1

function exec()
{
    const saudacao = 'Faaala' //contexto léxico 2
    return saudacao
}

//objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Bettes',
        numero: 123
    }
}

console.log(cliente)
console.log(cliente.endereco)
console.log(cliente.endereco.numero)