
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import { cn } from '@/lib/utils';

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navigationItems = [
    { id: 'home', label: t('home'), href: '#home' },
    { id: 'about', label: t('about'), href: '#about' },
    { id: 'experience', label: t('experience'), href: '#experience' },
    { id: 'education', label: t('education'), href: '#education' },
    { id: 'skills', label: t('skills'), href: '#skills' },
    { id: 'contact', label: t('contact'), href: '#contact' },
  ];
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  
  try {
    return (
      <header 
        className={cn(
          "sticky top-0 z-50 py-4 transition-all duration-300",
          scrolled ? "backdrop-blur-md bg-background/90 shadow-sm" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className={cn(
            "text-2xl font-bold transition-all duration-300",
            scrolled ? "text-primary" : "text-text"
          )}>
            <span className="text-primary">E</span>nzo <span className="text-primary">M</span>ariotto
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={item.href}
                    className="text-text/70 hover:text-primary transition-colors text-sm font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>
          </nav>
          
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden bg-background">
            <div className="flex flex-col h-full overflow-y-auto">
              <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold">
                  <span className="text-primary">E</span>nzo <span className="text-primary">M</span>ariotto
                </a>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </Button>
              </div>
              
              <div className="flex-grow flex items-center justify-center">
                <ul className="flex flex-col items-center gap-8 py-8">
                  {navigationItems.map((item) => (
                    <li key={item.id}>
                      <a 
                        href={item.href}
                        className="text-text/80 hover:text-primary transition-colors text-xl font-medium"
                        onClick={() => {
                          setIsMenuOpen(false);
                          document.body.style.overflow = 'auto';
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </header>
    );
  } catch (error) {
    // Fallback rendering when ThemeProvider context is not available
    console.error("Theme context not available in Header:", error);
    
    return (
      <header className="sticky top-0 z-50 py-4 bg-gray-900 text-white">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">
            <span className="text-purple-400">E</span>nzo <span className="text-purple-400">M</span>ariotto
          </a>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </header>
    );
  }
};

export default Header;
