import Head from "next/head";
import { gql } from "graphql-request";

import hygraph from "../util/hygraph";
import { Post } from "../models";
import { PostCard , Footer } from "../components";

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <>
      <Head>
        <title>Blog | Anindya Dey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-6 space-y-6">
        {posts.map((post: Post, index: number) => (
          <PostCard key={index} post={post} />
        ))}

        {posts.map((post: Post, index: number) => (
          <PostCard key={index} post={post} />
        ))}

        {posts.map((post: Post, index: number) => (
          <PostCard key={index} post={post} />
        ))}

        {posts.map((post: Post, index: number) => (
          <PostCard key={index} post={post} />
        ))}
      </main>

      <Footer />
    </>
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
        photo {
          url
        }
      }
      publishedAt
      categories {
        slug
      }
    }
  }
`;

export async function getServerSideProps() {
  const { posts } = await hygraph.request(QUERY);

  return {
    props: {
      posts,
    },
  };
}
