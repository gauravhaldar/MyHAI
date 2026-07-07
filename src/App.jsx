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
import FaqSection from './components/FaqSection';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const handleApplyClick = useCallback(() => {
    setModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const handlePrivacyClick = useCallback(() => {
    setPrivacyOpen(true);
  }, []);

  const handleClosePrivacy = useCallback(() => {
    setPrivacyOpen(false);
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
      <FaqSection />
      <Portfolio />
      <CtaSection onApplyClick={handleApplyClick} />
      <Footer onPrivacyClick={handlePrivacyClick} />

      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
      />

      <PrivacyPolicyModal
        isOpen={privacyOpen}
        onClose={handleClosePrivacy}
      />
    </>
  );
}
