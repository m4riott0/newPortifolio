
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const ThemeSwitcher = () => {
  try {
    const { theme, toggleTheme } = useTheme();
    
    return (
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="outline"
          size="icon"
          aria-label="Toggle theme"
          onClick={toggleTheme}
          className={cn(
            "rounded-full w-10 h-10 border-primary/20 transition-all duration-500",
            "hover:bg-primary/10 hover:text-primary hover:border-primary/40",
            "shadow-sm hover:shadow-md",
            theme === 'dark' 
              ? "bg-background/20 backdrop-blur-sm text-yellow-300" 
              : "bg-background/50 backdrop-blur-sm text-amber-500"
          )}
        >
          <motion.div
            initial={false}
            animate={{ 
              rotateY: theme === 'dark' ? 180 : 0,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 0.6,
              scale: {
                duration: 0.4,
                times: [0, 0.5, 1]
              }
            }}
            style={{ 
              width: '18px', 
              height: '18px', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center' 
            }}
          >
            {theme === 'dark' ? (
              <Moon className="h-[18px] w-[18px]" />
            ) : (
              <Sun className="h-[18px] w-[18px]" />
            )}
          </motion.div>
        </Button>
      </motion.div>
    );
  } catch (error) {
    // Fallback when ThemeProvider is not available
    console.error("Theme context not available in ThemeSwitcher:", error);
    
    // Return a non-functional theme button as fallback
    return (
      <Button
        variant="outline"
        size="icon"
        aria-label="Toggle theme"
        className="rounded-full w-10 h-10 border-primary/20 bg-background/50 backdrop-blur-sm text-amber-500"
        disabled
      >
        <Sun className="h-[18px] w-[18px]" />
      </Button>
    );
  }
};

export default ThemeSwitcher;
