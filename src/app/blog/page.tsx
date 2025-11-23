import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog & Resources",
  description: "Articles, tutorials, and insights on web development, AI integration, and modern tech stacks.",
};

export default function BlogPage() {
  // Placeholder blog posts - in future, fetch from CMS or markdown files
  const posts = [
    {
      title: "Building High-Performance Web Apps with Next.js 15",
      excerpt: "Learn how to leverage the latest Next.js features for blazing-fast web applications.",
      date: "2025-01-15",
      slug: "nextjs-15-performance",
      category: "Web Development",
    },
    {
      title: "Integrating AI into Your Applications",
      excerpt: "A practical guide to integrating GPT-4 and other AI APIs into your web and mobile apps.",
      date: "2025-01-10",
      slug: "ai-integration-guide",
      category: "AI & ML",
    },
    {
      title: "The Modern Tech Stack for 2025",
      excerpt: "Exploring the best frameworks, tools, and practices for building modern web applications.",
      date: "2025-01-05",
      slug: "modern-tech-stack-2025",
      category: "Tech Stack",
    },
  ];

  return (
    <div className="min-h-screen bg-black/[0.96] text-white">
      <div className="relative z-10">
        <div className="sticky top-0 z-50">
          <Navigation />
        </div>

        <main className="max-w-5xl mx-auto px-4 py-20 md:py-32">
          <div className="mb-12 md:mb-16">
            <h1 className="text-5xl md:text-7xl font-light mb-4">
              Blog & <span className="text-accent">Resources</span>
            </h1>
            <p className="text-xl text-gray-300">
              Insights, tutorials, and learnings from the world of web development
            </p>
          </div>

          <div className="grid gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="p-6 md:p-8 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <span className="text-accent text-sm font-semibold">
                    {post.category}
                  </span>
                  <time className="text-gray-400 text-sm">{post.date}</time>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-white">
                  {post.title}
                </h2>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-accent hover:text-white transition-colors"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-12 p-6 rounded-lg bg-accent/10 border border-accent/20 text-center">
            <p className="text-gray-300">
              More articles coming soon! Follow on{" "}
              <a
                href="https://www.linkedin.com/in/dan-danilescu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors"
              >
                LinkedIn
              </a>{" "}
              for updates.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
