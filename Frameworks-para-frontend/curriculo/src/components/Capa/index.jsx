import styles from "./styles.module.css"

export default function Capa(){
    return(
        <>
            <div className={styles.cabecalho}>
                <img src="/perfil_cortado.JPG" alt="Foto de perfil de Pablo Smolak" className={styles.perfil}/>
                <h1 className={styles.titulo}>Pablo Smolak</h1>
                <div class={styles.redessociais}>
                    <a href="https://github.com/pablosmolak" target="_blank"><img src="/icon_github.svg" alt="Ícone do GitHub" /></a>
                    <a href="https://gitlab.fslab.dev/PabloSmolak" target="_blank"><img src="/icon_gitlab.svg" alt="Ícone do GitLab"/></a>
                    <a href="https://www.linkedin.com/in/pablosmolak/" target="_blank"><img src="/icon_linkedin.svg" alt="Ícone do LinkedIn"/></a>
                    <a href="https://www.instagram.com/pablosmolak/" target="_blank"><img src="/icon_insta.svg" alt="Ícone do Instagram"/></a>
                </div>
            </div>   
        </>
    )
}