import Head from "next/head";
import { BlogPosts } from "../../data/blog-posts";

export default function BlogPage({ title, createdOn, content }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-4 px-8 py-6 border border-gray-300 rounded-lg">
        <h1 className="sm:text-4xl text-xl">{title}</h1>
        <div className="text-gray-500 text-sm">Posted on: {createdOn}</div>
        <div className="mt-4 text-gray-700">{content}</div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
    console.log(JSON.stringify(context, null, ' '));
  const { params } = context;
  const blogPost = BlogPosts.find((post) => post.slug === params.slug);
  return {
    props: {
      ...blogPost,
    },
    revalidate: 10, // In seconds
  };
}

export async function getStaticPaths() {
  const paths = BlogPosts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: "blocking" };
}
