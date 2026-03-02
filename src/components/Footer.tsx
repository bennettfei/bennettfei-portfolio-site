import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitMessage('Message sent — I\'ll be in touch soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1000);
  };

  return (
    <footer id="contact" className="w-full px-6 md:px-12 lg:px-16 py-32 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-3">Get In Touch</p>
            <h2 className="section-heading text-foreground text-4xl md:text-5xl font-bold mb-8">
              Contact
            </h2>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-10 max-w-md">
              Interested in working together or just want to say hello? 
              Feel free to reach out! I'm always open to new opportunities and conversations.
            </p>
            
            <a 
              href="mailto:bdfeigenbaum005@gmail.com"
              className="inline-flex items-center gap-3 text-foreground text-sm font-medium hover:opacity-70 transition-opacity group"
            >
              <Mail className="w-4 h-4" />
              bdfeigenbaum005@gmail.com
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Right side - form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-xs font-medium tracking-[0.1em] uppercase text-muted-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground text-sm placeholder-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-xs font-medium tracking-[0.1em] uppercase text-muted-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground text-sm placeholder-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-xs font-medium tracking-[0.1em] uppercase text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground text-sm placeholder-muted-foreground/50 focus:outline-none focus:border-foreground resize-none transition-colors"
                placeholder="What's on your mind?"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 px-8 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {submitMessage && (
              <p className="text-foreground/70 text-sm mt-3">{submitMessage}</p>
            )}
          </motion.form>
        </div>

        {/* Bottom bar */}
        <div className="mt-32 pt-8 border-t border-border/30 flex items-center justify-between">
          <p className="text-muted-foreground text-xs">© 2023-2026 Bennett Feigenbaum. All rights reserved.</p>
          <p className="text-muted-foreground text-xs">built with love, next.js, and energy drinks</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
