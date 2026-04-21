const apiUrl = "/api/user"

export async function loginUser(email, password) {
  try {
    const response = await fetch(`${apiUrl}/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })

    const data = await response.json()
    console.log(data)

    return data
  } catch (error) {
    if (error) throw error
  }
}

export async function registerUser(name, email, password) {
  try {
    const response = await fetch(`${apiUrl}/register`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
        password,
      }),
    })

    return await response.json()
  } catch (error) {
    if (error) throw error
  }
}
