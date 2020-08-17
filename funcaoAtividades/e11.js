function regraUm(ano) {
    if (ano % 4 === 0) {
        return true
    } else {
        return false
    }
}
function regraDois(ano) {
    if (ano % 100 === 0) {
        return true
    } else {
        return false
    }
}
function regraTres(ano) {
    if (ano % 400 === 0) {
        return true
    } else {
        return false
    }
}

function eBissesto(ano) {
    r1 = regraUm(ano)
    r2 = regraDois(ano)
    r3 = regraTres(ano)

    if (r3 === true) {
        console.log(`${ano} é bissexto`)
    } else if (r2 === true) {
        console.log(`${ano} não é bissexto`)
    } else if (r1 === true) {
        console.log(`${ano} é bissexto`)
    } else {
        console.log(`${ano} não é bissexto`)
    }
}

eBissesto(2020) // true
eBissesto(2019) // false
eBissesto(1820) // true
eBissesto(2018) // false
eBissesto(1436) // true