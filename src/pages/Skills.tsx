import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import SkillBar from '../components/ui/SkillBar';
import { skillsData } from '../data/skillsData';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredCategories = selectedCategory 
    ? skillsData.filter(category => category.category === selectedCategory)
    : skillsData;
  
  return (
    <div className="space-y-16">
      <div>
        <SectionTitle subtitle="A comprehensive overview of my technical abilities and competencies">
          Skills & Expertise
        </SectionTitle>
        
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-accent text-primary'
                  : 'bg-gray-100 dark:bg-dark-secondary text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              All
            </button>
            {skillsData.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === category.category
                    ? 'bg-accent text-primary'
                    : 'bg-gray-100 dark:bg-dark-secondary text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Skills Grid */}
      <div className="space-y-12">
        {filteredCategories.map((category, categoryIndex) => (
          <motion.div 
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: categoryIndex * 0.1 }}
          >
            <h3 className="text-2xl font-bold text-primary dark:text-white mb-8">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skillIndex}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Technologies Section */}
      <div>
        <SectionTitle>
          Technologies & Tools
        </SectionTitle>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {[
            "JavaScript", "TypeScript", "React", "Node.js", "Python",
            "MongoDB", "PostgreSQL", "AWS", "Docker", "Git",
            "GraphQL", "Redux", "Express", "Jest", "Webpack",
            "TensorFlow", "Next.js", "Flutter", "Firebase", "Tailwind CSS"
          ].map((tech, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4 bg-white dark:bg-dark-secondary rounded-lg shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
            >
              <span className="font-medium text-primary dark:text-white text-center">
                {tech}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Soft Skills Section */}
      <div>
        <SectionTitle>
          Soft Skills
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-primary dark:text-white mb-4">
              Communication & Collaboration
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Effective verbal and written communication across technical and non-technical teams
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Collaborative approach to problem-solving and project management
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Experience presenting complex technical concepts to diverse audiences
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Active listening and thoughtful feedback integration
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-primary dark:text-white mb-4">
              Leadership & Management
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Team leadership and project coordination experience
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Agile methodologies implementation and sprint management
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Mentoring junior developers and promoting knowledge sharing
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Strategic planning and resource allocation for project success
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;