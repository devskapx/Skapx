import React, { useRef, useState } from "react";
import { CircleArrowRight, X } from "lucide-react";
import titleImage from "../../public/images/circle.png";
import bgImage from "../../public/images/Property1V.svg";
import "../styles/WorkSection.css";

const WorkSection = () => {
  const titleRef = useRef(null);
  const [showCards, setShowCards] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const projectCards = [
    { id: 1, title: "Mobile App", type: "dark" },
    { id: 2, title: "Web Application", type: "light" },
    { id: 3, title: "Web Application", type: "light" },
    { id: 4, title: "Mobile App", type: "dark" },
  ];

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowCards(false);
      setIsClosing(false);
    }, 500);
  };

  return (
    <>
        <section
              className="works-section"
              style={{ backgroundImage: `url(${bgImage})` }}
            >
        {/* LEFT */}
        <div className="works-left">
          <div className="worksectionhed-top" ref={titleRef}>
            <img src={titleImage} alt="Title Icon" className="whychoose-top-icon" />
                  <h2 className="whychoose-top-title">
              Our{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #FAA706 0%, #FF6700 82%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Works
              </span>
            </h2>
          </div>

          <div className="trust-text-wrapper">
            <div className="l-icon top-left"></div>
            <div className="l-icon bottom-right"></div>
            <div className="trust-text">
              <p>Where Ideas</p>
              <p>Became</p>
              <p className="highlight-results">Interfaces</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="works-right">
          <div className="card dark-card">
            <p>Mobile App</p>
          </div>

          <div className="card light-card">
            <p>Web Application</p>
          </div>

          <div className="gradient-circle">
            <button className="swipe-btn" onClick={() => setShowCards(true)}>
              Swipe to see <CircleArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* SIDE PANEL */}
      {showCards && (
        <>
          <div className="overlay-backdrop" onClick={handleClose}></div>

          <div className={`cards-container ${isClosing ? "closing" : ""}`}>
            <button className="modal-close" onClick={handleClose}>
              <X size={24} />
            </button>

            <div className="cards-grid">
              {projectCards.map((card) => (
                <div key={card.id} className={`project-card ${card.type} animate`}>
                  <p>{card.title}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default WorkSection;
