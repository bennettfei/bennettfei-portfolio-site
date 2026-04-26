import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
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
    <footer id="contact" className="w-full px-6 md:px-12 lg:px-16 py-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="section-label">See something you like?</p>
          <h2 className="section-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight gradient-text bg-clip-text text-transparent">
            Let&apos;s connect.
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Reach out to me on LinkedIn, or send an email directly.
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-4">
          {socialLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                aria-label={link.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-soft transition-transform hover:-translate-y-1 hover:shadow-elevated"
              >
                <IconComponent className="h-6 w-6" />
              </a>
            );
          })}
        </div>

        <p className="text-muted-foreground text-xs">© 2023-2026 Bennett Feigenbaum. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
