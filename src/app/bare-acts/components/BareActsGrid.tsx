'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Section {
  number: string;
  title: string;
  summary: string;
}

interface Act {
  id: string;
  title: string;
  shortTitle: string;
  year: number;
  category: string;
  categoryType: 'blue' | 'purple';
  description: string;
  keyFact: string;
  sections: Section[];
  totalSections: string;
  icon: string;
  gradient: string;
}

const bareActs: Act[] = [
  {
    id: 'constitution',
    title: 'The Constitution of India',
    shortTitle: 'Constitution',
    year: 1950,
    category: 'Constitutional Law',
    categoryType: 'blue',
    description:
      'The supreme law of India. Establishes the framework of fundamental rights, directive principles, fundamental duties, and the structure of government.',
    keyFact: 'Longest written constitution in the world with 448 articles.',
    totalSections: '448 Articles',
    icon: 'BuildingLibraryIcon',
    gradient: 'linear-gradient(135deg, #007AFF 0%, #00C2FF 100%)',
    sections: [
      {
        number: 'Art. 12–35',
        title: 'Fundamental Rights',
        summary:
          'Six categories of rights guaranteed to every citizen — right to equality, freedom, against exploitation, religion, education, and constitutional remedies.',
      },
      {
        number: 'Art. 36–51',
        title: 'Directive Principles',
        summary:
          'Non-justiciable guidelines for the State to achieve social and economic justice. Courts cannot enforce them, but they guide legislation.',
      },
      {
        number: 'Art. 51A',
        title: 'Fundamental Duties',
        summary:
          'Added by the 42nd Amendment — 11 duties every citizen owes to the nation, including respecting the Constitution and promoting harmony.',
      },
      {
        number: 'Art. 245–246',
        title: 'Distribution of Legislative Powers',
        summary:
          'Divides law-making power between Parliament and State Legislatures through the Union List, State List, and Concurrent List.',
      },
    ],
  },
  {
    id: 'ipc',
    title: 'Indian Penal Code, 1860',
    shortTitle: 'IPC',
    year: 1860,
    category: 'Criminal Law',
    categoryType: 'purple',
    description:
      'The main criminal code of India, defining offences and prescribing punishments. Covers everything from theft to murder to sedition.',
    keyFact: 'Drafted by Lord Macaulay. Now substantially replaced by BNS 2023.',
    totalSections: '511 Sections',
    icon: 'ScaleIcon',
    gradient: 'linear-gradient(135deg, #7B61FF 0%, #FF4D6D 100%)',
    sections: [
      {
        number: 'S. 299–304',
        title: 'Culpable Homicide and Murder',
        summary:
          'Section 300 defines murder; Section 299 defines culpable homicide. The difference lies in intention and knowledge — a crucial distinction for sentencing.',
      },
      {
        number: 'S. 378–382',
        title: 'Theft',
        summary:
          'Theft is the dishonest taking of movable property out of someone\'s possession without consent. Punishment: up to 3 years imprisonment.',
      },
      {
        number: 'S. 375–376',
        title: 'Rape',
        summary:
          'Section 375 defines rape; Section 376 prescribes punishment (minimum 7 years). Substantially amended after the 2013 Nirbhaya case.',
      },
      {
        number: 'S. 124A',
        title: 'Sedition',
        summary:
          'Criminalises words or actions that bring hatred or contempt towards the government. Highly controversial — currently under Supreme Court review.',
      },
    ],
  },
  {
    id: 'contract',
    title: 'The Indian Contract Act, 1872',
    shortTitle: 'Contract Act',
    year: 1872,
    category: 'Contract Law',
    categoryType: 'blue',
    description:
      'Governs the formation and enforcement of contracts in India. Defines what makes an agreement legally binding and what remedies exist for breach.',
    keyFact: 'One of the oldest commercial laws still in force in India.',
    totalSections: '238 Sections',
    icon: 'DocumentTextIcon',
    gradient: 'linear-gradient(135deg, #007AFF 0%, #7B61FF 100%)',
    sections: [
      {
        number: 'S. 2(h)',
        title: 'What is a Contract?',
        summary:
          'A contract is an agreement enforceable by law. An agreement = Offer + Acceptance. A contract = Agreement + Enforceability.',
      },
      {
        number: 'S. 10',
        title: 'Essentials of a Valid Contract',
        summary:
          'Free consent, competent parties, lawful consideration, lawful object, and not expressly void. All six must be present for a valid contract.',
      },
      {
        number: 'S. 73',
        title: 'Compensation for Breach',
        summary:
          'When a contract is broken, the party who suffers the breach is entitled to receive compensation for the loss arising naturally from the breach.',
      },
      {
        number: 'S. 182–238',
        title: 'Agency',
        summary:
          'An agent acts on behalf of a principal. The principal is bound by acts of the agent within the scope of authority. Covers creation, authority, and termination.',
      },
    ],
  },
  {
    id: 'crpc',
    title: 'Code of Criminal Procedure, 1973',
    shortTitle: 'CrPC',
    year: 1973,
    category: 'Procedural Law',
    categoryType: 'purple',
    description:
      'The procedural backbone of criminal law in India — how investigations are conducted, trials held, and judgments delivered.',
    keyFact: 'Being replaced by BNSS (Bharatiya Nagarik Suraksha Sanhita) 2023.',
    totalSections: '484 Sections',
    icon: 'ClipboardDocumentListIcon',
    gradient: 'linear-gradient(135deg, #FF4D6D 0%, #7B61FF 100%)',
    sections: [
      {
        number: 'S. 154',
        title: 'First Information Report (FIR)',
        summary:
          'Information given to a police officer about a cognizable offence. The police officer must register it — failure to do so is an offence. Non-cognizable offences require a magistrate\'s order.',
      },
      {
        number: 'S. 41',
        title: 'Arrest Without Warrant',
        summary:
          'Police can arrest without warrant for cognizable offences. Post-Arnesh Kumar (2014), police must justify why arrest is necessary before arresting.',
      },
      {
        number: 'S. 167',
        title: 'Default Bail',
        summary:
          'If the police fail to file a chargesheet within 60/90 days, the accused has an indefeasible right to bail — this cannot be taken away.',
      },
      {
        number: 'S. 313',
        title: 'Examination of Accused',
        summary:
          'The court must examine the accused about incriminating evidence against them. The accused cannot be compelled to answer — protects against self-incrimination.',
      },
    ],
  },
  {
    id: 'evidence',
    title: 'The Indian Evidence Act, 1872',
    shortTitle: 'Evidence Act',
    year: 1872,
    category: 'Evidence Law',
    categoryType: 'blue',
    description:
      'Governs what facts can be proved in court, how they can be proved, and who bears the burden of proof. The foundation of every trial.',
    keyFact: 'Being replaced by Bharatiya Sakshya Adhiniyam (BSA) 2023.',
    totalSections: '167 Sections',
    icon: 'MagnifyingGlassIcon',
    gradient: 'linear-gradient(135deg, #00C2FF 0%, #007AFF 100%)',
    sections: [
      {
        number: 'S. 3',
        title: 'What is Evidence?',
        summary:
          'Evidence includes oral statements of witnesses and documents produced before the court. "Facts in issue" are what the parties dispute.',
      },
      {
        number: 'S. 101–114',
        title: 'Burden of Proof',
        summary:
          'Whoever asserts a fact must prove it. In criminal cases, the prosecution must prove guilt beyond reasonable doubt. In civil cases, the standard is preponderance of probability.',
      },
      {
        number: 'S. 45',
        title: 'Expert Opinion',
        summary:
          'When the court needs help understanding foreign law, science, art, or handwriting, it may receive the opinion of experts in that field as relevant evidence.',
      },
      {
        number: 'S. 65B',
        title: 'Electronic Evidence',
        summary:
          'Electronic records (emails, WhatsApp messages, call records) are admissible if accompanied by a certificate from the person responsible for the device.',
      },
    ],
  },
  {
    id: 'it-act',
    title: 'Information Technology Act, 2000',
    shortTitle: 'IT Act',
    year: 2000,
    category: 'Cyber Law',
    categoryType: 'purple',
    description:
      'India\'s primary legislation for cybercrime and digital transactions. Covers hacking, data protection, digital signatures, and online offences.',
    keyFact: 'Amended significantly in 2008 after the Mumbai terror attacks.',
    totalSections: '94 Sections',
    icon: 'ComputerDesktopIcon',
    gradient: 'linear-gradient(135deg, #7B61FF 0%, #00C2FF 100%)',
    sections: [
      {
        number: 'S. 43',
        title: 'Penalty for Damage to Computer',
        summary:
          'Civil liability for unauthorised access, downloading data, introducing viruses, or disrupting computer systems. Compensation up to ₹1 crore.',
      },
      {
        number: 'S. 66',
        title: 'Computer-Related Offences',
        summary:
          'Criminal punishment for dishonestly or fraudulently doing any act under Section 43. Up to 3 years imprisonment and fine up to ₹5 lakh.',
      },
      {
        number: 'S. 66A',
        title: 'Struck Down: Online Speech',
        summary:
          'Originally criminalised "offensive" online messages. Struck down by the Supreme Court in Shreya Singhal v. Union of India (2015) as unconstitutional.',
      },
      {
        number: 'S. 79',
        title: 'Safe Harbour for Intermediaries',
        summary:
          'Platforms like WhatsApp, Twitter, and Google are not liable for user content if they act as mere conduits and follow due diligence guidelines.',
      },
    ],
  },
];

