// (percorre um array) map gera um array de mesmo tamanho com os dados transformados

const nums = [1, 2, 3, 4, 5]

let nums2 = nums.map(e => e * 2)

console.log(nums2)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

let nums3 = nums.map(e => soma10(e))
let nums4 = nums.map(e => triplo(e))
let nums5 = nums.map(e => paraDinheiro(e))

console.log(nums3)
console.log(nums4)
console.log(nums5)

console.log('\n==================================================\n')

nums5 = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(nums5)