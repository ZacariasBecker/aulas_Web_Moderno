console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carla', 'Ana') // existe uma forma melhor de instanciar arrays
console.log(aprovados)

aprovados = ['Bia', 'Carla', 'Ana'] // melhor forrma de instanciar um array
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados[3])
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados)
console.log(aprovados[8] === undefined)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2)
console.log(aprovados)
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)
aprovados.splice(1, 2, 'Elemento3', 'Elemento4')
console.log(aprovados)
aprovados.splice(1, 0, 'Elemento5', 'Elemento6')
console.log(aprovados)
aprovados.splice(1, 1, 'Elemento7', 'Elemento8')
console.log(aprovados)

const teste = ['a','b']
console.log(teste)
teste[0] = 'x'
teste[1] = 'y'
console.log(teste)