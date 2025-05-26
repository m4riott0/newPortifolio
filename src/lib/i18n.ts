import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Header and Navigation
          home: "Home",
          about: "About",
          experience: "Experience",
          education: "Education",
          skills: "Skills",
          contact: "Contact",
          
          // Hero Section
          hello: "Hello, I am",
          role: "Full Stack Developer",
          intro: "I build exceptional digital experiences with modern technologies. Focused on creating efficient, scalable and user-friendly web applications.",
          downloadCV: "Download CV",
          contactMe: "Contact Me",
          
          // About Section
          aboutMe: "About Me",
          aboutTitle: "Creating Digital Solutions with Passion",
          aboutDescription: "I am a passionate Full Stack Developer with expertise in modern web technologies. I love solving complex problems and creating intuitive, efficient solutions that enhance user experience.",
          aboutDescription2: "I am constantly learning new technologies and honing my skills to create efficient, scalable digital products that solve real-world problems.",
          yearsExperience: "Years of Experience",
          technologies: "Technologies",
          projects: "Projects",
          
          // Experience Section
          career: "Career",
          workExperience: "Work Experience",
          experienceTitle: "My Professional Journey",
          present: "Present",
          companyA: "Tech Solutions Inc.",
          roleA: "Senior Full Stack Developer",
          descA: "Led development of multiple web applications using React, Node.js, and MongoDB. Improved application performance by 40%.",
          companyB: "Digital Innovations",
          roleB: "Full Stack Developer",
          descB: "Developed and maintained various client websites and web applications. Implemented responsive designs and ensured cross-browser compatibility.",
          companyC: "Web Creators Co.",
          roleC: "Frontend Developer",
          descC: "Created interactive user interfaces using modern JavaScript frameworks. Collaborated with designers to implement pixel-perfect designs.",
          
          // Education Section
          academic: "Academic",
          educationHistory: "Education History",
          educationTitle: "Academic Background",
          universityA: "Universidade Paulista – UNIP",
          degreeA: "CST in Systems Analysis and Development",
          eduDescA: "Solid academic background in software engineering, database systems, systems analysis, and application development. Emphasis on practical projects and real-world problem-solving.",
          systemsDate: "Feb 2022 - Jul 2024",
          systemsInstitution: "Universidade Paulista – UNIP, São José do Rio Preto Campus",
          systemsLocation: "São José do Rio Preto, SP",
          systemsDescription: "Comprehensive education in software development, database management, and system architecture. Focused on practical skills and industry applications.",
          
          // Skills Section
          expertise: "Expertise",
          mySkills: "My Skills",
          skillsTitle: "Technical Expertise",
          frontendDev: "Frontend Development",
          backendDev: "Backend Development",
          databases: "Databases",
          devOps: "DevOps",
          otherSkills: "Other Skills",
          languages: "Languages",
          frameworks: "Frameworks & Tools",
          
          // Contact Section
          getInTouch: "Get In Touch",
          contactTitle: "Let's Work Together",
          contactDesc: "Interested in working together? Feel free to reach out for collaborations or just a friendly hello.",
          formName: "Name",
          formEmail: "Email",
          formMessage: "Message",
          formSubmit: "Send Message",
          messageSent: "Your message has been sent!",
          messageError: "There was an error sending your message.",
          messageRequired: "This field is required",
          emailInvalid: "Please enter a valid email address",
          sending: "Sending...",
          letsTalk: "Let's talk?",
          send: "Send",
          successMessage: "Message sent successfully!",
          
          // Footer
          copyright: "All rights reserved.",
          madeWith: "Made with React, Typescript and Tailwind CSS",
          quickLinks: "Quick Links",
          preferences: "Preferences",
          theme: "Theme",
          language: "Language",
          footerDescription: "Full Stack Developer focused on creating elegant, efficient, and scalable web and mobile solutions.",
          allRightsReserved: "All rights reserved.",
          
          // Miscellaneous
          freelanceTitle: "Freelance Developer",
          freelanceDate: "2021 - Present",
          freelanceLocation: "Remote",
          freelanceDescription: "Develop custom websites and applications for clients across various industries. Implement responsive designs and optimize user experiences.",
          
          organizerTitle: "Tech Community Organizer",
          organizerDate: "2020 - Present",
          organizerLocation: "São Paulo, Brazil",
          organizerDescription: "Organize local tech meetups and workshops. Foster knowledge sharing and networking among developers in the community.",
          
          supportTitle: "Technical Support Specialist",
          supportDate: "2018 - 2020",
          supportLocation: "São Paulo, Brazil",
          supportDescription: "Provided technical assistance and troubleshooting for enterprise software systems. Maintained documentation and user guides."
        }
      },
      pt: {
        translation: {
          // Header and Navigation
          home: "Início",
          about: "Sobre",
          experience: "Experiência",
          education: "Educação",
          skills: "Habilidades",
          contact: "Contato",
          
          // Hero Section
          hello: "Olá, eu sou",
          role: "Desenvolvedor Full Stack",
          intro: "Eu construo experiências digitais excepcionais com tecnologias modernas. Focado em criar aplicações web eficientes, escaláveis e amigáveis ao usuário.",
          downloadCV: "Baixar Currículo",
          contactMe: "Entre em Contato",
          
          // About Section
          aboutMe: "Sobre Mim",
          aboutTitle: "Criando Soluções Digitais com Paixão",
          aboutDescription: "Sou um desenvolvedor Full Stack apaixonado com expertise em tecnologias web modernas. Adoro resolver problemas complexos e criar soluções intuitivas e eficientes que melhoram a experiência do usuário.",
          aboutDescription2: "Estou constantemente aprendendo novas tecnologias e aperfeiçoando minhas habilidades para criar produtos digitais eficientes e escaláveis que resolvem problemas reais.",
          yearsExperience: "Anos de Experiência",
          technologies: "Tecnologias",
          projects: "Projetos",
          
          // Experience Section
          career: "Carreira",
          workExperience: "Experiência Profissional",
          experienceTitle: "Minha Jornada Profissional",
          present: "Presente",
          companyA: "Tech Solutions Inc.",
          roleA: "Desenvolvedor Full Stack Sênior",
          descA: "Liderou o desenvolvimento de múltiplas aplicações web usando React, Node.js e MongoDB. Melhorou o desempenho da aplicação em 40%.",
          companyB: "Digital Innovations",
          roleB: "Desenvolvedor Full Stack",
          descB: "Desenvolveu e manteve vários sites e aplicativos web de clientes. Implementou designs responsivos e garantiu compatibilidade entre navegadores.",
          companyC: "Web Creators Co.",
          roleC: "Desenvolvedor Frontend",
          descC: "Criou interfaces de usuário interativas usando frameworks JavaScript modernos. Colaborou com designers para implementar designs perfeitos em pixels.",
          
          // Education Section
          academic: "Acadêmico",
          educationHistory: "Histórico Educacional",
          educationTitle: "Formação Acadêmica",
          universityA: "Universidade Paulista – UNIP",
          degreeA: "CST em Análise e Desenvolvimento de Sistemas",
          eduDescA: "Formação acadêmica sólida em engenharia de software, sistemas de banco de dados, análise de sistemas e desenvolvimento de aplicações. Ênfase em projetos práticos e resolução de problemas do mundo real.",
          systemsDate: "Fev 2022 - Jul 2024",
          systemsInstitution: "Universidade Paulista – UNIP, Campus São José do Rio Preto",
          systemsLocation: "São José do Rio Preto, SP",
          systemsDescription: "Educação abrangente em desenvolvimento de software, gerenciamento de banco de dados e arquitetura de sistemas. Focado em habilidades práticas e aplicações na indústria.",
          
          // Skills Section
          expertise: "Especialidades",
          mySkills: "Minhas Habilidades",
          skillsTitle: "Expertise Técnica",
          frontendDev: "Desenvolvimento Frontend",
          backendDev: "Desenvolvimento Backend",
          databases: "Bancos de Dados",
          devOps: "DevOps",
          otherSkills: "Outras Habilidades",
          languages: "Linguagens",
          frameworks: "Frameworks e Ferramentas",
          
          // Contact Section
          getInTouch: "Entre em Contato",
          contactTitle: "Vamos Trabalhar Juntos",
          contactDesc: "Interessado em trabalhar juntos? Sinta-se à vontade para entrar em contato para colaborações ou apenas um olá amigável.",
          formName: "Nome",
          formEmail: "Email",
          formMessage: "Mensagem",
          formSubmit: "Enviar Mensagem",
          messageSent: "Sua mensagem foi enviada!",
          messageError: "Houve um erro ao enviar sua mensagem.",
          messageRequired: "Este campo é obrigatório",
          emailInvalid: "Por favor, insira um endereço de email válido",
          sending: "Enviando...",
          letsTalk: "Vamos conversar?",
          send: "Enviar",
          successMessage: "Mensagem enviada com sucesso!",
          
          // Footer
          copyright: "Todos os direitos reservados.",
          madeWith: "Feito com React, Typescript e Tailwind CSS",
          quickLinks: "Links Rápidos",
          preferences: "Preferências",
          theme: "Tema",
          language: "Idioma",
          footerDescription: "Desenvolvedor Full Stack focado em criar soluções web e mobile elegantes, eficientes e escaláveis.",
          allRightsReserved: "Todos os direitos reservados.",
          
          // Miscellaneous
          freelanceTitle: "Desenvolvedor Freelancer",
          freelanceDate: "2021 - Presente",
          freelanceLocation: "Remoto",
          freelanceDescription: "Desenvolvimento de websites e aplicações personalizadas para clientes de várias indústrias. Implementação de designs responsivos e otimização da experiência do usuário.",
          
          organizerTitle: "Organizador de Comunidade Tech",
          organizerDate: "2020 - Presente",
          organizerLocation: "São Paulo, Brasil",
          organizerDescription: "Organização de meetups e workshops tecnológicos locais. Promoção de compartilhamento de conhecimento e networking entre desenvolvedores na comunidade.",
          
          supportTitle: "Especialista em Suporte Técnico",
          supportDate: "2018 - 2020",
          supportLocation: "São Paulo, Brasil",
          supportDescription: "Fornecimento de assistência técnica e solução de problemas para sistemas de software empresariais. Manutenção de documentação e guias de usuário."
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
