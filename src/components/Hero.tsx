import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../assets/projects/me.png';

const Hero = () => {
  const handleGetInTouch = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
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
    <section id="home" className="relative flex flex-col items-center px-6 py-32 pt-40 min-h-screen justify-center">
      <div className="relative animate-in">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl" />
        <img
          src={profileImg}
          alt="Bennett Feigenbaum Profile"
          className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover shadow-2xl ring-4 ring-primary/10 mb-12"
        />
      </div>
      
      <div className="max-w-4xl text-center animate-in" style={{ animationDelay: '0.1s' }}>
        <h1 className="text-foreground text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-balance">
          My Name is
          <span className="gradient-text block bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent ml-2 tracking-wide leading-snug overflow-visible">
            Bennett Feigenbaum
          </span>
        </h1>
        <div className="flex gap-4 justify-center mt-3 mb-3">
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
      </div>
      
      <div className="max-w-2xl text-center animate-in mb-12 mt" style={{ animationDelay: '0.2s' }}>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          I'm a multifaceted developer with experience in organizational,
          startup, and nonprofit work environments. My background spans roles
          in UX design, web development, data analytics, and marketing, where
          I focus on creating impactful solutions that blend technology and
          user needs.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 animate-in" style={{ animationDelay: '0.3s' }}>
        <button
          onClick={handleGetInTouch}
          className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          Get In Touch
        </button>
        {/*
          <button
          onClick={handleDownloadCV}
          className="px-8 py-4 rounded-full border-2 border-primary bg-transparent text-foreground font-semibold text-base hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
        >
          Download CV
        </button>
       */}
      </div>
    </section>
  );
};

export default Hero;
