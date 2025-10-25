import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ConnectivitySection from './components/ConnectivitySection';
import FeaturesSection from './components/FeaturesSection';
import GlobalNetwork from './components/GlobalNetwork';
import CompaniesSection from './components/CompaniesSection';
import HelpSection from './components/HelpSection';
import NewsSection from './components/NewsSection';
import GetStartedSection from './components/GetStartedSection';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ConnectivitySection />
      <FeaturesSection />
      <GlobalNetwork />
      <CompaniesSection />
      <HelpSection />
      <NewsSection />
      <GetStartedSection />
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;