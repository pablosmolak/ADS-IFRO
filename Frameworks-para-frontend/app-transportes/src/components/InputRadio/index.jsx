import styles from "./styles.module.css"
export default function InputRadio({nome,valor,change, id}){
    return(
        <>
            <input className={styles.inputradio}
                   name={nome}
                   type="radio"
                   id={id}
                   value={valor}
                   onChange={change}
            />
        </>
    )
}