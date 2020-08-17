crianca = (nome, altura, taxa) => {
    return {
        nome: nome,
        altura: altura,
        taxa: taxa
    }
}

compara = (c1, c2) => {
    let tempo = 0
    let diferenca;

    if ((c1.altura < c2.altura) && (c1.taxa > c2.taxa)) {
        while (c1.altura < c2.altura) {
            c1.altura += c1.taxa
            c2.altura += c2.taxa
            tempo++
        }
        if (c1.altura === c2.altura) {
            console.log(`Em ${tempo} anos, ${c1.nome} terá a mesma altura que ${c2.nome}`)
        } else {
            diferenca = c1.altura - c2.altura
            console.log(`Em ${tempo} anos, ${c1.nome} terá ${diferenca} centimetros a mais que ${c2.nome}`)
        }

    } else if ((c1.altura > c2.altura) && (c1.taxa < c2.taxa)) {
        while (c1.altura > c2.altura) {
            c1.altura += c1.taxa
            c2.altura += c2.taxa
            tempo++
        }
        if (c1.altura === c2.altura) {
            console.log(`Em ${tempo} anos, ${c2.nome} terá a mesma altura que ${c1.nome}`)
        } else {
            diferenca = c2.altura - c1.altura
            console.log(`Em ${tempo} anos, ${c2.nome} terá ${diferenca} centimetros a mais que ${c1.nome}`)
        }

    } else if ((c1.altura > c2.altura) && (c1.taxa > c2.taxa)) {
        console.log(`${c1.nome} sempre será mais alta que ${c2.nome}`)
    } else if ((c1.altura < c2.altura) && (c1.taxa <= c2.taxa)) {
        console.log(`${c2.nome} sempre será mais alta que ${c1.nome}`)
    } else if ((c1.altura === c2.altura) && (c1.taxa >= c2.taxa)) {
        console.log(`Ano que vem ${c1.nome} já será mais alto(a) que ${c2.nome}`)
    } else if ((c1.altura === c2.altura) && (c2.taxa > c1.taxa)) {
        console.log(`Ano que vem ${c2.nome} já será mais alto(a) que ${c1.nome}`)
    } else {
        console.log(`${c1.nome} e ${c2.nome} sermpre terão a mesma altura`)
    }
}

let crianca1 = crianca('joão', 100, 5)
let crianca2 = crianca('maria', 50, 20)
let crianca3 = crianca('lucas', 50, 20)
let crianca4 = crianca('ana', 50, 30)
let crianca5 = crianca('carlos', 51, 31)
let crianca6 = crianca('sofia', 52, 31)

compara(crianca1, crianca2)
compara(crianca2, crianca3)
compara(crianca3, crianca4)
compara(crianca4, crianca5)
compara(crianca5, crianca6)