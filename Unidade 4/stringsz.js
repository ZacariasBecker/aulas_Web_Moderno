const escola = "Cod3r"

console.log(escola)
console.log(escola.charAt(4)) //mostra o quarto caractere da string
console.log(escola.charAt())  // vazio seleciona o caractere 0
console.log(escola.charAt(5)) // se não tem, retorna null
console.log(escola.charCodeAt(3)) // mostra o codigo da tabla ASCII do caractere que está no indice 3, no caso o A
console.log(escola.indexOf("3")) // mostra a posição do caractere 3
console.log(escola.substring(1)) // começa a partir do caractere 1
console.log(escola.substring(0,3)) // começa a partir do caractere 0 e vai até o 3
console.log("Escola "+ 'Udemy ' + escola)
console.log("Escola ".concat("Udemy ").concat(escola))
console.log("10" + "10")
console.log("10" + 10)
console.log(10 - "10")
console.log(escola.replace(3,"e")) // troca o caracter da terceira posição pelo caractere 'e'
console.log("Daniel,Max,Fillipe".split(","))
console.log