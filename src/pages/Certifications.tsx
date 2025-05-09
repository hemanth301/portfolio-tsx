import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import CertificationCard from '../components/ui/CertificationCard';
import { certificationsData } from '../data/certificationsData';

const Certifications = () => {
  return (
    <div className="space-y-16">
      {/* Certifications List */}
      <div>
        <SectionTitle subtitle="Professional certifications and credentials I've earned through continuous learning">
          Certifications
        </SectionTitle>

        <div className="grid grid-cols-1 gap-6 mt-10">
          {certificationsData.map((cert, index) => (
            <CertificationCard
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              credentialUrl={cert.credentialUrl}
              image={cert.image}
            />
          ))}
        </div>
      </div>

      {/* Why Certifications Matter */}
      <div>
        <SectionTitle>
          Why Certifications Matter
        </SectionTitle>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="card">
            <div className="text-accent text-2xl font-bold mb-4">01</div>
            <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
              Validated Expertise
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Certifications provide third-party validation of my technical knowledge and skills,
              ensuring that I meet industry standards and best practices.
            </p>
          </div>

          <div className="card">
            <div className="text-accent text-2xl font-bold mb-4">02</div>
            <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
              Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              The process of preparing for and obtaining certifications keeps me up-to-date
              with the latest technologies, frameworks, and methodologies.
            </p>
          </div>

          <div className="card">
            <div className="text-accent text-2xl font-bold mb-4">03</div>
            <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
              Problem-Solving Skills
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Many certification exams test practical problem-solving abilities,
              enhancing my capacity to tackle complex technical challenges.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;
