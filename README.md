const prompt = require("prompt-sync")()
let jogos = []

while (true) {
    console.log("\n1 - Cadastrar um jogo")
    console.log("2 - Excluir um jogo")
    console.log("3 - Ver a lista de jogos")
    console.log("4 - Editar um jogo")
    console.log("5 - SAIR")

    let opcao = parseInt(prompt("Digite sua opção: "))

    if (opcao == 5) {
        console.log("Saindo do sistema")
        break
    } else if (opcao == 1) {
        let nome = prompt("Digite o nome do jogo que você quer cadastrar: ")
        jogos.push(nome)
        console.log("Jogo cadastrado com sucesso")
    } else if (opcao == 2) {
        console.log(jogos)
        let nome = prompt("Digite o nome do jogo que você quer remover: ")

        let removido = false
        for (let i = 0; i < jogos.length; i++) {
            if (jogos[i] === nome) {
                jogos.splice(i, 1)
                console.log("Jogo excluído com sucesso")
                removido = true
                break
            }
        }
        if (!removido) {
            console.log("Jogo não encontrado.")
        }

    } else if (opcao == 3) {
        console.log("Lista de jogos:", jogos)
    
    } else if (opcao == 4) {
        console.log(jogos)
        let nomeAntigo = prompt("Digite o nome do jogo que você quer editar: ")
        let encontrado = false

        for (let i = 0; i < jogos.length; i++) {
            if (jogos[i] === nomeAntigo) {
                let nomeNovo = prompt("Digite o novo nome do jogo: ")
                jogos[i] = nomeNovo
                console.log("Jogo editado com sucesso!")
                encontrado = true
                break
            }
        }

        if (!encontrado) {
            console.log("Jogo não encontrado.")
        }
    } else {
        console.log("Opção inválida. Tente novamente.")
    }
}
