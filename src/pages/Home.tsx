import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, ArrowRight, User, Code, Briefcase } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import SkillBar from '../components/ui/SkillBar';
import ProjectCard from '../components/ui/ProjectCard';
import { skillsData } from '../data/skillsData';
import { projectsData } from '../data/projectsData';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  const textToType = "Software Engineer";

  useEffect(() => {
    if (typedText.length < textToType.length) {
      const timeout = setTimeout(() => {
        setTypedText(textToType.slice(0, typedText.length + 1));
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      setTypingComplete(true);
    }
  }, [typedText]);

  const featuredSkills = skillsData.flatMap(category =>
    category.skills.slice(0, 2)
  ).slice(0, 4);

  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-accent font-medium mb-3">Hello, my name is</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary dark:text-white mb-4">
                Pusukuri Hemanth
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 dark:text-gray-300 mb-6 h-10">
                I'm a{" "}
                <span className="text-accent">
                  {typedText}
                  {!typingComplete && <span className="animate-pulse">|</span>}
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              I’m Pusukuri Hemanth, currently Pursuing a B.Tech in Computer Science and Engineering at KL University.
               With a strong academic record and a keen passion for technology, I enjoy developing innovative solutions.
               My experiences include full-stack development and creating applications that enhance users' lives. I am committed to continuous learning and growth in my field.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://drive.google.com/uc?export=download&id=1bRQb3ImyIlz4xWfGxYaZJ7hlRhA1xhkH"
                  className="button-primary flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
                <Link to="/projects" className="button-secondary flex items-center">
                  View Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-2">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-full border-4 border-accent">
              <img src="/profile.jpg.jpg" alt="Profile" className="w-full h-full object-cover" 
              />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <SectionTitle subtitle="Get to know me better and what drives my passion for engineering">
          About Me
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="card col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-primary dark:text-white mb-4 flex items-center">
              <User className="w-5 h-5 mr-2 text-accent" />
              My Background
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a software engineer with experience building web and mobile applications.
              I graduated from KL University with a Master's degree in Computer Science, specializing in
              Game Development and UI/UX Designer.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Throughout my career, I've worked with a variety of technologies and frameworks,
              allowing me to develop a versatile skill set that enables me to tackle complex problems
              with efficient and elegant solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me hiking, reading science fiction, or experimenting
              with new recipes in the kitchen. I believe that diverse experiences contribute to creative
              problem-solving in engineering.
            </p>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-primary dark:text-white mb-4 flex items-center">
              <Briefcase className="w-5 h-5 mr-2 text-accent" />
              Work Experience
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Corparate Development Intern</p>
                <p className="text-accent">Stellaraa Edu Tech.Pvt</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2024-2025</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section id="skills-preview">
        <SectionTitle subtitle="A selection of my technical abilities and competencies" centered>
          Technical Skills
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredSkills.map((skill, index) => (
            <SkillBar
              key={index}
              name={skill.name}
              percentage={skill.percentage}
            />
          ))}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link to="/skills" className="button-secondary inline-flex items-center">
            <Code className="w-4 h-4 mr-2" />
            View All Skills
          </Link>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured-projects">
        <SectionTitle subtitle="Some of my recent work and projects" centered>
          Featured Projects
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
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
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link to="/projects" className="button-secondary inline-flex items-center">
            <Briefcase className="w-4 h-4 mr-2" />
            View All Projects
          </Link>
        </motion.div>
      </section>

      {/* Call To Action Section */}
      <section id="cta">
        <motion.div
          className="bg-primary dark:bg-dark-secondary rounded-lg p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Interested in working together?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a href="mailto:your.email@example.com" className="button-primary inline-flex items-center">
            Let's Connect
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
