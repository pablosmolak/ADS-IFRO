import Button from "@/components/Button"
import Label from "@/components/Label"
import styles from "./styles.module.css"
import { useState } from "react"
import Cabecalho from "@/components/Cabecalho"
import Input from "@/components/Input"
import InputLabel from "@/components/InputLabel"
import InputRadio from "@/components/InputRadio"
import TextArea from "@/components/TextArea"
import Select from "@/components/Select"
import Option from "@/components/Option"
import Checkbox from "@/components/Checkbox"


export default function Forms(){
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [sexo, setSexo] = useState("")
    const [curso, setCurso] = useState("")
    const [atendimento, setAtendimento] = useState("")
    

    function enviar(e){
        e.preventDefault()
        console.log(`Nome: ${nome}!`)
        console.log(`E-mail: ${email}!`)
        console.log(`Sexo: ${sexo}!`)
        console.log(`Curso: ${curso}!`)
        console.log(`Atendimento: ${atendimento}!`)
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
                        <section >
                            <Label texto="Sexo:" forhtml="sexo"/>
                            <div className={styles.radio}>
                                <div className={styles.radio_texto}>
                                    <InputRadio nome="sexo" valor="masculino" id="masc" change={e => setSexo(e.target.value)}></InputRadio>
                                    <Label texto="Masculino" forhtml="masc"/>
                                </div>

                                <div className={styles.radio_texto}>
                                    <InputRadio nome="sexo" valor="feminino" id="fem" change={e => setSexo(e.target.value)}></InputRadio>
                                    <Label texto="Feminino" forhtml="fem"/>
                                </div>
                            </div>
                            
                           
                        </section>
                            <Label htmlFor="curso" texto="Curso:"/>

                            <Select id="curso" style={{width: "100%"}} change={e => setCurso(e.target.value)}>
                                <Option valor="HTML e CSS">HTML e CSS</Option>
                                <Option valor="Javascript" selected >Javascript</Option>
                                <Option valor="Ruby" >Ruby</Option>
                                <Option valor="Git e Github">Git e Github</Option>
                                <Option valor="Typescript">Typescript</Option>
                                <Option valor="PHP">PHP</Option>
                                <Option valor="Java">Java</Option>
                            </Select>
                        <div>
                          
                        </div>

                        <div>
                            <Label texto="Descreva o atendimento especial:" forhtml="atendimentoEspecial"/>
                        <TextArea placeholder="Digite a observação aqui!" linhas="5" id="atendimentoEspecial" change={e => setAtendimento(e.target.value)} />
                        </div>

                        <div>
                            <Checkbox id="termos"/>
                            <Label forhtml="termos" texto="Estou de acordo com o termos de serviço"/>
                        </div>

                    <Button value="Realizar Inscrição" style={{width:"100%"}}/>
                    </form>  
                </div> 
            </div>
        </>
    )
}