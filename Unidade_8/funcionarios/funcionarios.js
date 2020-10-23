const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const china = c => c.pais === 'China'
const mulher = m => m.genero === 'F'
const menorSalario = (acumulador, novo) => novo.salario < acumulador.salario ? novo : acumulador

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios);

    const mulherChinesaDeMenorSalario = funcionarios
        .filter(china)
        .filter(mulher)
        .reduce(menorSalario)
    console.log(mulherChinesaDeMenorSalario)
})

