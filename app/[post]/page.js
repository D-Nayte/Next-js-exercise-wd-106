import Link from "next/link";
import React from "react";
import Post from "../../components/Post";
import { getPosts } from "../../lib/API-Posts";

async function postPage({ searchParams, params }) {
  const { post } = params;
  const { id } = searchParams;
  const userPost = await getPosts(id);

  if (post !== "post")
    return (
      <h1>
        PLs go back to <Link href="/">Homepage</Link>{" "}
      </h1>
    );

  return <Post post={userPost} />;
}

export default postPage;
