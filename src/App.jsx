import { BrowserRouter as Router, Routes, Route } from "react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Home from "./pages/Home"
import Blog from "./pages/Blog"

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
