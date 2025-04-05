import React from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

// Sections
import Hero from './sections/Hero';
import Features from './sections/Features';
import AIHub from './sections/AIHub';
import Applications from './sections/Applications';
import Statistics from './sections/Statistics';
import Team from './sections/Team';
import Subscriptions from './sections/Subscriptions';
import Reviews from './sections/Reviews';
import Answers from './sections/Answers';
import Contact from './sections/Contact';

const App = () => {
  return (
    <div className="font-sans bg-white text-gray-900">


      <Navbar />
      <Hero id="hero" />
      <AIHub id="aihub" />
      <Features id="features" />
      <Applications id="applications" />
      <Statistics id="statistics" />
      <Team id="team" />
      <Subscriptions id="subscriptions" />
      <Reviews id="reviews" />
      <Answers id="answers" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
};

export default App;