const obj = {
    a: 1.3,
    b: "2",
    c: '3',
    d: [{}, 5, 'k'],
    e: true,
    f: 'false',
    soma() { return a + b + c }
}


console.log(JSON.stringify(obj))

b = '{"a":1.3,"b":"2","c":"3","d":[{},5,"k"],"e":true,"f":"false"}'
console.log(JSON.parse(b))
