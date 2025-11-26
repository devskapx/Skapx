import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import titleImage from "../../public/images/circle.png";
import bgImage from "../../public/images/Property1V.svg";
import "../styles/Whowehelp.css";

export default function Whowehelp() {
  const demoTexts = [
    "Driven Entreprenueurs",
    "Visionary Leaders",
    "Future Builders",
    "Scaling Leader",
    "Business Dremers",
    "Change Makers",
    "Startup Visionaries",
    "Aspiring Pioneers",
    "Growth Seekers",
    "Driven Entreprenueurs",
    "Visionary Leaders",
    "Future Builders",
    "Scaling Leader",
    "Business Dremers",
    "Change Makers",
  ];

  const containerRef = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);

  const [startX, setStartX] = useState(0); // initial position
  const [endX, setEndX] = useState(0); // final position

  const x = useMotionValue(0);
  const speed = 4; // pixels per frame
  const isRunning = useRef(true);

  useEffect(() => {
    if (containerRef.current && textRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const textWidth = textRef.current.scrollWidth;

      setStartX(containerWidth); // start fully at right edge
      setEndX(-textWidth); // end when fully left out

      x.set(containerWidth); // initialize x
    }
  }, []);

  useAnimationFrame((t, delta) => {
    if (!isRunning.current) return;
    x.set(x.get() - (speed * delta) / 16);
    if (x.get() <= endX) {
      x.set(startX); // reset to start after reaching end
    }
  });

  return (
       <section
            className="whowehelp-section"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
      <div className="whychoose-top" ref={titleRef}>
        <img src={titleImage} alt="Title Icon" className="whychoose-top-icon" />
        <h2 className="whychoose-top-title">
          Who{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #FAA706 0%, #FF6700 82%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            We Help For
          </span>
        </h2>
      </div>

      {/* Flowing text container */}
      <div
        className="flow-container"
        ref={containerRef}
        onMouseEnter={() => (isRunning.current = false)}
        onMouseLeave={() => (isRunning.current = true)}
      >
        <motion.div className="flowing-text" style={{ x }} ref={textRef}>
          {demoTexts.map((text, index) => (
            <span key={index} className="text-block">
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      <h4 className="whowehelp-title-btm">
        if you are not in the list
      </h4>  

      <button className="whywehelpbor-top">
        <p className="whywehelpbor-top-title">
          Click Me
        </p>  
      </button>

      <p style={{ marginTop: "30px", color: "white", fontSize: "29px" }}>
        Click the button to add in the list <br/>by starting the work together.
      </p>
    </section>
  );
}
