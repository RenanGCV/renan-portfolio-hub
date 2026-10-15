import { ArrowDown, ArrowUpRight } from 'lucide-react';
import CourtBackground from '@/components/CourtBackground';
import { profile } from '@/data/profile';
import { featuredProjects, stats } from '@/data/projects';
import { contact, whatsappLink } from '@/data/social';

const [headlineStart, headlineEnd] = profile.headline.split(profile.headlineHighlight);
const highlight = featuredProjects[0];

const Introduction = () => (
  <section id="top" className="relative overflow-hidden pt-28 md:pt-32">
    <CourtBackground />

    <div className="section-container !py-0 pb-20 md:pb-28">
      <div className="grid items-start gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <div>
          <p className="section-kicker">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-primary"
              aria-hidden="true"
            />
            {contact.location} · {contact.availability}
          </p>

          <h1 className="font-display text-4xl font-semibold leading-[1.14] tracking-tight md:text-6xl md:leading-[1.08] lg:text-7xl">
            {headlineStart}
            <span className="box-decoration-clone bg-accent px-1.5 text-accent-foreground">
              {profile.headlineHighlight}
            </span>
            {headlineEnd}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projetos" className="button-primary">
              Ver projetos
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={whatsappLink('Oi Renan! Vi seu portfólio e quero falar sobre um projeto.')}
              target="_blank"
              rel="noreferrer noopener"
              className="button-secondary"
            >
              Falar sobre um projeto
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="border-t border-border pt-3">
                <dd className="font-display text-3xl font-semibold text-foreground">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-sm leading-snug text-muted-foreground">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        {highlight && (
          <aside className="deep-panel p-6 lg:mt-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary-bright">
              Projeto em destaque
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold">{highlight.title}</h2>
            <p className="mt-1 text-sm text-deep-foreground/60">{highlight.context}</p>
            <p className="mt-4 text-sm leading-relaxed text-deep-foreground/80">
              {highlight.problem}
            </p>
            {highlight.result && (
              <p className="mt-4 border-l-2 border-secondary pl-3 text-sm font-medium text-deep-foreground">
                {highlight.result}
              </p>
            )}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {highlight.tech.map((item) => (
                <span
                  key={item}
                  className="rounded border border-deep-foreground/20 px-2 py-0.5 font-mono text-[11px] text-deep-foreground/70"
                >
                  {item}
                </span>
              ))}
            </div>
            <a
              href="#projetos"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary-bright transition-opacity hover:opacity-70"
            >
              Ver o caso completo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </aside>
        )}
      </div>
    </div>
  </section>
);

export default Introduction;
