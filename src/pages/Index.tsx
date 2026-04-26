import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Clubs from '@/components/Clubs';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import { usePageTitle } from '@/hooks/usePageTitle';

const Index = () => {
  usePageTitle('Bennett Feigenbaum');
  return (
    <div className="w-full min-h-screen relative overflow-x-hidden bg-background">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(45 100% 70%) 1px, transparent 1px), linear-gradient(90deg, hsl(25 100% 65%) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="relative z-10 w-full">
        <ScrollProgress />
        <Header />
        <main>
          <Hero />
          <Experience />
          <Clubs />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
