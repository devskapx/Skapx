import React, { useRef, useState } from "react";
import { CircleArrowRight, X } from "lucide-react";
import titleImage from "../../public/images/circle.png";
import "../styles/WorkSection.css";

const WorkSection = () => {
  const titleRef = useRef(null);
  const [showCards, setShowCards] = useState(false);

  const projectCards = [
    { id: 1, title: "Mobile App", type: "dark" },
    { id: 2, title: "Web Application", type: "light" },
    { id: 3, title: "Web Application", type: "light" },
    { id: 4, title: "Mobile App", type: "dark" },
  ];

  return (
    <>
      <section className="works-section">

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

      {/* MODAL */}
      {showCards && (
        <div className="modal-overlay" onClick={() => setShowCards(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowCards(false)}>
              <X size={24} />
            </button>

            <div className="cards-grid">
              {projectCards.map((card) => (
                <div key={card.id} className={`project-card ${card.type}`}>
                  <p>{card.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkSection;
