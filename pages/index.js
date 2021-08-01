import Link from 'next/link';

import { BlogPosts } from '../data/blog-posts';

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="">My Blogs</h1>
      </main>

      <div>
        {
          BlogPosts.map(blog => (
            <div key={blog.slug}>
              <div><Link href={`blogs/${blog.slug}`}><a>{blog.title}</a></Link></div>
              <div>{blog.createdOn}</div>
              <div>{blog.content}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
