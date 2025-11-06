import React, { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1000);
  };

  const EmailIcon = () => (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="email-icon"
    >
      <path
        d="M2.83744 3.09497H13.6696C14.3818 3.09497 14.9591 3.67232 14.9591 4.38451V12.1217C14.9591 12.8339 14.3818 13.4113 13.6696 13.4113H2.83744C2.12524 13.4113 1.5479 12.8339 1.5479 12.1217V4.38451C1.5479 3.67232 2.12524 3.09497 2.83744 3.09497Z"
        stroke="white"
        strokeWidth="0.884256"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8956 5.1582L8.25329 8.76891L3.61095 5.1582"
        stroke="white"
        strokeWidth="0.884256"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <footer id="contact" className="w-full bg-surface/50 backdrop-blur-sm px-6 py-24 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-foreground tracking-tight mb-4">
            Contact
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>
        
        <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl">
          I'm a multifaceted developer with experience in organizational,
          startup, and nonprofit work environments. My background spans roles
          in UX design, web development, data analytics, and marketing, where
          I focus on creating impactful solutions that blend technology and
          user needs.
        </p>
        
        <div className="flex items-center gap-3 mb-12 group">
          <div className="p-2 bg-accent rounded-lg group-hover:bg-primary transition-colors">
            <EmailIcon />
          </div>
          <a 
            href="mailto:bdf220000@utdallas.edu"
            className="text-foreground text-lg font-semibold hover:text-primary transition-colors"
          >
            bdf220000@utdallas.edu
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
