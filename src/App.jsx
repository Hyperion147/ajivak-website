import React from 'react';
import Header from './components/Header';
import BookSlider from './components/BookSlider';
import HistorySection from './components/HistorySection';
import LiteratureSection from './components/LiteratureSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-roboto bg-[#8dd39a] min-h-screen flex flex-col">
     
      <Header />

      <main className="flex-grow p-4">
        <div className="img-sec flex flex-wrap justify-around gap-4 mt-3">
          <img src="https://dg4f756elm.ufs.sh/f/G7qZPEF3toKqi3OgOcERcDehzW35rdASL0Gy9bHNKTfBvJFQ" alt="Background 1" className="bgimg h-[545px] rounded-lg shadow-lg" />
          <img src="https://dg4f756elm.ufs.sh/f/G7qZPEF3toKqLUGeaD4pvNxlRhzTfQbOjZYF6d87AXIn1qtV" alt="Background 2" className="bgimg h-[545px] rounded-lg shadow-lg" />
          <img src="https://dg4f756elm.ufs.sh/f/G7qZPEF3toKqWhn5ssRzgGAYXrQzZTNa4poUFyH1hOwuPI85" alt="Background 3" className="bgimg h-[545px] rounded-lg shadow-lg" />
        </div>

        <BookSlider />

        <HistorySection />

        <LiteratureSection />

        <AboutSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;