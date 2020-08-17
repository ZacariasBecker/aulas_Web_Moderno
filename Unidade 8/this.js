console.log(this === global)
console.log(this === module)
console.log(this === module)
console.log(this === module.exports)

function logThis() {
    console.log('\nDentro de uma função...')
    console.log(this === global)
    console.log(this === module)
    console.log(this === exports)
    console.log(this === module.exports)

    this.perigo = 'Está colocando isso dentro do escopo global'
}

this.safe = 'Está colocando isso dentro do module.exports'

logThis()