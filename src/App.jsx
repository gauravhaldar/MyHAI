import { useState, useCallback } from 'react';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import AboutSection from './components/AboutSection';
import CounterSection from './components/CounterSection';
import WeWontChargeYou from './components/WeWontChargeYou';
import SecretSection from './components/SecretSection';
import RatingsSection from './components/RatingsSection';
import TestimonialsSection from './components/TestimonialsSection';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import Modal from './components/Modal';

const FORM_URL = 'https://fwg-offer-form-frontend.vercel.app/';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleApplyClick = useCallback(() => {
    setModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  return (
    <>
      <Hero onApplyClick={handleApplyClick} />
      <LogoStrip />
      <AboutSection onApplyClick={handleApplyClick} />
      <CounterSection />
      <WeWontChargeYou onApplyClick={handleApplyClick} />
      <SecretSection onApplyClick={handleApplyClick} />
      <RatingsSection />
      <TestimonialsSection />
      <HowItWorks onApplyClick={handleApplyClick} />
      <Portfolio />
      <CtaSection onApplyClick={handleApplyClick} />
      <Footer />

      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        iframeSrc={FORM_URL}
      />
    </>
  );
}
