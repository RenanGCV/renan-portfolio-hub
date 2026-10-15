import { useEffect } from 'react';
import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'Renan Gonçalves - Desenvolvedor Criativo Full Stack';

    if (!localStorage.getItem('theme')) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      const theme = localStorage.getItem('theme');
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Header />
      <main className="flex-grow">
        <Introduction />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
