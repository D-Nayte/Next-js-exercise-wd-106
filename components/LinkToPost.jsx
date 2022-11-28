import React from "react";

function LinkToPost({ post }) {
  return (
    <article className="posts-article">
      <h2>{post.title}</h2>
    </article>
  );
}

export default LinkToPost;
