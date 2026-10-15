import { Github, Instagram, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = ({ className }: { className?: string }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn('border-t border-border bg-accent py-8 text-accent-foreground', className)}>
      <div className="container flex flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <span className="font-display text-3xl font-extrabold text-primary">RG/</span>
          <div>
            <p className="font-semibold">Renan Gonçalves</p>
            <p className="text-sm text-accent-foreground/65">Desenvolvedor criativo full stack</p>
          </div>
        </div>

        <p className="max-w-md font-mono text-sm text-accent-foreground/75">
          &gt; Código com contexto. Interface, sistema e entrega no mesmo raciocínio.
        </p>

        <div className="flex items-center gap-3">
          <a href="https://github.com/RenanGCV" target="_blank" rel="noopener noreferrer" className="text-accent-foreground/70 transition-colors hover:text-primary" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/renan-teodoro-lopes-gon%C3%A7alves-804014221/" target="_blank" rel="noopener noreferrer" className="text-accent-foreground/70 transition-colors hover:text-primary" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://www.instagram.com/rena.gcv/" target="_blank" rel="noopener noreferrer" className="text-accent-foreground/70 transition-colors hover:text-primary" aria-label="Instagram">
            <Instagram size={20} />
          </a>
        </div>
      </div>
      <div className="container mt-6 px-4 text-xs text-accent-foreground/50 md:px-6 lg:px-8">
        © {currentYear} Renan Gonçalves. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
