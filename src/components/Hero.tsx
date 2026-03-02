import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImg from '../assets/projects/me.png';

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
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:bdfeigenbaum005@gmail.com',
      ariaLabel: 'Send Email'
    }
  ];

  return (
    <section id="home" className="relative flex flex-col items-center justify-center px-6 min-h-screen">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(0 0% 98%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 98%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
        <div className ="relative inline-block">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl" />
        <img
          src={profileImg}
          alt="Bennett Feigenbaum Profile"
          className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover shadow-2xl ring-4 ring-primary/10 mb-12"
        />
      </div>
      </motion.div>
      
      <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text- text-m md:text-l lg:text-xl font-extrabold leading-snug text-balance"
        >
          Hey, I'm
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="section-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-[0.95] gradient-text block bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent ml-2 tracking-wide leading-snug overflow-visible"
        >
          Bennett Feigenbaum
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
          className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-12"
        >
          I'm a multifaceted developer with experience in organizational,
          startup, and nonprofit work environments. My background spans roles
          in UX design, web development, data analytics, and marketing, where
          I focus on creating impactful solutions that blend technology and
          user needs.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={handleGetInTouch}
            className="px-8 py-3.5 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </button>
          <button
            onClick={handleScrollToProjects}
            className="px-8 py-3.5 rounded-full border border-border text-foreground font-medium text-sm hover:bg-accent transition-colors"
          >
            View Work
          </button>
        </motion.div>
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