console.log('01)','1' == 1)
console.log('02)','1' === 1)
console.log('03)','1' != 1)
console.log('04)','1' !== 1)

console.log('------------')

const d1 = new Date(0)
const d2 = new Date(0)

console.log('5)',d1 == d2)  //false pq está comparando os endereços de memoria
console.log('6)',d1 === d2) //false pq está comparando os endereços de memoria

console.log('7',d1.valueOf == d2.valueOf)
console.log('8)',d1.getTime == d2.getTime)

console.log('------------')

console.log('9)', undefined == null)
console.log('9)', undefined === null)