import { Link } from "react-router"
import styles from "./Intro.module.css"

function Intro() {
  return (
    <section className={styles.intro}>
      <h1 className={styles.heading}>Hi, My name is Ulathi W Ncube</h1>
      <p className={styles.desc}>I'm a fullstack web developer</p>
      <Link className={styles.link} to="/blog">
        Show me some cool stuff!
      </Link>
    </section>
  )
}

export default Intro
