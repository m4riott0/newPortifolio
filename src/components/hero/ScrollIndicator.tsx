
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  return (
    <motion.div 
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: 0.8,
        duration: 0.6,
      }}
    >
      <a 
        href="#about" 
        className="flex flex-col items-center justify-center group"
        aria-label="Scroll to About section"
      >
        <motion.span 
          className="text-sm font-medium text-primary/70 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{ y: [0, 5, 0] }}
          transition={{ 
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "easeInOut"
          }}
        >
          Scroll
        </motion.span>
        <div className="relative">
          <motion.div 
            className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-center justify-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ 
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              ease: "easeInOut"
            }}
          >
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-primary"
              animate={{ 
                y: [0, 12, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
              delay: 0.2
            }}
          >
            <ArrowDown className="h-4 w-4 text-primary absolute -bottom-6 left-1/2 -translate-x-1/2" />
          </motion.div>
        </div>
      </a>
    </motion.div>
  );
};

export default ScrollIndicator;
