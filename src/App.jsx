import { Routes, Route } from 'react-router-dom'
import Update from './components/Update';
import ArticlePage from './components/pages/ArticlePage';
import Literature from './components/pages/Literature';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-roboto bg-background text-text min-h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={
          <Update />
        } />
        
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="/literature" element={<Literature />} />
      </Routes>
    </div>
  );
};

export default App;