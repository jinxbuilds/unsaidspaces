import { getMediumPosts } from "@/lib/medium";

export default async function MediumSection() {
  const posts = await getMediumPosts();

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10">
          Latest Thoughts
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <a
              key={post.guid}
              href={post.link}
              target="_blank"
              className="group"
            >
              {post.thumbnail ? (
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="rounded-2xl mb-4 aspect-[4/3] object-cover"
                />
              ) : null}

              <h3 className="text-lg font-medium group-hover:opacity-70 transition">
                {post.title}
              </h3>

              <p className="text-sm text-neutral-400 mt-2">
                {new Date(post.pubDate).toDateString()}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}