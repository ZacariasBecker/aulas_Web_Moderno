function caixa(valor) {
    let contUm = 0
    let contCinco = 0
    let contDez = 0
    let contCinquenta = 0
    let contCem = 0

    let contValor = 0

    for (let i = 0; i < valor; i++) {
        if (contValor + 100 <= valor) {
            contValor += 100
            contCem++
        } else if (contValor + 50 <= valor) {
            contValor += 50
            contCinquenta++
        } else if (contValor + 10 <= valor) {
            contValor += 10
            contDez++
        } else if (contValor + 5 <= valor) {
            contValor += 5
            contCinco++
        } else if (contValor + 1 <= valor) {
            contValor += 1
            contUm++
        }
    }

    console.log(`Notas de Cem: ${contCem}`)
    console.log(`Notas de Cinquenta: ${contCinquenta}`)
    console.log(`Notas de Dez: ${contDez}`)
    console.log(`Notas de Cinco: ${contCinco}`)
    console.log(`Notas de Um: ${contUm}`)
}

caixa(100)
console.log('----------------------')
caixa(50)
console.log('----------------------')
caixa(10)
console.log('----------------------')
caixa(5)
console.log('----------------------')
caixa(1)
console.log('----------------------')
caixa(18)