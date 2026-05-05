import styles from "./Error.module.css"
import { Link } from "react-router"

function Error({ message }) {
  return (
    <section className={styles.error}>
      <h1 className={styles.heading}>Error</h1>
      <p className={styles.message}>{message}</p>
      <Link className={styles.link} to="/">
        Home
      </Link>
    </section>
  )
}

export default Error
