function arrredondamento(nota) {
    if (nota >= 38) {
        if (nota % 5 > 2) {
            let adicionar
            if (nota % 5 === 2) {
                adicionar = 3
            } else if (nota % 5 === 3) {
                adicionar = 2
            } else {
                adicionar = 1
            }
            let novaNota = nota + adicionar
            console.log(`Aprovado com: ${novaNota}`)
        } else {
            console.log(`Aprovado com: ${nota}`)
        }
    } else {
        console.log(`Reprovado com: ${nota}`)
    }
}

arrredondamento(37)
arrredondamento(38)
arrredondamento(39)
arrredondamento(40)
arrredondamento(41)
arrredondamento(42)
arrredondamento(43)
arrredondamento(44)
arrredondamento(45)
arrredondamento(46)
arrredondamento(47)
arrredondamento(48)
arrredondamento(49)
arrredondamento(50)
