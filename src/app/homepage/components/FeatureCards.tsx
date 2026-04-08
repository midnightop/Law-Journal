'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const features = [
{
  id: 'bare-acts',
  title: 'Bare Acts',
  subtitle: 'Decoded for You',
  description:
  'Every major Indian statute — from the Constitution to the IT Act — explained in plain language with section-by-section breakdowns.',
  gradient: 'bg-gradient-blue',
  gradientText: 'gradient-text-blue',
  borderColor: 'rgba(0, 122, 255, 0.25)',
  shadowColor: 'rgba(0, 122, 255, 0.2)',
  tag: 'tag-blue',
  tagText: '50+ Acts',
  href: '/bare-acts',
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_1037e5905-1772077936982.png",
  imageAlt:
  'Stack of thick legal books with worn leather covers on a dark wooden desk, dim warm lamp light, deep shadows',
  topics: ['Constitution of India', 'Indian Penal Code', 'Contract Act', 'CrPC'],
  icon: 'BookOpenIcon'
},
{
  id: 'case-laws',
  title: 'Case Laws',
  subtitle: 'Landmark Judgments',
  description:
  'Supreme Court and High Court decisions that shaped Indian law — summarised with facts, issues, and significance in simple language.',
  gradient: 'bg-gradient-purple',
  gradientText: 'gradient-text-purple',
  borderColor: 'rgba(123, 97, 255, 0.25)',
  shadowColor: 'rgba(123, 97, 255, 0.2)',
  tag: 'tag-purple',
  tagText: '100+ Cases',
  href: '/case-laws',
  image:
  "https://images.unsplash.com/photo-1629669913915-d5a0227bfd60",
  imageAlt:
  'Supreme Court of India building with dramatic overcast sky, dark stone columns, deep shadows across the facade',
  topics: ['Kesavananda Bharati', 'Maneka Gandhi', 'ADM Jabalpur', 'Vishaka'],
  icon: 'ScaleIcon'
}];


export default function FeatureCards() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-12 reveal">
        <span className="tag-blue text-xs font-semibold px-3 py-1 inline-block mb-4">
          What We Cover
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
          Two pillars of{' '}
          <span className="gradient-text-blue">Indian Law</span>
        </h2>
        <p className="text-secondary mt-3 max-w-xl mx-auto text-base">
          Start with the statutes, understand through the cases.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {features.map((feat, i) =>
        <div
          key={feat.id}
          className={`feature-card gradient-border-blue ${i === 1 ? 'gradient-border-purple' : ''} reveal reveal-delay-${i + 1} ${
          active === feat.id ? 'active' : ''}`
          }
          style={{
            boxShadow:
            active === feat.id ?
            `0 20px 60px ${feat.shadowColor}, 0 8px 24px rgba(0,0,0,0.08)` :
            undefined
          }}
          onClick={() =>
          setActive(active === feat.id ? null : feat.id)
          }
          role="button"
          tabIndex={0}
          aria-expanded={active === feat.id}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setActive(active === feat.id ? null : feat.id);
            }
          }}>
          
            {/* Image */}
            <div className="relative h-52 sm:h-64 rounded-t-3xl overflow-hidden">
              <AppImage
              src={feat.image}
              alt={feat.imageAlt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-foreground/25 to-transparent" />
              {/* Tag on image */}
              <div className="absolute top-4 left-4">
                <span className={`${feat.tag} text-xs font-semibold px-3 py-1`}>
                  {feat.tagText}
                </span>
              </div>
              {/* Title overlay */}
              <div className="absolute bottom-4 left-5 right-5">
                <div className="flex items-center gap-2 mb-1">
                  <Icon name={feat.icon as 'BookOpenIcon'} size={18} className="text-white/80" />
                  <span className="text-white/70 text-xs font-medium uppercase tracking-wider">
                    {feat.subtitle}
                  </span>
                </div>
                <h3 className="font-display text-3xl font-semibold text-white">
                  {feat.title}
                </h3>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 bg-white rounded-b-3xl">
              <p className="text-secondary text-sm leading-relaxed mb-4">
                {feat.description}
              </p>

              {/* Topics */}
              <div className="flex flex-wrap gap-2 mb-5">
                {feat.topics.map((topic) =>
              <span
                key={topic}
                className="text-xs px-3 py-1 rounded-full bg-bg text-secondary font-medium border border-black/5">
                
                    {topic}
                  </span>
              )}
              </div>

              {/* Expand content */}
              <div className={`expand-content ${active === feat.id ? 'open' : ''}`}>
                <div className="pt-2 pb-4 border-t border-black/5">
                  <p className="text-sm text-secondary leading-relaxed">
                    {feat.id === 'bare-acts' ? 'Each act is broken down into its most important sections, with real-world examples and easy-to-understand explanations. No legal jargon — just clear, structured knowledge for students and curious citizens alike.' : 'Every case summary includes the parties involved, the key legal question, the court\'s decision, and why it matters today. Perfect for exam preparation or understanding your constitutional rights.'}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <Link
              href={feat.href}
              className={`${i === 0 ? 'btn-gradient-blue' : 'btn-gradient-purple'} inline-flex items-center gap-2 text-sm px-6 py-2.5`}
              onClick={(e) => e.stopPropagation()}>
              
                Browse {feat.title}
                <Icon name="ArrowRightIcon" size={14} className="text-white" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>);

}
