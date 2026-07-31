import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundEffect from './components/BackgroundEffect';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Blog from './pages/Blog';
import BlogPostDetail from './pages/BlogPostDetail';
import Journey from './pages/Timeline';
import Join from './pages/Join';
import NotFound from './pages/NotFound';

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div style={{ backgroundColor: '#000', color: '#fff' }} className="relative min-h-screen flex flex-col">
      <BackgroundEffect />
      <div className="relative z-10 flex flex-col flex-grow">
        <Navbar />
        <main className={`flex-grow pb-12 px-6 w-full max-w-7xl mx-auto ${isHome ? 'pt-0' : 'pt-28'}`}>
          <Routes>
            <Route path="/"           element={<Home />} />
            <Route path="/projects"   element={<Projects />} />
            <Route path="/team"       element={<Team />} />
            <Route path="/blog"       element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />
            <Route path="/join"       element={<Join />} />
            {/* /journey is the primary route; /blueprint kept as a backwards-compatible alias */}
            <Route path="/journey"    element={<Journey />} />
            <Route path="/blueprint"  element={<Journey />} />
            {/* Wildcard: any unregistered URL shows the 404 page */}
            <Route path="*"           element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
