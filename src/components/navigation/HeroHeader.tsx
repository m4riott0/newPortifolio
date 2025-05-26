import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import ThemeSwitcher from '../ThemeSwitcher';
import LanguageSwitcher from '../LanguageSwitcher';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const HeroHeader = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Header navigation items
  const navigationItems = [
    { id: 'home', label: t('home'), href: '#home' },
    { id: 'about', label: t('about'), href: '#about' },
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
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "sticky top-0 z-50 py-4 transition-all duration-500 w-full backdrop-blur-md",
          scrolled 
            ? "bg-background/80 shadow-sm py-3" 
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 flex justify-center items-center">
          {/* Centered Navigation */}
          <Navigation items={navigationItems} />
          
          {/* Right side - Theme and Language switchers */}
          <div className="absolute right-4 flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
            
            {/* Mobile menu button - only visible on mobile */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="md:hidden rounded-full hover:bg-primary/10"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <Menu size={24} className="text-primary" />
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        toggleMenu={toggleMenu} 
        navigationItems={navigationItems} 
      />
    </>
  );
};

export default HeroHeader;
