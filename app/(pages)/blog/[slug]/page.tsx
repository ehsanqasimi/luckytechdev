import React from "react";
import Link from "next/link";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  BlogPost,
} from "@/app/content/posts";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            Sorry, the blog post you{"'"}re looking for doesn{"'"}t exist.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = getAllBlogPosts()
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <article className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/blog"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
      </div>

      {/* Hero Section */}
      <div className="light-purple-gradient py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category */}
          <div className="mb-4">
            <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-medium">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              {post.readTime} min read
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-900 font-medium">{post.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Featured Image/Icon */}
        {post.image && (
          <div className="h-64 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg flex items-center justify-center text-9xl mb-12">
            {post.image}
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          {post.content.split("\n\n").map((paragraph, idx) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={idx}
                  className="text-3xl font-bold text-gray-900 mt-8 mb-4"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3
                  key={idx}
                  className="text-2xl font-bold text-gray-900 mt-6 mb-3"
                >
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }
            if (paragraph.startsWith("- ")) {
              return (
                <ul key={idx} className="list-disc list-inside space-y-2 mb-4">
                  {paragraph.split("\n").map((item, itemIdx) => (
                    <li key={itemIdx} className="text-gray-700">
                      {item.replace("- ", "")}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 py-8 my-12">
          {/* Share Buttons */}
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-semibold">
              Share this post:
            </span>
            <div className="flex gap-2">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://yourdomain.com/blog/${params.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-medium text-sm"
              >
                <Share2 className="h-4 w-4" />
                Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=https://yourdomain.com/blog/${params.slug}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-medium text-sm"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Author Info */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            About the Author
          </h3>
          <p className="text-gray-600">
            {post.author} is a team of experienced developers and designers at
            Lucky Tech Dev, passionate about sharing insights and best practices
            in web development and digital strategy.
          </p>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-gray-50 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 block group"
                >
                  {relatedPost.image && (
                    <div className="h-40 bg-gradient-to-br from-indigo-50 to-purple-50 rounded flex items-center justify-center text-5xl mb-4">
                      {relatedPost.image}
                    </div>
                  )}
                  <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Get in touch with our team to discuss your project and how we can
            help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </article>
  );
}
