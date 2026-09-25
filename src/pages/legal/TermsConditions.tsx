import { motion } from 'framer-motion';
import SEO from '../../components/SEO';

const TermsConditions = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <SEO title="Terms & Conditions | AashishTechSecurity" description="Terms and Conditions for AashishTechSecurity" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-bg-card border border-border-glow/30 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-display font-bold text-text-primary mb-6">Terms & Conditions</h1>
          <div className="text-text-muted space-y-4 font-mono text-sm leading-relaxed">
            <p><strong>Effective Date:</strong> September 2026</p>
            <h2 className="text-xl font-bold text-accent-cyan mt-6">1. Acceptance of Terms</h2>
            <p>By accessing and using AashishTechSecurity (the "Website"), you accept and agree to be bound by the terms and provision of this agreement.</p>
            
            <h2 className="text-xl font-bold text-accent-cyan mt-6">2. Use of Resources and Content</h2>
            <p>The materials provided on this website are for educational and informational cybersecurity purposes only. We make no guaranteed claims about job placement or specific outcomes based solely on the usage of our free resources. You agree to use all tools, code snippets, and guidance responsibly, ethically, and only on systems you own or have explicit permission to test ("Authorized Use Only").</p>

            <h2 className="text-xl font-bold text-accent-cyan mt-6">3. Intellectual Property and Copyright</h2>
            <p>All content, branding, and original materials on this Website are the intellectual property of AashishTechSecurity unless otherwise noted. We respect copyright and have ensured all generic images or third-party logos (if any) are used under fair use or with proper licensing. Do not reproduce or distribute our original content without explicit attribution.</p>

            <h2 className="text-xl font-bold text-accent-cyan mt-6">4. User Conduct</h2>
            <p>You agree not to use the Website in a way that may impair its performance, corrupt the content, or otherwise reduce the overall functionality of the Website. You also agree not to compromise the security of the Website or attempt to gain access to secured areas or sensitive information.</p>

            <h2 className="text-xl font-bold text-accent-cyan mt-6">5. Testimonials and Reviews</h2>
            <p>We maintain full transparency. Any reviews, testimonials, or endorsements displayed on our site are genuine experiences from real users. We strictly prohibit fake reviews and continuously monitor our content for accuracy.</p>

            <h2 className="text-xl font-bold text-accent-cyan mt-6">6. Limitation of Liability</h2>
            <p>AashishTechSecurity will not be liable for any indirect, special, or consequential damages arising out of the use of or the inability to use the materials on this site.</p>

            <h2 className="text-xl font-bold text-accent-cyan mt-6">7. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms & Conditions at any time. We do so by posting and drawing attention to the updated terms on the Site.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsConditions;
