import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&family=Inter:wght@400;600;800&display=swap"
      />
      <div className="w-full min-h-screen relative overflow-x-hidden bg-background">
        <Header />
        
        <main className="pt-20">
          <Hero />
          <Projects />
          <Experience />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
