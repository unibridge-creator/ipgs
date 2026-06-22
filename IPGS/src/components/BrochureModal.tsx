import { useState } from 'react';
import { X, Download, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { PROGRAMMES } from '../lib/constants';

interface BrochureModalProps {
  programme: string;
  onClose: () => void;
  darkMode: boolean;
}

export default function BrochureModal({ programme, onClose, darkMode }: BrochureModalProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ full_name: '', email: '', phone: '', programme });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.full_name || !form.email || !form.phone) return;
    setStatus('loading');
    const { error } = await supabase.from('brochure_downloads').insert(form);
    setStatus(error ? 'error' : 'success');
  };

  const progName = PROGRAMMES.find(p => p.code === programme)?.name || programme;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-dark-navy/80 backdrop-blur-sm" onClick={onClose} />
      <div className={`relative w-full max-w-md rounded-3xl shadow-2xl overflow-hidden ${darkMode ? 'bg-dark-grey border border-white/10' : 'bg-white'}`}>
        {/* Header */}
        <div className={`flex items-center justify-between p-6 border-b ${darkMode ? 'border-white/10' : 'border-gray-100'}`}>
          <div>
            <h2 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-dark-grey'}`}>Download Brochure</h2>
            <p className={`text-xs mt-0.5 ${darkMode ? 'text-white/50' : 'text-secondary-grey'}`}>{progName}</p>
          </div>
          <button onClick={onClose} className={`p-2 rounded-full ${darkMode ? 'hover:bg-white/10 text-white/60' : 'hover:bg-gray-100 text-secondary-grey'}`}>
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6">
          {status === 'success' ? (
            <div className="flex flex-col items-center py-6 text-center">
              <CheckCircle2 className="w-12 h-12 text-green-500 mb-4" />
              <h3 className={`text-base font-bold mb-2 ${darkMode ? 'text-white' : 'text-dark-grey'}`}>Brochure Ready!</h3>
              <p className={`text-sm mb-6 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>
                Our team will send the brochure to your email shortly. You can also WhatsApp us for an instant copy.
              </p>
              <button onClick={onClose} className="btn-primary">Close</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className={`text-xs mb-5 ${darkMode ? 'text-white/50' : 'text-secondary-grey'}`}>
                Enter your details to receive the {progName} brochure instantly.
              </p>
              <div>
                <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>Full Name *</label>
                <input type="text" name="full_name" value={form.full_name} onChange={handleChange} required placeholder="Your full name" className="input-field" />
              </div>
              <div>
                <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>Email Address *</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className="input-field" />
              </div>
              <div>
                <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>Phone Number *</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="e.g. 011-2345 6789" className="input-field" />
              </div>
              <div>
                <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>Programme</label>
                <select name="programme" value={form.programme} onChange={handleChange} className="input-field">
                  {PROGRAMMES.map(p => <option key={p.code} value={p.code}>{p.code} – {p.name}</option>)}
                  <option value="YLP">Young Lecturer Program</option>
                </select>
              </div>

              {status === 'error' && <p className="text-red-500 text-xs">Something went wrong. Please try again.</p>}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-gold w-full justify-center text-sm mt-2 disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </span>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    Get My Brochure
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
