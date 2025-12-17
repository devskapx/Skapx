import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Navbar.css";
import logo from "../../public/images/logo.svg";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Load saved theme */
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      setDarkMode(true);
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, []);

  /* Theme toggle */
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

    /* 🔥 SCROLL GLASS EFFECT */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
       <nav
      className={`navbar ${darkMode ? "dark" : "light"} ${
        scrolled ? "glass" : ""
      }`}
    >
      {/* Logo */}
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Desktop Menu */}
      <ul className="desktop-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Theme Switch (unchanged) */}
      <div className="theme-switch">
        <input
          type="checkbox"
          className="checkbox"
          id="themeToggle"
          checked={darkMode}
          onChange={toggleTheme}
        />
        <label htmlFor="themeToggle" className="label">
          <svg className="moon" viewBox="0 0 24 24">
            <path d="M3 11.5C3 16.7 7.3 21 12.5 21c3.7 0 6.9-2.1 8.5-5.2
              -8.5 0-12.7-4.2-12.7-12.7C5.2 4.6 3 7.8 3 11.5Z" />
          </svg>

          <svg width="22" height="22" viewBox="0 0 22 22">
            <path
              d="M10.9645 17.4398C14.5413 17.4398 17.4408 14.5403 17.4408 10.9635C17.4408 7.38682 14.5413 4.4873 10.9645 4.4873C7.38779 4.4873 4.48828 7.38682 4.48828 10.9635C4.48828 14.5403 7.38779 17.4398 10.9645 17.4398Z"
              stroke="white"
              strokeWidth="2"
            />
          </svg>

          <div className="ball"></div>
        </label>
      </div>

      {/* Hamburger – MOBILE ONLY */}
      <div className="hamburger" onClick={() => setMenuOpen(true)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Overlay Menu */}
      <div className={`overlay-menu ${menuOpen ? "active" : ""}`}>
        <button className="overlay-close" onClick={() => setMenuOpen(false)}>
          ✕
        </button>

        <ul className="overlay-links">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
