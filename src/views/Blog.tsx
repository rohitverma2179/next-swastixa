import React from "react";
import BlogGrid from '../components/blog/BlogGrid';
import { blogs } from "../data/blogs";
import InnerPageHeader from '../components/common/innerPageHeader';
import CTASection from '../components/common/CTASection';
import BlogParticles from '../components/blog/BlogParticles';

export default function BlogPage() {
  return (
    <>
      <div className="relative pt-24 z-0 w-full px-2 sm:px-4 md:px-10 lg:px-10 py-10 xl:px-24 bg-black overflow-hidden min-h-screen">
        <BlogParticles />
        <InnerPageHeader
          title="Blog"
          description="At Swastixa, our blog features informative articles, insights, and updates focused on culture-driven ideas, business growth, digital trends, and thoughtful perspectives. Each post is crafted to share knowledge, inspire clarity, and support meaningful progress through valuable content."
        />
        <BlogGrid blogs={blogs} loading={false} />
      </div>
      <CTASection />
    </>
  );
}
