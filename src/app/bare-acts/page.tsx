'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BareActsHero from './components/BareActsHero';
import BareActsGrid from './components/BareActsGrid';

export default function BareActsPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealEls = document.querySelectorAll('.reveal');
    revealEls?.forEach((el) => observer?.observe(el));

    return () => observer?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <BareActsHero />
        <BareActsGrid />

        {/* Bottom CTA */}
        <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
          <div
            className="rounded-4xl p-8 sm:p-12 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(0,122,255,0.06) 0%, rgba(123,97,255,0.06) 100%)',
              border: '1px solid rgba(0,122,255,0.12)',
            }}
          >
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-3">
              Want to read landmark cases interpreting these acts?
            </h2>
            <p className="text-secondary text-sm mb-6 max-w-md mx-auto">
              Every bare act comes alive through the cases that interpreted it. Explore our case law library.
            </p>
            <a
              href="/case-laws"
              className="btn-gradient-purple inline-block text-sm px-8 py-3"
            >
              Go to Case Laws
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
