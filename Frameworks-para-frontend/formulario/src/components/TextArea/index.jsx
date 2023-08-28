import styles from "./styles.module.css"
export default function TextArea({id, nome, linhas, change, colunas, placeholder, ...props}){
    return(
        <>
            <textarea className={styles.textarea} 
                      id={id} name={nome} 
                      rows={linhas} 
                      cols={colunas} 
                      placeholder={placeholder}
                      onChange={change} 
                      {...props}
            />
        </>
    )
}