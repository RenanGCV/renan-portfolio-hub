import { useEffect } from 'react';
import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import Portfolio from '@/components/Portfolio';
import Stack from '@/components/Stack';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { applyTheme, resolveInitialTheme } from '@/hooks/use-theme';

const Index = () => {
  useEffect(() => {
    applyTheme(resolveInitialTheme());
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Introduction />
        <Portfolio />
        <Stack />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
