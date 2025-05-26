
import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeSwitcher from '../ThemeSwitcher';
import LanguageSwitcher from '../LanguageSwitcher';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  navigationItems: { id: string; label: string; href: string; }[];
}

const MobileMenu = ({ isOpen, toggleMenu, navigationItems }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 md:hidden bg-background/95 backdrop-blur-lg"
        >
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="container mx-auto px-4 py-4 flex justify-end items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label="Close menu"
                className="rounded-full hover:bg-primary/10"
              >
                <X size={24} className="text-primary" />
              </Button>
            </div>
            
            <div className="flex-grow flex items-center justify-center">
              <ul className="flex flex-col items-center gap-10 py-10">
                {navigationItems.map((item, index) => (
                  <motion.li 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                  >
                    <a 
                      href={item.href}
                      className="text-text hover:text-primary transition-colors text-2xl font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                      onClick={() => {
                        toggleMenu();
                        document.body.style.overflow = 'auto';
                      }}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="container mx-auto px-4 py-6 flex justify-center gap-6">
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
