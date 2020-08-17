const novonum = function arruma(num){
    const novonum = ('R$'+(num.toFixed(2).toString().replace('.',',')))

    return novonum
}

console.log(novonum(0.30000000000000004))