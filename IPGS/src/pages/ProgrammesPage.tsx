import { useState } from 'react';
import {
  BookOpen, CheckCircle2, Clock, DollarSign, Download, ArrowRight,
  GraduationCap, Lightbulb, Target, Users, ChevronDown, ChevronUp
} from 'lucide-react';
import { PROGRAMMES, buildWhatsAppUrl } from '../lib/constants';
import { useReveal } from '../hooks/useReveal';
import ApplicationModal from '../components/ApplicationModal';
import BrochureModal from '../components/BrochureModal';

interface ProgrammesPageProps {
  darkMode: boolean;
}

const PROG_IMAGES: Record<string, string> = {
  MBA: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
  MBM: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
  PhD: 'https://images.pexels.com/photos/8471831/pexels-photo-8471831.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
};

export default function ProgrammesPage({ darkMode }: ProgrammesPageProps) {
  const [expanded, setExpanded] = useState<string>('MBA');
  const [applyModal, setApplyModal] = useState<string | null>(null);
  const [brochureModal, setBrochureModal] = useState<string | null>(null);
  const sectionRef = useReveal();

  return (
    <div ref={sectionRef} className={`min-h-screen pt-20 ${darkMode ? 'bg-dark-navy text-white' : 'bg-cream text-dark-grey'}`}>
      {/* Header */}
      <section className={`relative py-20 md:py-28 overflow-hidden ${darkMode ? 'bg-dark-grey' : 'bg-cream'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-navy/10 via-transparent to-gold/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-gold mb-4 reveal">Our Programmes</div>
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 reveal ${darkMode ? 'text-white' : 'text-dark-grey'}`}>
            Postgraduate Programmes
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto reveal leading-relaxed ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>
            MQA-recognised postgraduate programmes crafted for working professionals in Malaysia and beyond.
          </p>
        </div>
      </section>

      {/* Programme Cards */}
      <section className={`py-20 md:py-24 ${darkMode ? 'bg-dark-navy' : 'bg-cream'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {PROGRAMMES.map((prog, idx) => (
            <div
              key={prog.code}
              className={`reveal rounded-3xl overflow-hidden border transition-all duration-500 ${
                darkMode ? 'bg-dark-grey border-white/10' : 'bg-white border-gray-100 shadow-premium'
              } ${expanded === prog.code ? 'border-gold/30' : ''}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Top section - always visible */}
              <div
                className="flex flex-col md:flex-row cursor-pointer"
                onClick={() => setExpanded(expanded === prog.code ? '' : prog.code)}
              >
                {/* Image */}
                <div className="md:w-72 h-52 md:h-auto shrink-0 overflow-hidden">
                  <img
                    src={PROG_IMAGES[prog.code]}
                    alt={prog.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 p-7 md:p-8">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-gold bg-gold/10 rounded-full px-3 py-1 uppercase tracking-wider">{prog.code}</span>
                        {prog.badge && (
                          <span className="text-[10px] font-bold text-white bg-gold rounded-full px-2.5 py-1 uppercase tracking-wider">{prog.badge}</span>
                        )}
                      </div>
                      <h2 className={`text-xl md:text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-dark-grey'}`}>{prog.name}</h2>
                      <p className={`text-sm mb-4 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>{prog.tagline}</p>
                    </div>
                    <div className={`p-2 rounded-full shrink-0 ${darkMode ? 'bg-white/10' : 'bg-gray-100'}`}>
                      {expanded === prog.code ? (
                        <ChevronUp className={`w-5 h-5 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`} />
                      ) : (
                        <ChevronDown className={`w-5 h-5 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`} />
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
                    {prog.highlights.map(({ label, value }) => (
                      <div key={label}>
                        <div className={`text-[10px] uppercase tracking-wider mb-0.5 ${darkMode ? 'text-white/40' : 'text-secondary-grey'}`}>{label}</div>
                        <div className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-dark-grey'}`}>{value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={(e) => { e.stopPropagation(); setApplyModal(prog.code); }}
                      className="btn-primary text-xs py-2 px-5"
                    >
                      Apply Now <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setBrochureModal(prog.code); }}
                      className="btn-secondary text-xs py-2 px-5"
                    >
                      <Download className="w-3.5 h-3.5" /> Download Brochure
                    </button>
                    <a
                      href={buildWhatsAppUrl(`Hello, I would like to know more about the ${prog.name} (${prog.code}) programme.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`text-xs font-medium transition-colors ${darkMode ? 'text-white/60 hover:text-white' : 'text-secondary-grey hover:text-dark-grey'}`}
                    >
                      WhatsApp Enquiry
                    </a>
                  </div>
                </div>
              </div>

              {/* Expanded detail */}
              {expanded === prog.code && (
                <div className={`border-t ${darkMode ? 'border-white/10' : 'border-gray-100'} p-7 md:p-10`}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Overview */}
                    <div className="md:col-span-2 space-y-7">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Lightbulb className="w-4 h-4 text-gold" />
                          <h3 className={`text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-white/50' : 'text-secondary-grey'}`}>Programme Overview</h3>
                        </div>
                        <p className={`text-sm leading-relaxed ${darkMode ? 'text-white/70' : 'text-dark-grey/80'}`}>{prog.overview}</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Target className="w-4 h-4 text-gold" />
                          <h3 className={`text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-white/50' : 'text-secondary-grey'}`}>Programme Features</h3>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {prog.features.map((f) => (
                            <li key={f} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                              <span className={`text-sm ${darkMode ? 'text-white/70' : 'text-dark-grey/80'}`}>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                      <div className={`rounded-2xl p-5 ${darkMode ? 'bg-dark-navy border border-white/10' : 'bg-cream'}`}>
                        <div className="flex items-center gap-2 mb-4">
                          <GraduationCap className="w-4 h-4 text-gold" />
                          <h3 className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-dark-grey'}`}>Entry Requirements</h3>
                        </div>
                        <ul className="space-y-2.5">
                          {prog.entryRequirements.map((req) => (
                            <li key={req} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                              <span className={`text-xs leading-relaxed ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={`rounded-2xl p-5 ${darkMode ? 'bg-dark-navy border border-white/10' : 'bg-cream'}`}>
                        <div className="flex items-center gap-2 mb-4">
                          <Clock className="w-4 h-4 text-gold" />
                          <h3 className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-dark-grey'}`}>Duration & Fees</h3>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <div className={`text-[10px] uppercase tracking-wider mb-1 ${darkMode ? 'text-white/40' : 'text-secondary-grey'}`}>Duration</div>
                            <div className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-dark-grey'}`}>{prog.duration}</div>
                          </div>
                          <div>
                            <div className={`text-[10px] uppercase tracking-wider mb-1 ${darkMode ? 'text-white/40' : 'text-secondary-grey'}`}>Fees From</div>
                            <div className="text-base font-bold text-gold">{prog.feesFrom}</div>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => setApplyModal(prog.code)}
                        className="btn-gold w-full justify-center text-sm"
                      >
                        Apply for {prog.code} <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className={`py-20 ${darkMode ? 'bg-dark-grey' : 'bg-cream'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className={`section-title mb-4 ${darkMode ? 'text-white' : 'text-dark-grey'}`}>
              Compare Programmes
            </h2>
            <p className={`section-subtitle mx-auto ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>
              Find the right fit for your goals and career stage.
            </p>
          </div>

          <div className={`reveal rounded-2xl overflow-hidden border ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={`${darkMode ? 'bg-dark-navy' : 'bg-navy'} text-white`}>
                    <th className="text-left text-xs font-semibold uppercase tracking-wider px-6 py-4 w-36">Feature</th>
                    {PROGRAMMES.map((p) => (
                      <th key={p.code} className="text-center text-xs font-semibold uppercase tracking-wider px-6 py-4">
                        {p.code}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className={darkMode ? 'divide-y divide-white/10' : 'divide-y divide-gray-100'}>
                  {[
                    {
                      label: 'Duration',
                      values: PROGRAMMES.map((p) => p.duration.split(' ')[0] + ' ' + p.duration.split(' ')[1]),
                    },
                    {
                      label: 'Mode',
                      values: ['Online & Campus', 'Online & Campus', 'Hybrid Research'],
                    },
                    {
                      label: 'PhD Pathway',
                      values: ['✓', '✓ Direct', 'N/A'],
                    },
                    {
                      label: 'Intake',
                      values: ['3 per year', '3 per year', 'Rolling'],
                    },
                    {
                      label: 'Fees From',
                      values: PROGRAMMES.map((p) => p.feesFrom),
                    },
                  ].map((row, i) => (
                    <tr key={row.label} className={`${i % 2 === 0 ? (darkMode ? 'bg-dark-grey' : 'bg-white') : darkMode ? 'bg-dark-navy/40' : 'bg-cream/50'}`}>
                      <td className={`px-6 py-4 text-xs font-semibold ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>{row.label}</td>
                      {row.values.map((v, j) => (
                        <td key={j} className={`px-6 py-4 text-center text-sm ${darkMode ? 'text-white/80' : 'text-dark-grey'}`}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-16 ${darkMode ? 'bg-dark-navy' : 'bg-cream'}`}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-dark-grey'}`}>
            Not sure which programme is right for you?
          </h2>
          <p className={`text-sm md:text-base mb-8 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>
            Book a free 30-minute consultation with our academic advisors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={buildWhatsAppUrl('Hello, I need guidance on choosing the right postgraduate programme at IPGS.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              WhatsApp Consultation
            </a>
            <button onClick={() => setApplyModal('MBA')} className="btn-primary">
              Apply Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Modals */}
      {applyModal && (
        <ApplicationModal
          programme={applyModal}
          onClose={() => setApplyModal(null)}
          darkMode={darkMode}
        />
      )}
      {brochureModal && (
        <BrochureModal
          programme={brochureModal}
          onClose={() => setBrochureModal(null)}
          darkMode={darkMode}
        />
      )}
    </div>
  );
}
