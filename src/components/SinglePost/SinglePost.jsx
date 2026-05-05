import styles from "./SinglePost.module.css"

function SinglePost({ post }) {
  const linesOfText = post.body.split("\n\n")
  const formattedDate = new Date(post.createdAt).toDateString()
  return (
    <section className={styles.post}>
      <article className={styles.details}>
        <h1 className={styles.title}>{post.title}</h1>
        <h2 className={styles.author}>{post.author.name}</h2>
        <p className={styles.date}>{formattedDate}</p>
      </article>
      <article className={styles.text}>
        {linesOfText.map((paragraph) => (
          <p key={paragraph} className={styles.body}>
            {paragraph}
          </p>
        ))}
      </article>
    </section>
  )
}

export default SinglePost
