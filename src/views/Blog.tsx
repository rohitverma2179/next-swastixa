"use client";

import dynamic from 'next/dynamic';
import React, { memo } from "react";
const BlogGrid = dynamic(() => import('../components/blog/BlogGrid'));
import { blogs } from "../data/blogs";
const InnerPageHeader = dynamic(() => import('../components/common/innerPageHeader'));
const Particles = dynamic(() => import('../components/home/Particles'), { ssr: false });
const CTASection = dynamic(() => import('../components/common/CTASection'));

function BlogPage() {
  return (
    <>
      <div className="relative pt-24 z-0 w-full px-2 sm:px-4 md:px-10 lg:px-10 py-10 xl:px-24 bg-black overflow-hidden min-h-screen">
        <Particles
          particleBaseSize={120}
          particleColors={['#2196F3', '#FFFFFF']}
          particleCount={180}
          particleSpread={25}
          speed={0.3}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
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

export default memo(BlogPage);
