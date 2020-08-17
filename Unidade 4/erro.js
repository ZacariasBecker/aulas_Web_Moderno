function tratarErrorELancar (erro){
    throw new Error ('...')
    //throw 'mensagem'
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + "!!!")
    }catch(e){
        tratarErrorELancar(e)
    }finally{
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }

imprimirNomeGritado(obj)