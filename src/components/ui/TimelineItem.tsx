import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  date, 
  title, 
  subtitle, 
  children, 
  isLast = false 
}) => {
  return (
    <motion.div 
      className="relative pl-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute top-6 left-4 w-px h-full bg-gray-200 dark:bg-gray-700" />
      )}
      
      {/* Timeline dot */}
      <div className="absolute top-1.5 left-0 h-8 w-8 flex items-center justify-center rounded-full bg-accent/20 text-accent">
        <div className="h-3 w-3 rounded-full bg-accent" />
      </div>
      
      <div className="mb-8">
        <span className="inline-block px-3 py-1 mb-2 text-xs font-medium text-accent bg-accent/10 rounded-full">
          {date}
        </span>
        <h3 className="text-xl font-bold text-primary dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-3">{subtitle}</p>
        <div className="text-gray-600 dark:text-gray-300">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;