import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Achievements from './components/Achievements';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Gallery />
        <Achievements />
        <News />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
