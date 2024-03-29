import Head from "next/head";
import { Inter } from "@next/font/google";
import { gql } from "graphql-request";
import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";

import graphqlClient from "@/utils/graphql-client";
import Nav from "@/components/nav.component";
import Blog from "@/components/blog.component";
import { PostCard } from "@/types/post-card.type";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  postCards,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const navItems = ["About", "Careers", "History", "Services", "Blog"];

  return (
    <>
      <Head>
        <title>Blog | Anindya Dey</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen">
        <Nav navItems={navItems} />
        <Blog postCards={postCards} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{ postCards: PostCard[] }> = async (
  context
) => {
  const query = gql`
    query Assets {
      posts {
        excerpt
        title
        tags
        date
        slug
      }
    }
  `;
  const { posts: postCards } = await graphqlClient.request(query);

  return {
    props: {
      postCards,
    },
  };
};
