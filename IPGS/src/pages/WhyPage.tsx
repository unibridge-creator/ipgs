import {
  CheckCircle2, Clock, Network, BookOpen, Users, Cpu, TrendingUp, Globe,
  ArrowRight, Star
} from 'lucide-react';
import { buildWhatsAppUrl } from '../lib/constants';
import { useReveal } from '../hooks/useReveal';

interface WhyPageProps {
  darkMode: boolean;
  setPage: (page: string) => void;
}

const features = [
  {
    icon: CheckCircle2,
    title: 'MQA Recognised Programmes',
    description:
      'All our programmes are fully accredited by the Malaysian Qualifications Agency (MQA), ensuring your qualifications are recognised nationally and internationally.',
    badge: 'Accredited',
  },
  {
    icon: Clock,
    title: 'Flexible Weekend Schedule',
    description:
      'Designed around working professionals — classes run on weekends with online options, so you never have to choose between your career and education.',
    badge: 'Part-Time Friendly',
  },
  {
    icon: Users,
    title: 'Supportive Supervisors',
    description:
      'Every student is matched with a dedicated academic supervisor who provides ongoing guidance throughout the entire duration of the programme.',
    badge: '1:1 Mentoring',
  },
  {
    icon: Cpu,
    title: 'AI-Integrated Learning Environment',
    description:
      'Access cutting-edge AI research tools, AI-powered literature review support and smart LMS systems that accelerate your learning and completion.',
    badge: 'Future-Ready',
  },
  {
    icon: TrendingUp,
    title: 'Designed for Working Professionals',
    description:
      'Our curriculum acknowledges and integrates your professional experience as a core learning asset. Real-world application in every module.',
    badge: 'Applied Learning',
  },
  {
    icon: Network,
    title: 'Strong Academic & Industry Network',
    description:
      'Connect with a powerful community of alumni, industry leaders and academic experts across Malaysia and beyond.',
    badge: 'Networking',
  },
  {
    icon: BookOpen,
    title: 'Practical and Research-Based Learning',
    description:
      'A balanced blend of applied business practice and rigorous academic research ensures deep competency and real-world relevance.',
    badge: 'Rigorous',
  },
  {
    icon: Globe,
    title: 'Internationally Recognised Qualifications',
    description:
      'IUC degrees are recognised by employers, professional bodies and institutions worldwide — opening global career opportunities.',
    badge: 'Global',
  },
];

const numbers = [
  { value: '1,000+', label: 'Graduates', desc: 'Across all programmes' },
  { value: '95%', label: 'Employment Rate', desc: 'Within 6 months of graduation' },
  { value: '3', label: 'Intake Per Year', desc: 'January, May, September' },
  { value: '18+', label: 'Industries', desc: 'Alumni serving across sectors' },
  { value: '5+', label: 'Years of Excellence', desc: 'Postgraduate education at IPGS' },
  { value: '100%', label: 'MQA Accredited', desc: 'All programmes approved' },
];

const profiles = [
  {
    emoji: '👩‍💼',
    role: 'Government Officers',
    desc: 'Senior government executives advancing their qualifications for promotion and policy leadership roles.',
    img: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
  },
  {
    emoji: '👨‍💼',
    role: 'Corporate Managers',
    desc: 'Mid to senior level managers in MNCs and local corporations seeking an edge in business strategy.',
    img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
  },
  {
    emoji: '💼',
    role: 'Entrepreneurs',
    desc: 'Business owners building structured management expertise and an MBA-level business network.',
    img: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
  },
  {
    emoji: '👩‍🏫',
    role: 'Academics & Lecturers',
    desc: 'Educators upgrading their qualifications and research profile with PhD and MBM programmes.',
    img: 'https://images.pexels.com/photos/5428258/pexels-photo-5428258.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
  },
];

