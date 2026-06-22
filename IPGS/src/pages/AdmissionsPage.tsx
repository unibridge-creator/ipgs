import { useEffect, useState } from 'react';
import {
  CheckCircle2, ChevronRight, Users, BookOpen, MessageSquare, FileText,
  GraduationCap, ArrowRight, Star, Quote
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import { buildWhatsAppUrl } from '../lib/constants';
import { useReveal } from '../hooks/useReveal';
import ApplicationModal from '../components/ApplicationModal';

interface AdmissionsPageProps {
  darkMode: boolean;
  setPage: (page: string) => void;
}

interface Testimonial {
  id: string;
  name: string;
  position: string;
  programme: string;
  testimonial: string;
  avatar_url?: string;
}

const steps = [
  {
    icon: BookOpen,
    number: '01',
    title: 'Choose Your Programme',
    desc: 'Browse our MBA, MBM, PhD and YLP programmes. Compare features, duration, fees and entry requirements to find your ideal match.',
    action: 'Explore Programmes',
    colour: 'from-gold to-dark-gold',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Submit Application',
    desc: 'Complete our streamlined online application form. Attach your academic documents and work experience records.',
    action: 'Apply Online',
    colour: 'from-navy to-dark-navy',
  },
  {
    icon: MessageSquare,
    number: '03',
    title: 'Consultation with Advisor',
    desc: 'Our academic advisor will contact you to discuss your goals, address questions and validate your application details.',
    action: 'Book Consultation',
    colour: 'from-gold to-light-gold',
  },
  {
    icon: FileText,
    number: '04',
    title: 'Receive Offer Letter',
    desc: 'Upon successful evaluation, you will receive an official offer letter from IPGS within 5-7 working days.',
    action: 'What to Expect',
    colour: 'from-gold to-dark-gold',
  },
  {
    icon: GraduationCap,
    number: '05',
    title: 'Registration & Orientation',
    desc: 'Complete your enrollment, attend orientation and meet your supervisor. Your academic journey officially begins.',
    action: 'Get Started',
    colour: 'from-gold to-navy',
  },
];

const AVATAR_IMAGES: Record<number, string> = {
  0: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
  1: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
  2: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
  3: 'https://images.pexels.com/photos/5428258/pexels-photo-5428258.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
  4: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
  5: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
};

const FAQ_ITEMS = [
  {
    q: 'Can I study while working full-time?',
    a: 'Absolutely. All IPGS programmes are designed specifically for working professionals. Classes run on weekends and online, with flexible submission deadlines.',
  },
  {
    q: 'Is IPGS/IUC accredited by MQA?',
    a: 'Yes. All our postgraduate programmes are fully accredited by the Malaysian Qualifications Agency (MQA) and are listed on the MQR database.',
  },
  {
    q: 'How long does the admission process take?',
    a: 'The process typically takes 1-2 weeks from application to receiving your offer letter, depending on document submission speed.',
  },
  {
    q: 'Are there flexible payment options?',
    a: 'Yes. We offer semester-based payment plans and can discuss PTPTN and employer sponsorship options with eligible applicants.',
  },
  {
    q: 'What documents do I need to apply?',
    a: 'You will need certified copies of academic transcripts, IC/passport, résumé and two academic/professional references. PhD applicants also need a research proposal.',
  },
  {
    q: 'Can I transfer credits from a previous postgraduate programme?',
    a: 'Credit transfer is evaluated case by case. Contact our admissions team for an assessment of your previous qualifications.',
  },
];

export default function AdmissionsPage({ darkMode, setPage }: AdmissionsPageProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [applyModal, setApplyModal] = useState(false);
  const sectionRef = useReveal();

  useEffect(() => {
    supabase
      .from('testimonials')
      .select('*')
      .eq('featured', true)
      .order('sort_order')
      .then(({ data }) => {
        if (data) setTestimonials(data);
      });
  }, []);

  return (
    <div ref={sectionRef} className={`min-h-screen pt-20 ${darkMode ? 'bg-dark-navy text-white' : 'bg-cream text-dark-grey'}`}>
      {/* Header */}
      <section className={`py-20 md:py-28 relative overflow-hidden ${darkMode ? 'bg-dark-grey' : 'bg-cream'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-navy/10 via-transparent to-gold/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-gold mb-4 reveal">Admissions</div>
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 reveal ${darkMode ? 'text-white' : 'text-dark-grey'}`}>
            Your Admission Journey
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto reveal leading-relaxed ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>
            A clear, supportive path from first enquiry to your first day as a postgraduate student at IPGS.
          </p>
        </div>
      </section>

      {/* Timeline Steps */}
      <section className={`py-20 md:py-28 ${darkMode ? 'bg-dark-navy' : 'bg-cream'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <div className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Admission Process</div>
            <h2 className={`section-title mb-4 ${darkMode ? 'text-white' : 'text-dark-grey'}`}>
              5 Simple Steps to Enrolment
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-light-gold to-navy hidden md:block -translate-x-1/2" />

            <div className="space-y-10">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isLeft = i % 2 === 0;

                return (
                  <div
                    key={step.number}
                    className={`reveal flex flex-col md:flex-row items-start gap-6 md:gap-10 ${!isLeft ? 'md:flex-row-reverse' : ''}`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {/* Card */}
                    <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                      <div
                        className={`group p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                          darkMode
                            ? 'bg-dark-grey border-white/10 hover:border-gold/30'
                            : 'bg-cream border-gray-100 shadow-premium hover:shadow-premium-hover'
                        }`}
                      >
                        <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'md:flex-row-reverse md:justify-end' : 'flex-row'} flex-row justify-start`}>
                          <span className={`text-3xl font-bold bg-gradient-to-r ${step.colour} bg-clip-text text-transparent`}>
                            {step.number}
                          </span>
                          <h3 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-dark-grey'}`}>{step.title}</h3>
                        </div>
                        <p className={`text-sm leading-relaxed ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* Center node */}
                    <div className="hidden md:flex flex-col items-center shrink-0 relative z-10">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.colour} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="flex-1 hidden md:block" />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-14 reveal">
            <button onClick={() => setApplyModal(true)} className="btn-gold">
              Start Your Application <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-20 md:py-28 ${darkMode ? 'bg-dark-grey' : 'bg-cream'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <div className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Success Stories</div>
            <h2 className={`section-title mb-4 ${darkMode ? 'text-white' : 'text-dark-grey'}`}>
              What Our Graduates Say
            </h2>
            <p className={`section-subtitle mx-auto ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>
              Real stories from professionals who transformed their careers with IPGS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className={`reveal group p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-dark-navy border-white/10 hover:border-gold/20'
                    : 'bg-cream border-gray-100 shadow-premium hover:shadow-premium-hover'
                }`}
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <Quote className="w-6 h-6 text-gold mb-4 opacity-60" />
                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-white/70' : 'text-dark-grey/80'}`}>
                  "{t.testimonial}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar_url || AVATAR_IMAGES[i % 6]}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-gold/30"
                  />
                  <div>
                    <div className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-dark-grey'}`}>{t.name}</div>
                    <div className={`text-xs ${darkMode ? 'text-white/50' : 'text-secondary-grey'}`}>{t.position}</div>
                    <div className="text-xs font-medium text-gold">{t.programme}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 text-gold fill-gold" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 md:py-24 ${darkMode ? 'bg-dark-navy' : 'bg-cream'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <div className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">FAQs</div>
            <h2 className={`section-title mb-4 ${darkMode ? 'text-white' : 'text-dark-grey'}`}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`reveal rounded-xl border overflow-hidden transition-all duration-200 ${
                  darkMode ? 'border-white/10 bg-dark-grey' : 'border-gray-100 bg-cream shadow-sm'
                } ${faqOpen === i ? (darkMode ? 'border-gold/30' : 'border-gold/30 shadow-md') : ''}`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                >
                  <span className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-dark-grey'}`}>{item.q}</span>
                  <ChevronRight
                    className={`w-4 h-4 text-gold shrink-0 ml-3 transition-transform duration-200 ${faqOpen === i ? 'rotate-90' : ''}`}
                  />
                </button>
                {faqOpen === i && (
                  <div className={`px-5 pb-5 pt-0 text-sm leading-relaxed ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-dark-navy via-navy to-dark-navy py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-5">
            Ready to Apply?
          </h2>
          <p className="text-white/60 text-sm md:text-base mb-8">
            Take the first step today. Our team will guide you through every stage of the process.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => setApplyModal(true)} className="btn-gold">
              Apply Now <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={buildWhatsAppUrl('Hello, I have questions about the admission process at IPGS.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>

      {applyModal && (
        <ApplicationModal
          programme="MBA"
          onClose={() => setApplyModal(false)}
          darkMode={darkMode}
        />
      )}
    </div>
  );
}