const categories = ['All', 'Constitutional Law', 'Criminal Law', 'Contract Law', 'Procedural Law', 'Evidence Law', 'Cyber Law'];

export default function BareActsGrid() {
  const [activeAct, setActiveAct] = useState<string | null>(null);
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? bareActs : bareActs.filter((a) => a.category === filter);

  return (
    <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setActiveAct(null);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              filter === cat
                ? 'bg-gradient-blue text-white shadow-sm'
                : 'bg-white border border-black/7 text-secondary hover:text-foreground hover:border-primary/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid — 3 cols, 2 rows (6 cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((act, i) => (
          <div
            key={act.id}
            className={`card-base cursor-pointer overflow-hidden reveal reveal-delay-${Math.min(i + 1, 5)} ${
              activeAct === act.id ? 'ring-2 ring-primary/30' : ''
            }`}
            onClick={() => setActiveAct(activeAct === act.id ? null : act.id)}
            role="button"
            tabIndex={0}
            aria-expanded={activeAct === act.id}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setActiveAct(activeAct === act.id ? null : act.id);
              }
            }}
          >
            {/* Gradient header strip */}
            <div
              className="h-2 w-full"
              style={{ background: act.gradient }}
            />

            <div className="p-6">
              {/* Icon + category */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center"
                  style={{ background: act.gradient }}
                >
                  <Icon name={act.icon as 'BookOpenIcon'} size={18} className="text-white" />
                </div>
                <span
                  className={`${
                    act.categoryType === 'blue' ? 'tag-blue' : 'tag-purple'
                  } text-xs font-semibold px-2.5 py-0.5`}
                >
                  {act.category}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-display text-xl font-semibold text-foreground leading-snug mb-1">
                {act.shortTitle}
              </h2>
              <p className="text-xs text-muted mb-3">
                {act.title} · {act.year} · {act.totalSections}
              </p>

              {/* Description */}
              <p className="text-sm text-secondary leading-relaxed mb-4 line-clamp-3">
                {act.description}
              </p>

              {/* Key fact */}
              <div className="flex items-start gap-2 p-3 rounded-xl bg-bg mb-4">
                <Icon name="LightBulbIcon" size={14} className="text-primary mt-0.5 flex-shrink-0" />
                <p className="text-xs text-secondary leading-relaxed">{act.keyFact}</p>
              </div>

              {/* Expand toggle */}
              <button
                className={`flex items-center gap-2 text-xs font-semibold transition-colors ${
                  activeAct === act.id ? 'text-primary' : 'text-muted hover:text-primary'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveAct(activeAct === act.id ? null : act.id);
                }}
              >
                <Icon
                  name={activeAct === act.id ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                  size={14}
                  className={activeAct === act.id ? 'text-primary' : 'text-muted'}
                />
                {activeAct === act.id ? 'Hide key sections' : 'View key sections'}
              </button>

              {/* Expanded sections */}
              <div className={`expand-content ${activeAct === act.id ? 'open' : ''}`}>
                <div className="pt-4 space-y-3 border-t border-black/5 mt-3">
                  {act.sections.map((sec) => (
                    <div
                      key={sec.number}
                      className="p-3 rounded-xl bg-bg border border-black/4"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`text-xs font-bold ${
                            act.categoryType === 'blue' ? 'text-primary' : 'text-accent'
                          }`}
                        >
                          {sec.number}
                        </span>
                        <span className="text-xs font-semibold text-foreground">
                          {sec.title}
                        </span>
                      </div>
                      <p className="text-xs text-secondary leading-relaxed">
                        {sec.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted">
          <Icon name="FaceFrownIcon" size={40} className="text-muted mx-auto mb-3" />
          <p className="text-base font-medium">No acts found for this category.</p>
        </div>
      )}
    </section>
  );
      }
