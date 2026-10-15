import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const CELL = 44;
const PULSE_COUNT = 14;
const PULSE_LENGTH = 150;

interface Pulse {
  axis: 'h' | 'v';
  /** Índice da linha da malha em que o pulso corre. */
  line: number;
  /** Posição da cabeça do pulso, em pixels CSS. */
  pos: number;
  speed: number;
  direction: 1 | -1;
}

const readToken = (element: HTMLElement, token: string, fallback: string) =>
  getComputedStyle(element).getPropertyValue(token).trim() || fallback;

const randomPulse = (width: number, height: number): Pulse => {
  const axis: 'h' | 'v' = Math.random() > 0.45 ? 'h' : 'v';
  const lines = axis === 'h' ? Math.ceil(height / CELL) : Math.ceil(width / CELL);
  const span = axis === 'h' ? width : height;
  const direction: 1 | -1 = Math.random() > 0.5 ? 1 : -1;

  return {
    axis,
    line: Math.floor(Math.random() * lines),
    pos: Math.random() * span,
    speed: 40 + Math.random() * 90,
    direction,
  };
};

/**
 * Fundo animado do hero: malha de quadra com pulsos ciano correndo nas linhas
 * e parallax discreto no ponteiro. Fica estático em prefers-reduced-motion.
 */
const CourtBackground: React.FC<{ className?: string }> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    let width = 0;
    let height = 0;
    let pulses: Pulse[] = [];
    let frame = 0;
    let lastTime = 0;
    let visible = true;
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const colors = { grid: 'rgba(16,20,23,0.05)', line: '#00C2B8', pulse: '0,194,184' };

    const readColors = () => {
      colors.grid = `hsl(${readToken(canvas, '--foreground', '206 18% 8%')} / 0.05)`;
      const bright = readToken(canvas, '--primary-bright', '177 100% 38%');
      colors.line = `hsl(${bright} / 0.12)`;
      colors.pulse = bright;
    };

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      pulses = Array.from({ length: PULSE_COUNT }, () => randomPulse(width, height));
    };

    const drawStatic = () => {
      context.clearRect(0, 0, width, height);
      context.lineWidth = 1;
      context.strokeStyle = colors.grid;
      context.beginPath();
      for (let x = pointer.x % CELL; x < width; x += CELL) {
        context.moveTo(Math.round(x) + 0.5, 0);
        context.lineTo(Math.round(x) + 0.5, height);
      }
      for (let y = pointer.y % CELL; y < height; y += CELL) {
        context.moveTo(0, Math.round(y) + 0.5);
        context.lineTo(width, Math.round(y) + 0.5);
      }
      context.stroke();

      // Linhas de quadra: diagonal e arco de fundo.
      context.strokeStyle = colors.line;
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(width * 0.62 + pointer.x, -20);
      context.lineTo(width * 0.18 + pointer.x, height + 20);
      context.moveTo(width * 0.98 + pointer.x, height * 0.1);
      context.lineTo(width * 0.54 + pointer.x, height + 20);
      context.stroke();

      context.beginPath();
      context.arc(width * 0.82 + pointer.x, height * 0.9 + pointer.y, height * 0.34, Math.PI, 0);
      context.stroke();
    };

    const drawPulses = (delta: number) => {
      pulses.forEach((pulse) => {
        pulse.pos += pulse.speed * pulse.direction * delta;
        const span = pulse.axis === 'h' ? width : height;
        if (pulse.pos > span + PULSE_LENGTH) pulse.pos = -PULSE_LENGTH;
        if (pulse.pos < -PULSE_LENGTH) pulse.pos = span + PULSE_LENGTH;

        const offset = pulse.line * CELL + (pulse.axis === 'h' ? pointer.y % CELL : pointer.x % CELL);
        const tail = pulse.pos - PULSE_LENGTH * pulse.direction;

        const gradient =
          pulse.axis === 'h'
            ? context.createLinearGradient(tail, offset, pulse.pos, offset)
            : context.createLinearGradient(offset, tail, offset, pulse.pos);
        gradient.addColorStop(0, `hsl(${colors.pulse} / 0)`);
        gradient.addColorStop(1, `hsl(${colors.pulse} / 0.75)`);

        context.strokeStyle = gradient;
        context.lineWidth = 1.5;
        context.beginPath();
        if (pulse.axis === 'h') {
          context.moveTo(tail, offset + 0.5);
          context.lineTo(pulse.pos, offset + 0.5);
        } else {
          context.moveTo(offset + 0.5, tail);
          context.lineTo(offset + 0.5, pulse.pos);
        }
        context.stroke();
      });
    };

    const loop = (time: number) => {
      frame = requestAnimationFrame(loop);
      if (!visible) return;

      const delta = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      pointer.x += (pointer.targetX - pointer.x) * 0.04;
      pointer.y += (pointer.targetY - pointer.y) * 0.04;

      drawStatic();
      drawPulses(delta);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      pointer.targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 36;
      pointer.targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 24;
    };

    const start = () => {
      cancelAnimationFrame(frame);
      resize();
      readColors();
      if (reduceMotion.matches) {
        drawStatic();
        return;
      }
      lastTime = performance.now();
      frame = requestAnimationFrame(loop);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 },
    );
    observer.observe(parent);

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reduceMotion.matches) drawStatic();
    });
    resizeObserver.observe(parent);

    // O tema troca as variáveis CSS; relê as cores quando a classe muda.
    const themeObserver = new MutationObserver(() => {
      readColors();
      if (reduceMotion.matches) drawStatic();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    reduceMotion.addEventListener('change', start);
    start();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      themeObserver.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      reduceMotion.removeEventListener('change', start);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 h-full w-full', className)}
    />
  );
};

export default CourtBackground;
