import { motion } from 'framer-motion';
import SEO from '../../components/SEO';

const RefundPolicy = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <SEO title="Refund Policy | AashishTechSecurity" description="Refund Policy for AashishTechSecurity" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-bg-card border border-border-glow/30 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-display font-bold text-text-primary mb-6">Refund & Cancellation Policy</h1>
          <div className="text-text-muted space-y-4 font-mono text-sm leading-relaxed">
            <p><strong>Effective Date:</strong> September 2026</p>
            <h2 className="text-xl font-bold text-accent-cyan mt-6">1. Free Resources</h2>
            <p>The majority of the content, toolkits, and roadmaps provided on AashishTechSecurity are entirely free. No payment is required, and thus no refunds are applicable for these resources.</p>
            
            <h2 className="text-xl font-bold text-accent-cyan mt-6">2. Paid Services / Workshops (If Applicable)</h2>
            <p>If you purchase any digital services, courses, or enroll in a premium workshop, the following refund criteria apply:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Digital Downloads:</strong> Due to the nature of digital goods, we cannot issue refunds once a digital product has been downloaded or accessed.</li>
              <li><strong>Consulting/Workshops:</strong> Cancellations made at least 48 hours prior to the scheduled session will receive a full refund. Cancellations made within 48 hours are non-refundable.</li>
            </ul>

            <h2 className="text-xl font-bold text-accent-cyan mt-6">3. Process for Requesting a Refund</h2>
            <p>To request a refund for an eligible service, please email our support team at <strong>support@aashishtechsecurity.in</strong> with your invoice and reason for cancellation. Refunds will be processed within 5-7 business days to the original payment method.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RefundPolicy;
