import React from "react";

const Post = ({ post }) => {
  return (
    <>
      <h1>{post.title}</h1>
      <div>{post.excerpt}</div>
    </>
  );
};

export default Post;
