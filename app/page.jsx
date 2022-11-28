import Link from "next/link";
import React from "react";
import LinkToPost from "../components/LinkToPost";
import { getAllPosts, getPosts, getPostWithId1 } from "../lib/API-Posts";

async function Blogposts() {
  const singlePost = await getPostWithId1();
  return (
    <ul className="posts-wrapper">
      <li>
        <Link href="/single_post">
          <LinkToPost post={singlePost} />
        </Link>
      </li>
    </ul>
  );
}

export default Blogposts;
