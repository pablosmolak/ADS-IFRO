import Cabecalho from "@/components/Cabecalho"
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function EventosHome(){
   
    const [evento, setEventos] = useState({})

    const router = useRouter()

    useEffect(() => {

        if(router.query.id){
            axios.get(`http://localhost:3010/eventos/${router.query.id}`)
                .then(result => setEventos(result.data))
        }

    }, [router])
   
    return(
        <>
            <Cabecalho titulo="Plataforma de Eventos"/>
            <h1>Detalhe do Evento</h1>
            <h2>{`Evento: ${evento.titulo}`}</h2>
            <p>{`Descrição: ${evento.descricao}` }</p>

        </>
    )
}