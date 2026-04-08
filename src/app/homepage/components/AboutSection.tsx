import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Section label */}
      <div className="text-center mb-10 reveal">
        <span className="tag-blue text-xs font-semibold px-3 py-1 inline-block mb-3">
          About the Founder
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
          The person behind the journal
        </h2>
      </div>
      {/* Glass card */}
      <div className="reveal max-w-3xl mx-auto">
        <div
          className="glass rounded-4xl overflow-hidden shadow-glass"
          style={{ border: '1px solid rgba(0,122,255,0.12)' }}>
          
          <div className="flex flex-col md:flex-row">
            {/* Photo side */}
            <div className="relative md:w-64 h-64 md:h-auto flex-shrink-0">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1ce60a699-1763292378021.png"
                alt="Young Indian male law student in formal attire, bright natural light, clean white background, professional portrait"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 256px" />
              
              {/* Gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/30 md:bg-gradient-to-b md:from-transparent md:to-white/20" />
            </div>

            {/* Content side */}
            <div className="p-8 flex flex-col justify-center">
              {/* Quote mark */}
              <div className="text-5xl font-display gradient-text-blue leading-none mb-3 select-none">
                "
              </div>

              <p className="font-display text-lg italic text-foreground leading-relaxed mb-6">
                I started this journal because I struggled with the same thing every law student does — dense, inaccessible language in statutes and judgments. If I can understand it, I want to make sure you can too.
              </p>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-primary/30 via-accent/30 to-transparent mb-5" />

              {/* Identity */}
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-blue">
                  
                  <Icon name="AcademicCapIcon" size={22} className="text-white" />
                </div>
                <div>
                  <div className="font-display text-xl font-semibold text-foreground">
                    Reyansh
                  </div>
                  <div className="text-sm text-secondary mt-0.5">
                    Law Student · Surendranath Law College
                  </div>
                  <div className="text-xs text-muted mt-0.5">
                    University of Calcutta, West Bengal
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {[
                'Constitutional Law',
                'Criminal Law',
                'Civil Procedure',
                'Legal Writing']?.
                map((tag) =>
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-bg border border-black/6 text-secondary font-medium">
                  
                    {tag}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
