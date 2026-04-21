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

export async function getSinglePost(postId) {
  try {
    const response = await fetch(`${apiUrl}/${postId}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) throw new Error("Failed to get post!")

    return await response.json()
  } catch (error) {
    if (error) throw error
  }
}

export async function createPost(post, token) {
  try {
    const response = await fetch(apiUrl, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(post),
    })

    return await response.json()
  } catch (error) {
    if (error) throw error
  }
}
