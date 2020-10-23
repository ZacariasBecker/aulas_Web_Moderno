console.log(soma(3,4))
//console.log(sub(3,4))
//console.log(mult(3,4))

// function declaration > possibilidade de Hoisting
function soma(x, y) {
    return x + y
}

// function expression > impossibilidade de Hoisting
const sub = function (x, y) {
    return x - y
}

// named function expression > impossibilidade de Hoisting
const mult = function mult(x, y,) {
    return x * y
}
