import React from "react";
import { Post } from "../models";
import Image from "next/image";

export default function PostCard({ post }: { post: Post }) {
  return (
    <>
      <div className="max-w-2xl min-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">
            {new Date(post.publishedAt).toLocaleDateString("en-gb", {
              year: "numeric",
              month: "long",
              day: "numeric",
              timeZone: "utc",
            })}
          </span>
          {post.categories.map(({ slug }, index) => (
            <a
              key={index}
              className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
            >
              {slug}
            </a>
          ))}
        </div>

        <div className="mt-2">
          <a
            href="#"
            className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
          >
            {post.title}
          </a>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {post.excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Read more &rarr;
          </a>

          <div className="flex items-center">
            <Image
              className="object-cover rounded-full sm:block"
              src={post.author.photo.url}
              alt="avatar"
              width={40}
              height={40}
            />
            <a className="font-bold text-gray-700 ml-4 cursor-pointer dark:text-gray-200">
              { post.author.name }
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
