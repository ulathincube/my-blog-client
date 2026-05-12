import styles from "./SinglePost.module.css"

function SinglePost({ post }) {
  const linesOfText = post.body.split("\n\n")
  const formattedDate = new Date(post.createdAt).toDateString()
  return (
    <section className={styles.post}>
      <article className={styles.details}>
        <h1 className={styles.title}>{post.title}</h1>
        <figure className={styles.profile}>
          <div className={styles.avatar}>
            {/* <img src="./" className={styles.img} /> */}
          </div>
          <figcaption className={styles.author}>{post.author.name}</figcaption>
        </figure>
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
