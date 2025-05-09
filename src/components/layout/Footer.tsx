import { Github, Linkedin, Mail} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/hemanth301", ariaLabel: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/hemanth-pusukuri-88a959289/", ariaLabel: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:pusukurihemanth@gmail.com", ariaLabel: "Email" },
  ];
  
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-light-secondary dark:bg-dark-primary">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} Pusukuri Hemanth. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent hover:bg-gray-100 dark:hover:bg-dark-secondary transition-colors"
                aria-label={link.ariaLabel}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;