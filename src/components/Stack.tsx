import AnimatedSection from '@/components/AnimatedSection';
import { stack } from '@/data/stack';

const Stack = () => (
  <section id="stack" className="border-t border-border bg-muted/40">
    <div className="section-container">
      <AnimatedSection animation="fade-in-up">
        <p className="section-kicker">02 — Stack</p>
        <h2 className="section-title">Com o que eu trabalho</h2>
        <p className="section-subtitle">
          Escolho a ferramenta pelo problema, não pela moda. Esta é a base que uso hoje.
        </p>
      </AnimatedSection>

      <AnimatedSection animation="fade-in-up" staggerChildren>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((group) => (
            <div key={group.title} data-animate-child className="surface p-6">
              <h3 className="font-display text-lg font-semibold">{group.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {group.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default Stack;
