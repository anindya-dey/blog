import React from "react";
import Link from "next/link";
import moment from 'moment';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-cover absolute h-80 w-full shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="text-3xl font-semibold text-center hover:text-blue-700 transition duration-500 mb-8">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div>
        <div className="flex items-center justify-center mb-4">
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
          <span>
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
