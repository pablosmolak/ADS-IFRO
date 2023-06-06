let listaCompras = ["maça", "Banana", "pão", "milhou"]
console.log(listaCompras[2])

listaCompras[2] = "pao de doce"
console.log(listaCompras[2])

listaCompras.push("cafezinho")
console.log(listaCompras)

listaCompras.splice(1,0,"mamao")
console.log(listaCompras)

listaCompras.forEach(item => {
    console.log(`item: ${item}`)
})

const numeros = [11,22,33,44,55,66,77,88,99,111,70,80,90,100]

numeros.forEach(n => console.log(`Número: ${n}`))

numeros.forEach(n => {
    if (n % 2 ==0) console.log(`Números pares: ${n}`)  
})