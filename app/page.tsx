import { BlogPosts } from "app/components/posts";
export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter font-mono">
        Tattoo AI
      </h1>
      <p className="mb-4">
        {`We are a team, building an app that uses AI to help you visualize your tattoo ideas on your body.
        We are currently in the early stages of development and are looking for feedback from the tattoo community.
        `}
      </p>
      <h1 className="text-xl font-semibold pt-4" >
        Blog posts
      </h1>
      <div className="mb-8 mt-3">
        <BlogPosts />
      </div>
    </section>
  );
}
