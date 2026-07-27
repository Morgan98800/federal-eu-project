import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TheCase from './pages/TheCase';
import Archive from './pages/Archive';
import DataRoom from './pages/DataRoom';
import Sources from './pages/Sources';
import { initMotionObserver } from './js/motion';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Re-initialize motion observer on route change
    setTimeout(initMotionObserver, 100);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/the-case" element={<TheCase />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/data-room" element={<DataRoom />} />
          <Route path="/sources" element={<Sources />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
