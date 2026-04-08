'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      const glow1 = heroRef.current.querySelector('.glow-1') as HTMLElement;
      const glow2 = heroRef.current.querySelector('.glow-2') as HTMLElement;
      if (glow1) {
        glow1.style.transform = `translate(${x * 1.2}px, ${y * 1.2}px)`;
      }
      if (glow2) {
        glow2.style.transform = `translate(${-x * 0.8}px, ${-y * 0.8}px)`;
      }
    };

    const el = heroRef.current;
    el?.addEventListener('mousemove', handleMouseMove);
    return () => el?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 px-4"
      style={{ background: 'linear-gradient(180deg, #F5F7FA 0%, #EEF2FF 60%, #F5F7FA 100%)' }}>
      
      {/* Atmospheric glow blobs */}
      <div
        className="hero-glow glow-1 w-[500px] h-[500px] transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, #007AFF 0%, #00C2FF 50%, transparent 70%)',
          top: '10%',
          left: '15%'
        }} />
      
      <div
        className="hero-glow glow-2 w-[400px] h-[400px] transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, #7B61FF 0%, #FF4D6D 50%, transparent 70%)',
          bottom: '15%',
          right: '10%'
        }} />
      

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Eyebrow label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-primary/20 shadow-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-gradient-blue animate-pulse-glow" />
          <span className="text-xs font-semibold text-primary tracking-wide uppercase">
            India's Simplest Law Resource
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-tight tracking-tight mb-6">
          <span className="gradient-text-blue">Calcutta</span>
          <br />
          <span className="text-foreground">Law Journal</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-secondary font-light max-w-2xl mx-auto mb-4 leading-relaxed font-display italic">
          "Understanding Bare Acts and Case Laws
          <br className="hidden sm:block" />
          in Simple Words"
        </p>

        <p className="text-base text-muted max-w-xl mx-auto mb-10 leading-relaxed">
          Complex legal language, decoded. From the Constitution to landmark Supreme Court judgments — explained clearly for students and citizens.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/bare-acts"
            className="btn-gradient-blue text-base px-8 py-3.5 w-full sm:w-auto text-center">
            
            Explore Bare Acts
          </Link>
          <Link
            href="/case-laws"
            className="btn-gradient-purple text-base px-8 py-3.5 w-full sm:w-auto text-center">
            
            Read Case Laws
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-14">
          {[
          { value: '50+', label: 'Bare Acts Covered' },
          { value: '100+', label: 'Case Summaries' },
          { value: '10k+', label: 'Students Helped' }].
          map((stat) =>
          <div key={stat.label} className="text-center">
              <div className="font-display text-2xl sm:text-3xl font-semibold gradient-text-blue">
                {stat.value}
              </div>
              <div className="text-xs text-muted font-medium mt-0.5">{stat.label}</div>
            </div>
          )}
        </div>
      </div>

      {/* Hero editorial image */}
      <div className="relative z-10 w-full max-w-5xl mx-auto mt-16 px-2">
        <div
          className="relative rounded-3xl overflow-hidden shadow-card-active"
          style={{ aspectRatio: '16/7' }}>
          
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_18aa7c85d-1772090715698.png"
            alt="Dark wood-panelled courtroom interior with high windows casting dramatic light across empty benches, deep shadows, mahogany tones"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 80vw" />
          
          {/* Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
          {/* Caption */}
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <p className="text-white/90 text-xs font-medium tracking-wider uppercase font-sans">
              Calcutta High Court · Est. 1862
            </p>
            <span className="text-white/60 text-xs font-sans">
              West Bengal, India
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted font-medium">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>);

        }
