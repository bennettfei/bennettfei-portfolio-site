import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/bflogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navItems = ['projects', 'experience', 'contact'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className={`w-full transition-all duration-500 ${
        scrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border/50' : 'bg-transparent'
      }`}>
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-16 max-w-6xl mx-auto h-16">
        <img
          src={logoImg}
          alt="BF Logo"
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-cover"
        />
          
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((section) => (
              isHomePage ? (
                <button
                  key={section}
                  onClick={() => handleNavigation(section)}
                  className="text-muted-foreground hover:text-foreground text-xs font-medium tracking-[0.15em] uppercase transition-colors"
                >
                  {section}
                </button>
              ) : (
                <Link
                  key={section}
                  to={`/#${section}`}
                  className="text-muted-foreground hover:text-foreground text-xs font-medium tracking-[0.15em] uppercase transition-colors"
                >
                  {section}
                </Link>
              )
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-px bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
              <span className={`block h-px bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <nav className="flex flex-col px-6 py-8 gap-6 max-w-6xl mx-auto">
            {navItems.map((section) => (
              isHomePage ? (
                <button
                  key={section}
                  onClick={() => handleNavigation(section)}
                  className="text-muted-foreground hover:text-foreground text-xs font-medium tracking-[0.15em] uppercase transition-colors text-left"
                >
                  {section}
                </button>
              ) : (
                <Link
                  key={section}
                  to={`/#${section}`}
                  className="text-muted-foreground hover:text-foreground text-xs font-medium tracking-[0.15em] uppercase transition-colors"
                >
                  {section}
                </Link>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
