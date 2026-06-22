import {
  GraduationCap, Target, ListChecks, BrainCircuit, FileBadge, Laptop, Award,
  ArrowRight, CheckCircle2, Users, Calendar, Clock
} from 'lucide-react';
import { YLP_PROGRAMME, buildWhatsAppUrl } from '../lib/constants';
import { useReveal } from '../hooks/useReveal';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  GraduationCap, Target, ListChecks, BrainCircuit, FileBadge, Laptop, Award,
};

interface YLPPageProps {
  darkMode: boolean;
}

export default function YLPPage({ darkMode }: YLPPageProps) {
  const sectionRef = useReveal();

  return (
    <div ref={sectionRef} className={`min-h-screen pt-20 ${darkMode ? 'bg-dark-navy text-white' : 'bg-cream text-dark-grey'}`}>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5428258/pexels-photo-5428258.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-navy/90 to-dark-navy/95" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 text-xs font-medium text-light-gold mb-8 reveal">
            <GraduationCap className="w-3.5 h-3.5" />
            For Aspiring Academics & Educators
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 reveal leading-tight">
            Young Lecturer Program
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed reveal">
            A structured development pathway equipping graduates and professionals with the pedagogical skills, AI knowledge and regulatory preparation for a career in higher education.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
            <a
              href={buildWhatsAppUrl('Hello, I would like to join the online briefing for the Young Lecturer Program (YLP).')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Join Online Briefing <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={buildWhatsAppUrl('Hello, I would like to know more about the Young Lecturer Program (YLP) at IPGS.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>

      {/* Overview Cards */}
      <section className={`py-20 md:py-24 ${darkMode ? 'bg-dark-grey' : 'bg-cream'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <div className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Programme Highlights</div>
            <h2 className={`section-title mb-4 ${darkMode ? 'text-white' : 'text-dark-grey'}`}>
              What You Will Learn
            </h2>
            <p className={`section-subtitle mx-auto ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>
              A comprehensive curriculum covering all aspects of modern academic practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {YLP_PROGRAMME.sections.map((section, i) => {
              const Icon = ICON_MAP[section.icon] ?? GraduationCap;
              return (
                <div
                  key={section.title}
                  className={`reveal group p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                    darkMode
                      ? 'bg-dark-navy border-white/10 hover:border-gold/30'
                      : 'bg-cream border-gray-100 shadow-premium hover:shadow-premium-hover hover:border-gold/20'
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-navy to-light-navy flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className={`text-base font-semibold mb-3 ${darkMode ? 'text-white' : 'text-dark-grey'}`}>
                    {section.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>
                    {section.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className={`py-20 md:py-24 ${darkMode ? 'bg-dark-navy' : 'bg-cream'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="reveal">
              <div className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Certificate of Completion</div>
              <h2 className={`section-title mb-5 ${darkMode ? 'text-white' : 'text-dark-grey'}`}>
                Earn a Recognised Certificate
              </h2>
              <p className={`text-base leading-relaxed mb-8 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>
                {YLP_PROGRAMME.certificate.description}
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Recognised certificate endorsed by IUC',
                  'Strengthens your teaching permit (JPT) application',
                  'Enhances your academic portfolio',
                  'Opens doors to part-time and full-time academic positions',
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 reveal`}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span className={`text-sm ${darkMode ? 'text-white/70' : 'text-dark-grey'}`}>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={buildWhatsAppUrl('Hello, I would like to join the YLP online briefing session. Please share the details.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Register for Briefing <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Visual */}
            <div className="reveal flex justify-center">
              <div className={`relative w-full max-w-sm p-8 rounded-3xl border ${darkMode ? 'bg-dark-grey border-white/10' : 'bg-cream border-gray-200'} shadow-2xl`}>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-light-gold flex items-center justify-center mx-auto mb-4 animate-float">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-xs font-semibold uppercase tracking-widest mb-2 ${darkMode ? 'text-white/50' : 'text-secondary-grey'}`}>
                    Young Lecturer Program
                  </div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-dark-grey'}`}>
                    Certificate of Completion
                  </h3>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-white/50' : 'text-secondary-grey'}`}>
                    Innovative University College (IUC)
                  </p>
                </div>
                <div className={`border-t pt-5 space-y-3 ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
                  {[
                    { icon: Users, label: 'For Graduates & Professionals' },
                    { icon: Clock, label: 'Flexible Online Schedule' },
                    { icon: Calendar, label: 'Multiple Intakes Per Year' },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-gold" />
                      <span className={`text-xs ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI in HE Section */}
      <section className={`py-20 md:py-24 relative overflow-hidden ${darkMode ? 'bg-dark-grey' : 'bg-cream'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`relative rounded-3xl overflow-hidden reveal ${darkMode ? 'bg-navy border border-white/10' : 'bg-gradient-to-br from-navy to-dark-navy'}`}>
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold rounded-full -translate-x-1/2 translate-y-1/2" />
            </div>
            <div className="relative p-10 md:p-14">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="text-white">
                  <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-3 py-1.5 text-xs font-medium text-gold mb-6">
                    <BrainCircuit className="w-3.5 h-3.5" />
                    Module Highlight
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold mb-5">AI in Higher Education</h2>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed mb-7">
                    This forward-looking module prepares educators for the AI-powered future of academic teaching. Explore ChatGPT, AI grading tools, personalised learning systems and academic integrity frameworks.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Ethical use of AI in teaching and assessment',
                      'AI-powered personalised learning design',
                      'Maintaining academic integrity in the AI era',
                      'LMS integration with intelligent tools',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span className="text-white/70 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center">
                  <div className="w-56 h-56 rounded-full bg-gradient-to-br from-gold/30 to-gold/30 flex items-center justify-center relative">
                    <BrainCircuit className="w-24 h-24 text-white/30" />
                    <div className="absolute inset-0 rounded-full border-2 border-white/10 animate-pulse-slow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-16 ${darkMode ? 'bg-dark-navy' : 'bg-cream'}`}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-dark-grey'}`}>
            Ready to Begin Your Academic Career?
          </h2>
          <p className={`text-sm md:text-base mb-8 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>
            Join the next YLP cohort. Limited places available.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={buildWhatsAppUrl('Hello, I want to register for the Young Lecturer Program (YLP) online briefing at IPGS.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Join Online Briefing <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={buildWhatsAppUrl('Hello, I would like to apply for the Young Lecturer Program (YLP).')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Apply for YLP
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
