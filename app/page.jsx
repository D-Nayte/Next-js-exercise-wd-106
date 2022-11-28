import Link from "next/link";
import React from "react";
import LinkToPost from "../components/LinkToPost";
import { getAllPosts, getPosts, getPostWithId1 } from "../lib/API-Posts";

async function Blogposts() {
  const posts = await getAllPosts();
  const singlePost = await getPostWithId1();
  return (
    <ul className="posts-wrapper">
      <li>
        <Link href="/new_page"> New Page</Link>
      </li>
      <li>
        <Link href="/single_post">
          <LinkToPost post={singlePost} />
        </Link>
      </li>
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
