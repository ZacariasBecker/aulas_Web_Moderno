function media(cod,a,b,c){
    let media = 0
    let resultado = 'Reprovado'

    if(a>b && a>c ){
        media = (a*4 + b*3 + c*3)/10
    }else if(b>a && b>c){
        media = (a*3 + b*4 + c*3)/10
    }else if(c>a && c>b){
        media = (a*3 + b*3 + c*4)/10
    }

    if(media>5){
        resultado = 'Aprovado'
    }

    console.log(`A media do aluno ${resultado} de id: ${cod}, que teve as notas: ${a,b,c} é ${media}`)
}

media(21,8,6,5)
media(2,4,2,3)