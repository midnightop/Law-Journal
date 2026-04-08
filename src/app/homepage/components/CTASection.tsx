import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function CTASection() {
  return (
    <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div
        className="reveal relative overflow-hidden rounded-4xl p-10 sm:p-14 text-center"
        style={{
          background:
            'linear-gradient(135deg, #007AFF 0%, #00C2FF 40%, #7B61FF 80%, #FF4D6D 100%)',
        }}
      >
        {/* Noise overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Glow blobs */}
        <div
          className="absolute w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: 'rgba(255,255,255,0.15)',
            filter: 'blur(60px)',
            top: '-30%',
            right: '10%',
          }}
        />
        <div
          className="absolute w-48 h-48 rounded-full pointer-events-none"
          style={{
            background: 'rgba(255,255,255,0.12)',
            filter: 'blur(40px)',
            bottom: '-20%',
            left: '5%',
          }}
        />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 mb-6">
            <Icon name="SparklesIcon" size={14} className="text-white" />
            <span className="text-white text-xs font-semibold tracking-wide uppercase">
              Free. Always.
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            Law doesn't have to be
            <br />
            <span className="italic font-light">complicated.</span>
          </h2>

          <p className="text-white/80 text-base max-w-lg mx-auto mb-8 leading-relaxed">
            Start reading today. No sign-up required. Every article, every case summary, every act — free for every student and citizen.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/bare-acts"
              className="bg-white text-primary font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105 w-full sm:w-auto text-center"
            >
              Start with Bare Acts
            </Link>
            <Link
              href="/case-laws"
              className="bg-white/15 border border-white/40 text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:bg-white/25 w-full sm:w-auto text-center"
            >
              Read Case Laws
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
