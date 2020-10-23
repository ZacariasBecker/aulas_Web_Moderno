console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}
console.log('Escola Cod3r'.reverse())

const a = 'abc'
console.log(a.reverse())

Array.prototype.first= function(){
    return this[0]
}

const b = [1,2,3,4,5]
console.log(b.first())