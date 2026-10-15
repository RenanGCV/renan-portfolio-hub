import { ArrowUpRight, Github, Download, ExternalLink, Youtube } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const projects = [
  {
    title: 'Labor Forum',
    category: 'Jogo',
    description: 'Jogo 2D de plataforma com narrativa, combate e progressão de habilidades.',
    image: 'https://img.youtube.com/vi/OMxOmWdakNw/maxresdefault.jpg',
    tech: ['Unity', 'C#', 'Aseprite', 'Game Design'],
    demo: 'https://renangcv.itch.io/labor-forum',
    repo: 'https://www.youtube.com/watch?v=OMxOmWdakNw',
    isGame: true
  },
  {
    title: 'Color War',
    category: 'Jogo',
    description: 'Jogo multiplayer local com partidas rápidas, classes e habilidades únicas.',
    image: 'https://img.youtube.com/vi/mvKMMUMFpWY/maxresdefault.jpg',
    tech: ['Unity', 'C#', 'Aseprite', 'UI/UX'],
    demo: 'https://renangcv.itch.io/color-war',
    repo: 'https://www.youtube.com/watch?v=mvKMMUMFpWY',
    isGame: true
  },
  {
    title: 'Joalheria Luxury',
    category: 'Landing Page',
    description: 'Landing page comercial para produto premium com foco em presença digital.',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1374&auto=format&fit=crop',
    tech: ['React', 'TypeScript', 'Vite', 'CSS'],
    demo: 'https://landing-page-joalheiria-luxury.netlify.app/',
    repo: '',
    isGame: false
  },
  {
    title: 'Sites Landing Page',
    category: 'Web',
    description: 'Página para serviço de desenvolvimento web com estrutura de conversão.',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1470&auto=format&fit=crop',
    tech: ['React', 'Vue', 'TypeScript', 'Node.js'],
    demo: 'https://sites-landing-page.vercel.app/',
    repo: 'https://github.com/RenanGCV/SitesLandingPage',
    isGame: false
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-container bg-background">
      <AnimatedSection>
        <div className="section-kicker">02 — Projetos</div>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="section-title">
              Projetos <span className="text-primary">/</span>
            </h2>
            <p className="section-subtitle mb-0">
              Jogos, sistemas e landing pages que mostram técnica, visual e entrega.
            </p>
          </div>
          <a
            href="https://github.com/RenanGCV"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary self-start"
          >
            Ver GitHub
            <Github size={18} />
          </a>
        </div>
      </AnimatedSection>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 120}>
              <article className="brand-panel card-hover group h-full overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute right-4 top-4 rounded-md bg-primary px-3 py-1 font-mono text-xs font-bold text-primary-foreground">
                    {project.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-bold">{project.title}</h3>
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  </div>
                  <p className="mb-5 text-[0.95rem] leading-relaxed text-muted-foreground">{project.description}</p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-md bg-primary/15 px-2.5 py-1 text-xs font-semibold text-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm font-semibold">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
                    >
                      {project.isGame ? <Download size={16} /> : <ExternalLink size={16} />}
                      {project.isGame ? 'Download' : 'Demo'}
                    </a>
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                      >
                        {project.isGame ? <Youtube size={16} /> : <Github size={16} />}
                        {project.isGame ? 'Trailer' : 'Código'}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={300} animation="slide-in-right">
          <aside className="deep-panel sticky top-24 min-h-96 overflow-hidden p-6">
            <Github className="mb-8 h-9 w-9 text-primary" />
            <h3 className="mb-4 font-display text-3xl font-bold">
              Mais projetos e código no GitHub
            </h3>
            <p className="mb-8 text-[0.95rem] leading-relaxed text-accent-foreground/80">
              Repositórios, estudos e experimentos que mostram meu processo de evolução em código.
            </p>
            <a
              href="https://github.com/RenanGCV"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              Acessar repositórios
              <ArrowUpRight size={18} />
            </a>
            <pre className="mt-10 rounded-lg border border-primary/20 bg-black/25 p-4 font-mono text-xs leading-6 text-primary">
{`const foco = [
  'Código',
  'Design',
  'Jogos',
  'Produto'
];`}
            </pre>
          </aside>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Portfolio;
