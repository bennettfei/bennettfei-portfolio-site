import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import { usePageTitle } from '@/hooks/usePageTitle';

const Index = () => {
  usePageTitle('Bennett Feigenbaum');
  return (
    <div className="w-full min-h-screen relative overflow-x-hidden bg-background">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
