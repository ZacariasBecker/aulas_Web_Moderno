const sequencia = {
    _valor: 1, // convenção de private
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor, sequencia.valor)

sequencia.valor = 1001
console.log(sequencia.valor, sequencia.valor, sequencia.valor)

sequencia.valor = 0
console.log(sequencia.valor, sequencia.valor, sequencia.valor)