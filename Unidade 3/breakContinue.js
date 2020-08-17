const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) { // se fosse === não iria parar
    if (x == 5) {
        break  // break só atua em while, for e switch
    }
    console.log(`${x}= ${nums[x]}`)
}

console.log('-----------------')

for (y in nums) {
    if (y == 5) {
        console.log('Perceba que ele pulou o indice 5')
        continue  // break só atua em while ou for        
    }
    console.log(`${y}= ${nums[y]}`)
}

externo: for(a in nums){  //para quebrar usar o for de fora
    for (b in nums){      //codigo mal vistos
        if(a==2 && b==3) break externo
        console.log(`a= ${a}, b= ${b}`)
    }
}