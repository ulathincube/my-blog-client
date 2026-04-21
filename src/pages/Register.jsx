import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { registerUser } from "../services/user"

function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const registerMutation = useMutation({
    mutationFn: ({ email, password, name }) =>
      registerUser(name, email, password),
    onError: ({ error }) => {
      console.log(error.message)
    },
    onSuccess: ({ data, error }) => {
      if (error) throw new Error(error)
      console.log(data)
    },
  })

  const onNameChange = ({ target }) => setName(target.value)
  const onEmailChange = ({ target }) => setEmail(target.value)
  const onPasswordChange = ({ target }) => setPassword(target.value)

  const onFormSubmit = (event) => {
    event.preventDefault()
    registerMutation.mutate({ email, password, name })
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={onNameChange} />
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onEmailChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onPasswordChange}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  )
}

export default Register
