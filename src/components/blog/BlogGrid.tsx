import BlogCard from "./BlogCard";

export default function BlogGrid({ blogs }) {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2">
      {blogs.map((blog, index) => (
        <BlogCard key={blog.id} blog={blog} priority={index === 0} />
      ))}
    </div>
  );
}
