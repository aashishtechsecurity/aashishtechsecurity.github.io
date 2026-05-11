import { Instagram, Linkedin, Medium, XTwitter } from './Icons';

const Contact = () => {
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
            <form action="https://formsubmit.co/priyathambande1729@gmail.com" method="POST" className="space-y-6">
              <input type="hidden" name="_captcha" value="true" />
              <input type="text" name="_honey" style={{display: 'none'}} />
              <input type="hidden" name="_subject" value="New message from AashishTechSecurity" />
              <input type="text" name="name" required placeholder="Name" className="w-full bg-bg-card border border-border-glow/30 rounded p-4 text-text-primary focus:outline-none focus:border-accent-cyan focus:box-glow-cyan transition-all" />
              <input type="email" name="email" required placeholder="Email" className="w-full bg-bg-card border border-border-glow/30 rounded p-4 text-text-primary focus:outline-none focus:border-accent-cyan focus:box-glow-cyan transition-all" />
              <input type="text" name="subject" placeholder="Subject (Optional)" className="w-full bg-bg-card border border-border-glow/30 rounded p-4 text-text-primary focus:outline-none focus:border-accent-cyan focus:box-glow-cyan transition-all" />
              <textarea name="message" required placeholder="Message" rows={5} className="w-full bg-bg-card border border-border-glow/30 rounded p-4 text-text-primary focus:outline-none focus:border-accent-cyan focus:box-glow-cyan transition-all resize-none"></textarea>
              <button type="submit" className="w-full py-4 bg-accent-cyan text-bg-primary font-bold rounded hover:bg-[#00d5ff] transition-all hover:box-glow-cyan flex items-center justify-center gap-2">
                ⚡ Transmit Message
              </button>
            </form>
          </div>

          <div className="space-y-8 flex flex-col justify-center">
            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: <Instagram className="w-6 h-6" />, text: '@aashish_tech_security', href: 'https://www.instagram.com/aashish_tech_security', label: 'Instagram' },
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
