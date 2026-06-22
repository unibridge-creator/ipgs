import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { buildWhatsAppUrl } from '../lib/constants';

interface NavbarProps {
  darkMode: boolean;
  toggleDark: () => void;
  activePage: string;
  setPage: (page: string) => void;
}

const navItems = [
  { label: 'Home', page: 'home' },
  { label: 'Programmes', page: 'programmes' },
  { label: 'YLP', page: 'ylp' },
  { label: 'Why IPGS', page: 'why' },
  { label: 'Admissions', page: 'admissions' },
  { label: 'Contact', page: 'contact' },
];

export default function Navbar({ darkMode, toggleDark, activePage, setPage }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (page: string) => {
    setPage(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          darkMode
            ? 'bg-dark-navy/95 backdrop-blur-xl shadow-lg border-b border-white/5'
            : 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - IPGS */}
            <button
              onClick={() => handleNav('home')}
              className="flex items-center shrink-0"
            >
              <img
                src="/assets/images/IPGS-Logo-Final-Gold_(2).png"
                alt="IPGS Logo"
                className="h-8 md:h-9 w-auto object-contain"
              />
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNav(item.page)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activePage === item.page
                      ? darkMode
                        ? 'bg-gold text-white'
                        : 'bg-navy text-white'
                      : darkMode
                        ? 'text-white/70 hover:text-white hover:bg-white/10'
                        : 'text-dark-grey/70 hover:text-dark-grey hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* IUC Logo - same height as IPGS */}
              <img
                src="/assets/images/IUC_Logo_Final-01.png"
                alt="IUC Logo"
                className="h-8 md:h-9 w-auto hidden lg:block object-contain"
              />

              <button
                onClick={toggleDark}
                className={`p-2 rounded-full transition-all duration-200 ${
                  darkMode
                    ? 'text-white/70 hover:text-white hover:bg-white/10'
                    : 'text-dark-grey/60 hover:text-dark-grey hover:bg-gray-100'
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <a
                href={buildWhatsAppUrl('Hello, I would like to know more about IPGS postgraduate programmes.')}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex btn-gold text-xs py-2 px-4"
              >
                Apply Now
              </a>

              <button
                className={`lg:hidden p-2 rounded-full transition-colors ${
                  darkMode
                    ? 'text-white/70 hover:bg-white/10'
                    : 'text-dark-grey/60 hover:bg-gray-100'
                }`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Open menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className={`absolute inset-0 ${darkMode ? 'bg-dark-navy/95' : 'bg-white/95'} backdrop-blur-xl`}
          onClick={() => setMobileOpen(false)}
        />
        <nav
          className={`absolute top-16 left-4 right-4 rounded-2xl overflow-hidden transition-all duration-300 shadow-2xl ${
            darkMode ? 'bg-dark-grey border border-white/10' : 'bg-white border border-gray-100'
          } ${mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
        >
          {/* Mobile Menu Logos */}
          <div className={`px-4 pt-4 pb-3 flex items-center gap-4 border-b ${darkMode ? 'border-white/10' : 'border-gray-100'}`}>
            <img src="/assets/images/IPGS-Logo-Final-Gold_(2).png" alt="IPGS Logo" className="h-7 w-auto object-contain" />
            <img src="/assets/images/IUC_Logo_Final-01.png" alt="IUC Logo" className="h-7 w-auto object-contain" />
          </div>
          <div className="p-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activePage === item.page
                    ? darkMode
                      ? 'bg-gold text-white'
                      : 'bg-navy text-white'
                    : darkMode
                      ? 'text-white/80 hover:bg-white/10'
                      : 'text-dark-grey hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className={`pt-2 border-t ${darkMode ? 'border-white/10' : 'border-gray-100'}`}>
              <a
                href={buildWhatsAppUrl('Hello, I would like to know more about IPGS postgraduate programmes.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full justify-center text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Apply Now
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
