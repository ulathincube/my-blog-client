import { useEffect, useState } from "react"
import TokenContext from "../store/tokenContext"

function useToken() {
  const [token, setToken] = useState(() => {
    const storedToken = window.localStorage.getItem("token")
    return storedToken ? JSON.parse(storedToken) : null
  })

  useEffect(() => {
    window.localStorage.setItem("token", JSON.stringify(token))
  }, [token])

  return [token, setToken]
}

export default useToken
