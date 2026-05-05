import styles from "./Header.module.css"
import { Link } from "react-router"

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Ulathi</div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link className={styles.link} to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
