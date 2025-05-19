import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Community from './pages/Community';
import VisaInfo from './pages/VisaInfo';
import Upgrade from './pages/Upgrade';
import AIHub from './pages/AIHub';
import Profile from './pages/Profile';
import Payment from './pages/Payment';
import Register from './pages/Register';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/community" element={<Community />} />
            <Route path="/visa-info" element={<VisaInfo />} />
            <Route path="/upgrade" element={<Upgrade />} />
            <Route path="/ai-hub" element={<AIHub key={window.location.pathname + window.location.search + window.location.hash} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App; 