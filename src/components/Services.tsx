import { ArrowRight, Code2, LayoutTemplate, PlugZap, Rocket, Settings2, ShoppingCart, Smartphone } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    title: 'Sites e Landing Pages',
    description: 'Páginas rápidas, responsivas e otimizadas para conversão.',
    icon: LayoutTemplate,
    deliverables: ['Layout estratégico', 'Design responsivo', 'SEO básico']
  },
  {
    title: 'Sistemas Web',
    description: 'Soluções completas para gerenciar processos e dados.',
    icon: Code2,
    deliverables: ['Painel administrativo', 'Regras de negócio', 'Relatórios e métricas']
  },
  {
    title: 'E-commerce',
    description: 'Lojas online completas com pagamento, estoque e gestão.',
    icon: ShoppingCart,
    deliverables: ['Catálogo de produtos', 'Carrinho e checkout', 'Integrações e gestão']
  },
  {
    title: 'Apps e Protótipos',
    description: 'Protótipos interativos e apps focados em experiência.',
    icon: Smartphone,
    deliverables: ['Protótipo navegável', 'UI/UX funcional', 'MVP e validação']
  },
  {
    title: 'APIs e Integrações',
    description: 'APIs seguras que conectam sistemas, serviços e automações.',
    icon: PlugZap,
    deliverables: ['APIs RESTful', 'Webhooks e jobs', 'Documentação e testes']
  }
];

const process = [
  { title: 'Entender', description: 'Alinho objetivos, público, prazo e funcionalidade.' },
  { title: 'Construir', description: 'Desenvolvo com código limpo, foco em desempenho e experiência.' },
  { title: 'Ajustar', description: 'Testamos, validamos e refinamos até o produto fazer sentido.' },
  { title: 'Publicar', description: 'Coloco no ar com segurança e deixo o caminho pronto para evoluir.' }
];

const Services = () => {
  const handleRequestQuote = (service: string) => {
    const message = encodeURIComponent(`Olá Renan, quero conversar sobre ${service}. Pode me ajudar a entender o melhor caminho?`);
    window.open(`https://wa.me/5521999880830?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="section-container court-lines">
      <AnimatedSection>
        <div className="section-kicker">&gt;_ o que eu faço</div>
        <h2 className="section-title">Serviços</h2>
        <p className="section-subtitle">
          Do protótipo ao deploy, eu estruturo, desenvolvo e ajusto produtos digitais.
        </p>
      </AnimatedSection>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {services.map((service, index) => (
          <AnimatedSection key={service.title} delay={index * 90}>
            <article className="brand-panel group flex h-full flex-col overflow-hidden">
              <div className="flex items-center justify-between bg-accent p-5 text-accent-foreground">
                <service.icon className="h-9 w-9 text-primary" />
                <span className="font-mono text-lg text-primary/70">0{index + 1}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-3 font-display text-xl font-bold">{service.title}</h3>
                <p className="mb-5 text-[0.95rem] leading-relaxed text-muted-foreground">{service.description}</p>
                <p className="mb-3 font-mono text-xs font-bold uppercase text-secondary dark:text-primary">
                  Entregáveis
                </p>
                <ul className="mb-6 space-y-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[0.92rem] text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleRequestQuote(service.title)}
                  className="mt-auto inline-flex items-center justify-between border-t border-border pt-4 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                >
                  Conversar sobre isso
                  <ArrowRight size={17} />
                </button>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={250} animation="fade-in">
        <div className="deep-panel mt-10 grid gap-8 p-6 md:grid-cols-[240px_1fr] md:p-8">
          <div>
            <h3 className="font-display text-3xl font-bold text-primary">Como trabalho</h3>
            <p className="mt-3 text-sm leading-relaxed text-accent-foreground/80">
              Processo leve, colaborativo e com entregas reais.
            </p>
            <div className="mt-8 rounded-lg border border-primary/20 p-4 font-mono text-sm text-primary">
              &gt; foco: clareza_
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {process.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                  {index === 0 ? <Settings2 /> : index === 1 ? <Code2 /> : index === 2 ? <Settings2 /> : <Rocket />}
                </div>
                <p className="mb-2 font-mono text-sm text-primary">0{index + 1}</p>
                <h4 className="mb-2 font-display text-xl font-semibold">{step.title}</h4>
                <p className="text-sm leading-relaxed text-accent-foreground/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Services;
