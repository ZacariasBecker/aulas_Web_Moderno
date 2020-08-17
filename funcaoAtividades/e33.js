const vetorInteiro = [1, 2, 3, 4]
const vetorString = ['a', 'b', 'c', 'd']
const vetorDouble = [1.1, 2.2, 3.3, 4.4]

concatena = (a, b, c) => {
    let vetor = []

    for (i = 0; i < 4; i++) {
        vetor.push(`>${a[i]}${b[i]}${c[i]}<`)
    }
    console.log(vetor)
}
concatena(vetorInteiro, vetorString, vetorDouble)