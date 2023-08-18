import Button from "@/components/Button"
import Label from "@/components/Label"
import styles from "./styles.module.css"
import { useState } from "react"
import Cabecalho from "@/components/Cabecalho"
import Input from "@/components/Input"
import InputLabel from "@/components/InputLabel"
import InputRadio from "@/components/InputRadio"

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
                <Cabecalho titulo="Inscrição"/>        
                <div className={styles.conteudo}>
                    <form onSubmit={e => enviar(e)}>
                        <InputLabel texto="Nome:" 
                                    forhtml="nome"
                                    tipo="text" 
                                    placeholder="Ex.: Maria de Oliveira"
                                    id="nome" 
                                    valor={nome} 
                                    change={e => setNome(e.target.value)}
                        />
                        <InputLabel texto="E-mail:" forhtml="email"
                                    tipo="email" 
                                    placeholder="Ex.: maria.oliveira@gmail.com"
                                    id="email" 
                                    valor={email} 
                                    change={e => setEmail(e.target.value)}
                        />

                        <InputRadio nome="sexo"></InputRadio>
                        <Input tipo="radio" nome="sexo"></Input>
                    
                        <div>
                            <Label texto="Sexo:" forhtml="sexo"/>
                        </div>
                    <Button value="Realizar Inscrição"/>
                    </form>  
                </div> 
            </div>
        </>
    )
}