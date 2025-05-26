
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Activity, Code, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context/ThemeContext';
import { darkTheme, lightTheme } from '@/lib/themes';

const About = () => {
  const { t } = useTranslation();
  const [currentTheme, setCurrentTheme] = useState(darkTheme);
  
  // Safely try to get theme from context
  try {
    const { themeConfig } = useTheme();
    
    // Update state when theme changes
    useEffect(() => {
      setCurrentTheme(themeConfig);
    }, [themeConfig]);
  } catch (error) {
    console.error("Theme context not available in About component:", error);
    // Continue with default theme (dark)
  }
  
  const stats = [
    { 
      icon: <Activity className="h-6 w-6 text-primary" />,
      value: "5+", 
      label: t('yearsExperience') || "Anos de experiência" 
    },
    { 
      icon: <Code className="h-6 w-6 text-primary" />, 
      value: "10+", 
      label: t('technologies') || "Tecnologias"
    },
    { 
      icon: <Layers className="h-6 w-6 text-primary" />, 
      value: "20+", 
      label: t('projects') || "Projetos" 
    },
  ];
  
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium mb-2">{t('aboutMe') || "Sobre mim"}</span>
          <h2 className="text-4xl md:text-5xl font-bold">{t('aboutTitle')}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-text/80 text-lg leading-relaxed mb-6">
            {t('aboutDescription')}
          </p>
          <p className="text-text/80 text-lg leading-relaxed">
            {t('aboutDescription2') || "Estou constantemente aprendendo novas tecnologias e aperfeiçoando minhas habilidades para criar produtos digitais eficientes e escaláveis que resolvem problemas reais."}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={cn(
                "glass-card rounded-2xl p-8 text-center transition-all hover:scale-105 border border-primary/10",
                "hover:border-primary/30"
              )}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2 text-primary">{stat.value}</h3>
              <p className="text-text/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
