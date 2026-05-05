import Post from "../Post/Post"
import styles from "./Posts.module.css"

function Posts({ posts }) {
  return (
    <>
      <h2 className={styles.heading}>Blog Posts</h2>
      <ul className={styles.posts}>
        {posts.map(({ title, id, body }) => (
          <Post key={id} title={title} body={body} id={id} />
        ))}
      </ul>
    </>
  )
}

export default Posts
