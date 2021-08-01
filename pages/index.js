import Link from 'next/link';

import { BlogPosts } from '../data/blog-posts';

export default function Home() {
  return (
      <div className="mt-3 grid sm:grid-cols-2 grid-cols-1 gap-4">
        {
          BlogPosts.map(blog => (
            <BlogItem key={blog.slug} {...blog} />
          ))
        }
    </div>
  )
}

function BlogItem({ title, slug, createdOn, content }) {
  return (
    <div className="p-6 border border-gray-300 rounded-lg">
      <div className="sm:text-2xl text-lg font-bold text-blue-500"><Link href={`blogs/${slug}`}><a>{title}</a></Link></div>
      <div className="text-sm font-light text-gray-500">Posted on: {createdOn}</div>
      <div className="smtext-lg text-sm text-gray-700">{content}</div>
    </div>
  );
}
