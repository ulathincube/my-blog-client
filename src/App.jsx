import { BrowserRouter as Router, Routes, Route } from "react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useEffect } from "react"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Login from "./pages/Login"
import Register from "./pages/Register"
import BlogPost from "./pages/BlogPost"
import Dashboard from "./pages/Dashboard"
import useToken from "./hooks/useToken"

function App() {
  const queryClient = new QueryClient()

  // continue from here!
  const [token, setToken] = useToken()
  console.log(token, setToken)

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
