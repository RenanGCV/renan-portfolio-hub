import React from 'react';
import { cn } from '@/lib/utils';

interface MonogramProps {
  className?: string;
  title?: string;
}

/** Marca R/GCV — quadrado grafite com a barra ciano. */
const Monogram: React.FC<MonogramProps> = ({ className, title = 'R/GCV' }) => (
  <svg
    viewBox="0 0 64 64"
    className={cn('h-8 w-8', className)}
    role="img"
    aria-label={title}
    focusable="false"
  >
    <rect width="64" height="64" rx="12" fill="hsl(var(--deep))" />
    <path
      d="M41 14 L27 50"
      stroke="hsl(var(--primary-bright))"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <text
      x="14"
      y="44"
      fontFamily="'Space Grotesk', Inter, system-ui, sans-serif"
      fontSize="34"
      fontWeight="700"
      fill="hsl(var(--deep-foreground))"
    >
      R
    </text>
  </svg>
);

export default Monogram;
