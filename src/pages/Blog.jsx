import { useQuery } from "@tanstack/react-query"
import { getPublishedPosts } from "../services/posts"
import Posts from "../components/Posts/Posts"
import Header from "../components/Header/Header"
import Post from "../components/Post/Post"
import Loading from "../components/Loading/Loading"
import Error from "../components/Error/Error"
import Footer from "../components/Footer/Footer"

function Blog() {
  const { data, error, isError, isPending } = useQuery({
    queryKey: ["posts"],
    queryFn: getPublishedPosts,
  })

  if (isPending) return <Loading />
  if (isError) return <Error message={error.message} />

  const { data: posts } = data

  return (
    <>
      <Header />
      <Posts posts={posts} />
      <Footer />
    </>
  )
}

export default Blog
