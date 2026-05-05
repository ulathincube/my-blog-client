import styles from "./Post.module.css"
import { Link } from "react-router"

function Post({ title, body, id }) {
  const firstLineParagraph = body.split("\n\n")[0]
  return (
    <li className={styles.post}>
      <Link className={styles.link} to={`/blog/${id}`}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.body}>{firstLineParagraph}</p>
      </Link>
    </li>
  )
}

export default Post
