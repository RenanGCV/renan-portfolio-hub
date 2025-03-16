
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in' | 'fade-in-up' | 'slide-in-right' | 'blur-in';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className, 
  delay = 0,
  animation = 'fade-in-up'
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              section.classList.add('animate');
            }, delay);
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [delay]);

  return (
    <div 
      ref={sectionRef} 
      className={cn(
        'animate-on-scroll', 
        animation === 'fade-in' && 'opacity-0',
        animation === 'fade-in-up' && 'opacity-0 translate-y-8',
        animation === 'slide-in-right' && 'opacity-0 translate-x-8',
        animation === 'blur-in' && 'opacity-0 blur-md',
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
