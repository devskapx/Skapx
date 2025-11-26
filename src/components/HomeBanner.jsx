import React, { useState, useRef, useEffect } from "react";
import "../styles/HomeBanner.css";
import hoverImage from "../../public/images/Property.svg";

export const HomeBanner = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showImage, setShowImage] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const timerRef = useRef(null);

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

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    setShowImage(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setShowImage(true), 100);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowImage(false);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  return (
    <section
      className={`hero-section ${darkMode ? "dark" : "light"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* 🔹 Background Video */}
      <video
        className="hero-video-bg"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/hero-banner.mp4" type="video/mp4" />
      </video>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-inner">
            <div className="badge">
              <div className="badge-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 16.5C3 17.76 2.5 21.5 2.5 21.5C2.5 21.5 6.24 21 7.5 19.5C8.21 18.66 8.2 17.37 7.41 16.59C7.02131 16.219 6.50929 16.0046 5.97223 15.988C5.43516 15.9714 4.91088 16.1537 4.5 16.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15L9 12C9.53214 10.6194 10.2022 9.29607 11 8.05C12.1652 6.18699 13.7876 4.65305 15.713 3.5941C17.6384 2.53514 19.8027 1.98637 22 2C22 4.72 21.22 9.5 16 13C14.7369 13.7987 13.3968 14.4687 12 15Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 12H4C4 12 4.55 8.97 6 8C7.62 6.92 11 8 11 8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15V20C12 20 15.03 19.45 16 18C17.08 16.38 16 13 16 13"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="badge-text">
                Ignite Your Startup's Journey to Success
              </div>
            </div>

            <div className="hero-heading-container">
              <h1 className="hero-heading">
                Your Concierge of{" "}
                <span style={{ color: "#670BFF" }}>Startups</span>
              </h1>
            </div>

            <p className="middle-description">
              We build your tech. We build your team.
            </p>

            <p className="hero-description">
              Every great startup begins with a spark
              <br />
              At SkapX, we're here to turn that spark into success.
            </p>

            <button className="hero-button">
              <span>Launch Your Project</span>
            </button>
          </div>
        </div>
      </div>

      {isHovered && showImage && (
        <img
          src={hoverImage}
          alt="Hover Effect"
          className="hover-image"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
          }}
        />
      )}
    </section>
  );
};
