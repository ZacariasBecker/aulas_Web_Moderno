function chama() {
    interruptor = 1

    while (interruptor < 12) {
        console.log(`${interruptor}: Hello World!`)
        interruptor++
    }
}

chama()