import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import { getBlogMetadata } from "@/lib/seo";
import View from "@/views/BlogInner";

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return getBlogMetadata(slug);
}

export default async function Page({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) notFound();
  return <View />;
}
