import Post from "./Post"
import styles from "./Posts.module.css"

function Posts({ posts }) {
  return (
    <ul className={styles.posts}>
      {posts.map(({ title, id, body }) => (
        <Post key={id} title={title} body={body} />
      ))}
    </ul>
  )
}

export default Posts
