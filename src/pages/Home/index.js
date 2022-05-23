import React from 'react';
import AboutSection from '../../components/AboutSection';
import ContactBanner from '../../components/ContactBanner';
import HeroSection from '../../components/HeroSection';
import ProjectsSection from '../../components/ProjectsSection';
import ServicesSection from '../../components/ServicesSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      {/* <TestimonialsSection /> */}
      <ContactBanner />
    </div>
  );
}
