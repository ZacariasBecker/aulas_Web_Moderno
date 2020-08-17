function getInteiroAleatorioEntre (min,max){
    valor = Math.random*(max-min)+min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log("Opção sorteada:",opcao)
    break
}

console.log('Fim')