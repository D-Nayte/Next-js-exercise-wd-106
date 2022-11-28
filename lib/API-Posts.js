export async function getPostWithId1() {
  const url = `https://jsonplaceholder.typicode.com/posts/1`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export async function getAllPosts() {
  let url = "https://jsonplaceholder.typicode.com/posts";

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export async function getSpecificPost(id) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}
