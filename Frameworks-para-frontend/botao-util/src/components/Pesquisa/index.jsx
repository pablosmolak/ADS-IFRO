import Botao from "../Botao"
import style from "./style.module.css"
import { useState } from "react"

export default function Pesquisa() {

    const [pesquisa, setPesquisa] = useState("")

    function enviar(e){
        e.preventDefault()
        console.log(`teste: ${pesquisa}!`)
    }

    return(
        <>
            <div className={style.pesquisa}>
                {pesquisa == "" ? 
                    <div className={style.pesquisa_card}>

                        <p className={style.card_titulo}>Esse Conteúdo foi útil?</p>

                        <form onSubmit={e => enviar(e)} className={style.pesquisa_form}>
                            <Botao style={{color:'#0cf249', 'border-color':'#0cf249', width: "90px"}} onClick={e => setPesquisa("Sim")}>😄Sim!</Botao>         
                            <Botao style={{color:'#cf0606', 'border-color':'#cf0606', width: "90px"}} onClick={e => setPesquisa("Não")}>🙁Não!</Botao>
                        </form>

                    </div>

                    :
                
                    <div className={style.pesquisa_card}>
                        <div className={style.card_texto}>
                            <p className={style.card_titulo}>Obrigado!</p>
                            <p className={style.card_texto}>Sua opinião é muito importante para melhorarmos a qualidade de nossos conteúdos!</p>
                        </div>
                        
                    </div>
                }
            </div>
        </>
    )
}