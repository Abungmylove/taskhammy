import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Specialist } from './components/Specialist';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#FDF6EE]" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Specialist />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
