import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FreeTrialBanner } from './components/FreeTrialBanner';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <FreeTrialBanner />
        <Services />
        <HowItWorks />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;

