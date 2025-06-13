
import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSearch from '../components/HeroSearch';
import QuickAccessLinks from '../components/QuickAccessLinks';
import FeaturedOffersCarousel from '../components/FeaturedOffersCarousel';
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSearch />
        <QuickAccessLinks />
        <FeaturedOffersCarousel />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
