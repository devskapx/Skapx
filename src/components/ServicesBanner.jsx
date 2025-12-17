import React, { useState, useEffect } from "react";
import "../styles/ServicesBanner.css";

export const ServicesBanner = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDarkMode(document.body.classList.contains("dark"));
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    setDarkMode(document.body.classList.contains("dark"));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`hero-section ${darkMode ? "dark" : "light"}`}>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-inner">
            <div className="hero-heading-container">
              <h1 className="hero-heading">
                Our{" "}
                <span style={{ color: "#FF6700" }}>Services</span>
              </h1>
            </div>
            <p className="hero-description">
              Lorem ipsum dolor sit amet consectetur. Egestas aliquam pulvinar praesent lorem in neque. 
              Odio suspendisse non magnis tristique cras lacus tortor.
            </p>

            <button className="hero-button">
              <span>Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};