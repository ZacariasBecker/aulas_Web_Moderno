impares = (ini=0, fim=100) => {
    let novaLista =[]
    if (ini > fim) {
        [ini,fim] = [fim,ini]
    }
    for (let i = ini; i <= fim; i++) {
        if (i%2 != 0){
            novaLista.push(i)
        }
    }
    console.log(`Impares de ${ini} até ${fim}`,novaLista)
}

impares(3, 5)
impares(9, 5)
impares()