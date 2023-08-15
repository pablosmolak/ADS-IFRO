import Button from "@/components/Button"
import Label from "@/components/Label"
import styles from "./styles.module.css"
import { useState } from "react"

export default function Forms(){
    const [nome, setNome] = useState("Pablo")
    const [email, setEmail] = useState("Pablosmolak@gmail.com")

    function enviar(e){
        e.preventDefault()
        console.log(`Nome: ${nome}!`)
        console.log(`E-mail: ${email}!`)
    }
    return(
        
        <>
            <div className={styles.page}>
                <h1>Formulário:</h1>
                <p>Olá, {nome}!</p>
                <p>Seu email é: {email}!</p>    
                <form onSubmit={e => enviar(e)}>
                    <div>
                        <Label texto="Nome:" forhtml="nome"/>
                        <input type="text" 
                            id="nome"
                            value={nome}
                            onChange={e => setNome(e.target.value)}/>
                    </div>
                    <div>
                        <Label texto="E-mail:" forhtml="email"/>
                        <input type="email" 
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}/>
                    </div>
                <Button value="Enviar"/>
                </form>  
            </div> 
        </>
    )
}