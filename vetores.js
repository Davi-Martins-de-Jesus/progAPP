// Criando um vetor vazio
let nomes = []

// Inserir um nome no vetor 
nomes.push("Cleitosbaldo")

// Mostrar um nome no vetor 
console.log(nomes[0])

// Criando vetor já preenchido
let jogos = ["GTA VI", "Among us", "Free Fire", "Roblox"]
let meuJogo = ("Roblox")
let existe = false

for (let i = 0; i < jogos.length; i++) {
    if (jogos[i] == meuJogo) {
        existe = true
        break

    }


}


if (existe == true) {
    console.log("Jogo já existe na lista")
}
else {
    jogos.push(meuJogo)
}
console.log(jogos)

// Remover item de uma posição especifica 
jogos.splice(3.1)

console.log(jogos)