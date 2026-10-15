import React from 'react';
import { Check, Gamepad2, Layout, Server, Sparkles } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { process, services, type Service } from '@/data/services';
import { whatsappLink } from '@/data/social';

const icons: Record<Service['icon'], React.ComponentType<{ className?: string }>> = {
  layout: Layout,
  server: Server,
  sparkles: Sparkles,
  gamepad: Gamepad2,
};

const Services = () => (
  <section id="servicos" className="border-t border-border bg-muted/40">
    <div className="section-container">
      <AnimatedSection animation="fade-in-up">
        <p className="section-kicker">04 — Serviços</p>
        <h2 className="section-title">Como eu posso ajudar</h2>
        <p className="section-subtitle">
          Do protótipo ao deploy. Escolha o que parece com o seu caso e me chame — eu digo na
          primeira conversa se dá para fazer e como.
        </p>
      </AnimatedSection>

      <AnimatedSection animation="fade-in-up" staggerChildren>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <div key={service.title} data-animate-child className="surface flex flex-col p-6">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm font-medium text-foreground">{service.audience}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.problem}
                </p>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink(`Oi Renan! Quero falar sobre: ${service.title}.`)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-6 border-t border-border pt-5 text-sm font-medium text-primary transition-opacity hover:opacity-70"
                >
                  Conversar sobre isso →
                </a>
              </div>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fade-in-up" className="deep-panel mt-10 p-6 md:p-8">
        <h3 className="font-display text-xl font-semibold">Como eu trabalho</h3>
        <p className="mt-2 max-w-xl text-sm text-deep-foreground/70">
          Processo curto, sem cerimônia, com algo funcionando desde as primeiras semanas.
        </p>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item, index) => (
            <li key={item.step} className="border-t border-deep-foreground/20 pt-4">
              <span className="font-mono text-[11px] text-primary-bright">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h4 className="mt-1.5 font-medium">{item.step}</h4>
              <p className="mt-1 text-sm leading-relaxed text-deep-foreground/70">{item.detail}</p>
            </li>
          ))}
        </ol>
      </AnimatedSection>
    </div>
  </section>
);

export default Services;