export default function WhyPage({ darkMode, setPage }: WhyPageProps) {
  const sectionRef = useReveal();

  return (
    <div ref={sectionRef} className={`min-h-screen pt-20 ${darkMode ? 'bg-dark-navy text-white' : 'bg-cream text-dark-grey'}`}>
      {/* Header */}
      <section className={`py-20 md:py-28 relative overflow-hidden ${darkMode ? 'bg-dark-grey' : 'bg-cream'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-navy/10 via-transparent to-gold/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-gold mb-4 reveal">Why Choose IPGS</div>
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 reveal ${darkMode ? 'text-white' : 'text-dark-grey'}`}>
            The IPGS Advantage
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto reveal leading-relaxed ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>
            Eight compelling reasons why professionals across Malaysia choose IPGS for their postgraduate journey.
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className={`py-20 md:py-24 ${darkMode ? 'bg-dark-navy' : 'bg-cream'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, description, badge }, i) => (
              <div
                key={title}
                className={`reveal group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 ${
                  darkMode
                    ? 'bg-dark-grey border-white/10 hover:border-gold/30'
                    : 'bg-cream border-gray-100 shadow-premium hover:shadow-premium-hover hover:border-gold/20'
                }`}
                style={{ transitionDelay: `${(i % 4) * 80}ms` }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy to-light-navy flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-4.5 h-4.5 text-white w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-semibold text-gold bg-gold/10 rounded-full px-2 py-0.5 uppercase tracking-wider">
                    {badge}
                  </span>
                </div>
                <h3 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-white' : 'text-dark-grey'}`}>{title}</h3>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-white/55' : 'text-secondary-grey'}`}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className={`py-20 ${darkMode ? 'bg-dark-grey' : 'bg-cream'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <h2 className={`section-title mb-4 ${darkMode ? 'text-white' : 'text-dark-grey'}`}>
              IPGS by the Numbers
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {numbers.map(({ value, label, desc }, i) => (
              <div
                key={label}
                className={`reveal text-center p-5 rounded-2xl ${darkMode ? 'bg-dark-navy border border-white/10' : 'bg-cream shadow-premium'}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="text-2xl md:text-3xl font-bold gold-shimmer mb-1">{value}</div>
                <div className={`text-xs font-semibold mb-1 ${darkMode ? 'text-white' : 'text-dark-grey'}`}>{label}</div>
                <div className={`text-[10px] ${darkMode ? 'text-white/40' : 'text-secondary-grey'}`}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className={`py-20 md:py-24 ${darkMode ? 'bg-dark-navy' : 'bg-cream'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <div className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Our Students</div>
            <h2 className={`section-title mb-4 ${darkMode ? 'text-white' : 'text-dark-grey'}`}>
              Built for Every Professional
            </h2>
            <p className={`section-subtitle mx-auto ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>
              Our diverse community of students comes from all sectors and backgrounds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {profiles.map(({ role, desc, img }, i) => (
              <div
                key={role}
                className={`reveal group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${
                  darkMode ? 'border-white/10 bg-dark-grey' : 'border-gray-100 bg-cream shadow-premium hover:shadow-premium-hover'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={img}
                    alt={role}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-white' : 'text-dark-grey'}`}>{role}</h3>
                  <p className={`text-xs leading-relaxed ${darkMode ? 'text-white/55' : 'text-secondary-grey'}`}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className={`py-20 ${darkMode ? 'bg-dark-grey' : 'bg-cream'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-gold fill-gold" />
            ))}
          </div>
          <blockquote className={`text-xl md:text-2xl font-medium italic mb-8 leading-relaxed ${darkMode ? 'text-white' : 'text-dark-grey'}`}>
            "IPGS gave me the academic credentials, the network and the confidence to step into a senior leadership role. The flexible structure was exactly what I needed as a full-time professional."
          </blockquote>
          <div className={`text-sm font-semibold ${darkMode ? 'text-white/70' : 'text-secondary-grey'}`}>
            Encik Fadzillah bin Ibrahim — Operations Director, Maybank · <span className="text-gold">MBA Graduate</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-dark-navy via-navy to-dark-navy py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-5">
            Experience the IPGS Difference
          </h2>
          <p className="text-white/60 text-sm md:text-base mb-8">
            Speak to our academic advisors and discover which programme aligns best with your goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => { setPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="btn-gold"
            >
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => { setPage('programmes'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="btn-outline-white"
            >
              Explore Programmes
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
