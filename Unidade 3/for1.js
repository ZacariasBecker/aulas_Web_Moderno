let contador = 1
while (contador <= 10) {
    console.log(`Contador: ${contador}`)
    contador++
}

console.log(contador)

for (let i = 1; i < 10; i++) {
    console.log(`Contador: ${i}`)
}

const notas = [6.1, 7.2, 8.3, 9.4, 10.5]

for (let i = 0; i < notas.length + 1; i++) {
    console.log(notas[i])
}
