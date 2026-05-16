import { useState } from 'react';
import { Instagram, Linkedin, Medium, XTwitter } from './Icons';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
              <input type="hidden" name="_captcha" value="true" />
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
                <div className="p-4 bg-green-500/10 border border-green-500/50 text-green-500 rounded text-center animate-fade-in">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 text-red-500 rounded text-center animate-fade-in">
                  Something went wrong. Please try again or reach out via social media.
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8 flex flex-col justify-center">
            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: <Instagram className="w-6 h-6" />, text: '@aashishtechsecurity', href: 'https://www.instagram.com/aashishtechsecurity', label: 'Instagram' },
                { icon: <Instagram className="w-6 h-6" />, text: '@aashish_tech_security (Backup)', href: 'https://www.instagram.com/aashish_tech_security', label: 'Backup Instagram' },
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
