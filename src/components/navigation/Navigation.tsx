
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface NavigationProps {
  items: { id: string; label: string; href: string; }[];
}

const Navigation = ({ items }: NavigationProps) => {
  return (
    <nav className="hidden md:flex items-center justify-center flex-1">
      <ul className="flex gap-8">
        {items.map((item, index) => (
          <motion.li 
            key={item.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.1 * index,
              duration: 0.3,
            }}
          >
            <a 
              href={item.href}
              className={cn(
                "text-text/70 hover:text-primary transition-colors text-sm font-medium relative group",
                "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0",
                "after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300",
                "hover:after:scale-x-100 hover:after:origin-bottom-left"
              )}
              aria-label={`Navigate to ${item.label} section`}
            >
              <span className="relative">
                {item.label}
                <span className="absolute -top-1 -right-1.5 w-1.5 h-1.5 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </span>
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
