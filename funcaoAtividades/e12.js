function fatorial(numero) {
    let fatorial = 1
    for (let i = 1; i <= numero; i++) {
        fatorial *= i
    }
    console.log(`O fatorial de ${numero} é ${fatorial}`)
}
fatorial(0) // 1
fatorial(1) // 1
fatorial(2) // 1*2 = 2
fatorial(3) // 1*2*3 = 6
fatorial(4) // 1*2*3*4 = 24
fatorial(5) // 1*2*3*4*5 = 120