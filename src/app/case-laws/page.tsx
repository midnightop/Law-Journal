'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CaseLawsHero from './components/CaseLawsHero';
import CaseLawsGrid from './components/CaseLawsGrid';
import Link from 'next/link';

export default function CaseLawsPage() {
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
        <CaseLawsHero />
        <CaseLawsGrid />

        {/* Bottom CTA */}
        <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
          <div
            className="rounded-4xl p-8 sm:p-12 text-center relative overflow-hidden"
            style={{
              background:
                'linear-gradient(135deg, rgba(123,97,255,0.06) 0%, rgba(255,77,109,0.06) 100%)',
              border: '1px solid rgba(123,97,255,0.12)',
            }}
          >
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-3">
              Understand the statutes behind these cases?
            </h2>
            <p className="text-secondary text-sm mb-6 max-w-md mx-auto">
              Every landmark case interprets a bare act. Read the source legislation to understand the judgment fully.
            </p>
            <Link
              href="/bare-acts"
              className="btn-gradient-blue inline-block text-sm px-8 py-3"
            >
              Go to Bare Acts
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
