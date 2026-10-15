import { ArrowUpRight, Code2, Gamepad2, Layers3, MessageSquare, Rocket } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const stats = [
  { icon: Code2, value: '+5', label: 'anos de estudo e prática' },
  { icon: Gamepad2, value: '10+', label: 'jogos desenvolvidos' },
  { icon: Layers3, value: '20+', label: 'projetos concluídos' },
  { icon: Rocket, value: '98%', label: 'foco em entrega e qualidade' }
];

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="section-container relative flex min-h-[760px] flex-col justify-center overflow-hidden pt-28 md:min-h-[820px] md:pt-36 xl:min-h-[880px]"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-20 blur-[0.5px] sm:opacity-30 md:opacity-70 md:blur-0 xl:opacity-85"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-background/70 sm:bg-background/58 md:bg-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--background))_0%,hsl(var(--background)/0.94)_28%,hsl(var(--background)/0.76)_58%,hsl(var(--background)/0.5)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_42%,hsl(var(--primary)/0.14),transparent_26rem)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,hsl(var(--background))_0%,transparent_24%,transparent_76%,hsl(var(--background)/0.58)_100%)]" />
      <div className="court-lines absolute inset-0 opacity-10 sm:opacity-16 md:opacity-35" />

      <div className="hero-copy-panel relative max-w-4xl rounded-xl border border-primary/10 p-4 shadow-2xl shadow-background/40 md:border-0 md:p-0 md:shadow-none md:backdrop-blur-0">
        <AnimatedSection staggerChildren>
          <div data-animate-child className="section-kicker">
            <span className="rounded-md bg-primary/15 px-2 py-1 font-mono">&gt;_</span>
            Rio de Janeiro, RJ
          </div>

          <h1 data-animate-child className="font-display text-6xl font-extrabold leading-[0.92] tracking-normal md:text-7xl lg:text-8xl">
            Renan
            <span className="block text-primary">Gonçalves</span>
          </h1>

          <p data-animate-child className="mt-7 max-w-2xl font-display text-2xl font-bold text-foreground md:text-3xl">
            Desenvolvedor <span className="text-primary">criativo</span> full stack
          </p>

          <p data-animate-child className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Código, design e jogos digitais em experiências que funcionam. Eu conecto interface,
            sistema e entrega para tirar ideias do papel com clareza.
          </p>

          <div data-animate-child className="mt-8 flex flex-wrap gap-4">
            <a href="#portfolio" className="button-primary">
              Ver projetos
              <ArrowUpRight size={18} />
            </a>
            <a href="#contact" className="button-secondary bg-background/35 backdrop-blur-sm">
              Falar sobre um projeto
              <MessageSquare size={18} />
            </a>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={260} animation="fade-in" staggerChildren>
        <div className="relative mt-14 grid gap-5 border-t border-border/80 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} data-animate-child className="brand-panel flex items-start gap-3 bg-card/78 p-4 backdrop-blur-md">
              <div className="rounded-lg border border-primary/30 bg-primary/10 p-2 text-primary">
                <stat.icon size={20} />
              </div>
              <div>
                <p className="font-display text-2xl font-bold">{stat.value}</p>
                <p className="text-sm leading-snug text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Introduction;
