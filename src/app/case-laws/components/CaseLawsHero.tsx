import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function CaseLawsHero() {
  return (
    <section
      className="relative pt-28 pb-14 px-4 sm:px-6 text-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #F3EEFF 0%, #F5F7FA 100%)',
      }}
    >
      {/* Glow */}
      <div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(123,97,255,0.15) 0%, transparent 70%)',
          top: '0%',
          left: '50%',
          transform: 'translateX(-50%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-accent/20 shadow-sm mb-6">
          <Icon name="ScaleIcon" size={14} className="text-accent" />
          <span className="text-xs font-semibold text-accent tracking-wide uppercase">
            Case Laws
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground tracking-tight mb-4">
          Landmark{' '}
          <span className="gradient-text-purple">Judgments</span>
          <br />
          <span className="font-light italic">That Changed India</span>
        </h1>

        <p className="text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-4">
          Supreme Court and High Court decisions that shaped Indian law — each summarised with facts, legal issues, the court's holding, and why it still matters.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
          {[
            { icon: 'ScaleIcon', value: '6 Cases', label: 'Landmark' },
            { icon: 'BuildingLibraryIcon', value: 'Supreme Court', label: 'Primarily' },
            { icon: 'AcademicCapIcon', value: 'Exam Ready', label: 'Summaries' },
          ].map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/6 shadow-sm"
            >
              <Icon name={s.icon as 'ScaleIcon'} size={14} className="text-accent" />
              <span className="font-semibold text-sm text-foreground">{s.value}</span>
              <span className="text-xs text-muted">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
