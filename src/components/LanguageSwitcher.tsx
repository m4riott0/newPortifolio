
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <div className="flex gap-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => changeLanguage('pt')}
        className={cn(
          "w-9 h-9 p-0 rounded-full font-medium text-xs transition-all duration-300",
          i18n.language === 'pt' 
            ? "bg-primary/20 text-primary ring-2 ring-primary/20" 
            : "hover:bg-primary/5"
        )}
        aria-label="Switch to Portuguese"
      >
        <motion.span
          animate={{ scale: i18n.language === 'pt' ? 1.1 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          PT
        </motion.span>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => changeLanguage('en')}
        className={cn(
          "w-9 h-9 p-0 rounded-full font-medium text-xs transition-all duration-300",
          i18n.language === 'en' 
            ? "bg-primary/20 text-primary ring-2 ring-primary/20" 
            : "hover:bg-primary/5"
        )}
        aria-label="Switch to English"
      >
        <motion.span
          animate={{ scale: i18n.language === 'en' ? 1.1 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          EN
        </motion.span>
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
