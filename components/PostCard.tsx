import React from "react";
import { Post } from "../models";

export default function PostCard({ post }: { post: Post }) {
  return (
    <>
      <a
        href="https://nextjs.org/docs"
        className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
      >
        <h3 className="text-2xl font-bold">{post.title}</h3>
        <h5 className="mt-2 text-sm text-gray-500">
          {new Date(post.publishedAt).toLocaleDateString("en-gb", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "utc",
          })}
        </h5>
        <p className="mt-4 text-xl">{post.excerpt}</p>
        <div className="mt-6">
          {post.categories.map(({ slug }, index) => (
            <span
              key={index}
              className="mr-4 bg-blue-100 px-4 py-2 text-sm text-gray-600 rounded-md"
            >
              {slug}
            </span>
          ))}
        </div>
      </a>
    </>
  );
}
