import Head from "next/head";

import { Post, PostWidget, Categories } from "../components";

const posts = [
  {
    title: "React Testing",
    excerpt: "Learn React testing",
  },
  {
    title: "React with Tailwind",
    excerpt: "Learn React with TailwindCSS",
  },
];

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <Head>
          <title>Anindya | Blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
