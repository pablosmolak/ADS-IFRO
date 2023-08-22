import styles from "./styles.module.css";

export default function Option({children, valor, ...props}) {
  return <option className={styles.option} value={valor} {...props}>{children}</option>
}