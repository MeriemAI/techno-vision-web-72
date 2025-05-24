
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import GoalsSection from '@/components/GoalsSection';
import TeamSection from '@/components/TeamSection';
import MembersSection from '@/components/MembersSection';
import ProjectsSection from '@/components/ProjectsSection';
import EventsSection from '@/components/EventsSection';
import Footer from '@/components/Footer';
import EnhancedAnimatedBackground from '@/components/EnhancedAnimatedBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      <EnhancedAnimatedBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <GoalsSection />
      <TeamSection />
      <MembersSection />
      <ProjectsSection />
      <EventsSection />
      <Footer />
    </div>
  );
};

export default Index;
