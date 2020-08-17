
const jComposto = (valor, mes) => {
    if (mes !== 1){
        valor *= (Math.pow((1 + 0.05), (mes-1)))
    }
    return valor
}

console.log(jComposto(500,1))
console.log(jComposto(500,2))