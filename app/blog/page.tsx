import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <div className="px-6 py-24 mx-auto max-w-4xl">
      {/* Header Section */}
      <div className="mb-16">
        <h1 className="font-semibold text-4xl mb-4 tracking-tight">Our Blog</h1>
        <p className="text-lg text-neutral-600 max-w-2xl leading-relaxed">
          Dive deep into the latest advances in AI, computer graphics, and tattoo technology. 
          From cutting-edge research to practical applications, explore the intersection of 
          art and artificial intelligence.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <BlogPosts />
    </div>
  )
}
