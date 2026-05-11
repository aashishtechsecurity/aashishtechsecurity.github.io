import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const education = [
  { title: 'Cybersecurity Trainee', institution: 'iNeuron.ai', date: 'June 2022 - December 2022', duration: '7 months', points: [
    'Built a strong foundation in modern cybersecurity practices.'
  ]},
  { title: 'Bachelor of Technology - Mechanical Engineering', institution: 'Vellore Institute of Technology', date: '2019 - 2023', duration: '4 years', points: [
    'Graduated with a CGPA of 8.89.',
    'Developed a solid foundation in engineering and logical problem-solving.'
  ]}
];

const Academy = () => {
  return (
    <section id="academy" className="py-24 bg-bg-primary relative z-10 border-t border-border-glow/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Academy</h2>
          <p className="text-text-muted">My educational background and foundational training.</p>
        </div>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-glow before:to-transparent">
          {education.map((edu, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-accent-purple bg-bg-card text-accent-purple shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(168,85,247,0.2)] transition-all z-10">
                <Check className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-lg bg-bg-card border border-border-glow/30 hover:border-accent-purple transition-all hover:box-glow-purple">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2 gap-2">
                  <h3 className="font-bold font-display text-lg text-accent-purple">{edu.title}</h3>
                  <span className="font-mono text-xs text-text-muted bg-bg-card-hover px-2 py-1 rounded">{edu.date}</span>
                </div>
                <div className="text-text-primary font-medium mb-1">{edu.institution}</div>
                <div className="text-text-muted text-xs mb-4">{edu.duration}</div>
                {edu.points.length > 0 && (
                  <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-text-muted">
                    {edu.points.map((pt, i) => (
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

export default Academy;
