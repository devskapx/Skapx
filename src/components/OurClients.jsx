import React, { useEffect, useRef } from 'react';
import '../styles/OurClients.css';
import titleImage from "../../public/images/circle.png";
import bgImage from "../../public/images/Property1V.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ClientLogo = ({ imagePath, name }) => (
  <div className="client-logo-card">
    <img src={imagePath} alt={`${name} logo`} className="client-logo-img" />
  </div>
);

const OurClients = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  // Dummy data for client logos
  const clients = [
    { id: 1, name: 'Finance', image: '/images/C-logo-1.png' },
    { id: 2, name: 'Spark', image: '/images/C-logo-2.png' },
    { id: 3, name: 'Globe', image: '/images/C-logo-3.png' },
    { id: 4, name: 'Blue Nova', image: '/images/C-logo-4.png' },
    { id: 5, name: 'Client 5', image: '/images/C-logo-5.png' },
    { id: 6, name: 'Client 6', image: '/images/C-logo-6.png' },
    { id: 7, name: 'Finance', image: '/images/C-logo-1.png' },
    { id: 8, name: 'Spark', image: '/images/C-logo-2.png' },
    { id: 9, name: 'Globe', image: '/images/C-logo-3.png' },
    { id: 10, name: 'Blue Nova', image: '/images/C-logo-5.png' },
  ];

  return (
    <section
      className="our-clients-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="background-grid"></div>

      <div className="content-container">
        {/* Our Clients Title with Scroll Animation */}
        <div className="whychoose-top" ref={titleRef}>
          <img src={titleImage} alt="Title Icon" className="whychoose-top-icon" />
          <h2 className="whychoose-top-title">
            Our{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #FAA706 0%, #FF6700 82%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              Clients
            </span>
          </h2>
        </div>

        {/* Main Text & Client Logos */}
        <div className="main-layout">
          {/* Left side text with L-shaped icons */}
          <div className="trust-text-wrapper">
            <div className="l-icon top-left"></div>
            <div className="trust-text">
              <p>Built on trust,</p>
              <p>Strengthened</p>
              <p className="highlight-results">by results!</p>
            </div>
            <div className="l-icon bottom-right"></div>
          </div>

          {/* Right side client logos with continuous vertical scroll */}
          <div className="client-logos-wrapper">
            <div className="client-logos-scroll">
              {[...clients, ...clients].map((client, index) => (
                <ClientLogo
                  key={index}
                  name={client.name}
                  imagePath={client.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
