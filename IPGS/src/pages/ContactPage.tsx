import { useState } from 'react';
import { Phone, Mail, Globe, MessageCircle, Calendar, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, WEBSITE, buildWhatsAppUrl } from '../lib/constants';
import { useReveal } from '../hooks/useReveal';

interface ContactPageProps {
  darkMode: boolean;
}

const programmes = ['MBA', 'MBM', 'PhD', 'Young Lecturer Program', 'General Enquiry'];

export default function ContactPage({ darkMode }: ContactPageProps) {
  const sectionRef = useReveal();
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    programme: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.full_name || !form.email || !form.phone || !form.programme) return;

    setStatus('loading');
    const { error } = await supabase.from('leads').insert({
      ...form,
      source: 'contact_form',
    });

    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setForm({ full_name: '', email: '', phone: '', programme: '', message: '' });
    }
  };

  return (
    <div ref={sectionRef} className={`min-h-screen pt-20 ${darkMode ? 'bg-dark-navy text-white' : 'bg-cream text-dark-grey'}`}>
      {/* Header */}
      <section className={`py-20 md:py-28 relative overflow-hidden ${darkMode ? 'bg-dark-grey' : 'bg-cream'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-navy/10 via-transparent to-gold/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-gold mb-4 reveal">Contact Us</div>
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 reveal ${darkMode ? 'text-white' : 'text-dark-grey'}`}>
            Get in Touch
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto reveal leading-relaxed ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>
            Our advisors are ready to guide you. Reach out via WhatsApp, phone or email — we respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className={`py-14 ${darkMode ? 'bg-dark-navy' : 'bg-cream'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: MessageCircle,
                label: 'WhatsApp',
                value: PHONE_DISPLAY,
                sub: 'Click to chat instantly',
                href: buildWhatsAppUrl('Hello, I would like to enquire about IPGS postgraduate programmes.'),
                cta: 'Chat Now',
                accent: '#25D366',
              },
              {
                icon: Phone,
                label: 'Call Us',
                value: PHONE_DISPLAY,
                sub: 'Mon–Fri, 9am – 6pm',
                href: `tel:${PHONE_TEL}`,
                cta: 'Call Now',
                accent: '#0071E3',
              },
              {
                icon: Mail,
                label: 'Email',
                value: EMAIL,
                sub: 'Reply within 24 hours',
                href: `mailto:${EMAIL}`,
                cta: 'Send Email',
                accent: '#B89B5E',
              },
              {
                icon: Globe,
                label: 'Website',
                value: WEBSITE,
                sub: 'Official IPGS portal',
                href: `https://${WEBSITE}`,
                cta: 'Visit Site',
                accent: '#1F3A5F',
              },
            ].map(({ icon: Icon, label, value, sub, href, cta, accent }, i) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`reveal group block p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-dark-grey border-white/10 hover:border-white/20'
                    : 'bg-cream border-gray-100 shadow-premium hover:shadow-premium-hover'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${accent}20` }}
                >
                  <Icon className="w-5 h-5" style={{ color: accent }} />
                </div>
                <div className={`text-xs uppercase tracking-wider mb-1 ${darkMode ? 'text-white/40' : 'text-secondary-grey'}`}>{label}</div>
                <div className={`text-sm font-semibold mb-1 break-all ${darkMode ? 'text-white' : 'text-dark-grey'}`}>{value}</div>
                <div className={`text-xs mb-3 ${darkMode ? 'text-white/40' : 'text-secondary-grey'}`}>{sub}</div>
                <div className="text-xs font-semibold" style={{ color: accent }}>{cta} →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main: Form + Map */}
      <section className={`py-16 md:py-20 ${darkMode ? 'bg-dark-grey' : 'bg-cream'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className={`reveal rounded-2xl border p-7 ${darkMode ? 'bg-dark-navy border-white/10' : 'bg-cream border-gray-100 shadow-premium'}`}>
                <h2 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-dark-grey'}`}>
                  Request a Consultation
                </h2>
                <p className={`text-xs mb-7 ${darkMode ? 'text-white/50' : 'text-secondary-grey'}`}>
                  Fill in your details and an advisor will contact you within 24 hours.
                </p>

                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <CheckCircle2 className="w-12 h-12 text-green-500 mb-4" />
                    <h3 className={`text-base font-semibold mb-2 ${darkMode ? 'text-white' : 'text-dark-grey'}`}>
                      Thank you! We'll be in touch.
                    </h3>
                    <p className={`text-xs ${darkMode ? 'text-white/50' : 'text-secondary-grey'}`}>
                      An advisor will contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-primary mt-6 text-xs"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="full_name"
                        value={form.full_name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="e.g. 011-2345 6789"
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>
                        Programme of Interest *
                      </label>
                      <select
                        name="programme"
                        value={form.programme}
                        onChange={handleChange}
                        required
                        className="input-field"
                      >
                        <option value="">Select a programme</option>
                        {programmes.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>
                        Message (optional)
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Any specific questions or information..."
                        className="input-field resize-none"
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-red-500 text-xs">Something went wrong. Please try again or contact us directly.</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-gold w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <span className="flex items-center gap-2">
                          <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Enquiry
                        </>
                      )}
                    </button>

                    <p className={`text-[10px] text-center ${darkMode ? 'text-white/30' : 'text-secondary-grey'}`}>
                      By submitting, you agree to our Privacy Policy. We do not share your data.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Map + Location */}
            <div className="lg:col-span-3 reveal space-y-6">
              <div className={`rounded-2xl overflow-hidden border ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
                <iframe
                  title="IPGS Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7!2d101.7!3d3.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDkn!5e0!3m2!1sen!2smy!4v1234567890"
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>

              <div className={`rounded-2xl border p-7 ${darkMode ? 'bg-dark-navy border-white/10' : 'bg-cream border-gray-100 shadow-premium'}`}>
                <h3 className={`text-base font-bold mb-5 ${darkMode ? 'text-white' : 'text-dark-grey'}`}>
                  IPGS — Innovative University College
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <div>
                      <div className={`text-xs font-semibold mb-0.5 ${darkMode ? 'text-white/80' : 'text-dark-grey'}`}>Address</div>
                      <div className={`text-xs ${darkMode ? 'text-white/50' : 'text-secondary-grey'}`}>
                        Institute of Postgraduate Studies (IPGS)<br />
                        Innovative University College (IUC)<br />
                        Malaysia
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <div>
                      <div className={`text-xs font-semibold mb-0.5 ${darkMode ? 'text-white/80' : 'text-dark-grey'}`}>Office Hours</div>
                      <div className={`text-xs ${darkMode ? 'text-white/50' : 'text-secondary-grey'}`}>
                        Monday – Friday: 9:00am – 6:00pm<br />
                        Saturday: 9:00am – 1:00pm (by appointment)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={buildWhatsAppUrl('Hello, I would like to book a consultation with IPGS advisor.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold text-xs py-2 px-4"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    WhatsApp Consultation
                  </a>
                  <a
                    href={buildWhatsAppUrl('Hello, I would like to join the IPGS WhatsApp group for postgraduate enquiries.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs py-2 px-4"
                  >
                    Join WhatsApp Group
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
