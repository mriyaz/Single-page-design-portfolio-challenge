import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import WorkSection from './components/WorkSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="m-5 space-y-10 flex flex-col gap-5 lg:py-5 lg:px-24 lg:gap-14">
      <Header/>
      <HeroSection/>
      <IntroSection/>
      <WorkSection/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}

export default App;
