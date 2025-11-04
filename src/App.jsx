import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import ZodiacExplorer from './components/ZodiacExplorer.jsx';
import CompatibilityChecker from './components/CompatibilityChecker.jsx';
import SiteFooter from './components/SiteFooter.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-indigo-950 to-black text-white">
      <HeroSection />
      <main className="px-4">
        <ZodiacExplorer />
        <CompatibilityChecker />
        <SiteFooter />
      </main>
    </div>
  );
}

export default App;
