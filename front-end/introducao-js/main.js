let aluno = {
    matricula: 1,
    nome: "marco andrade",
    cpf: "256.555.123-25",
    ativo: true

}

console.log(typeof(aluno))
console.log(aluno.nome)
aluno.nome = "pablo smolak"
console.log(aluno.nome)
console.log(`Nome: ${aluno.nome}`)
console.log(`CPF: ${aluno.cpf}`)