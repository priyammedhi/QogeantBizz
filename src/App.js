import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MainContent from './screens/MainContent';
import Services from './screens/Services';
import BacktoTop from './components/BacktoTop';
import WhatsappCnt from './components/WhatsappCnt';
import ScrolltoTop from './components/ScrolltoTop';
import ContactUs from './components/ContactUs';
import Gallery from './screens/Gallery';


function App() {
  return (
    <Router>
      <div className="App">
        <ScrolltoTop/>
        <Navbar />
        <BacktoTop/>
        <WhatsappCnt/>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/services" element={<Services />} />
          <Route path='/gallery' element={<Gallery/>} />
        </Routes>
        <ContactUs/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;