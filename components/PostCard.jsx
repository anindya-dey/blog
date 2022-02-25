import React from "react";
import Link from "next/link";
import moment from "moment";

const PostCard = ({ post }) => {
  return (
    <div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden pb-80 shadow-md">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="absolute h-80 w-full rounded-t-lg object-cover shadow-lg lg:rounded-lg"
        />
      </div>
      <h1 className="mb-8 text-center text-3xl font-semibold transition duration-500 hover:text-blue-700">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div>
        <div className="mb-4 flex items-center justify-center">
          <img
            src={post.author.photo.url}
            alt={post.author.name}
            height="50px"
            width="50px"
            className="rounded-full"
          />
          <p>{post.author.name}</p>
        </div>
        <div>
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
