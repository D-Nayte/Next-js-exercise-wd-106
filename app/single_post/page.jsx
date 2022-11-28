import React from "react";
import Post from "../../components/Post";
import { getPostWithId1 } from "../../lib/API-Posts";

async function page() {
  const data = await getPostWithId1();

  return (
    <>
      <Post post={data} />
    </>
  );
}

export default page;
