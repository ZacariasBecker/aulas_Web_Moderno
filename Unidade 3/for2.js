const notas = [6.1, 7.2, 8.3, 9.4, 10.5]

for (let i in notas){
    console.log(notas[i])
}
// console.log(i) sempre colocar let, caso contrario o incice i ficaria no escolpo global

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64,

    teste(){
        console.log('metodo')
    }
}

console.log('-----------')

for(let i in pessoa){
    console.log(`${i} = ${pessoa[i]}`)
}