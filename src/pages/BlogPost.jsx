import { useParams } from "react-router"
import { useQuery } from "@tanstack/react-query"
import { getSinglePost } from "../services/posts"
import SinglePost from "../components/SinglePost/SinglePost"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

function BlogPost() {
  const { postId } = useParams()
  console.log(postId, typeof postId)

  const { data, error, isError, isPending } = useQuery({
    queryKey: ["posts", postId],
    queryFn: () => getSinglePost(postId),
  })

  if (isPending) return <div>Pending...</div>
  if (isError) return <div>Error!!! {error.message}</div>

  const { data: post } = data

  console.log(post)

  return (
    <>
      <Header />
      <SinglePost post={post} />
      <Footer />
    </>
  )
}

export default BlogPost
