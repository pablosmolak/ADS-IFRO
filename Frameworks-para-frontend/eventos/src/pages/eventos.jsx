import { useState } from "react"
import styles from '@/styles/eventos.module.css'
import Cabecalho from "@/components/Cabecalho";
import InputLabel from "@/components/InputLabel";
import Label from "@/components/Label";
import InputRadio from "@/components/InputRadio";
import Select from "@/components/Select";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";
import axios from "axios";

export default function Eventos(){
    
    const [evento,setEvento] = useState({
        titulo: "",
        descricao: "",
        dataInicio: "",
        dataFim:"",
        local:""
    })

    function inserirEvento(e){
        e.preventDefault()
        console.log(evento)

        axios.post('http://localhost:3010/eventos',evento)
        .then(() => {
            alert('Evento Cadastrado com Sucesso!')
            limparCampos()
    })
        .catch(error => console.log(error))

    }

    function limparCampos(){
        setEvento({
            titulo: "",
            descricao: "",
            dataInicio: "",
            dataFim:"",
            local:""
        })
    }

   
    return(

        <>
            <Cabecalho titulo="Cadastrar Evento"/> 
            <div className={styles.page}>  
                <div><div className={styles.conteudo}>
                    <form onSubmit={e => inserirEvento(e)} className={styles.forms}>
                        <InputLabel texto="Titulo" 
                                    forhtml="titulo"
                                    tipo="text" 
                                    placeholder="Ex.: Workshop de Artesanato"
                                    id="titulo" 
                                    valor={evento.titulo} 
                                    change={e => setEvento({
                                        ...evento,
                                        titulo: e.target.value
                                    })}
                                    
                        />
                        <div>
                            <Label texto="Descrição" forhtml="descricao"/>
                            <TextArea linhas="2" 
                                      id="descricao" 
                                      valor={evento.descricao} 
                                      change={e => setEvento({
                                        ...evento,
                                        descricao: e.target.value
                                    })} />
                        </div>
                        <InputLabel texto="Data Inicio:" forhtml="datainicio"
                                    tipo="date" 
                                    id="datainicio" 
                                    valor={evento.dataInicio} 
                                    change={e => setEvento({
                                        ...evento,
                                        dataInicio: e.target.value
                                    })}
                        />
                        <InputLabel texto="Data Fim:" forhtml="datainicio"
                                    tipo="date" 
                                    id="datafim" 
                                    valor={evento.dataFim} 
                                    change={e => setEvento({
                                        ...evento,
                                        dataFim: e.target.value
                                    })}
                        />
                        <InputLabel texto="Local" 
                                    forhtml="local"
                                    tipo="text" 
                                    placeholder="Ex.: Feira livre"
                                    id="local" 
                                    valor={evento.local} 
                                    change={e => setEvento({
                                        ...evento,
                                        local: e.target.value
                                    })}
                        />
                            
                        

                       
                    <Button value="Realizar Inscrição" style={{width:"100%", backgroundColor: "#9845e6"}} />
                    </form>  
                </div> 
            </div>
          </div>
        </>
    )
}