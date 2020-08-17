const express = require('express')
const bodyParser = require('body-parser')
const porta = 3003
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, res, next) => {
    console.log(req.body)
    res.send('<h1>Usuário incluido</h1>')
})

app.post('/usuarios/:id', (req, res, next) => {
    console.log(req.params.id)
    console.log(req.body)
    res.send('<h1>Usuário alterado</h1>')
})

app.listen(porta, () => {
    console.log(`Executando na porta ${porta}!`)
})