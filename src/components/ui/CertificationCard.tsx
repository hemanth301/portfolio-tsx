import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuer,
  date,
  credentialUrl,
  image,
}) => {
  return (
    <motion.div 
      className="card flex flex-col md:flex-row gap-4 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {image ? (
        <div className="w-full md:w-24 h-24 flex items-center justify-center">
          <img 
            src={image} 
            alt={issuer} 
            className="h-16 w-16 object-contain"
          />
        </div>
      ) : (
        <div className="w-full md:w-24 h-24 flex items-center justify-center">
          <Award className="h-12 w-12 text-accent" />
        </div>
      )}
      
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-primary dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{issuer}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{date}</p>
        
        {credentialUrl && (
          <a 
            href={credentialUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center mt-3 text-sm text-accent hover:underline"
          >
            View Credential <ExternalLink className="h-3.5 w-3.5 ml-1" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default CertificationCard;