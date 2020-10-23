function compras(t1, t2) {
    const comprarSorvete = t1 || t2
    const comprarTv50 = t1 && t2
    const comprarTv32 = t1 != t2
    const semSoverte = !comprarSorvete

    return { comprarSorvete, comprarTv50, comprarTv32, semSoverte }
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))