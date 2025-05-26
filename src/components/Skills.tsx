import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context/ThemeContext';
import { darkTheme, lightTheme } from '@/lib/themes';

const Skills = () => {
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
    console.error("Theme context not available in Skills component:", error);
    // Continue with default theme (dark)
  }
  
  const skills = {
    languages: [
      'JavaScript/TypeScript',
      'Java',
      'SQL',
      'HTML/CSS',
      'C#',
      'Python'
    ],
    frameworks: [
      'React',
      'Node.js',
      'Docker',
      'AWS',
      'Git',
      'GitHub',
      'Next.js',
      'Angular',
      'React Native/Expo'
    ],
    databases: [
      'PostgreSQL',
      'MySQL',
      'Supabase',
      'Firebase'
    ]
  };
  
  const SkillSection = ({ title, items }: { title: string; items: string[] }) => (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-6">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((skill) => (
          <Badge 
            key={skill} 
            variant="outline" 
            className={cn(
              "text-sm py-2 px-4 rounded-full badge-hover border-primary/10",
              "hover:border-primary"
            )}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
  
  return (
    <section 
      id="skills" 
      className="py-24 relative"
      style={{
        background: `linear-gradient(180deg, ${currentTheme.colors.background}, ${currentTheme.colors.background}DD, ${currentTheme.colors.background})`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium mb-2">{t('mySkills')}</span>
          <h2 className="text-4xl md:text-5xl font-bold">{t('skillsTitle')}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12">
            <div className="glass-card p-8 rounded-2xl">
              <SkillSection title={t('frontendDev')} items={skills.languages} />
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <SkillSection title={t('databases')} items={skills.databases} />
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <SkillSection title={t('backendDev')} items={skills.frameworks} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
