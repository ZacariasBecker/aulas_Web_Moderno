{ 
    { 
        { 
            { 
                var sera = "Será ???" 
            } 
        }    
    }
}

// var consegue ser lido fora do escopo

console.log(sera)

function teste(){
    var local = 123
}

// console.log(local) não dá pra ler