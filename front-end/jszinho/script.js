const formulario = document.querySelector("#formulario")
const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const curso = document.querySelector("#curso")
const atendimento = document.querySelector("#atendimento")
const termos = document.querySelector("#termos")

formulario.addEventListener("submit", e => {
    e.preventDefault()
    
    
    adcionarvalor(nome.value, email.value, curso.value, atendimento.value, termos.checked)

    imprimir()
})

let arrayObjeto = []

function adcionarvalor(nome, email, curso, atendimento, termos){

    const inscricao = {
        nome: nome,
        email: email,
        curso: curso,
        atendimento: atendimento,
        termos: termos
    }

    arrayObjeto.push(inscricao)
}

function imprimir(){
    console.table(arrayObjeto)
    
    nome.value = ""
    email.value = ""
    atendimento.value = ""
    curso.selectedIndex = 0 // seleciona o primeiro item da lista
    termos.checked = false
    nome.focus();

}