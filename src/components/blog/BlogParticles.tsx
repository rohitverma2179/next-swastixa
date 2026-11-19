"use client";

import dynamic from 'next/dynamic';

const Particles = dynamic(() => import('../home/Particles'), { ssr: false });

export default function BlogParticles() {
  return (
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
  );
}
