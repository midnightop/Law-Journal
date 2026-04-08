import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function BareActsHero() {
  return (
    <section
      className="relative pt-28 pb-14 px-4 sm:px-6 text-center overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #EEF4FF 0%, #F5F7FA 100%)',
      }}
    >
      {/* Glow */}
      <div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,122,255,0.15) 0%, transparent 70%)',
          top: '0%',
          left: '50%',
          transform: 'translateX(-50%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary/20 shadow-sm mb-6">
          <Icon name="BookOpenIcon" size={14} className="text-primary" />
          <span className="text-xs font-semibold text-primary tracking-wide uppercase">
            Bare Acts
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground tracking-tight mb-4">
          Indian{' '}
          <span className="gradient-text-blue">Bare Acts</span>
          <br />
          <span className="font-light italic">Made Simple</span>
        </h1>

        <p className="text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-4">
          Every major Indian statute — section by section, in plain language. No legal jargon. Just clear, structured knowledge.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
          {[
            { icon: 'BookOpenIcon', value: '6 Acts', label: 'Covered' },
            { icon: 'DocumentTextIcon', value: '200+', label: 'Sections' },
            { icon: 'AcademicCapIcon', value: 'Free', label: 'Always' },
          ].map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/6 shadow-sm"
            >
              <Icon name={s.icon as 'BookOpenIcon'} size={14} className="text-primary" />
              <span className="font-semibold text-sm text-foreground">{s.value}</span>
              <span className="text-xs text-muted">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
