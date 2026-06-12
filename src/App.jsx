import { BrowserRouter as Router, Routes, Route } from "react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Login from "./pages/Login"
import Register from "./pages/Register"
import BlogPost from "./pages/BlogPost"
import TokenContext from "./store/tokenContext"
import { useState } from "react"

function App() {
  const queryClient = new QueryClient()

  // continue from here!
  const [token, setToken] = useState(null)

  const onChangeToken = (newToken) => setToken(newToken)

  return (
    <TokenContext value={[token, onChangeToken]}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<BlogPost />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </TokenContext>
  )
}

export default App
