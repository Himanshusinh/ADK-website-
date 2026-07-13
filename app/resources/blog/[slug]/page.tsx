import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/data";
import BlogHeroImage from "./BlogHeroImage";
import BlogContent from "@/components/BlogContent";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    keywords: [post.category ?? "Technical Blog", "ADK Engineering", post.author],
  };
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const { slug } = await props.params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full bg-surface animate-fade-in">
      <div className="w-full bg-surface-container py-3 border-b border-border/50">
        <div className="adk-container flex items-center gap-2 font-mono text-[10px] uppercase text-tertiary">
          <Link href="/resources" className="hover:text-primary transition-colors">
            Resources
          </Link>
          <span>/</span>
          <Link href="/resources/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-foreground font-bold">{post.title}</span>
        </div>
      </div>

      <article className="py-20 mx-auto w-full max-w-[800px] px-[var(--adk-container-padding)]">
        <BlogHeroImage src={post.heroImage} title={post.title} category={post.category} />

        <div className="border-l-4 border-primary pl-6 mb-8">
          <div className="flex items-center gap-4 font-mono text-[10px] text-tertiary uppercase mb-3">
            <span>{post.date}</span>
            <span>{"//"}</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="font-headline text-3xl md:text-5xl text-foreground uppercase font-bold tracking-tight mb-4">
            {post.title}
          </h1>
          <span className="font-mono text-[9px] text-tertiary/75 uppercase block">
            AUTHOR_CREDIT: {post.author}
          </span>
        </div>

        <div className="pt-6 border-t border-border">
          <BlogContent content={post.content} />
        </div>

        <div className="mt-12 pt-8 border-t border-border flex justify-between items-center">
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
