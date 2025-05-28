import Header from './Header';
import BookSlider from './BookSlider';
import HistorySection from './HistorySection';
import Footer from './Footer';
import AboutSection from './AboutSection';
import LiteratureSection from './LiteratureSection';

const Update = () => {
  return (
    <div className="font-roboto">
      <main className="flex-grow p-4">
        <div className="img-sec flex flex-wrap justify-around gap-4 mt-3">
          <img src="https://dg4f756elm.ufs.sh/f/G7qZPEF3toKqi3OgOcERcDehzW35rdASL0Gy9bHNKTfBvJFQ" alt="Background 1" className="bgimg h-[545px] rounded-lg shadow-lg ring-2 ring-primary ring-offset-2" />
          <img src="https://dg4f756elm.ufs.sh/f/G7qZPEF3toKqLUGeaD4pvNxlRhzTfQbOjZYF6d87AXIn1qtV" alt="Background 2" className="bgimg h-[545px] rounded-lg shadow-lg ring-2 ring-primary ring-offset-2" />
          <img src="https://dg4f756elm.ufs.sh/f/G7qZPEF3toKqWhn5ssRzgGAYXrQzZTNa4poUFyH1hOwuPI85" alt="Background 3" className="bgimg h-[545px] rounded-lg shadow-lg ring-2 ring-primary ring-offset-2" />
        </div>
      </main>
      <BookSlider />
      <HistorySection />
      <LiteratureSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Update;