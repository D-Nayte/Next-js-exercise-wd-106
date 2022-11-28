export async function getPosts(id = false) {
  let url = "https://jsonplaceholder.typicode.com/posts";
  if (id) url = `https://jsonplaceholder.typicode.com/posts/${id}`;

  const res = await fetch(url);
  const data = await res.json();
  return data;
}
