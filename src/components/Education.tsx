
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const Education = () => {
  const { t } = useTranslation();
  
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium mb-2">{t('educationHistory')}</span>
          <h2 className="text-4xl md:text-5xl font-bold">{t('educationTitle')}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-32 h-32 rounded-full flex items-center justify-center bg-primary/10">
              <GraduationCap className="h-16 w-16 text-primary" />
            </div>
          </div>
          
          <Card className="w-full md:w-2/3 card-hover border-primary/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl text-primary">{t('universityA')}</CardTitle>
              <p className="text-text/80 font-medium">{t('degreeA')}</p>
              <div className="flex flex-wrap gap-4 text-sm text-text/60 mt-2">
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  2022 - 2024
                </span>
                <span className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  São José do Rio Preto, São Paulo, Brasil
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-text/80">
                {t('eduDescA')}
              </p>
              
              <div className="mt-4 pt-4 border-t border-primary/10">
                <h4 className="font-medium mb-2">{t('keyAchievements')}:</h4>
                <ul className="list-disc list-inside text-text/80 pl-1 space-y-1">
                  <li>{t('achievement1')}</li>
                  <li>{t('achievement2')}</li>
                  <li>{t('achievement3')}</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
