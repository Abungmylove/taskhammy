import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FreeTrialBanner } from './components/FreeTrialBanner';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';

export function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('ppt');

  const handleOpenOrder = (serviceId?: string) => {
    if (serviceId) {
      setSelectedService(serviceId);
    }
    setIsOrderModalOpen(true);
  };

  const handleCloseOrder = () => {
    setIsOrderModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FFF9F3]">
      <Navbar onOpenOrder={() => handleOpenOrder()} />
      <main>
        <Hero onOpenOrder={() => handleOpenOrder()} />
        <FreeTrialBanner onOpenOrder={() => handleOpenOrder()} />
        <Services onOpenOrder={handleOpenOrder} />
        <HowItWorks onOpenOrder={handleOpenOrder} />
        <Pricing onOpenOrder={handleOpenOrder} />
        <FAQ />
      </main>
      <Footer onOpenOrder={() => handleOpenOrder()} />

      {/* Interactive Order & Calculator Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrder}
        defaultService={selectedService}
      />
    </div>
  );
}

export default App;

