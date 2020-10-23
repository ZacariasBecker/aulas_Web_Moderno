console.log(Math.ceil(6.1))

const obj1 ={}
obj1.nome = "Bola"
obj1['nome2'] = "Bola2"

console.log("\n"+obj1.nome)
console.log(obj1.nome2)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')

const obj3 = new Obj("Mesa")

console.log(obj2)
console.log(obj2.nome)
console.log(obj2.exec)
console.log(obj2.exec())

console.log('\n')
console.log(obj3)
console.log(obj3.nome)
console.log(obj3.exec)
obj2.exec()