const apiUrl = "/api/posts"

export async function getPublishedPosts() {
  try {
    const response = await fetch(`${apiUrl}/published`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) throw new Error("Failed to get posts!")
    return await response.json()
  } catch (error) {
    if (error) throw error
  }
}
