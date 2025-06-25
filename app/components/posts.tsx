import Link from "next/link";
import Image from "next/image";
import { formatDate, getBlogPosts } from "app/blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  // Map blog posts to their corresponding thumbnails and categories
  const getBlogData = (slug: string) => {
    const blogData = {
      "parametric-models": {
        image:
          "https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2bMEPVrKnNmTE5LR1ofd6r2JMpah4lUgISy03",
        category: "3D AI",
      },
      multiview: {
        image:
          "https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2vO2g1pT7dNVFw8oSOluz9TbHIB5itJ3yjmea",
        category: "Generative AI",
      },
      inpainting: {
        image:
          "https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2TElBznFQpBwYfiEI6AgFcVZSbjG8HeUkdNRP",
        category: "Generative AI",
      },
      tattoo: {
        image:
          "https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2Qr9mg5eJ7E6HR9VLANrdSl85TGeCw1hmbxc2",
        category: "Data Analysis",
      },
    };

    return blogData[slug] || { image: null, category: "Blog" };
  };

  return (
    <div className="space-y-8">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => {
          const blogData = getBlogData(post.slug);
          return (
            <article
              key={post.slug}
              className="bg-neutral-900 rounded-xl border border-neutral-800 p-0 hover:shadow-lg transition-all duration-300 hover:border-neutral-300 overflow-hidden"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="flex flex-col lg:flex-row p-3">
                  {/* Thumbnail */}
                  {blogData.image && (
                    <div className="lg:w-80 w-full h-48 lg:h-64 relative overflow-hidden lg:rounded-l-xl rounded-t-xl lg:rounded-tr-none">
                      <Image
                        src={blogData.image}
                        alt={post.metadata.title}
                        fill
                        className="object-cover"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                          {blogData.category}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="flex-1 p-8 flex flex-col justify-center space-y-4">
                    <time className="text-sm text-neutral-400 font-medium">
                      {formatDate(post.metadata.publishedAt, false)}
                    </time>

                    <h2 className="text-2xl lg:text-3xl font-semibold text-neutral-100 tracking-tight hover:text-neutral-300 transition-colors">
                      {post.metadata.title}
                    </h2>

                    {post.metadata.summary && (
                      <p className="text-neutral-300 leading-relaxed line-clamp-3">
                        {post.metadata.summary}
                      </p>
                    )}

                    {/* Read More */}
                    <div className="pt-2">
                      <span className="inline-flex items-center text-sm font-medium text-neutral-100 hover:text-neutral-300 transition-colors">
                        Read more
                        <svg
                          className="ml-1 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
    </div>
  );
}
