"use client";

import dynamic from 'next/dynamic';
import React, { memo } from "react";
const ContactCareer = dynamic(() => import('../components/careers/ContactCareer'));
const InnerPageHeader = dynamic(() => import('../components/common/innerPageHeader'));
const Particles = dynamic(() => import('../components/home/Particles'), { ssr: false });
const CTASection = dynamic(() => import('../components/common/CTASection'));

function Careers() {
  return (
    <>
      <div className="relative z-0 w-full bg-black min-h-screen xl:px-20 px-0 pt-24 pb-12 overflow-hidden">
        <Particles
          particleBaseSize={400}
          particleColors={['#2196F3', '#FFFFFF']}
          particleCount={180}
          particleSpread={25}
          speed={0.3}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        <InnerPageHeader
          title="Careers"
          description="At Swastixa, our Careers page showcases opportunities for creative and strategic talent, including Senior Graphic Designer, Copywriter, Client Servicing Executive, Art Director, Motion Graphics Designer, and Social Media Manager, with more roles to be added as we grow."
        />
        <ContactCareer />  
      </div>
      <CTASection />  
    </>
  );
}

export default memo(Careers);
