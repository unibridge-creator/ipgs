import { useState } from 'react';
import { X, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { PROGRAMMES } from '../lib/constants';

interface ApplicationModalProps {
  programme: string;
  onClose: () => void;
  darkMode: boolean;
}

const qualifications = [
  "Bachelor's Degree",
  "Master's Degree",
  "Diploma",
  "Professional Certificate",
  "Other",
];

const experiences = ['Less than 1 year', '1–3 years', '3–5 years', '5–10 years', '10+ years'];

export default function ApplicationModal({ programme, onClose, darkMode }: ApplicationModalProps) {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    ic_number: '',
    programme: programme,
    highest_qualification: '',
    institution: '',
    graduation_year: '',
    working_experience: '',
    employer: '',
    position: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setStatus('loading');
    const { error } = await supabase.from('applications').insert(form);
    setStatus(error ? 'error' : 'success');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-dark-navy/80 backdrop-blur-sm" onClick={onClose} />
      <div
        className={`relative w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden ${
          darkMode ? 'bg-dark-grey border border-white/10' : 'bg-white'
        } max-h-[90vh] flex flex-col`}
      >
        {/* Header */}
        <div className={`flex items-center justify-between p-6 border-b ${darkMode ? 'border-white/10' : 'border-gray-100'} shrink-0`}>
          <div>
            <h2 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-dark-grey'}`}>Apply Now</h2>
            <p className={`text-xs mt-0.5 ${darkMode ? 'text-white/50' : 'text-secondary-grey'}`}>
              {PROGRAMMES.find(p => p.code === programme)?.name || programme}
            </p>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-white/10 text-white/60' : 'hover:bg-gray-100 text-secondary-grey'}`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Steps indicator */}
        <div className="flex items-center gap-2 px-6 pt-5 shrink-0">
          {[1, 2].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step >= s ? 'bg-gold text-white' : darkMode ? 'bg-white/10 text-white/40' : 'bg-gray-100 text-secondary-grey'
                }`}
              >
                {s}
              </div>
              <span className={`text-xs ${step === s ? (darkMode ? 'text-white' : 'text-dark-grey') : darkMode ? 'text-white/40' : 'text-secondary-grey'}`}>
                {s === 1 ? 'Personal Info' : 'Academic Background'}
              </span>
              {s < 2 && <div className={`flex-1 h-px w-8 ${darkMode ? 'bg-white/10' : 'bg-gray-200'}`} />}
            </div>
          ))}
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <CheckCircle2 className="w-14 h-14 text-green-500 mb-5" />
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-dark-grey'}`}>
                Application Submitted!
              </h3>
              <p className={`text-sm mb-6 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>
                Thank you, {form.full_name.split(' ')[0]}! Our admissions team will contact you within 2 working days.
              </p>
              <button onClick={onClose} className="btn-gold">
                Close <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <>
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>Full Name *</label>
                    <input type="text" name="full_name" value={form.full_name} onChange={handleChange} required placeholder="As per IC/Passport" className="input-field" />
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
                    <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>IC Number</label>
                    <input type="text" name="ic_number" value={form.ic_number} onChange={handleChange} placeholder="e.g. 900101-01-1234" className="input-field" />
                  </div>
                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>Programme *</label>
                    <select name="programme" value={form.programme} onChange={handleChange} required className="input-field">
                      <option value="">Select a programme</option>
                      {PROGRAMMES.map(p => <option key={p.code} value={p.code}>{p.code} – {p.name}</option>)}
                      <option value="YLP">Young Lecturer Program</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>Highest Qualification *</label>
                    <select name="highest_qualification" value={form.highest_qualification} onChange={handleChange} required className="input-field">
                      <option value="">Select qualification</option>
                      {qualifications.map(q => <option key={q} value={q}>{q}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>Institution</label>
                    <input type="text" name="institution" value={form.institution} onChange={handleChange} placeholder="University / College name" className="input-field" />
                  </div>
                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>Year of Graduation</label>
                    <input type="text" name="graduation_year" value={form.graduation_year} onChange={handleChange} placeholder="e.g. 2018" className="input-field" />
                  </div>
                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>Years of Working Experience</label>
                    <select name="working_experience" value={form.working_experience} onChange={handleChange} className="input-field">
                      <option value="">Select experience</option>
                      {experiences.map(e => <option key={e} value={e}>{e}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>Current Employer</label>
                    <input type="text" name="employer" value={form.employer} onChange={handleChange} placeholder="Company / Organisation name" className="input-field" />
                  </div>
                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-white/60' : 'text-secondary-grey'}`}>Current Position / Job Title</label>
                    <input type="text" name="position" value={form.position} onChange={handleChange} placeholder="e.g. Senior Manager" className="input-field" />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-xs">Something went wrong. Please try again.</p>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {status !== 'success' && (
          <div className={`px-6 pb-6 pt-4 border-t shrink-0 ${darkMode ? 'border-white/10' : 'border-gray-100'}`}>
            <div className="flex gap-3">
              {step === 2 && (
                <button
                  onClick={() => setStep(1)}
                  className={`btn-secondary text-sm flex-1 justify-center ${darkMode ? 'border-white/20 text-white hover:bg-white/10' : ''}`}
                >
                  Back
                </button>
              )}
              {step === 1 ? (
                <button
                  onClick={() => {
                    if (!form.full_name || !form.email || !form.phone || !form.programme) return;
                    setStep(2);
                  }}
                  className="btn-primary text-sm flex-1 justify-center"
                >
                  Next Step <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={status === 'loading'}
                  className="btn-gold text-sm flex-1 justify-center disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <>Submit Application <Send className="w-4 h-4" /></>
                  )}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
