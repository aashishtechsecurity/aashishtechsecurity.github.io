import { useState, useEffect } from 'react';
import { Instagram, Linkedin, Medium, XTwitter } from './Icons';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [consentGiven, setConsentGiven] = useState(false);
  const [captchaNum1, setCaptchaNum1] = useState(0);
  const [captchaNum2, setCaptchaNum2] = useState(0);
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState(false);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    setCaptchaNum1(Math.floor(Math.random() * 10) + 1);
    setCaptchaNum2(Math.floor(Math.random() * 10) + 1);
    setCaptchaInput('');
    setCaptchaError(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (parseInt(captchaInput) !== captchaNum1 + captchaNum2) {
      setCaptchaError(true);
      return;
    }

    if (!consentGiven) {
      return;
    }

    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/priyathambande1729@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setConsentGiven(false);
        generateCaptcha();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-border-glow/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Let's Connect</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Have a question, collab idea, or want to learn hacking in Telugu? Reach out to AashishTechSecurity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 
                PRO TIP: To fully hide your email from the source code, 
                replace the email address in the fetch URL above with the 
                "Random String" provided by FormSubmit after your first submission.
              */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" style={{display: 'none'}} />
              <input type="hidden" name="_subject" value="New message from AashishTechSecurity" />
              
              <input 
                type="text" 
                name="name" 
                required 
                placeholder="Name" 
                className="w-full bg-bg-card border border-border-glow/30 rounded p-4 text-text-primary focus:outline-none focus:border-accent-cyan focus:box-glow-cyan transition-all" 
              />
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="Email" 
                className="w-full bg-bg-card border border-border-glow/30 rounded p-4 text-text-primary focus:outline-none focus:border-accent-cyan focus:box-glow-cyan transition-all" 
              />
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject (Optional)" 
                className="w-full bg-bg-card border border-border-glow/30 rounded p-4 text-text-primary focus:outline-none focus:border-accent-cyan focus:box-glow-cyan transition-all" 
              />
              <textarea 
                name="message" 
                required 
                placeholder="Message" 
                rows={5} 
                className="w-full bg-bg-card border border-border-glow/30 rounded p-4 text-text-primary focus:outline-none focus:border-accent-cyan focus:box-glow-cyan transition-all resize-none"
              ></textarea>
              
              {/* DPDP Act Privacy Policy Consent */}
              <div className="flex items-start gap-3 text-sm text-text-muted">
                <input 
                  type="checkbox" 
                  id="consent" 
                  checked={consentGiven}
                  onChange={(e) => setConsentGiven(e.target.checked)}
                  required
                  className="mt-1 w-4 h-4 rounded border-border-glow/30 bg-bg-card text-accent-cyan focus:ring-accent-cyan focus:ring-offset-bg-primary cursor-pointer"
                />
                <label htmlFor="consent" className="font-mono leading-relaxed text-xs cursor-pointer">
                  I consent to the collection and processing of my personal data (Name, Email) to respond to my inquiry, in accordance with the <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong>. I understand I can withdraw my consent at any time.
                </label>
              </div>

              {/* Math CAPTCHA Verification */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-bg-card/50 p-4 border border-border-glow/20 rounded">
                <label className="font-mono text-sm text-text-muted whitespace-nowrap">
                  Verify you are human: <span className="text-text-primary font-bold">{captchaNum1} + {captchaNum2} = </span>
                </label>
                <div className="flex-1 flex gap-2 w-full">
                  <input
                    type="number"
                    value={captchaInput}
                    onChange={(e) => {
                      setCaptchaInput(e.target.value);
                      setCaptchaError(false);
                    }}
                    required
                    className={`w-full sm:w-24 bg-bg-card border ${captchaError ? 'border-red-500 box-glow-red' : 'border-border-glow/30'} rounded p-2 text-text-primary focus:outline-none focus:border-accent-cyan focus:box-glow-cyan transition-all text-center font-mono`}
                    placeholder="?"
                  />
                  <button type="button" onClick={generateCaptcha} className="px-3 py-2 text-xs font-mono text-accent-cyan hover:bg-accent-cyan/10 rounded transition-colors border border-accent-cyan/20">
                    Reload
                  </button>
                </div>
              </div>
              {captchaError && (
                <p className="text-red-500 text-xs font-mono -mt-4 animate-fade-in">Incorrect answer. Please try again.</p>
              )}
              
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full py-4 bg-accent-cyan text-bg-primary font-bold rounded hover:bg-[#00d5ff] transition-all hover:box-glow-cyan flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-bg-primary border-t-transparent rounded-full animate-spin"></span>
                    Transmitting...
                  </span>
                ) : (
                  <>⚡ Transmit Message</>
                )}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/50 text-green-500 rounded text-center animate-fade-in font-mono text-sm">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 text-red-500 rounded text-center animate-fade-in font-mono text-sm">
                  Something went wrong. Please try again or reach out via social media.
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8 flex flex-col justify-center">
            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: <Instagram className="w-6 h-6" />, text: '@aashishtechsecurity', href: 'https://www.instagram.com/aashishtechsecurity', label: 'Instagram' },
                { icon: <Linkedin className="w-6 h-6" />, text: 'linkedin.com/in/aashishsec', href: 'https://www.linkedin.com/in/aashishsec', label: 'LinkedIn' },
                { icon: <Medium className="w-6 h-6" />, text: 'aashishtechsecurity.medium.com', href: 'https://aashishtechsecurity.medium.com/', label: 'Medium' },
                { icon: <XTwitter className="w-6 h-6" />, text: 'x.com/AashishTechSec', href: 'https://x.com/AashishTechSec', label: 'X / Twitter' },
              ].map((item, idx) => (
                <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} className="flex items-center gap-4 group min-h-[48px] active:scale-[0.98] transition-transform">
                  <div className="p-3 min-w-[48px] min-h-[48px] flex items-center justify-center bg-bg-card border border-border-glow/30 rounded group-hover:border-accent-cyan group-hover:box-glow-cyan group-hover:text-accent-cyan transition-all text-text-muted">
                    {item.icon}
                  </div>
                  <div className="flex-1 font-mono text-sm sm:text-base text-text-primary group-hover:text-accent-cyan transition-colors truncate">{item.text}</div>
                </a>
              ))}
            </div>

            <div className="pl-6 border-l-2 border-accent-cyan py-2 mt-8">
              <p className="text-xl font-display italic text-text-muted">
                "Security is not a product, it's a process."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
