import { useContext } from "react"
import TokenContext from "../store/tokenContext"

function useAuth() {
  const authToken = useContext(TokenContext)
  return authToken
}

export default useAuth
