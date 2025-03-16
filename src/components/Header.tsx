
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/70 dark:bg-black/70 backdrop-blur-lg shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container px-4 md:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#"
          className="text-foreground text-lg font-display font-semibold tracking-tight"
        >
          Renan Gonçalves
        </a>

        <nav
          className={cn(
            'fixed inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-lg md:static md:bg-transparent md:backdrop-blur-none transition-transform duration-300',
            isOpen
              ? 'translate-x-0 flex items-center justify-center'
              : 'translate-x-full md:translate-x-0',
            'md:flex md:items-center md:space-x-8'
          )}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <li>
              <a
                href="#introduction"
                className="text-foreground font-medium hover:text-primary hover:opacity-80 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-foreground font-medium hover:text-primary hover:opacity-80 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Portfólio
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-foreground font-medium hover:text-primary hover:opacity-80 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-foreground font-medium hover:text-primary hover:opacity-80 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          <button
            onClick={toggleMenu}
            className="relative z-50 block md:hidden text-foreground"
            aria-label="Alternar menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 transition-all duration-300" />
            ) : (
              <Menu className="h-6 w-6 transition-all duration-300" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
