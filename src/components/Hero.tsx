
import React, { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import HeroHeader from './navigation/HeroHeader';
import ParticleBackground from './hero/ParticleBackground';
import HeroContent from './hero/HeroContent';
import ScrollIndicator from './hero/ScrollIndicator';
import { motion } from 'framer-motion';
import { darkTheme } from '@/lib/themes';

const Hero = () => {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);
  
  // Use try-catch to handle potential errors with useTheme
  try {
    const { themeConfig, theme } = useTheme();
    
    // Atualizar o tema atual quando houver mudanças
    useEffect(() => {
      setCurrentTheme(themeConfig);
    }, [themeConfig]);
    
    return (
      <motion.section 
        id="home" 
        className="relative min-h-screen flex flex-col overflow-hidden"
        style={{ 
          background: currentTheme.colors.backgroundPresentation 
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroHeader />
        <ParticleBackground />
        <HeroContent />
        <ScrollIndicator />
      </motion.section>
    );
  } catch (error) {
    // Fallback rendering when ThemeProvider context is not available
    console.error("Theme context not available:", error);
    
    return (
      <section id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <HeroHeader />
        <ParticleBackground />
        <HeroContent />
        <ScrollIndicator />
      </section>
    );
  }
};

export default Hero;
