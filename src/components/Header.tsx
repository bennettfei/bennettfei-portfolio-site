import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 mb-24">
      <div className="w-full h-full bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg" />
      
      <div className="absolute inset-0 flex items-center justify-between px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/762f328d8880d2700c80cea5c002450fb6c9c1d6?width=160"
          alt="Bennett Feigenbaum Logo"
          className="w-16 h-auto"
        />
        
        <nav className="hidden md:flex items-center gap-8">
          {['home', 'projects', 'experience', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-foreground/80 hover:text-foreground text-sm font-medium tracking-wide uppercase transition-all hover:scale-105"
            >
              {section}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-foreground p-2 hover:bg-accent rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-surface/95 backdrop-blur-xl border-b border-border shadow-2xl animate-in">
          <nav className="flex flex-col items-center py-6 gap-4">
            {['home', 'projects', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-foreground/80 hover:text-foreground text-sm font-medium tracking-wide uppercase transition-all hover:scale-105 py-2 px-6 hover:bg-accent rounded-lg w-48 text-center"
              >
                {section}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
