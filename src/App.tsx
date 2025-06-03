import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Cities from './pages/Cities/Cities';
import CityDetail from './pages/Cities/CityDetail';
import VisaPolicy from './pages/VisaPolicy/VisaPolicy';
import TravelGuide from './pages/TravelGuide/TravelGuide';
import Contact from './pages/Contact/Contact';
import './styles/globals.scss';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cities" element={<Cities />} />
              <Route path="/cities/:cityId" element={<CityDetail />} />
              <Route path="/visa-policy" element={<VisaPolicy />} />
              <Route path="/travel-guide" element={<TravelGuide />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
