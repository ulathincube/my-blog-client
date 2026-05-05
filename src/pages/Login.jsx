import { loginUser } from "../services/user"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import useToken from "../hooks/useToken"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [token, setToken] = useToken()

  const loginMutation = useMutation({
    mutationFn: ({ email, password }) => loginUser(email, password),
    onSuccess: ({ data, error }) => {
      if (error) throw new Error(error)
      setToken(data)
    },
    onError: (error) => {
      console.log(error.message)
    },
  })

  const onEmailChange = ({ target }) => setEmail(target.value)
  const onPasswordChange = ({ target }) => setPassword(target.value)

  const onFormSubmit = async (event) => {
    event.preventDefault()
    loginMutation.mutate({ email, password })
  }

  console.log(token && token)

  return (
    <>
      <Header />
      <section>
        <form onSubmit={onFormSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={onEmailChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={onPasswordChange}
            />
          </div>
          <div>
            <button type="submit">Log In</button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  )
}

export default Login
