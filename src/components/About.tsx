import { Trophy } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Monogram from '@/components/Monogram';
import { about, profile } from '@/data/profile';
import { achievements, achievementsSummary } from '@/data/achievements';
import { contact } from '@/data/social';

const About = () => (
  <section id="sobre" className="border-t border-border">
    <div className="section-container">
      <AnimatedSection animation="fade-in-up">
        <p className="section-kicker">03 — Sobre</p>
        <h2 className="section-title">Quem está do outro lado</h2>
      </AnimatedSection>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16">
        <AnimatedSection animation="fade-in" className="lg:sticky lg:top-24 lg:self-start">
          <div className="court-lines overflow-hidden rounded-lg border border-border bg-muted">
            {profile.photo ? (
              <img
                src={profile.photo}
                alt={profile.photoAlt}
                loading="lazy"
                decoding="async"
                width={800}
                height={1000}
                className="aspect-[4/5] w-full object-cover"
              />
            ) : (
              <div className="flex aspect-[4/5] w-full items-center justify-center">
                <Monogram className="h-24 w-24" />
              </div>
            )}
          </div>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {contact.location}
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={80}>
          <p className="font-display text-xl font-medium leading-relaxed md:text-2xl">
            {about.intro}
          </p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            {about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ol className="mt-10 space-y-6 border-l border-border pl-6">
            {about.timeline.map((entry) => (
              <li key={entry.year} className="relative">
                <span
                  className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background"
                  aria-hidden="true"
                />
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                  {entry.year}
                </p>
                <h3 className="mt-1 font-medium text-foreground">{entry.title}</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">{entry.detail}</p>
              </li>
            ))}
          </ol>

          <div className="deep-panel mt-10 p-6">
            <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
              <Trophy className="h-4 w-4 text-accent" aria-hidden="true" />
              Hackathons
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-deep-foreground/75">
              {achievementsSummary}
            </p>
            <ul className="mt-5 space-y-4">
              {achievements.map((item) => (
                <li key={item.title} className="border-t border-deep-foreground/15 pt-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary-bright">
                    {item.event} · {item.year} · {item.result}
                  </p>
                  <h4 className="mt-1.5 font-medium">{item.title}</h4>
                  <p className="mt-1 text-sm text-deep-foreground/70">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default About;
