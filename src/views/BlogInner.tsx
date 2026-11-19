"use client";

import { useParams } from "@/lib/router";
import { blogs } from "../data/blogs";
import BlogLayout from "../components/blog/bloginnerPages/BlogLayout";

export default function BlogInner({ blog: initialBlog }: { blog?: any } = {}) {
  const params = useParams();
  const slug = params?.slug;

  const blog = initialBlog || blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <p className="text-white p-10">Blog not found</p>;
  }

  return <BlogLayout blog={blog} />;
}