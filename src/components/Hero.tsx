import React from 'react';
import { Github, Linkedin, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImg from '../assets/projects/me.jpg';
import Skills from './Skills';

const Hero = () => {
  const handleGetInTouch = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // In a real implementation, this would download the actual CV
    window.open('#', '_blank');
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/bennettfei',
      ariaLabel: 'GitHub Profile'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/bennettfeigenbaum',
      ariaLabel: 'LinkedIn Profile'
    },
  ];

  return (
    <section id="home" className="relative flex flex-col items-center justify-center px-6 min-h-screen">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
        <div className ="relative inline-block">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-300/20 to-orange-300/10 rounded-full blur-3xl" />
        <img
          src={profileImg}
          alt="Bennett Feigenbaum Profile"
          className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover shadow-2xl ring-4 ring-orange-300/10 mb-12"
        />
      </div>
      </motion.div>
      
      <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text- text-xl md:text-2xl lg:text-3xl font-extrabold leading-snug text-balance"
        >
          Hey, I'm
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="section-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] gradient-text block bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent ml-2 tracking-wide leading-snug overflow-visible"
        >
          Bennett!
        </motion.h1>
        
        <div className="flex gap-4 justify-center mt-4 mb-4">
          {socialLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                aria-label={link.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-all duration-200 hover:scale-110"
              >
                <IconComponent size={24} />
              </a>
            );
          })}
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground text-base md:text-m leading-relaxed max-w-xl mx-auto mb-12"
        >
          Senior @ UT Dallas studying Computer Information Systems & Technology.<br></br> 
          I utilize my experience in analytics & design to transform complex business problems into clear solutions.
        </motion.p>

        <Skills />
        
      </div>
        {/* Scroll indicator */}
      <motion.button
        onClick={handleScrollToProjects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 text-muted-foreground hover:text-foreground transition-colors"
      >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;