import { ArrowRight, Github, Instagram, Linkedin, Mail, MapPin, MessageSquare } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const links = [
  {
    label: 'LinkedIn',
    value: 'Renan Gonçalves',
    href: 'https://www.linkedin.com/in/renan-teodoro-lopes-gon%C3%A7alves-804014221/',
    icon: Linkedin
  },
  {
    label: 'GitHub',
    value: '@RenanGCV',
    href: 'https://github.com/RenanGCV',
    icon: Github
  },
  {
    label: 'Instagram',
    value: '@rena.gcv',
    href: 'https://www.instagram.com/rena.gcv/',
    icon: Instagram
  },
  {
    label: 'Email',
    value: 'Contato profissional',
    href: 'mailto:renan.dev.br@gmail.com',
    icon: Mail
  }
];

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5521999880830', '_blank');
  };

  return (
    <section id="contact" className="section-container overflow-hidden">
      <div className="absolute left-0 top-24 hidden h-64 w-64 rounded-full border border-primary/25 md:block" />
      <div className="absolute right-0 top-0 hidden h-full w-[42%] bg-secondary/20 dark:bg-secondary/15 lg:block" />

      <div className="relative grid gap-10 lg:grid-cols-[1fr_0.95fr]">
        <AnimatedSection staggerChildren>
          <div data-animate-child className="section-kicker">Contato</div>
          <h2 data-animate-child className="font-display text-5xl font-extrabold leading-tight md:text-7xl">
            Vamos tirar
            <span className="block text-secondary dark:text-primary">sua ideia</span>
            do papel.
          </h2>
          <p data-animate-child className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Me mande uma mensagem e eu retorno com um caminho claro para o projeto.
          </p>

          <button data-animate-child onClick={handleWhatsAppClick} className="button-primary mt-8 text-base">
            <MessageSquare size={20} />
            Falar no WhatsApp
            <ArrowRight size={20} />
          </button>

          <div data-animate-child className="mt-8 grid gap-4 sm:grid-cols-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-panel group flex items-center gap-4 p-4 transition-colors hover:border-primary"
              >
                <div className="rounded-lg bg-secondary p-3 text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <link.icon size={22} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold">{link.label}</p>
                  <p className="truncate text-sm text-muted-foreground">{link.value}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </a>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={250} animation="slide-in-right">
          <div className="deep-panel relative overflow-hidden bg-accent/95 p-6 md:p-8">
            <div className="brand-panel mb-6 bg-background/5 p-5 text-accent-foreground">
              <p className="mb-4 font-display text-2xl font-bold text-primary">
                Aberto a freelance e oportunidades
              </p>
              <ul className="space-y-3 text-sm text-accent-foreground/85">
                <li>✓ Projetos sob medida</li>
                <li>✓ Comunicação clara</li>
                <li>✓ Entrega com qualidade</li>
              </ul>
            </div>

            <div className="rounded-lg border border-primary/20 bg-black/25 p-5">
              <p className="mb-4 font-mono text-sm text-primary">renan@dev:~$</p>
              <pre className="whitespace-pre-wrap font-mono text-sm leading-7 text-primary">
{`const criar = (ideia) => {
  planejar();
  desenvolver();
  testar();
  entregar();
};

> vamos_construir_juntos();`}
              </pre>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-accent-foreground/80">
              <MapPin className="h-5 w-5 text-primary" />
              Rio de Janeiro, RJ
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
