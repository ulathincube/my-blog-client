import styles from "./Footer.module.css"
import { Link } from "react-router"

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="/" className={styles.home}>
        <div className={styles.logo}>Ulathi</div>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link className={styles.link} to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
