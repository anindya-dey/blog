import React from "react";
import Image from "next/image";
import { PostCardModel } from "../models";
import Link from "next/link";

export default function PostCard({ post }: { post: PostCardModel }) {
  return (
    <>
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-md shadow-black">
        <Image 
          src={post.coverImage.url}
          alt="Cover image for Blog card"
          height={post.coverImage.height}
          width={post.coverImage.width}
        />
        <div className="p-5 border border-t-0">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <Link
              href="/"
              className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
              aria-label="Category"
              title="traveling"
            >
              traveling
            </Link>
            <span className="text-gray-600">
              {" "}
              —{" "}
              {new Date(post.date).toLocaleDateString("en-us", {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "utc",
              })}
            </span>
          </p>
          <Link
            href="/"
            aria-label="Category"
            title="Visit the East"
            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            {post.title}
          </Link>
          <p className="mb-2 text-gray-700">
          {post.excerpt}
          </p>
          <Link
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more &rarr;
          </Link>
        </div>
      </div>
    </>
  );
}
