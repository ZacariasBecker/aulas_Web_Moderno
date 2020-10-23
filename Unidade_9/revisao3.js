// ES8:
const obj = {
    a: 1,
    b: 2,
    c: 3,
}
console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))

// Melhorias na notação literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() { return 'Olá' }
}
console.log(pessoa.nome, pessoa.ola())

// Class
class Animal { }
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}
console.log(new Cachorro().falar())