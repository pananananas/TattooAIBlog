import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="space-y-8">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <article
            key={post.slug}
            className="bg-neutral-950 rounded-xl border border-neutral-800 p-8 hover:shadow-lg transition-all duration-300 hover:border-neutral-300"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="flex flex-col space-y-4">
                {/* Date */}
                <time className="text-sm text-neutral-100 font-medium">
                  {formatDate(post.metadata.publishedAt, false)}
                </time>
                
                {/* Title */}
                <h2 className="text-2xl font-semibold text-neutral-100 tracking-tight hover:text-neutral-700 transition-colors">
                  {post.metadata.title}
                </h2>
                
                {/* Summary */}
                {post.metadata.summary && (
                  <p className="text-neutral-100 leading-relaxed line-clamp-3">
                    {post.metadata.summary}
                  </p>
                )}
                
                {/* Read More */}
                <div className="pt-2">
                  <span className="inline-flex items-center text-sm font-medium text-neutral-100 hover:text-neutral-700 transition-colors">
                    Read more
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
    </div>
  )
}
