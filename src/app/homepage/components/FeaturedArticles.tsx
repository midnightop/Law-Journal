'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const articles = [
{
  id: 1,
  title: 'Article 21 Explained: Right to Life and Personal Liberty',
  category: 'Constitutional Law',
  categoryType: 'blue',
  excerpt:
  'The most expansive fundamental right in the Indian Constitution — how courts have interpreted it from mere survival to a dignified life.',
  readTime: '6 min read',
  date: 'March 28, 2026',
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_1db3e5f9d-1771946050996.png",
  imageAlt:
  'Indian Supreme Court building at dusk with dramatic overcast sky, dark stone facade, deep shadows across the columns',
  href: '/bare-acts'
},
{
  id: 2,
  title: 'Kesavananda Bharati Case: The Birth of Basic Structure Doctrine',
  category: 'Case Law',
  categoryType: 'purple',
  excerpt:
  'How a 13-judge bench delivered the most consequential judgment in Indian constitutional history — and what it means for democracy.',
  readTime: '8 min read',
  date: 'March 22, 2026',
  image:
  "https://images.unsplash.com/photo-1628781568342-a4f87e7a0a90",
  imageAlt:
  'Ancient stone courthouse with ornate columns in dim atmospheric lighting, dark stone walls, deep shadows',
  href: '/case-laws'
},
{
  id: 3,
  title: 'The Indian Contract Act, 1872: What Makes a Contract Valid?',
  category: 'Bare Act',
  categoryType: 'blue',
  excerpt:
  'Offer, acceptance, consideration — the essential ingredients of a legally binding contract explained with everyday examples.',
  readTime: '5 min read',
  date: 'March 15, 2026',
  image:
  "https://images.unsplash.com/photo-1603796846097-bee99e4a601f",
  imageAlt:
  'Close-up of hands signing a formal document on a dark desk, low key lighting, deep shadows',
  href: '/bare-acts'
},
{
  id: 4,
  title: 'FIR vs Complaint: Know the Difference Before Going to the Police',
  category: 'CrPC',
  categoryType: 'purple',
  excerpt:
  'Most people confuse these two. Here\'s a clear breakdown of when to file an FIR and when to file a complaint under the CrPC.',
  readTime: '4 min read',
  date: 'March 10, 2026',
  image:
  "https://images.unsplash.com/photo-1694344632457-0d79ae2dce31",
  imageAlt:
  'Police station exterior at night with harsh fluorescent lighting, dark surroundings, institutional grey walls',
  href: '/bare-acts'
},
{
  id: 5,
  title: 'Maneka Gandhi v. Union of India: Due Process Comes to India',
  category: 'Case Law',
  categoryType: 'purple',
  excerpt:
  '1978. A passport. A Supreme Court that changed how we understand personal liberty forever. The case that expanded Article 21.',
  readTime: '7 min read',
  date: 'March 5, 2026',
  image:
  "https://images.unsplash.com/photo-1657358845126-cc01fe6c5af0",
  imageAlt:
  'Vintage Indian passport on a dark wooden surface, low key lighting, deep shadows, muted tones',
  href: '/case-laws'
},
{
  id: 6,
  title: 'Section 375 IPC: Understanding the Law on Rape in India',
  category: 'IPC',
  categoryType: 'blue',
  excerpt:
  'A clear, sensitive breakdown of what the law says, how courts have interpreted consent, and the landmark changes post-2013.',
  readTime: '9 min read',
  date: 'Feb 28, 2026',
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_18aa7c85d-1772090715698.png",
  imageAlt:
  'Empty courtroom with high ceiling and tall dark wood benches, harsh overhead lighting, deep shadows in corners',
  href: '/bare-acts'
}];


export default function FeaturedArticles() {
  return (
    <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 reveal">
        <div>
          <span className="tag-purple text-xs font-semibold px-3 py-1 inline-block mb-3">
            Latest Articles
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
            Recent from the Journal
          </h2>
        </div>
        <Link
          href="/bare-acts"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors whitespace-nowrap">
          
          View all articles
          <Icon name="ArrowRightIcon" size={14} className="text-primary" />
        </Link>
      </div>
      {/* Grid — 3 col, 2 rows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles?.map((article, i) =>
        <Link
          key={article?.id}
          href={article?.href}
          className={`article-card reveal reveal-delay-${Math.min(i + 1, 5)} block group`}>
          
            {/* Image */}
            <div className="relative h-44 overflow-hidden">
              <AppImage
              src={article?.image}
              alt={article?.imageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute top-3 left-3">
                <span
                className={`${
                article?.categoryType === 'blue' ? 'tag-blue' : 'tag-purple'} text-xs font-semibold px-2.5 py-0.5`
                }>
                
                  {article?.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-display text-base font-semibold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {article?.title}
              </h3>
              <p className="text-sm text-secondary leading-relaxed mb-4 line-clamp-2">
                {article?.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-muted">
                <span className="flex items-center gap-1">
                  <Icon name="ClockIcon" size={12} className="text-muted" />
                  {article?.readTime}
                </span>
                <span>{article?.date}</span>
              </div>
            </div>
          </Link>
        )}
      </div>
    </section>);

}
