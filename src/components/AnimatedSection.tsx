
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in' | 'fade-in-up' | 'slide-in-right' | 'blur-in';
  staggerChildren?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className, 
  delay = 0,
  animation = 'fade-in-up',
  staggerChildren = false
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      gsap.set(section, { autoAlpha: 1, clearProps: 'transform,filter' });
      return;
    }

    const fromVars = {
      'fade-in': { autoAlpha: 0 },
      'fade-in-up': { autoAlpha: 0, y: 24 },
      'slide-in-right': { autoAlpha: 0, x: 28 },
      'blur-in': { autoAlpha: 0, y: 16, filter: 'blur(10px)' }
    }[animation];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = staggerChildren
              ? Array.from(section.querySelectorAll('[data-animate-child]'))
              : [];

            gsap.fromTo(
              section,
              fromVars,
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                filter: 'blur(0px)',
                duration: 0.52,
                delay: delay / 1000,
                ease: 'power3.out'
              }
            );

            if (target.length) {
              gsap.fromTo(
                target,
                { autoAlpha: 0, y: 14 },
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.42,
                  stagger: 0.055,
                  delay: delay / 1000 + 0.08,
                  ease: 'power3.out'
                }
              );
            }

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
  }, [animation, delay, staggerChildren]);

  return (
    <div 
      ref={sectionRef} 
      className={cn(
        'gsap-reveal', 
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
