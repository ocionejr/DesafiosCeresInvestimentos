//Deve ser usado o arquivo stdin2 para o input dos valores

const input = require("fs").readFileSync("stdin2", "utf8")

var valores = input.split("\n")
var N = valores[0]
var posicao = 1

for (i = 1; i <= N; i++) {
    var qtdProdutos = valores[posicao]
    var M = []
    var compra = []

    for (j = 0; j < qtdProdutos; j++) {

        produto = valores[posicao += 1].split(" ")

        M[j] = {
            nome: produto[0],
            valor: produto[1]
        }
    }

    var P = valores[posicao += 1]

    for (j = 0; j < P; j++) {

        produto = valores[posicao += 1].split(" ")

        compra[j] = {
            nome: produto[0],
            quantidade: produto[1]
        }
    }

    var valorTotal = 0

    compra.forEach((produtoComprado) => {

        M.forEach((produtoAVenda) => {

            if (produtoAVenda.nome == produtoComprado.nome) {
                valorTotal += produtoComprado.quantidade * produtoAVenda.valor

                return false //apenas para parar o foreach
            }
        })
    })

    console.log("R$ " + valorTotal.toFixed(2))

    posicao += 1
}




