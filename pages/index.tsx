import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { gql } from "graphql-request";

import hygraph from "../util/hygraph";

console.log(process.env.GRAPHCMS_URL)

const Home: NextPage = ({ posts }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Blog | Anindya Dey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Namaste World! 🙏</h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Docker 🐋 Network </h3>
            <p className="mt-4 text-xl">
              Lets talk about various ways to configure container communication
              to the outside world 🌏
            </p>
            <div className="mt-6">
              <span className="mr-4 bg-blue-100 px-4 py-2 text-sm text-gray-600 rounded-md">
                docker
              </span>
            </div>
          </a>

          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">{posts[0].title}</h3>
            <h5 className="mt-2 text-sm text-gray-500">
              {new Date(posts[0].publishedAt).toLocaleDateString("en-gb", {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "utc",
              })}
            </h5>
            <p className="mt-4 text-xl">{posts[0].excerpt}</p>
            <div className="mt-6">
              <span className="mr-4 bg-blue-100 px-4 py-2 text-sm text-gray-600 rounded-md">
                {posts[0].categories[0].slug}
              </span>
            </div>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Python 🐍 List &rarr;</h3>
            <p className="mt-4 text-xl">
              How does python list work under the hood?
            </p>
            <div className="mt-6">
              <span className="mr-4 bg-blue-100 px-4 py-2 text-sm text-gray-600 rounded-md">
                python
              </span>
            </div>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">
              Pass by Reference in C++ &rarr;
            </h3>
            <p className="mt-4 text-xl">
              Lets learn how to pass parameters by reference in C++.
            </p>
            <div className="mt-6">
              <span className="mr-4 bg-blue-100 px-4 py-2 text-sm text-gray-600 rounded-md">
                c++
              </span>
            </div>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">YAML syntax&rarr;</h3>
            <p className="mt-4 text-xl">
              Lets see how YAML differs from JSON syntax!
            </p>
            <div className="mt-6">
              <span className="mr-4 bg-blue-100 px-4 py-2 text-sm text-gray-600 rounded-md">
                yaml
              </span>
              <span className="mr-4 bg-blue-100 px-4 py-2 text-sm text-gray-600 rounded-md">
                json
              </span>
            </div>
          </a>
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
};

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

export default Home;

