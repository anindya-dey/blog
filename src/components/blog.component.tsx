import { PostCard } from "@/types/post-card.type";
import Image from "next/image";

interface IBlogProps {
  postCards: PostCard[];
}

export default function Blog({ postCards }: IBlogProps) {
  return (
    <>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 md:w-9/12 lg:w-10/12 mx-auto">
        {postCards?.map((post, index) => (
          <article
            key={index}
            className="overflow-hidden rounded-lg shadow transition duration-300 hover:shadow-lg dark:shadow-gray-700/25 group"
          >
            <Image
              alt="Office"
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
              width={100}
              height={100}
            />

            <div className="bg-white p-4 dark:bg-gray-900 sm:p-6">
              <time
                dateTime={post.date}
                className="block text-xs text-gray-500 dark:text-gray-400"
              >
                {post.date}
              </time>

              <a href={`/posts/${post.slug}`}>
                <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
                  {post.title}
                </h3>
              </a>

              <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400">
                {post.excerpt}
              </p>
              <div className="mt-4 flex flex-wrap gap-1">
                {
                  post.tags?.map((tag, index) => (
                  <span key={index} className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100">
                    {tag}
                  </span>
                  ))
                }
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
