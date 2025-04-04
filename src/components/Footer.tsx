
import { cn } from '@/lib/utils';

const Footer = ({ className }: { className?: string }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={cn('py-8 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800', className)}>
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Renan Gonçalves. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <a 
              href="#introduction" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre
            </a>
            <a 
              href="#portfolio" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Portfólio
            </a>
            <a 
              href="#services" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Serviços
            </a>
            <a 
              href="#contact" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
