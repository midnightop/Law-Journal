import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Pattern 3: Vercel Horizontal Flow */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo + Links */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2">
            <Link href="/homepage" className="flex items-center gap-2">
              <AppLogo size={28} />
              <span className="font-display text-sm font-semibold text-foreground hidden sm:block">
                Calcutta Law Journal
              </span>
            </Link>
            <span className="hidden sm:block text-muted">·</span>
            <Link
              href="/homepage"
              className="text-sm font-medium text-secondary hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/bare-acts"
              className="text-sm font-medium text-secondary hover:text-foreground transition-colors"
            >
              Bare Acts
            </Link>
            <Link
              href="/case-laws"
              className="text-sm font-medium text-secondary hover:text-foreground transition-colors"
            >
              Case Laws
            </Link>
            <Link
              href="/homepage#about"
              className="text-sm font-medium text-secondary hover:text-foreground transition-colors"
            >
              About
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4 text-sm text-muted">
            <span>© 2026 Calcutta Law Journal</span>
            <span className="hidden sm:block">·</span>
            <Link
              href="/homepage"
              className="hidden sm:block hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/homepage"
              className="hidden sm:block hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-4 pt-4 border-t border-black/5 text-center">
          <p className="text-xs text-muted">
            Written by{' '}
            <span className="font-medium text-secondary">Reyansh</span>
            {' '}· Surendranath Law College, University of Calcutta ·{' '}
            <span className="gradient-text-blue font-medium">
              Understanding Bare Acts and Case Laws in Simple Words
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
