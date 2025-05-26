import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, Send, Phone } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: t('messageSent'),
        description: `${formData.name} (${formData.email})`,
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };
  
  const contactMethods = [
    {
      icon: <Mail className="h-10 w-10 text-primary" />,
      title: 'Email',
      value: 'mariottopirese@gmail.com',
      link: 'mailto:mariottopirese@gmail.com'
    },
    {
      icon: <Linkedin className="h-10 w-10 text-primary" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/enzo-mariotto',
      link: 'https://www.linkedin.com/in/enzo-mariotto/'
    },
    {
      icon: <Github className="h-10 w-10 text-primary" />,
      title: 'GitHub',
      value: 'github.com/m4riott0',
      link: 'https://github.com/m4riott0'
    },
    {
      icon: <Phone className="h-10 w-10 text-primary" />,
      title: 'WhatsApp',
      value: '(17) 99151-8628',
      link: 'https://wa.me/5517991518628'
    }
  ];
  
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium mb-2">{t('getInTouch')}</span>
          <h2 className="text-4xl md:text-5xl font-bold">{t('contactTitle')}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <a 
                key={index}
                href={method.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-8 rounded-2xl text-center transition-all hover:scale-105 border border-primary/10 hover:border-primary/30"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-4">{method.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-text/80">{method.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
