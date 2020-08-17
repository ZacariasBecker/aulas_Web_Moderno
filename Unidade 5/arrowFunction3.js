let comaparaComThis = function (param) {
    console.log(this === param)
}

comaparaComThis(global)

const obj = {}
comaparaComThis = comaparaComThis.bind(obj)
comaparaComThis(global)
comaparaComThis(obj)

let comaparaComThisArrow = param => console.log(this === param)
comaparaComThisArrow(global)
comaparaComThisArrow(this)
comaparaComThisArrow(module.exports)

comaparaComThisArrow = comaparaComThisArrow.bind(obj)
comaparaComThisArrow(obj)