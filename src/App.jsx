import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundEffect from './components/BackgroundEffect';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Blog from './pages/Blog';
import Blueprint from './pages/Timeline';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#000', color: '#fff' }} className="relative min-h-screen flex flex-col">
        <BackgroundEffect />
        <div className="relative z-10 flex flex-col flex-grow">
          <Navbar />
          <main className="flex-grow pt-28 pb-12 px-6 w-full max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/team" element={<Team />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blueprint" element={<Blueprint />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
