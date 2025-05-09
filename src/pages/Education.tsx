import SectionTitle from '../components/ui/SectionTitle';
import TimelineItem from '../components/ui/TimelineItem';
import { educationData } from '../data/educationData';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <div className="space-y-16">
      <div>
        <SectionTitle subtitle="My academic background and learning journey">
          Education
        </SectionTitle>
        
        <div className="mt-12">
          {educationData.map((item, index) => (
            <TimelineItem
              key={index}
              date={item.period}
              title={item.degree}
              subtitle={`${item.institution}, ${item.location}`}
              isLast={index === educationData.length - 1}
            >
              <p>{item.description}</p>
            </TimelineItem>
          ))}
        </div>
      </div>
      
      {/* Research & Publications */}
      <div>
        <SectionTitle>
          Research & Publications
        </SectionTitle>
        
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-primary dark:text-white">
                "Deep Learning Applications in Natural Language Processing"
              </h4>
              <p className="text-accent">Stanford University - 2021</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Master's thesis exploring novel approaches to NLP using transformer models. This research demonstrated 
                a 15% improvement in text classification accuracy compared to previous methods.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-primary dark:text-white">
                "Optimizing Cloud Infrastructure for Machine Learning Workloads"
              </h4>
              <p className="text-accent">International Conference on Cloud Computing - 2020</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Research paper on efficient resource allocation for ML training in cloud environments, 
                resulting in cost reduction strategies while maintaining performance.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-primary dark:text-white">
                "Mobile Application Architecture for Enhanced User Experience"
              </h4>
              <p className="text-accent">Journal of Software Engineering - 2019</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Published article detailing architectural patterns that improve mobile app performance and user satisfaction, 
                based on data collected from campus navigation app development.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
