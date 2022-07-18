import Head from "next/head";
import Image from "next/image";
import { gql } from "graphql-request";

import hygraph from "../util/hygraph";
import { Post } from "../models";
import { PostCard } from "../components";

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Blog | Anindya Dey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Namaste World! 🙏</h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {posts.map((post: Post, index: number) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
}

const QUERY = gql`
  {
    posts {
      slug
      title
      excerpt
      author {
        name
      }
      publishedAt
      categories {
        slug
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await hygraph.request(QUERY);

  return {
    props: {
      posts,
    },
  };
}
