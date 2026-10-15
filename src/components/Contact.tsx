import React from 'react';
import { Github, Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { profile } from '@/data/profile';
import { contact, mailtoLink, social, whatsappLink } from '@/data/social';

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
};

const Contact = () => (
  <section id="contato" className="border-t border-border">
    <div className="section-container">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <AnimatedSection animation="fade-in-up">
          <p className="section-kicker">05 — Contato</p>
          <h2 className="section-title">Vamos tirar sua ideia do papel.</h2>
          <p className="section-subtitle !mb-8">
            Me conte o que você precisa. Eu respondo com um caminho claro para o projeto — prazo,
            escopo e o que dá para entregar primeiro.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={whatsappLink('Oi Renan! Vi seu portfólio e quero falar sobre um projeto.')}
              target="_blank"
              rel="noreferrer noopener"
              className="button-primary"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp {contact.whatsappLabel}
            </a>
            <a href={mailtoLink('Projeto')} className="button-secondary">
              <Mail className="h-4 w-4" />
              {contact.email}
            </a>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {social.map((item) => {
              const Icon = socialIcons[item.icon];
              return (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="surface flex items-center gap-3 p-4 transition-colors hover:border-foreground/30"
                  >
                    {Icon && <Icon className="h-4 w-4 text-primary" aria-hidden="true" />}
                    <span>
                      <span className="block text-sm font-medium">{item.name}</span>
                      <span className="block text-xs text-muted-foreground">{item.handle}</span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={80}>
          <div className="deep-panel h-full p-6 md:p-8">
            <p className="inline-flex items-center gap-2 rounded-full bg-deep-foreground/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-primary-bright">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full bg-primary-bright"
                aria-hidden="true"
              />
              {contact.availability}
            </p>

            <div className="mt-6 flex items-center gap-4">
              <img
                src={profile.photoClose}
                alt={profile.name}
                loading="lazy"
                decoding="async"
                width={120}
                height={120}
                className="h-14 w-14 shrink-0 rounded-full object-cover object-top"
              />
              <h3 className="font-display text-2xl font-semibold">O que esperar de mim</h3>
            </div>
            <ul className="mt-6 space-y-5">
              {[
                {
                  title: 'Resposta em até 24h',
                  detail: 'Dias úteis. Se eu não puder pegar o projeto, eu digo na hora.',
                },
                {
                  title: 'Escopo escrito antes de começar',
                  detail: 'Você sabe o que vai receber, em quanto tempo e por quanto.',
                },
                {
                  title: 'Entrega em partes',
                  detail: 'Você acompanha funcionando, não só no fim.',
                },
              ].map((item) => (
                <li key={item.title} className="border-t border-deep-foreground/15 pt-4">
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-1 text-sm text-deep-foreground/70">{item.detail}</p>
                </li>
              ))}
            </ul>

            <p className="mt-8 font-mono text-xs text-deep-foreground/50">{contact.location}</p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default Contact;
