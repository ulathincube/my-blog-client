function SinglePost({ post }) {
  return (
    <section>
      <h1>{post.title}</h1>
      <h2>{post.author.name}</h2>
      <p>{post.createdAt}</p>
      <p>{post.body}</p>
    </section>
  )
}

export default SinglePost
