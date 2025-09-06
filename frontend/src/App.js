 import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Planning from './pages/Planning';
import WeddingCountdown from './components/WeddingCountdown';
import VendorDirectory from './components/VendorDirectory';
import BudgetManager from './components/BudgetManager';
import GuestList from './components/GuestList';
import RSVPTracker from './components/RSVPTracker';
import WeddingChecklist from './components/WeddingChecklist';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/planning" element={<Planning />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
