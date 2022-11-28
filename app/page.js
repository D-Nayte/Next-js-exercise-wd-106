import Link from "next/link";
import React from "react";
import LinkToPost from "../components/LinkToPost";
import { getPosts } from "../lib/API-Posts";

// before continuing, create a "[post]" folder inside "app" and a "page.js" inside your "[post]"
//"page.js" should return a page component
//ATTENTION! your "page.js" inside "[post]" receives by default props. Pls log out them to work with your query
// get a id from your "props"
// use the custom fetch function inside "lib/API-Posts.js" to fetch a specific post with your id.
// import the "Post" component from /components and pass down your received data as "post"

async function Blogposts() {
  const posts = await getPosts(); // use "getPosts()" inside /lib/API-Posts.js to fetch all data

  return (
    <ul className="posts-wrapper">
      {/* -Loop over the "posts" and create for each "post" inside "posts" a list item
              - list item contains a next.js "Link" wrapping a <LinkToPost /> component from the components folder
              - the "Link" needs a href and it should point to a dynamic route using the id property from a "posts" entry
              - pass down to "LinkToPost" a "post" prop as "post"
          */}
      {posts &&
        posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post?id=${post.id}`}>
              <LinkToPost post={post} />
            </Link>
          </li>
        ))}
    </ul>
  );
}

export default Blogposts;
