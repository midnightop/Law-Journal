'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Home', href: '/homepage' },
  { label: 'Bare Acts', href: '/bare-acts' },
  { label: 'Case Laws', href: '/case-laws' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'nav-glass py-3' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/homepage" className="flex items-center gap-2.5 group">
            <AppLogo
              size={36}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-display text-lg font-semibold text-foreground tracking-tight hidden sm:block">
              Calcutta Law Journal
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks?.map((link) => {
              const isActive = pathname === link?.href;
              return (
                <Link
                  key={link?.href}
                  href={link?.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-secondary hover:text-foreground hover:bg-white/80'
                  }`}
                >
                  {link?.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/homepage#about"
              className="text-sm font-medium text-secondary hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/bare-acts"
              className="btn-gradient-blue text-sm px-5 py-2.5"
            >
              Start Reading
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className="md:hidden p-2 rounded-xl hover:bg-white/60 transition-colors"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                  menuOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <div className="absolute inset-0 bg-bg/95 backdrop-blur-xl" />
          <div
            className="relative flex flex-col items-center justify-center h-full gap-8 px-6"
            onClick={(e) => e?.stopPropagation()}
          >
            <div className="flex items-center gap-2 mb-4">
              <AppLogo size={40} />
              <span className="font-display text-xl font-semibold text-foreground">
                Calcutta Law Journal
              </span>
            </div>
            {navLinks?.map((link, i) => {
              const isActive = pathname === link?.href;
              return (
                <Link
                  key={link?.href}
                  href={link?.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-3xl font-display font-medium transition-colors duration-200 ${
                    isActive ? 'gradient-text-blue' : 'text-foreground hover:text-primary'
                  }`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  {link?.label}
                </Link>
              );
            })}
            <Link
              href="/homepage#about"
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-display font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/bare-acts"
              onClick={() => setMenuOpen(false)}
              className="btn-gradient-blue text-base px-8 py-3.5 mt-4"
            >
              Start Reading
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
