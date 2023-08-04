import Link from "next/link"
import styles from "./styles.module.css"

export default function Cards({titulo, imagem, alt_imagem, texto, link}){
    return(
        <>
            <div className={styles.card}>
                <div className={styles.cabecalho}>
                    <h2 className={styles.cabecalho_titulo}>{titulo}</h2>
                    <img src={imagem} alt={alt_imagem} className={styles.cabecalho_imagem}/>
                </div>
                <p className={styles.texto}>{texto}</p>
                <Link href={link} className={styles.botao}>Saiba Mais</Link>
            </div>
        </>
    )

}