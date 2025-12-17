import React, { useEffect, useRef } from 'react';
import '../styles/OurClients.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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


  return (
    <section className="our-clients-section">
      <div className="background-grid"></div>

      <div className="content-container">
        {/* Our Clients Title with Scroll Animation */}
        <div className="whychoose-top" ref={titleRef}>
          <h2 className="whychoose-top-title">
            Our{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #FAA706 0%, #FF6700 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              Works
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
