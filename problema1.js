//Deve ser usado o arquivo stdin para o input dos valores

const input = require("fs").readFileSync("stdin", "utf8")

var valores = input.split("\n")
var N = valores[0]

for (i = 1; i <= N; i++) {

    [F1, F2] = valores[i].split(" ")

    if (F1 >= F2) {
        maior = F1
        menor = F2
    } else {
        maior = F2
        menor = F1
    }

    var resto

    do {
        resto = maior % menor

        maior = menor
        menor = resto

    } while (resto != 0);

    console.log(maior)
}

