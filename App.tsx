import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Features } from './components/Features';
import { Credibility } from './components/Credibility';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-brand-dark selection:bg-brand-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Features />
        <Credibility />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}