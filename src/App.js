// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import ExperienceAndProject from './pages/ExperienceAndProject';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';



function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<ExperienceAndProject />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
      
      </div>
    </Router>
  );
}

export default App;
