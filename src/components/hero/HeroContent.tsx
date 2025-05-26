import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const HeroContent = () => {
  const { t, i18n } = useTranslation();

  // Defina os caminhos dos arquivos de CV
  const cvLink =
    i18n.language.startsWith('pt')
      ? '/EnzoMariotto.pdf'
      : '/EnzoMariottoPires.pdf';

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-start z-10 mt-16">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm"
        >
          <span className="text-primary font-medium">{t('hello')}</span>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-2 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="text-4xl md:text-5xl font-light block mb-2">
            Enzo Mariotto
          </span>
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent text-gray-100">
            {t('role')} 
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-text/80 text-lg mb-10 leading-relaxed max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {t('intro')}
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            variant="ghost"
            asChild
            className="rounded-full hover:bg-primary/5 transition-all duration-300 hover:translate-y-[-2px]"
          >
            <a href={cvLink} download>
              <ArrowDown className="mr-2 h-4 w-4" />
              {t('downloadCV')}
            </a>
          </Button>
          
          <Button
            variant="ghost"
            asChild
            className="rounded-full hover:bg-primary/5 transition-all duration-300 hover:translate-y-[-2px]"
          >
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              {t('contactMe')}
            </a>
          </Button>
          
          <Button variant="ghost" asChild className="rounded-full hover:bg-primary/5 transition-all duration-300 hover:translate-y-[-2px]">
            <a href="https://github.com/m4riott0" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroContent;
