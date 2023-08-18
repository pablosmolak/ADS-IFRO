import Input from "../Input";
import Label from "../Label";
import styles from "./styles.module.css"

export default function InputLabel({texto, forhtml, tipo, placeholder, id, email, change}){
    return(
        <>
            <div className={styles.inputlabel}>
                <Label texto={texto} forhtml={forhtml}/>
                <Input tipo={tipo} placeholder={placeholder} id={id} valor={email} change={change}/>
            </div>
        </>
    )
}