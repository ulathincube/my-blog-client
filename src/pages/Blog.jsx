import { useQuery } from "@tanstack/react-query"
import { getPublishedPosts } from "../services/posts"
import Posts from "../components/Posts"
import Post from "../components/Post"

function Blog() {
  const { data, error, isError, isPending } = useQuery({
    queryKey: ["posts"],
    queryFn: getPublishedPosts,
  })

  if (isPending) return <div>Pending...</div>
  if (isError) return <div>Error!!! {error.message}</div>

  const { data: posts } = data

  return (
    <>
      <h1>Hey!</h1>
      <Posts posts={posts} />
    </>
  )
}

export default Blog
