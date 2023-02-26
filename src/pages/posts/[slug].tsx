import { BlogPost } from "@/types/blog-post.type";
import graphqlClient from "@/utils/graphql-client";
import { gql } from "graphql-request";
import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";
import ReactHtmlParser from "react-html-parser";

export default function Post({
  blogPost,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
    <div className="w-11/12 max-w-screen-xl px-4 mx-auto mt-6 sm:px-6 lg:px-8 md:w-9/12 lg:w-10/12">
      <div className="text-3xl lg:text-4xl">{blogPost.title}</div>
      <div className="mt-3 text-gray-500">{blogPost.date}</div>
      <div className="mt-6 prose md:prose-lg lg:prose-xl dark:prose-invert">
        {ReactHtmlParser(blogPost.content.html)}
      </div>
    </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  blogPost: BlogPost;
}> = async (context) => {
  const query = gql`
    query getPost($slug: String!) {
      post(where: { slug: $slug }) {
        title
        date
        tags
        content {
          markdown
          html
        }
        author {
          name
        }
      }
    }
  `;
  const variables = {
    slug: context.query.slug,
  };
  const { post: blogPost } = await graphqlClient.request(query, variables);

  return {
    props: {
      blogPost,
    },
  };
};

