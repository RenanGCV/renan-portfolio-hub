import React from 'react';
import { ArrowUpRight, Code2, Download, Play } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Monogram from '@/components/Monogram';
import type { Project, ProjectLink } from '@/data/projects';
import { cn } from '@/lib/utils';

const linkIcon: Record<ProjectLink['kind'], React.ComponentType<{ className?: string }>> = {
  demo: ArrowUpRight,
  code: Code2,
  video: Play,
  download: Download,
};

const ProjectLinks: React.FC<{ links: readonly ProjectLink[] }> = ({ links }) => (
  <div className="flex flex-wrap gap-4">
    {links.map((link) => {
      const Icon = linkIcon[link.kind];
      return (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noreferrer noopener"
          className="button-ghost"
        >
          <Icon className="h-4 w-4" />
          {link.label}
        </a>
      );
    })}
  </div>
);

const ProjectMedia: React.FC<{ project: Project; className?: string }> = ({
  project,
  className,
}) => {
  if (!project.image) {
    return (
      <div
        className={cn(
          'court-lines deep-panel relative flex flex-col justify-between overflow-hidden p-6',
          className,
        )}
        aria-hidden="true"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary-bright">
          {project.category}
        </span>
        <div>
          <p className="font-display text-xl font-semibold leading-tight text-deep-foreground">
            {project.title}
          </p>
          <p className="mt-2 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 3).map((item) => (
              <span
                key={item}
                className="rounded border border-deep-foreground/20 px-2 py-0.5 font-mono text-[11px] text-deep-foreground/60"
              >
                {item}
              </span>
            ))}
          </p>
        </div>
        <Monogram className="absolute -bottom-6 -right-6 h-32 w-32 opacity-10" decorative />
      </div>
    );
  }

  return (
    <img
      src={project.image}
      alt={project.imageAlt ?? project.title}
      loading="lazy"
      decoding="async"
      width={1280}
      height={720}
      className={cn('rounded border border-border bg-muted object-cover', className)}
    />
  );
};

/** Card grande, para os projetos em destaque. */
export const FeaturedProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => (
  <AnimatedSection
    animation="fade-in-up"
    delay={index * 60}
    className="surface overflow-hidden p-6 md:p-8"
  >
    <article className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <div className={cn(index % 2 === 1 && 'lg:order-2')}>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
          {project.category} · {project.context}
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">
          {project.title}
        </h3>

        <dl className="mt-5 space-y-4 text-sm leading-relaxed">
          <div>
            <dt className="font-medium text-foreground">O problema</dt>
            <dd className="mt-1 text-muted-foreground">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">O que eu fiz</dt>
            <dd className="mt-1 text-muted-foreground">{project.role}</dd>
          </div>
        </dl>

        {project.result && (
          <p className="mt-5 border-l-2 border-secondary pl-3 text-sm font-medium">
            {project.result}
          </p>
        )}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </div>

        {project.links.length > 0 && (
          <div className="mt-6">
            <ProjectLinks links={project.links} />
          </div>
        )}
      </div>

      <ProjectMedia project={project} className="aspect-video w-full" />
    </article>
  </AnimatedSection>
);

/** Card compacto, para a grade de projetos secundários. */
export const CompactProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <article
    data-animate-child
    className="surface flex flex-col overflow-hidden transition-colors hover:border-foreground/30"
  >
    <ProjectMedia project={project} className="aspect-video w-full rounded-none border-0 border-b" />
    <div className="flex flex-1 flex-col p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
        {project.category}
      </p>
      <h3 className="mt-2 font-display text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 4).map((item) => (
          <span key={item} className="tag">
            {item}
          </span>
        ))}
      </div>
      {project.links.length > 0 && (
        <div className="mt-4 border-t border-border pt-4">
          <ProjectLinks links={project.links} />
        </div>
      )}
    </div>
  </article>
);
