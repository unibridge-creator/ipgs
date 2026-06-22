import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import ProgrammesPage from './pages/ProgrammesPage';
import YLPPage from './pages/YLPPage';
import WhyPage from './pages/WhyPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ContactPage from './pages/ContactPage';

type Page = 'home' | 'programmes' | 'ylp' | 'why' | 'admissions' | 'contact';

function App() {
  const [page, setPage] = useState<Page>('home');
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ipgs-dark-mode');
      if (saved !== null) return saved === 'true';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('ipgs-dark-mode', String(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDark = () => setDarkMode((d) => !d);

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage setPage={setPage} darkMode={darkMode} />;
      case 'programmes':
        return <ProgrammesPage darkMode={darkMode} />;
      case 'ylp':
        return <YLPPage darkMode={darkMode} />;
      case 'why':
        return <WhyPage darkMode={darkMode} setPage={setPage} />;
      case 'admissions':
        return <AdmissionsPage darkMode={darkMode} setPage={setPage} />;
      case 'contact':
        return <ContactPage darkMode={darkMode} />;
      default:
        return <HomePage setPage={setPage} darkMode={darkMode} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'dark bg-dark-navy' : 'bg-cream'}`}>
      <Navbar
        darkMode={darkMode}
        toggleDark={toggleDark}
        activePage={page}
        setPage={(p) => setPage(p as Page)}
      />

      <main className="flex-1">
        {renderPage()}
      </main>

      <Footer setPage={(p) => setPage(p as Page)} darkMode={darkMode} />

      <WhatsAppButton darkMode={darkMode} />
    </div>
  );
}

export default App;
