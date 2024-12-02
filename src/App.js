import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
   <>
     <Router>
   <NavBar />
 
      <Routes>
        <Route path="/slns" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
   </>
  );
}

export default App;
