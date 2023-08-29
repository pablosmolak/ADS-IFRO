import Botao from "../Botao"
import style from "./style.module.css"
import { useState, useEffect } from "react"

export default function Pesquisa() {

    const [pesquisa, setPesquisa] = useState(true)


    useEffect(() => {
        if(pesquisa ==  true || pesquisa == false){
            setTimeout(()=>{
                setPesquisa()
            }, 1000)
        }
    },[pesquisa])

    return(
        <>
            <div className={style.pesquisa}>
                {pesquisa != true && pesquisa != false? 
                    <div className={style.pesquisa_card}>

                        <p className={style.card_titulo}>Esse Conteúdo foi útil?</p>

                        <div className={style.pesquisa_form}>
                            <Botao style={{color:'#0cf249', 'border-color':'#0cf249', width: "90px"}} onClick={e => setPesquisa(true)}>😄Sim!</Botao>         
                            <Botao style={{color:'#cf0606', 'border-color':'#cf0606', width: "90px"}} onClick={e => setPesquisa(false)}>🙁Não!</Botao>
                        </div>

                    </div>

                    :
                
                    <div className={style.pesquisa_card}>
                        <div className={style.card_agradecimento}>
                            <p className={style.card_titulo}>Obrigado!</p>
                            <p className={style.card_texto}>Sua opinião é muito importante para melhorarmos a qualidade de nossos conteúdos!</p>
                        </div>
                        
                    </div>
                }
            </div>
        </>
    )
}