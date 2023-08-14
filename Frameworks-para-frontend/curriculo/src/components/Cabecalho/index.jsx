import styles from "./styles.module.css"
export default function Cabecalho(){
    return(
        <>
            <nav>
                <ul className={styles.menu}>
                    <li className={styles.menu_botoes}>Inicio</li>
                    <li className={styles.menu_botoes}>Formação</li>
                    <li className={styles.menu_botoes}>Projetos</li>
                </ul>
            </nav>
        </>
    )
}