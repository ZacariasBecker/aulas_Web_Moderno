function fun1() {
    console.log('f1')
}

const fun2 = function () {
    console.log('f2')
}

const array = [function (a, b) { return a + b }, fun1, fun2]

console.log(array[0](2, 3))

const obj = {}
obj.falar = function () { return 'Olá' }
console.log(obj.falar())

function run(fun) {
    fun()
}

run(fun1)
run(function () { console.log('saida') })

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)