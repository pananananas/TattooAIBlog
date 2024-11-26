import { BlogPosts } from "app/components/posts";
import Image from "next/image";
import { Suspense } from "react";
export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-3xl font-semibold tracking-tighter font-mono">
        Tattoo AI
      </h1>
      <p className="mb-4">
        {`We are a team, working on an application that uses AI to help you visualize your tattoo ideas on your body.
        We are currently in the early stages of development and are looking for feedback from the tattoo community.
        `}
      </p>
      <p className="mb-4">
        {`This is out first visual concept of an appliation.`}
      </p>
      <div className="flex justify-center">
        <Suspense fallback={<div>Loading...</div>}>
          <Image
            src="https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2neV5qe6UgADqyGdL1X6hk0NtsSvQxjcfe5ri"
            alt="Tattoo AI application"
            className="w-1/2"
            width={450}
            height={450}
          />
        </Suspense>
      </div>

      <h1 className="text-xl font-semibold pt-4">Blog posts</h1>
      <div className="mb-8 mt-3">
        <BlogPosts />
      </div>
    </section>
  );
}
