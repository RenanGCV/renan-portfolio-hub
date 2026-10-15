import { useMemo, useState } from 'react';
import { Github } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { CompactProjectCard, FeaturedProjectCard } from '@/components/ProjectCard';
import { featuredProjects, otherProjects, type ProjectCategory } from '@/data/projects';
import { social } from '@/data/social';
import { cn } from '@/lib/utils';

type Filter = ProjectCategory | 'Todos';

const githubUrl = social.find((item) => item.icon === 'github')?.url ?? '';

const Portfolio = () => {
  const [filter, setFilter] = useState<Filter>('Todos');

  const filters = useMemo<Filter[]>(() => {
    const present = Array.from(new Set(otherProjects.map((project) => project.category)));
    return ['Todos', ...present];
  }, []);

  const visible = useMemo(
    () =>
      filter === 'Todos'
        ? otherProjects
        : otherProjects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <section id="projetos" className="border-t border-border">
      <div className="section-container">
        <AnimatedSection animation="fade-in-up">
          <p className="section-kicker">01 — Projetos</p>
          <h2 className="section-title">O que eu construí</h2>
          <p className="section-subtitle">
            Cada projeto aqui resolve um problema concreto. Abaixo, o que era o problema, o que eu
            fiz e onde você pode ver funcionando.
          </p>
        </AnimatedSection>

        <div className="space-y-6">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <AnimatedSection animation="fade-in-up" className="mt-20" staggerChildren>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <h3 className="font-display text-xl font-semibold">Outros projetos</h3>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
              {filters.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  aria-pressed={filter === item}
                  className={cn(
                    'rounded-md border px-3 py-1.5 text-sm transition-colors',
                    filter === item
                      ? 'border-foreground bg-foreground text-background'
                      : 'border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground',
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project) => (
              <CompactProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="deep-panel mt-10 flex flex-col items-start justify-between gap-5 p-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-lg font-semibold">Tem mais código no GitHub</h3>
              <p className="mt-1 text-sm text-deep-foreground/70">
                Estudos, experimentos e o processo por trás dos projetos acima.
              </p>
            </div>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary-bright px-4 py-2.5 text-sm font-medium text-deep"
            >
              <Github className="h-4 w-4" />
              Acessar repositórios
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Portfolio;
