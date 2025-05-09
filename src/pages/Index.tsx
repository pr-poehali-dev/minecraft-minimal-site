
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PrivilegeSection from '@/components/PrivilegeSection';
import RecentPurchases from '@/components/RecentPurchases';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <HeroSection />
      <PrivilegeSection />
      <RecentPurchases />
      <Footer />
    </div>
  );
};

export default Index;
