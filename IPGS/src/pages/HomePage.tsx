import { useState, useEffect } from 'react';
import { ArrowRight, Play, CheckCircle2, Users, BookOpen, Cpu, Award } from 'lucide-react';
import { buildWhatsAppUrl, PROGRAMMES } from '../lib/constants';
import { useReveal } from '../hooks/useReveal';

interface HomePageProps {
  setPage: (page: string) => void;
  darkMode: boolean;
}

const stats = [
  { icon: CheckCircle2, label: '100% Flexible Learning', desc: 'Online & on-campus options' },
  { icon: Award, label: 'MQA Recognised', desc: 'Ministry accredited programmes' },
  { icon: Users, label: 'Industry Experts', desc: 'Academic & practitioner faculty' },
  { icon: Cpu, label: 'AI-Enhanced Learning', desc: 'Future-ready research ecosystem' },
];

const HERO_IMAGES = [
  'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
  'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
  'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
];

export default function HomePage({ setPage, darkMode }: HomePageProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const sectionRef = useReveal();

  useEffect(() => {
    const t = setInterval(() => setImageIndex((i) => (i + 1) % HERO_IMAGES.length), 7000);
    return () => clearInterval(t);
  }, []);

  const handleNav = (page: string) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div ref={sectionRef} className={darkMode ? 'dark' : ''}>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background images */}
        {HERO_IMAGES.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${src})`,
              opacity: i === imageIndex ? 1 : 0,
            }}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-navy/85 via-dark-navy/70 to-dark-navy/90" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-xs font-medium text-white/80 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-light-gold animate-pulse-slow" />
              MQA Recognised · Innovative University College, Malaysia
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6 animate-fade-up">
              Empowering Professionals Through{' '}
              <span className="gold-shimmer">Postgraduate Excellence</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl animate-fade-up animation-delay-200">
              Advance your career through internationally recognised postgraduate programmes designed for working professionals.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-up animation-delay-300">
              <button
                onClick={() => handleNav('programmes')}
                className="btn-gold text-sm md:text-base px-8 py-3.5"
              >
                Explore Programmes
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={buildWhatsAppUrl('Hello, I would like to book a free consultation with IPGS advisor.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white text-sm md:text-base px-8 py-3.5"
              >
                <Play className="w-4 h-4 fill-white" />
                Free Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="bg-dark-navy/80 backdrop-blur-md border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-white/10">
                {stats.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex items-center gap-3 md:px-8 first:pl-0 last:pr-0">
                    <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <div className="text-white text-xs font-semibold leading-tight">{label}</div>
                      <div className="text-white/50 text-[10px] leading-tight mt-0.5">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Programmes Preview ── */}
      <section className={`py-20 md:py-28 ${darkMode ? 'bg-dark-navy' : 'bg-cream'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <div className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Our Programmes</div>
            <h2 className={`section-title mb-4 ${darkMode ? 'text-white' : 'text-dark-grey'}`}>
              World-Class Postgraduate Education
            </h2>
            <p className={`section-subtitle mx-auto ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>
              Globally recognised programmes designed around the realities of working professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROGRAMMES.map((programme, i) => (
              <div
                key={programme.code}
                className={`reveal group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                  darkMode
                    ? 'bg-dark-grey border border-white/10 hover:border-gold/30'
                    : 'bg-white border border-gray-100 shadow-premium hover:shadow-premium-hover'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {programme.badge && (
                  <div className="absolute top-4 right-4 bg-gold text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {programme.badge}
                  </div>
                )}
                <div className="p-7">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-navy to-light-navy flex items-center justify-center mb-5">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">{programme.code}</div>
                  <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-dark-grey'}`}>
                    {programme.name}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-5 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>
                    {programme.tagline}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {programme.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                        <span className={`text-xs ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`pt-5 border-t flex items-center justify-between ${darkMode ? 'border-white/10' : 'border-gray-100'}`}>
                    <div>
                      <div className={`text-[10px] uppercase tracking-wider ${darkMode ? 'text-white/40' : 'text-secondary-grey'}`}>From</div>
                      <div className={`text-base font-bold ${darkMode ? 'text-white' : 'text-dark-grey'}`}>{programme.feesFrom}</div>
                    </div>
                    <button
                      onClick={() => handleNav('programmes')}
                      className="flex items-center gap-1.5 text-navy text-xs font-semibold hover:gap-2.5 transition-all"
                    >
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 reveal">
            <button
              onClick={() => handleNav('programmes')}
              className="btn-primary"
            >
              View All Programmes
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Why Choose IPGS Preview ── */}
      <section className={`py-20 md:py-24 relative overflow-hidden ${darkMode ? 'bg-dark-grey' : 'bg-warm-cream'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-navy/5 via-transparent to-gold/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="reveal">
              <div className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Why IPGS</div>
              <h2 className={`section-title mb-6 ${darkMode ? 'text-white' : 'text-dark-grey'}`}>
                A Premium Academic Experience, Built for You
              </h2>
              <p className={`text-base leading-relaxed mb-8 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>
                IPGS delivers a postgraduate experience that blends academic rigour with professional flexibility — preparing you to lead in your field.
              </p>

              {[
                'MQA Recognised Programmes with government and industry credibility',
                'Flexible weekend & online schedules for busy professionals',
                'Dedicated supervisors committed to your completion',
                'AI-integrated learning tools and research ecosystem',
                'Strong academic and industry networking opportunities',
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 mb-4 reveal`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-gold" />
                  </div>
                  <span className={`text-sm ${darkMode ? 'text-white/70' : 'text-dark-grey'}`}>{item}</span>
                </div>
              ))}

              <button
                onClick={() => handleNav('why')}
                className="btn-primary mt-4"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Image */}
            <div className="reveal relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80"
                  alt="IPGS campus"
                  className="w-full h-80 md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <div className="grid grid-cols-3 gap-4 text-center text-white">
                      {[
                        { n: '1,000+', l: 'Graduates' },
                        { n: '95%', l: 'Employed' },
                        { n: '18+', l: 'Industries' },
                      ].map(({ n, l }) => (
                        <div key={l}>
                          <div className="text-xl font-bold text-light-gold">{n}</div>
                          <div className="text-xs text-white/60">{l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gold text-white rounded-2xl p-4 shadow-gold animate-float">
                <Award className="w-6 h-6 mb-1" />
                <div className="text-[10px] font-bold uppercase">MQA</div>
                <div className="text-[9px] text-white/80">Accredited</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── YLP Teaser ── */}
      <section className={`py-20 md:py-24 relative overflow-hidden ${darkMode ? 'bg-dark-navy' : 'bg-ivory'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`relative rounded-3xl overflow-hidden ${darkMode ? 'bg-navy/50 border border-white/10' : 'bg-gradient-to-r from-navy to-dark-navy'} reveal`}>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold rounded-full translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-light-gold rounded-full -translate-x-1/2 translate-y-1/2" />
            </div>
            <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-white">
                <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-3 py-1.5 text-xs font-medium text-light-gold mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-light-gold" />
                  For Aspiring Academics
                </div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                  Young Lecturer Program
                </h2>
                <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 max-w-xl">
                  A structured development pathway equipping graduates and professionals with the pedagogical skills, AI knowledge and regulatory preparation for a career in higher education.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleNav('ylp')}
                    className="btn-gold text-sm"
                  >
                    Explore YLP <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href={buildWhatsAppUrl('Hello, I am interested in the Young Lecturer Program (YLP). Please provide more information.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-white text-sm"
                  >
                    WhatsApp Enquiry
                  </a>
                </div>
              </div>
              <div className="shrink-0 hidden md:block">
                <img
                  src="https://images.pexels.com/photos/5428258/pexels-photo-5428258.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"
                  alt="Young Lecturer Program"
                  className="w-64 h-64 object-cover rounded-2xl border-4 border-white/10 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Admission Teaser ── */}
      <section className={`py-20 md:py-28 ${darkMode ? 'bg-dark-grey' : 'bg-cream'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-gold mb-3 reveal">Admission</div>
          <h2 className={`section-title mb-4 reveal ${darkMode ? 'text-white' : 'text-dark-grey'}`}>
            Start Your Journey in 5 Simple Steps
          </h2>
          <p className={`section-subtitle mx-auto mb-12 reveal ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>
            Our streamlined admission process gets you enrolled and learning as fast as possible.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-10">
            {[
              { n: '01', title: 'Choose Programme' },
              { n: '02', title: 'Submit Application' },
              { n: '03', title: 'Consultation' },
              { n: '04', title: 'Offer Letter' },
              { n: '05', title: 'Registration' },
            ].map((step, i) => (
              <div
                key={step.n}
                className={`reveal group flex flex-col items-center p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                  darkMode ? 'bg-dark-navy border border-white/10 hover:border-gold/30' : 'bg-white hover:bg-warm-cream shadow-premium hover:shadow-premium-hover'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy to-light-navy text-white flex items-center justify-center text-sm font-bold mb-3 group-hover:scale-110 transition-transform">
                  {step.n}
                </div>
                <div className={`text-xs font-semibold text-center leading-tight ${darkMode ? 'text-white/80' : 'text-dark-grey'}`}>
                  {step.title}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => handleNav('admissions')}
            className="btn-primary reveal"
          >
            View Full Admission Guide
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section className="bg-gradient-to-r from-dark-navy via-navy to-dark-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-light-gold mb-4 reveal">Take the Next Step</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 reveal leading-tight">
            Your Postgraduate Journey Starts Here
          </h2>
          <p className="text-white/60 text-base md:text-lg mb-10 max-w-xl mx-auto reveal">
            Thousands of professionals have transformed their careers with IPGS. Join them today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
            <a
              href={buildWhatsAppUrl('Hello, I would like to apply for a postgraduate programme at IPGS.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => handleNav('contact')}
              className="btn-outline-white"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
