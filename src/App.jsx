import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Preloader from "./components/Preloader";

// Route-based loader logic
function RouterWithLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    // Show preloader ONLY when:
    // (1) Page is "/", AND
    // (2) It is a reload
    if (location.pathname === "/" && isReload) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 6200);
      return () => clearTimeout(timer);
    } else {
      // For all other pages — no preloader
      setLoading(false);
    }
  }, [location.pathname]);

  if (loading) return <Preloader />;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <RouterWithLoader />
    </Router>
  );
}
