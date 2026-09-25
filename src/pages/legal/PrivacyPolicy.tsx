import { motion } from 'framer-motion';
import SEO from '../../components/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <SEO title="Privacy Policy | AashishTechSecurity" description="Privacy Policy for AashishTechSecurity" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-bg-card border border-border-glow/30 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-display font-bold text-text-primary mb-6">Privacy Policy</h1>
          <div className="text-text-muted space-y-4 font-mono text-sm leading-relaxed">
            <p><strong>Effective Date:</strong> September 2026</p>
            <h2 className="text-xl font-bold text-accent-cyan mt-6">1. Introduction</h2>
            <p>Welcome to AashishTechSecurity. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, in compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act) of India and other applicable privacy laws.</p>
            
            <h2 className="text-xl font-bold text-accent-cyan mt-6">2. Data Collection (Only Necessary Data)</h2>
            <p>We believe in data minimization. We only collect information that is strictly necessary for the functioning of our services. This includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> When you fill out our contact form, we collect your name and email address.</li>
              <li><strong>Usage Data:</strong> We may collect anonymized data on how the website is accessed and used to improve performance and accessibility.</li>
            </ul>

            <h2 className="text-xl font-bold text-accent-cyan mt-6">3. Purpose of Processing</h2>
            <p>Your data is used solely for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your inquiries and support requests.</li>
              <li>To maintain and improve the security and performance of our website.</li>
              <li>To send you relevant updates (only if you have explicitly consented).</li>
            </ul>

            <h2 className="text-xl font-bold text-accent-cyan mt-6">4. Your Rights under the DPDP Act</h2>
            <p>As a Data Principal under the DPDP Act, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you.</li>
              <li>Correct any inaccuracies in your data.</li>
              <li>Withdraw your consent at any time.</li>
              <li>Request the erasure of your personal data.</li>
              <li>Nominate another person to exercise these rights in the event of death or incapacity.</li>
            </ul>

            <h2 className="text-xl font-bold text-accent-cyan mt-6">5. Data Sharing and Third-Party Embeds</h2>
            <p>We do not sell, trade, or otherwise transfer your personal data to outside parties. Our website may contain links to third-party sites or embed third-party content (e.g., Instagram, YouTube, Medium). These third parties have their own independent privacy policies, and we hold no responsibility or liability for their content and activities. We ensure that all third-party integrations comply with standard security practices.</p>

            <h2 className="text-xl font-bold text-accent-cyan mt-6">6. Data Security</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal data. However, no method of transmission over the Internet or method of electronic storage is 100% secure.</p>

            <h2 className="text-xl font-bold text-accent-cyan mt-6">7. Contact Information (Business Details)</h2>
            <p>If you have any questions regarding this Privacy Policy, you may contact our Data Protection Officer at:</p>
            <p><strong>Email:</strong> privacy@aashishtechsecurity.in</p>
            <p><strong>Address:</strong> Hyderabad, Telangana, India</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
