import Post from "../Post/Post"
import styles from "./Posts.module.css"
import { useState } from "react"

function Posts({ posts }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(4)

  const pages = []
  const pageCount = Math.ceil(posts.length / postsPerPage)

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage

  const myPosts = posts.slice(startIndex, endIndex)

  const onPreviousPage = () => {
    setCurrentPage(currentPage - 1)
  }

  const onNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Blog Posts</h2>
      <ul className={styles.posts}>
        {myPosts.map(({ title, id, body }) => (
          <Post key={id} title={title} body={body} id={id} />
        ))}
      </ul>
      <ul className={styles.controls}>
        <button
          className={styles.action}
          disabled={currentPage === 1}
          onClick={onPreviousPage}
        >
          Previous
        </button>
        <button
          className={styles.action}
          disabled={currentPage === pageCount}
          onClick={onNextPage}
        >
          Next
        </button>
      </ul>
    </section>
  )
}

export default Posts
