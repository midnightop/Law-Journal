'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface CaseLaw {
  id: string;
  name: string;
  citation: string;
  court: string;
  year: number;
  category: string;
  categoryType: 'blue' | 'purple';
  oneLiner: string;
  facts: string;
  issue: string;
  held: string;
  significance: string;
  gradient: string;
  image: string;
  imageAlt: string;
}

const caseLaws: CaseLaw[] = [
{
  id: 'kesavananda',
  name: 'Kesavananda Bharati v. State of Kerala',
  citation: 'AIR 1973 SC 1461',
  court: 'Supreme Court of India',
  year: 1973,
  category: 'Constitutional Law',
  categoryType: 'blue',
  oneLiner: 'Parliament cannot amend the basic structure of the Constitution.',
  facts:
  'Swami Kesavananda Bharati, the head of a mutt in Kerala, challenged state land reform laws that restricted his right to manage religious property. The case escalated to a 13-judge bench examining the limits of Parliament\'s power to amend the Constitution.',
  issue:
  'Does Parliament have unlimited power to amend the Constitution under Article 368? Can it alter or destroy fundamental rights?',
  held:
  'By a 7:6 majority, the Supreme Court held that Parliament can amend any part of the Constitution but cannot alter its "basic structure." The basic structure includes supremacy of the Constitution, republican and democratic form of government, secularism, separation of powers, and judicial review.',
  significance:
  'This is arguably the most important judgment in Indian constitutional history. It created a judicial check on Parliament\'s amending power and has been used to strike down numerous constitutional amendments since.',
  gradient: 'linear-gradient(135deg, #007AFF 0%, #00C2FF 100%)',
  image:
  "https://images.unsplash.com/photo-1627818224799-6ec3a3fe621e",
  imageAlt:
  'Indian Supreme Court building with dramatic overcast sky, dark stone columns, deep shadows across the ornate facade'
},
{
  id: 'maneka',
  name: 'Maneka Gandhi v. Union of India',
  citation: 'AIR 1978 SC 597',
  court: 'Supreme Court of India',
  year: 1978,
  category: 'Fundamental Rights',
  categoryType: 'purple',
  oneLiner: 'Article 21 protects not just life, but a life with dignity and due process.',
  facts:
  'Maneka Gandhi\'s passport was impounded by the government without giving her any reasons, under the Passport Act 1967. She challenged this as a violation of her right to personal liberty under Article 21.',
  issue:
  'Does Article 21 require that the procedure established by law must be fair, just, and reasonable? Is the right to travel abroad a fundamental right?',
  held:
  'The Supreme Court overruled the earlier A.K. Gopalan case. It held that Articles 14, 19, and 21 are not watertight compartments but form a golden triangle. Any procedure depriving a person of life or liberty must be fair, just, and reasonable — not merely any procedure the law prescribes.',
  significance:
  'Maneka Gandhi transformed Article 21 from a limited protection into the most expansive fundamental right. It paved the way for recognising rights to education, health, clean environment, and legal aid as part of Article 21.',
  gradient: 'linear-gradient(135deg, #7B61FF 0%, #FF4D6D 100%)',
  image:
  "https://images.unsplash.com/photo-1663220134599-414e41066d79",
  imageAlt:
  'Vintage Indian passport document on dark mahogany desk, low key atmospheric lighting, deep shadows'
},
{
  id: 'vishaka',
  name: 'Vishaka v. State of Rajasthan',
  citation: 'AIR 1997 SC 3011',
  court: 'Supreme Court of India',
  year: 1997,
  category: 'Gender Justice',
  categoryType: 'purple',
  oneLiner: 'The Supreme Court created sexual harassment law because Parliament had not.',
  facts:
  'Bhanwari Devi, a social worker in Rajasthan, was gang-raped while trying to prevent a child marriage. Her attackers were acquitted. Women\'s rights groups filed a PIL challenging the absence of laws on workplace sexual harassment.',
  issue:
  'In the absence of domestic legislation, what rights do working women have against sexual harassment? Can the Supreme Court fill this legislative vacuum?',
  held:
  'The Supreme Court laid down the Vishaka Guidelines — a set of binding directions on employers to prevent and redress sexual harassment at the workplace. These had the force of law until Parliament enacted the POSH Act in 2013.',
  significance:
  'Vishaka is a landmark exercise of the Supreme Court\'s power under Article 32 to protect fundamental rights in the absence of legislation. It directly led to the Prevention of Sexual Harassment (POSH) Act, 2013.',
  gradient: 'linear-gradient(135deg, #FF4D6D 0%, #7B61FF 100%)',
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_164629daa-1772151102910.png",
  imageAlt:
  'Scales of justice on a dark mahogany desk, dramatic side lighting, deep shadows, atmospheric law office'
},
{
  id: 'shreya-singhal',
  name: 'Shreya Singhal v. Union of India',
  citation: 'AIR 2015 SC 1523',
  court: 'Supreme Court of India',
  year: 2015,
  category: 'Cyber Law',
  categoryType: 'blue',
  oneLiner: 'Section 66A of the IT Act was unconstitutional — free speech online is protected.',
  facts:
  'Two Mumbai girls were arrested under Section 66A of the IT Act for posting comments on Facebook criticising the shutdown of Mumbai after Bal Thackeray\'s death. This sparked a national debate. Shreya Singhal, a law student, filed a PIL challenging Section 66A.',
  issue:
  'Does Section 66A of the IT Act, which punishes "offensive" online speech, violate the right to freedom of speech and expression under Article 19(1)(a)?',
  held:
  'The Supreme Court struck down Section 66A as unconstitutional. The terms "grossly offensive," "menacing," and "inconvenience" were found to be vague and overbroad. The provision had no proximate relationship with any of the grounds under Article 19(2) that can restrict speech.',
  significance:
  'Shreya Singhal is the most important digital rights judgment in India. It established that online speech enjoys the same constitutional protection as offline speech and that vague restrictions on speech will not survive judicial scrutiny.',
  gradient: 'linear-gradient(135deg, #007AFF 0%, #7B61FF 100%)',
  image:
  "https://images.unsplash.com/photo-1710526551544-791bbcbc3dc7",
  imageAlt:
  'Dark laptop screen with social media interface in a dim room, atmospheric blue glow, deep shadows around the device'
},
{
  id: 'navtej-johar',
  name: 'Navtej Singh Johar v. Union of India',
  citation: 'AIR 2018 SC 4321',
  court: 'Supreme Court of India',
  year: 2018,
  category: 'Equality & Dignity',
  categoryType: 'purple',
  oneLiner: 'Section 377 IPC was struck down — criminalising consensual same-sex relations is unconstitutional.',
  facts:
  'A group of petitioners including dancer Navtej Singh Johar and hotelier Aman Nath challenged Section 377 of the IPC, which criminalised consensual same-sex relations between adults. The Supreme Court had earlier upheld Section 377 in the Suresh Kumar Koushal case (2013).',
  issue:
  'Does Section 377 of the IPC, in so far as it criminalises consensual same-sex conduct between adults, violate Articles 14, 15, 19, and 21 of the Constitution?',
  held:
  'A five-judge constitutional bench unanimously struck down Section 377 to the extent it criminalised consensual same-sex relations between adults. The court held that sexual orientation is a natural and innate part of identity, and the Constitution protects the right to love and the right to be who you are.',
  significance:
  'Navtej Johar is one of the most significant judgments on equality and dignity in Indian constitutional history. It overruled Suresh Kumar Koushal and affirmed that the Constitution is a living document that must be read to protect the rights of all citizens.',
  gradient: 'linear-gradient(135deg, #7B61FF 0%, #00C2FF 100%)',
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_1d7575455-1775588791438.png",
  imageAlt:
  'Grand Supreme Court of India building at twilight with dramatic sky, dark stone facade, deep architectural shadows'
},
{
  id: 'arnesh-kumar',
  name: 'Arnesh Kumar v. State of Bihar',
  citation: 'AIR 2014 SC 2756',
  court: 'Supreme Court of India',
  year: 2014,
  category: 'Criminal Procedure',
  categoryType: 'blue',
  oneLiner: 'Police cannot arrest automatically — they must apply their mind before every arrest.',
  facts:
  'Arnesh Kumar was accused under Section 498A IPC (dowry harassment) and Section 4 of the Dowry Prohibition Act. He sought anticipatory bail. The case highlighted the widespread misuse of Section 498A to make automatic arrests without proper investigation.',
  issue:
  'Is a police officer required to apply their mind before making an arrest for offences punishable with less than 7 years imprisonment? What are the safeguards against arbitrary arrest?',
  held:
  'The Supreme Court held that arrest is not mandatory even for cognizable offences. Police officers must satisfy themselves that arrest is necessary — to prevent tampering with evidence, repetition of offence, or to ensure presence at trial. Magistrates must also apply their mind before authorising detention.',
  significance:
  'Arnesh Kumar created a checklist that police must follow before arresting someone in less-serious offences. It has significantly reduced arbitrary arrests and has been widely applied in Section 498A cases and other non-heinous offences.',
  gradient: 'linear-gradient(135deg, #00C2FF 0%, #007AFF 100%)',
  image:
  "https://images.unsplash.com/photo-1568621201302-a12a46662cf4",
  imageAlt:
  'Police station exterior at night with harsh institutional lighting, dark surroundings, grey concrete walls'
}];


