import styles from "./Comments.module.css"
import useToken from "../../hooks/useToken"

function Comments({ comments }) {
  const createComment = (event) => {
    event.preventDefault()
  }

  const [token] = useToken()

  return (
    <article className={styles.comments}>
      <div>
        <h2 className={styles.heading}>Comments</h2>
      </div>
      <ul className={styles["comments-list"]}>
        {comments.map((commentObject) => (
          <li key={commentObject.id} className={styles.comment}>
            <h3 className={styles.name}>{commentObject.author.email}</h3>
            <p>{commentObject.body}</p>
          </li>
        ))}
      </ul>
      <form className={styles["create-comment"]} onSubmit={createComment}>
        <div className={styles.group}>
          <textarea className={styles["comment-box"]}></textarea>
        </div>
        <div className={styles.group}>
          <button className={styles.action}>Comment</button>
        </div>
      </form>
    </article>
  )
}

export default Comments
