
import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

const ParticleBackground = () => {
  const [currentTheme, setCurrentTheme] = useState<'dark' | 'light'>('dark');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  
  // Try to get theme from context, fall back to dark if not available
  try {
    const { theme } = useTheme();
    // Only update the state if the theme from context changes
    useEffect(() => {
      setCurrentTheme(theme);
    }, [theme]);
  } catch (error) {
    console.error("Theme context not available in ParticleBackground:", error);
    // Continue with default theme (dark)
  }
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full screen with device pixel ratio for sharpness
    const pixelRatio = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * pixelRatio;
    canvas.height = window.innerHeight * pixelRatio;
    ctx.scale(pixelRatio, pixelRatio);
    
    // Style overrides for better visuals
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      growing: boolean;
      color: string;
      pulse: boolean;
      pulseSpeed: number;
    }[] = [];
    
    const particleCount = 60;
    const primaryColor = currentTheme === 'dark' ? '113, 40, 49' : '130, 45, 55';
    const secondaryColor = currentTheme === 'dark' ? '40, 49, 113' : '45, 55, 130';
    const accentColor = currentTheme === 'dark' ? '80, 60, 120' : '70, 80, 140';
    
    // Create particles with more properties
    for (let i = 0; i < particleCount; i++) {
      const colorChoice = Math.random();
      let color;
      
      if (colorChoice < 0.4) {
        color = primaryColor;
      } else if (colorChoice < 0.7) {
        color = secondaryColor;
      } else {
        color = accentColor;
      }
      
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2.5 + 0.5,
        speedX: Math.random() * 0.7 - 0.35,
        speedY: Math.random() * 0.7 - 0.35,
        opacity: Math.random() * 0.5 + 0.1,
        growing: Math.random() > 0.5,
        color,
        pulse: Math.random() > 0.7,
        pulseSpeed: Math.random() * 0.02 + 0.005
      });
    }
    
    function drawConnection(p1: typeof particles[0], p2: typeof particles[0], distance: number) {
      const opacity = 1 - (distance / 100);
      if (opacity > 0) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${p1.color}, ${opacity * 0.2})`;
        ctx.lineWidth = 0.6;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }
    
    function animate() {
      // Clear with slight fade for trail effect
      ctx.fillStyle = currentTheme === 'dark' 
        ? 'rgba(20, 20, 35, 0.2)' 
        : 'rgba(255, 255, 255, 0.2)';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      
      // Draw connections between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            drawConnection(particles[i], particles[j], distance);
          }
        }
      }
      
      particles.forEach((particle) => {
        // Set color and draw particle
        ctx.fillStyle = `rgba(${particle.color}, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Animate size
        if (particle.growing) {
          particle.size += 0.02;
          if (particle.size > 3.5) particle.growing = false;
        } else {
          particle.size -= 0.02;
          if (particle.size < 0.5) particle.growing = true;
        }
        
        // Pulse opacity for some particles
        if (particle.pulse) {
          particle.opacity += particle.pulseSpeed;
          if (particle.opacity > 0.6) particle.pulseSpeed = -Math.abs(particle.pulseSpeed);
          if (particle.opacity < 0.1) particle.pulseSpeed = Math.abs(particle.pulseSpeed);
        }
        
        // Wrap around screen with fade effect
        if (particle.x < 0) {
          particle.x = window.innerWidth;
          particle.opacity = Math.random() * 0.5 + 0.1;
        } else if (particle.x > window.innerWidth) {
          particle.x = 0;
          particle.opacity = Math.random() * 0.5 + 0.1;
        }
        
        if (particle.y < 0) {
          particle.y = window.innerHeight;
          particle.opacity = Math.random() * 0.5 + 0.1;
        } else if (particle.y > window.innerHeight) {
          particle.y = 0;
          particle.opacity = Math.random() * 0.5 + 0.1;
        }
      });
      
      animationRef.current = requestAnimationFrame(animate);
    }
    
    animate();
    
    // Handle resize with proper cleanup and reset
    const handleResize = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(pixelRatio, pixelRatio);
      
      // Reset particles to new dimensions
      particles.forEach(particle => {
        particle.x = Math.random() * window.innerWidth;
        particle.y = Math.random() * window.innerHeight;
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      // Cancelar a animação quando o componente for desmontado
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [currentTheme]); // Adicionar currentTheme como dependência para recriar a animação quando o tema mudar

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full pointer-events-none" 
      aria-hidden="true" 
    />
  );
};

export default ParticleBackground;
