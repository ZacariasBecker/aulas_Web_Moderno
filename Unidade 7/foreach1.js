// Foreach recebe 3 parametros: #1: valor, #2: Indice , #3: O proprio array

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice) {
    console.log(`m1: ${indice + 1}) ${nome}`)
})

console.log('==========')

aprovados.forEach((nome, indice) => { console.log(`m2: ${indice + 1}) ${nome}`) })

console.log('==========')

const exibirAprovados = (nome, indice) => { console.log(`m3: ${indice + 1}) ${nome}`) }

aprovados.forEach(exibirAprovados)

console.log('==========')

aprovados.forEach((nome, indice, oProprioArray) => {
    console.log(`Primeiro parametro: ${nome},
     Segundo parametro: ${indice},
     Terceiro parametro: ${oProprioArray}`
    )
})