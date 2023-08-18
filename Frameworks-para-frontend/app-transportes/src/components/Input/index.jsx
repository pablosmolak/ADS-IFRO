import styles from "./styles.module.css"
export default function Input({placeholder, tipo,id,email,change, nome}){
    return(
        <>
            <input className={styles.input}
                   placeholder={placeholder}
                   name={nome}
                   type={tipo}
                   id={id}
                   value={email}
                   onChange={change}
            />

        </>
    )
}