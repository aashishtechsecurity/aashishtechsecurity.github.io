import { motion } from 'framer-motion';
import SEO from '../../components/SEO';

const CookiePolicy = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <SEO title="Cookie Policy | AashishTechSecurity" description="Cookie Policy for AashishTechSecurity" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-bg-card border border-border-glow/30 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-display font-bold text-text-primary mb-6">Cookie Policy</h1>
          <div className="text-text-muted space-y-4 font-mono text-sm leading-relaxed">
            <p><strong>Effective Date:</strong> September 2026</p>
            <h2 className="text-xl font-bold text-accent-cyan mt-6">1. What are Cookies?</h2>
            <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.</p>
            
            <h2 className="text-xl font-bold text-accent-cyan mt-6">2. How We Use Cookies</h2>
            <p>AashishTechSecurity uses cookies strictly for essential functions and basic analytics to improve your experience. We do not use intrusive advertising or cross-site tracking cookies.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the website to function (e.g., remembering your theme preference).</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website anonymously.</li>
            </ul>

            <h2 className="text-xl font-bold text-accent-cyan mt-6">3. Cookie Consent</h2>
            <p>When you first visit our website, you are presented with a cookie banner that asks for your explicit consent to use non-essential cookies, in compliance with standard global privacy practices. You can manage your preferences at any time.</p>

            <h2 className="text-xl font-bold text-accent-cyan mt-6">4. Managing Cookies</h2>
            <p>Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit standard resources like aboutcookies.org.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;
