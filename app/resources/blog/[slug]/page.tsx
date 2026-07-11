import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const { slug } = await props.params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Format paragraphs/subheadings in blog post content
  const formattedContent = post.content.split("\n\n").map((para, idx) => {
    if (para.startsWith("### ")) {
      return (
        <h3 key={idx} className="font-headline text-2xl text-charcoal uppercase font-bold mt-8 mb-4 border-b border-charcoal/10 pb-2">
          {para.replace("### ", "")}
        </h3>
      );
    }
    if (para.startsWith("- ")) {
      return (
        <ul key={idx} className="space-y-2 list-inside list-disc pl-2 font-sans text-sm text-tertiary">
          {para.split("\n").map((li, i) => (
            <li key={i}>{li.replace("- ", "")}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={idx} className="font-sans text-sm text-tertiary leading-relaxed mb-4">
        {para}
      </p>
    );
  });

  return (
    <div className="flex flex-col w-full bg-white animate-fade-in">
      {/* Breadcrumb */}
      <div className="w-full bg-surface-container py-3 px-6 md:px-20 border-b border-charcoal/5">
        <div className="max-w-[1440px] mx-auto flex items-center gap-2 font-mono text-[10px] uppercase text-tertiary">
          <Link href="/resources" className="hover:text-primary transition-colors">
            Resources
          </Link>
          <span>/</span>
          <Link href="/resources/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-charcoal font-bold">{post.title}</span>
        </div>
      </div>

      {/* Article Detail */}
      <article className="py-20 px-6 md:px-20 max-w-[800px] mx-auto w-full">
        {/* Post Metadata */}
        <div className="border-l-4 border-primary pl-6 mb-8">
          <div className="flex items-center gap-4 font-mono text-[10px] text-tertiary uppercase mb-3">
            <span>{post.date}</span>
            <span>{"//"}</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="font-headline text-3xl md:text-5xl text-charcoal uppercase font-bold tracking-tight mb-4">
            {post.title}
          </h1>
          <span className="font-mono text-[9px] text-tertiary/75 uppercase block">
            AUTHOR_CREDIT: {post.author}
          </span>
        </div>

        {/* Content body */}
        <div className="space-y-6 pt-6 border-t border-charcoal/10">
          {formattedContent}
        </div>

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-charcoal/10 flex justify-between items-center">
          <Link
            href="/resources/blog"
            className="font-mono text-xs uppercase text-primary hover:underline flex items-center gap-2 font-bold"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            BACK_TO_BLOG
          </Link>
        </div>
      </article>
    </div>
  );
}
