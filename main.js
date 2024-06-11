let aleatorio = Math.floor(Math.random() * 101 + 100)
let entradaUser = "";
let tentativas = 3

//console.log("numero aleatorio: " + aleatorio)
console.log("adivinhe o numero de 100 a 200")

process.stdin.on("data", function (data) {
    entradaUser = Number(data.toString().trim().toLowerCase());

    if (entradaUser == aleatorio){
        console.log("parabens voce acertou o numero")
        process.exit()
    } else if(entradaUser == aleatorio - 1 || entradaUser == aleatorio + 1){
        console.log("MUITO PERTO")
        tentativas--
        console.log("voce tem " + tentativas + " tentativas")
    }else if (entradaUser > aleatorio) {
        console.log("mais baixo, tente novamente")
        tentativas--
        console.log("voce tem " + tentativas + " tentativas")
    } else if (entradaUser < aleatorio){
        console.log("mais alto, tente novamente")
        tentativas--
        console.log("voce tem " + tentativas + " tentativas")
    }
    if (tentativas == 0){
        console.log("o numero era: " + aleatorio)
        tentativas = 3
        console.log("voce tentou demais e o numero mudou, tente novamente")
        aleatorio = Math.floor(Math.random() * 101 + 100)
        
    }
})