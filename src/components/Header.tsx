import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { href: '#portfolio', label: 'Projetos' },
  { href: '#services', label: 'Serviços' },
  { href: '#contact', label: 'Contato' }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-border/70 bg-background/85 py-3 shadow-sm backdrop-blur-xl'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container flex items-center justify-between px-4 md:px-6 lg:px-8">
        <a href="#introduction" className="group flex items-center gap-3" aria-label="Voltar para o início">
          <span className="font-display text-2xl font-extrabold tracking-normal text-foreground transition-colors group-hover:text-primary">
            RG
          </span>
          <span className="h-8 w-px bg-border" />
          <span className="hidden font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground sm:block">
            Renan<br />Gonçalves
          </span>
        </a>

        <nav
          className={cn(
            'fixed inset-0 bg-background/96 backdrop-blur-xl transition-transform duration-300 md:static md:block md:bg-transparent md:backdrop-blur-none',
            isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
          )}
        >
          <ul className="flex h-full flex-col items-center justify-center gap-8 md:h-auto md:flex-row md:gap-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative font-medium text-foreground transition-colors after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:text-primary hover:after:w-full"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen((open) => !open)}
            className="relative z-50 rounded-lg border border-border bg-card/70 p-2 text-foreground md:hidden"
            aria-label="Alternar menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
