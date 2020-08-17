let vet1 = ['A', 'b', 'c']
let vet2 = ['a', 'B', 'c', 'C', 'a']
let vet3 = ['a', 'B', 'g']

equaliza = (vet) =>{
    vEqua = []
    for(let i in vet){
        vEqua.push((vet[i]).toUpperCase())
    }
    return vEqua
}

compara = (v1,v2) =>{
    let result = true
    for(let i in v1){
        if(!(v2.includes(v1[i]))){
            result = false
        }
    }
    for(let i in v2){
        if(!(v1.includes(v2[i]))){
            result = false
        }
    }
    if(result===true){
        console.log('Todos os elementos são compartilhados, independente de ser maiuscula ou minuscula')
    }else{
        console.log('Nem todos os elementos são compartilhados, independente de ser maiuscula ou minuscula')
    }
}

main = (vet1,vet2) =>{
    const v1 = equaliza(vet1)
    const v2 = equaliza(vet2)
    compara(v1,v2)
}

main(vet1,vet2)
main(vet2,vet3)