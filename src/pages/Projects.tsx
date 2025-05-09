import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';
import { projectsData, projectCategories } from '../data/projectsData';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = selectedCategory ? project.category === selectedCategory : true;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="space-y-16">
      <div>
        <SectionTitle subtitle="A showcase of my projects and technical work">
          Projects & Portfolio
        </SectionTitle>
        
        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-grow">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent dark:bg-dark-secondary"
            />
          </div>
          
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
            {projectCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-accent text-primary'
                    : 'bg-gray-100 dark:bg-dark-secondary text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Projects Grid */}
      <AnimatePresence>
        {filteredProjects.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold text-primary dark:text-white mb-2">No projects found</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Project Process Section */}
      <div>
        <SectionTitle>
          My Development Process
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Planning & Research",
              description: "I begin each project with thorough planning and research to understand requirements and identify the best approach."
            },
            {
              step: "02",
              title: "Design & Architecture",
              description: "Creating intuitive user interfaces and robust system architecture that meets both functional and non-functional requirements."
            },
            {
              step: "03", 
              title: "Development & Testing",
              description: "Implementing the solution with clean, maintainable code while ensuring quality through comprehensive testing strategies."
            },
            {
              step: "04",
              title: "Deployment & Maintenance",
              description: "Deploying the application and providing ongoing support, maintenance, and feature enhancements as needed."
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-accent text-2xl font-bold mb-4">{item.step}</div>
              <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Collaboration Call-to-Action */}
      <div>
        <motion.div 
          className="bg-primary dark:bg-dark-secondary rounded-lg p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Have a project in mind?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always looking for interesting projects to work on. Whether you need a web application, 
            mobile app, or custom software solution, I'd love to hear about your project.
          </p>
          <a href="mailto:your.email@example.com" className="button-primary inline-flex items-center">
            Contact Me
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;