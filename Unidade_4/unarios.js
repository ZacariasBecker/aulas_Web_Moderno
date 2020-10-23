let num0 = 5
let num1 = 1
let num2 = 2


num0++  //precedencia maior
++num0  //precedencia menor
console.log(num0)

num0--  //precedencia maior
--num0  //precedencia menor
console.log(num0)

console.log(++num1 === num2--)
console.log(num1 === num2)

num1 = 1
num2 = 2
console.log(++num1 === --num2)