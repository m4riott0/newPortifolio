import React from 'react';
import { useTranslation } from 'react-i18next';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  const navigationItems = [
    { id: 'home', label: t('home'), href: '#home' },
    { id: 'about', label: t('about'), href: '#about' },
    { id: 'education', label: t('education'), href: '#education' },
    { id: 'skills', label: t('skills'), href: '#skills' },
    { id: 'contact', label: t('contact'), href: '#contact' },
  ];
  
  return (
    <footer className="py-12 border-t border-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Enzo Mariotto</h3>
            <p className="text-text/60 max-w-md">
              {t('intro')}
            </p>
            
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20"
              >
                <Github size={20} className="text-primary" />
              </a>
              <a 
                href="https://www.linkedin.com/in/enzo-mariotto/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20"
              >
                <Linkedin size={20} className="text-primary" />
              </a>
              <a 
                href="mailto:mariottopirese@gmail.com"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20"
              >
                <Mail size={20} className="text-primary" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={item.href}
                    className="text-text/70 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('preferences')}</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-text/70">{t('theme')}:</span>
                <ThemeSwitcher />
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-text/70">{t('language')}:</span>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text/60 mb-4 md:mb-0">
            © {currentYear} Enzo Mariotto Pires. {t('copyright')}
          </p>
          
          <p className="text-text/60">
            <span className="text-primary">❤</span> {t('madeWith')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
