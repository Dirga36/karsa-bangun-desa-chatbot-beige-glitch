import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import EvidenceResearchSection from '@/components/EvidenceResearchSection';
import IdmAssessmentWidget from '@/components/IdmAssessmentWidget';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import N8nChatWidget from '@/components/N8nChatWidget';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 font-sans antialiased selection:bg-emerald-200 selection:text-emerald-900">
      {/* Fixed Sticky Header Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Profile & 5-Pillar Pentahelix Approach */}
      <AboutSection />

      {/* Strategic Services & Programs */}
      <ServicesSection />

      {/* Evidence-Based Research & Case Studies (Bojong Kulur & Simpang Gaung) */}
      <EvidenceResearchSection />

      {/* Interactive IDM Readiness Calculator */}
      <IdmAssessmentWidget />

      {/* Official Contact & Consultation Request Form */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Official n8n Chatbot Integration Embed */}
      <N8nChatWidget />
    </main>
  );
}
