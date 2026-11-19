import BlogLayout from "../components/blog/bloginnerPages/BlogLayout";

export default function BlogInner({ blog }: { blog?: any } = {}) {
  if (!blog) {
    return <p className="text-white p-10">Blog not found</p>;
  }

  return <BlogLayout blog={blog} />;
}