import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context/ThemeContext';
import { darkTheme, lightTheme } from '@/lib/themes';

const Skills = () => {
  const { t } = useTranslation();
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  try {
    const { themeConfig } = useTheme();

    useEffect(() => {
      setCurrentTheme(themeConfig);
    }, [themeConfig]);
  } catch (error) {
    console.error("Theme context not available in Skills component:", error);
  }

  const skills = {
    languages: [
      'JavaScript',
      'TypeScript',
      'Java',
      'C#',
      'Python',
      'SQL',
      'HTML',
      'CSS'
    ],
    frontendFrameworks: [
      'React',
      'Next.js',
      'Angular',
      'React Native',
      'Expo'
    ],
    backendFrameworks: [
      'Node.js',
      'Express.js',
      'Nest.js',
    ],
    devops: [
      'Git',
      'GitHub',
      'AWS'
    ],
    containers: [
      'Docker'
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
      {title && <h3 className="text-2xl font-semibold mb-6">{title}</h3>}
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

        <div className="grid grid-cols-1 md:grid-cols-6 gap-x-4">
          <div className="glass-card p-8 rounded-2xl flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4 text-primary">{t('languages')}</h3>
            <SkillSection title="" items={skills.languages} />
          </div>
          <div className="glass-card p-8 rounded-2xl flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4 text-primary">{t('frontendFrameworks')}</h3>
            <SkillSection title="" items={skills.frontendFrameworks} />
          </div>
          <div className="glass-card p-8 rounded-2xl flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4 text-primary">{t('backendFrameworks')}</h3>
            <SkillSection title="" items={skills.backendFrameworks} />
          </div>
          <div className="glass-card p-8 rounded-2xl flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4 text-primary">{t('devops')}</h3>
            <SkillSection title="" items={skills.devops} />
          </div>
          <div className="glass-card p-8 rounded-2xl flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4 text-primary">{t('containers')}</h3>
            <SkillSection title="" items={skills.containers} />
          </div>
          <div className="glass-card p-8 rounded-2xl flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4 text-primary">{t('databases')}</h3>
            <SkillSection title="" items={skills.databases} />
          </div>
        </div>
      </div>
    </section >
  );
};

export default Skills;
