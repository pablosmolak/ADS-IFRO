import styles from "./styles.module.css"
export default function TextArea({id, nome, linhas, colunas, placeholder}){
    return(
        <>
            <textarea className={styles.textarea} id={id} name={nome} rows={linhas}cols={colunas} placeholder={placeholder}/>
        </>
    )
}