import styles from "./Post.module.css"

function Post({ title, body }) {
  return (
    <section className={styles.post}>
      <h3>{title}</h3>
      <p>{body}</p>
    </section>
  )
}

export default Post
