const jSimples = (capital, taxa, tempo) => capital * taxa * tempo

const jComposto = (capital, taxa, tempo) => capital * (Math.pow((1 + taxa), tempo))

console.log(jSimples(1000, 0.25, 1))
console.log(jComposto(2000, 0.04, 4))