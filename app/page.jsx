import Link from "next/link";
import React from "react";
import LinkToPost from "../components/LinkToPost";
import { getAllPosts, getPosts, getPostWithId1 } from "../lib/API-Posts";

async function Blogposts() {
  return (
    <ul className="posts-wrapper">
      <li>
        <Link href="/new_page"> New Page</Link>
      </li>
    </ul>
  );
}

export default Blogposts;
