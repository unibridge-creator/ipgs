import { Phone, Mail, Globe, Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, WEBSITE, buildWhatsAppUrl, PROGRAMMES } from '../lib/constants';

interface FooterProps {
  setPage: (page: string) => void;
  darkMode: boolean;
}

export default function Footer({ setPage, darkMode }: FooterProps) {
  const handleNav = (page: string) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`${darkMode ? 'bg-dark-navy border-t border-white/5' : 'bg-dark-navy'} text-white`}>
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-navy to-dark-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Ready to advance your career?
              </h2>
              <p className="text-white/60 text-sm md:text-base">
                Join thousands of professionals who have transformed their futures with IPGS.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={buildWhatsAppUrl('Hello, I would like to apply for a postgraduate programme at IPGS.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-sm"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => handleNav('contact')}
                className="btn-outline-white text-sm"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-4">
              <img src="/assets/images/IPGS-Logo-Final-Gold_(2).png" alt="IPGS Logo" className="h-8 w-auto object-contain" />
              <img src="/assets/images/IUC_Logo_Final-01.png" alt="IUC Logo" className="h-8 w-auto object-contain" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Institute of Postgraduate Studies (IPGS) at Innovative University College (IUC), Malaysia — empowering professionals through postgraduate excellence.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Youtube, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-5">Programmes</h4>
            <ul className="space-y-3">
              {PROGRAMMES.map((p) => (
                <li key={p.code}>
                  <button
                    onClick={() => handleNav('programmes')}
                    className="text-white/60 hover:text-white text-sm transition-colors animated-underline"
                  >
                    {p.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNav('ylp')}
                  className="text-white/60 hover:text-white text-sm transition-colors animated-underline"
                >
                  Young Lecturer Program
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Why Choose IPGS', page: 'why' },
                { label: 'Admission Process', page: 'admissions' },
                { label: 'Student Testimonials', page: 'admissions' },
                { label: 'Apply Now', page: 'contact' },
                { label: 'Book Consultation', page: 'contact' },
                { label: 'Contact Us', page: 'contact' },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNav(item.page)}
                    className="text-white/60 hover:text-white text-sm transition-colors animated-underline"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors group"
                >
                  <Phone className="w-4 h-4 shrink-0 text-gold group-hover:text-light-gold" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors group"
                >
                  <Mail className="w-4 h-4 shrink-0 text-gold group-hover:text-light-gold" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`https://${WEBSITE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors group"
                >
                  <Globe className="w-4 h-4 shrink-0 text-gold group-hover:text-light-gold" />
                  {WEBSITE}
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href={buildWhatsAppUrl('Hello, I would like to enquire about IPGS postgraduate programmes.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-full text-sm font-medium hover:bg-[#20c05b] transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-xs">
          <p>© 2024 IPGS — Innovative University College (IUC) Malaysia. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button className="hover:text-white/70 transition-colors">Privacy Policy</button>
            <button className="hover:text-white/70 transition-colors">Terms of Use</button>
            <button className="hover:text-white/70 transition-colors">Sitemap</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
