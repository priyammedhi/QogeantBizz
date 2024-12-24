import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MainContent from './screens/MainContent';
import HServices from './screens/HServices';
import BacktoTop from './components/BacktoTop';
import WhatsappCnt from './components/WhatsappCnt';
import ScrolltoTop from './components/ScrolltoTop';
import ContactUs from './components/ContactUs';
import Gallery from './screens/Gallery';
import Allservices from './screens/Allservices';
import SServices from './screens/SServices';


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
          <Route path="/hservices" element={<HServices />} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/services' element={<Allservices/>}/>
          <Route path='/sservices' element={<SServices/>}/>
        </Routes>
        <ContactUs/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;