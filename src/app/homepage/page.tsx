'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import FeatureCards from './components/FeatureCards';
import FeaturedArticles from './components/FeaturedArticles';
import AboutSection from './components/AboutSection';
import CTASection from './components/CTASection';

export default function Homepage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.12 }
    );

    const revealEls = document.querySelectorAll('.reveal');
    revealEls?.forEach((el) => observer?.observe(el));

    return () => observer?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <HeroSection />
        <FeatureCards />
        <FeaturedArticles />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
