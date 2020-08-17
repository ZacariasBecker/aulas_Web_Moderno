Number.prototype.entre = function(min,max){
    return(this>=min && this<=max)
}

const imprimirResultado = function(nota){
    if(nota.entre(9,10)){
        console.log('Perfeito')
    }else if(nota.entre(7, 8.99)){
        console.log('Bom')
    }else if(nota.entre(5, 6.99)){
        console.log('Ruim')
    }else if(nota.entre(3, 4.99)){
        console.log('Pessimo')
    }else if(nota.entre(1, 2.99)){
        console.log('horrivel')
    }else if(nota.entre(0, 1.99)){
        console.log('Horroroso')
    }else{
        console.log('Gênio')
    }
    
}

imprimirResultado(-1)
imprimirResultado(0)
imprimirResultado(1)
imprimirResultado(2)
imprimirResultado(3)
imprimirResultado(4)
imprimirResultado(5)
imprimirResultado(6)
imprimirResultado(7)
imprimirResultado(8)
imprimirResultado(9)
imprimirResultado(10)