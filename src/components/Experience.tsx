import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const jobs = [
  { title: 'Security Analyst', company: 'Pragma Edge Inc', date: 'February 2024 - Present', duration: '2 years 4 months', location: 'Hyderabad, Telangana, India', points: [
    'Performing vulnerability assessments, penetration testing, and static application security testing (SAST) to uncover and address security gaps.',
    'Managing and responding to real-time alerts by monitoring endpoint security and firewall tools.',
    'Documenting all identified security incidents in alignment with the Incident Response Plan.',
    'Conducting comprehensive reviews of weekly security reports, logs, and compliance checklists.',
    'Collaborating with cross-functional teams to provide tailored security solutions.'
  ]},
  { title: 'Cyber Security Intern', company: 'Safe your web', date: 'May 2023 - August 2023', duration: '4 months', location: 'Saket, New delhi', points: [
    'Conducted testing and assessment of web applications to identify and exploit OWASP Top 10 vulnerabilities.',
    'Utilized industry-standard tools and methodologies to simulate real-world attacks.',
    'Maintained up-to-date knowledge of emerging threats and security technologies.'
  ]},
  { title: 'Graduate Engineer Trainee', company: 'LTIMindtree', date: 'February 2023 - April 2023', duration: '3 months', location: '', points: []},
  { title: 'Cybersecurity Administrator', company: 'Virtually Testing Foundation', date: 'January 2023 - March 2023', duration: '3 months', location: 'Los Angeles, California, United States', points: [
    'Applied the MITRE ATT&CK framework to assess potential threats.',
    'Conducted thorough research using active and passive OSINT techniques.',
    'Learned about the OWASP TOP 10 and implemented best practices.'
  ]},
  { title: 'Cyber Security & Digital Forensics Intern', company: 'Cyber Secured India', date: 'November 2022 - February 2023', duration: '4 months', location: '', points: [
    'Acquired knowledge in OSINT techniques and tools.',
    'Gained practical experience in ethical hacking and penetration testing methodologies.',
    'Learned Digital Forensics techniques for investigating cyber crimes.'
  ]}
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-bg-primary relative z-10 border-t border-border-glow/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Experience Timeline</h2>
          <p className="text-text-muted">My professional journey in cybersecurity.</p>
        </div>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-glow before:to-transparent">
          {jobs.map((job, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-accent-cyan bg-bg-card text-accent-cyan shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(0,245,255,0.2)] transition-all z-10">
                <Check className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-lg bg-bg-card border border-border-glow/30 hover:border-accent-cyan transition-all hover:box-glow-cyan">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2 gap-2">
                  <h3 className="font-bold font-display text-lg text-accent-cyan">{job.title}</h3>
                  <span className="font-mono text-xs text-text-muted bg-bg-card-hover px-2 py-1 rounded">{job.date}</span>
                </div>
                <div className="text-text-primary font-medium mb-1">{job.company}</div>
                {job.location && <div className="text-text-muted text-xs mb-4">{job.location} • {job.duration}</div>}
                {!job.location && <div className="text-text-muted text-xs mb-4">{job.duration}</div>}
                {job.points.length > 0 && (
                  <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-text-muted">
                    {job.points.map((pt, i) => (
                      <li key={i} className="leading-relaxed">{pt}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
