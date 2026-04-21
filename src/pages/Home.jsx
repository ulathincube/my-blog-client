import useToken from "../hooks/useToken"

function Home() {
  const [, onChangeToken] = useToken()

  const logOutHandler = () => onChangeToken(null)

  return (
    <>
      <h1>Hey there!</h1>
      <button onClick={logOutHandler}>Log Out</button>
    </>
  )
}

export default Home
