import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="w-full min-h-screen relative overflow-x-hidden bg-background">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
