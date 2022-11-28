import Link from "next/link";
import React from "react";
import LinkToPost from "../components/LinkToPost";
import { getAllPosts, getPosts, getPostWithId1 } from "../lib/API-Posts";

async function Blogposts() {
  const posts = await getAllPosts();
  return (
    <ul className="posts-wrapper">
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
