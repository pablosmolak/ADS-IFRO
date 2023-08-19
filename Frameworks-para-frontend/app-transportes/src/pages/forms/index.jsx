import Button from "@/components/Button"
import Label from "@/components/Label"
import styles from "./styles.module.css"
import { useState } from "react"
import Cabecalho from "@/components/Cabecalho"
import Input from "@/components/Input"
import InputLabel from "@/components/InputLabel"
import InputRadio from "@/components/InputRadio"
import TextArea from "@/components/TextArea"

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
                        <div>
                            <Label texto="Sexo:" forhtml="sexo"/>
                            <div>
                                <InputRadio nome="sexo" valor="masculino" id="masc" checked></InputRadio>
                                <Label texto="Masculino" forhtml="masc"/>
                            </div>

                            <div>
                                <InputRadio nome="sexo" valor="feminino" id="fem" ></InputRadio>
                                <Label texto="Feminino" forhtml="fem"/>
                            </div>
                           
                        </div>

                        <div>
                            <Label texto="Descreva o atendimento especial:" forhtml="atendimentoEspecial"/>
                            <TextArea placeholder="Digite a observação aqui!"/>
                        </div>

                    <Button value="Realizar Inscrição"/>
                    </form>  
                </div> 
            </div>
        </>
    )
}