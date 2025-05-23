
import React, { useEffect } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import GoalsSection from '@/components/GoalsSection';
import EventsSection from '@/components/EventsSection';
import ProjectsSection from '@/components/ProjectsSection';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add Afeesh font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Afeesh:wght@400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Add scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => {
      observer.disconnect();
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-x-hidden">
      <AnimatedBackground />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <GoalsSection />
        <EventsSection />
        <ProjectsSection />
        <TeamSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