const categories = ['All', 'Constitutional Law', 'Fundamental Rights', 'Gender Justice', 'Cyber Law', 'Equality & Dignity', 'Criminal Procedure'];

export default function CaseLawsGrid() {
  const [activeCase, setActiveCase] = useState<string | null>(null);
  const [filter, setFilter] = useState('All');
  const [activeTab, setActiveTab] = useState<Record<string, 'facts' | 'held' | 'significance'>>({});

  const filtered = filter === 'All' ? caseLaws : caseLaws.filter((c) => c.category === filter);

  const getTab = (id: string): 'facts' | 'held' | 'significance' =>
  activeTab[id] || 'facts';

  const setTab = (id: string, tab: 'facts' | 'held' | 'significance') => {
    setActiveTab((prev) => ({ ...prev, [id]: tab }));
  };

  return (
    <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {categories.map((cat) =>
        <button
          key={cat}
          onClick={() => {
            setFilter(cat);
            setActiveCase(null);
          }}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          filter === cat ?
          'bg-gradient-purple text-white shadow-sm' :
          'bg-white border border-black/7 text-secondary hover:text-foreground hover:border-accent/30'}`
          }>
          
            {cat}
          </button>
        )}
      </div>

      {/* Grid — 3 cols, 2 rows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((c, i) =>
        <div
          key={c.id}
          className={`card-base cursor-pointer overflow-hidden reveal reveal-delay-${Math.min(i + 1, 5)} ${
          activeCase === c.id ? 'ring-2 ring-accent/30' : ''}`
          }
          onClick={() => setActiveCase(activeCase === c.id ? null : c.id)}
          role="button"
          tabIndex={0}
          aria-expanded={activeCase === c.id}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setActiveCase(activeCase === c.id ? null : c.id);
            }
          }}>
          
            {/* Image */}
            <div className="relative h-40 overflow-hidden">
              <AppImage
              src={c.image}
              alt={c.imageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
              {/* Year badge */}
              <div className="absolute top-3 right-3">
                <span className="text-xs font-bold text-white/90 bg-black/30 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                  {c.year}
                </span>
              </div>
              {/* Category */}
              <div className="absolute top-3 left-3">
                <span
                className={`${
                c.categoryType === 'blue' ? 'tag-blue' : 'tag-purple'} text-xs font-semibold px-2.5 py-0.5 bg-white/90 backdrop-blur-sm`
                }>
                
                  {c.category}
                </span>
              </div>
            </div>

            <div className="p-5">
              {/* Case name */}
              <h2 className="font-display text-base font-semibold text-foreground leading-snug mb-1 line-clamp-2">
                {c.name}
              </h2>

              {/* Citation */}
              <p className="text-xs text-muted mb-3 font-mono">
                {c.citation} · {c.court}
              </p>

              {/* One-liner */}
              <div
              className="p-3 rounded-xl mb-4"
              style={{
                background: c.categoryType === 'blue' ? 'linear-gradient(135deg, rgba(0,122,255,0.06) 0%, rgba(0,194,255,0.06) 100%)' : 'linear-gradient(135deg, rgba(123,97,255,0.06) 0%, rgba(255,77,109,0.06) 100%)',
                border: `1px solid ${c.categoryType === 'blue' ? 'rgba(0,122,255,0.12)' : 'rgba(123,97,255,0.12)'}`
              }}>
              
                <p className="text-xs font-medium text-foreground leading-relaxed italic">
                  "{c.oneLiner}"
                </p>
              </div>

              {/* Expand toggle */}
              <button
              className={`flex items-center gap-2 text-xs font-semibold transition-colors ${
              activeCase === c.id ? 'text-accent' : 'text-muted hover:text-accent'}`
              }
              onClick={(e) => {
                e.stopPropagation();
                setActiveCase(activeCase === c.id ? null : c.id);
              }}>
              
                <Icon
                name={activeCase === c.id ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                size={14}
                className={activeCase === c.id ? 'text-accent' : 'text-muted'} />
              
                {activeCase === c.id ? 'Hide details' : 'Read full case'}
              </button>

              {/* Expanded content */}
              <div className={`expand-content ${activeCase === c.id ? 'open' : ''}`}>
                <div className="pt-4 border-t border-black/5 mt-3">
                  {/* Tab nav */}
                  <div className="flex gap-1 mb-4 bg-bg rounded-xl p-1">
                    {(['facts', 'held', 'significance'] as const).map((tab) =>
                  <button
                    key={tab}
                    onClick={(e) => {
                      e.stopPropagation();
                      setTab(c.id, tab);
                    }}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 capitalize ${
                    getTab(c.id) === tab ?
                    c.categoryType === 'blue' ? 'bg-primary text-white shadow-sm' : 'bg-accent text-white shadow-sm' : 'text-muted hover:text-foreground'}`
                    }>
                    
                        {tab === 'held' ? 'Judgment' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                  )}
                  </div>

                  {/* Tab content */}
                  <div className="text-xs text-secondary leading-relaxed">
                    {getTab(c.id) === 'facts' &&
                  <div>
                        <p className="font-semibold text-foreground mb-1.5 text-xs uppercase tracking-wide">
                          Background
                        </p>
                        <p>{c.facts}</p>
                        <p className="mt-2 font-medium text-foreground">{c.issue}</p>
                      </div>
                  }
                    {getTab(c.id) === 'held' &&
                  <div>
                        <p className="font-semibold text-foreground mb-1.5 text-xs uppercase tracking-wide">
                          The Court Held
                        </p>
                        <p>{c.held}</p>
                      </div>
                  }
                    {getTab(c.id) === 'significance' &&
                  <div>
                        <p className="font-semibold text-foreground mb-1.5 text-xs uppercase tracking-wide">
                          Why It Matters
                        </p>
                        <p>{c.significance}</p>
                      </div>
                  }
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {filtered.length === 0 &&
      <div className="text-center py-20 text-muted">
          <Icon name="FaceFrownIcon" size={40} className="text-muted mx-auto mb-3" />
          <p className="text-base font-medium">No cases found for this category.</p>
        </div>
      }
    </section>);

    }
