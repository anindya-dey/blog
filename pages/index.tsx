import Head from "next/head";
import { gql } from "graphql-request";

import hygraph from "../util/hygraph";
import { PostCardModel } from "../models";
import { PostCardComponent, Footer } from "../components";

export default function Home({ posts }: { posts: PostCardModel[] }) {
  return (
    <>
      <Head>
        <title>Blog | Anindya Dey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {posts.map((post: PostCardModel, index: number) => (
            <PostCardComponent key={index} post={post} />
          ))}
        </div>
      </div>

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
      coverImage {
        url
        width
        height
      }
      date
      tags
      author {
        name
        picture {
          url
          width
          height
        }
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

