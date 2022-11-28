import Link from "next/link";
import React from "react";

function Post({ post }) {
  return (
    <main className="post">
      <article>
        <h1>{post.title}</h1>
        <h2>User: {post.userId}</h2>
        <p>{post.body}</p>
        <Link className="back-btn" href={"/"}>
          Back to homepage
        </Link>
      </article>
    </main>
  );
}

export default Post;
