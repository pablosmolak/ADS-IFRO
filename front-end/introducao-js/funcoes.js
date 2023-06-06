function calcularMediaAritmetica(num1, num2) {
    return (num1 + num2) / 2
}

console.log(`Média Aritimética: ${calcularMediaAritmetica(10,5)}`)

const calcularMediaPonderada = (num1, num2) => {
    return (num1 * 0,7) + (num2 * 0.3)
}

console.log(`Média Ponderada: ${calcularMediaPonderada(10,5)}`)

const calcMedPond = (num1, num2) => (num1 *0.7) + (num2 *0.3)

console.log(`Média Ponderada Menor: ${calcMedPond(10,5)}`)