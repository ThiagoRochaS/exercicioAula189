function getInteiroAleartorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleartorioEntre(-1, 10)
    console.log(`Opcao escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')