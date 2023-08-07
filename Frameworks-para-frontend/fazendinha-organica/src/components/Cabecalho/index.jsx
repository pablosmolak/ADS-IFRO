import Link from "next/link"
import styles from "./styles.module.css"

export default function Cabecalho(){
    return(
        <>
            <header className={styles.cabecalho}>
                <ul className={styles.cabecalho_botao}>
                    <li ><Link href="/" className={styles.cabecalho_link}>Início</Link></li>
                    <li><Link href="/" className={styles.cabecalho_link}>Produtos</Link></li>
                    <li><Link href="/" className={styles.cabecalho_link}>Quem Somos</Link></li>
                </ul>
            </header>
        </>
    )
}