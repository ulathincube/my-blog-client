import { Link } from "react-router"
import styles from "./Intro.module.css"

function Intro() {
  return (
    <section className={styles.intro}>
      <h1 className={styles.heading}>
        Hi, I'm <strong className={styles.name}>Ulathi W Ncube,</strong>
      </h1>
      <p className={styles.desc}>A fullstack web developer</p>
      <div className={styles.sublink}>
        <Link className={styles.link} to="/blog">
          Learn More
        </Link>
      </div>
    </section>
  )
}

export default Intro
