import React, { useState, useEffect, useRef, useMemo } from "react";
import "../styles/OurServicesCard.css";
import LogoImage from "../../public/images/SKAPX-SER-LOGO.svg";
import LogoImage2 from "../../public/images/SKAPX-SER-LOGO2.svg";
import LogoImage3 from "../../public/images/hr.svg";
import titleImage from "../../public/images/circle.png";
import ServiceIcon from "../../public/images/Ser-Icon.svg";

export default function OurServicesCard() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef(null);
  const rafRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  // Title animation effect
  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    el.style.opacity = '0';
    el.style.transform = 'translateX(-200px)';
    
    const timer = setTimeout(() => {
      el.style.transition = 'opacity 1.5s ease-out, transform 1.5s ease-out';
      el.style.opacity = '1';
      el.style.transform = 'translateX(0)';
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Custom wheel handling
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      const section = sectionRef.current;
      if (!section) return;

      const currentScroll = section.scrollTop;
      const maxScroll = section.scrollHeight - section.clientHeight;

      if (
        (currentScroll >= maxScroll - 5 && e.deltaY > 0) ||
        (currentScroll <= 5 && e.deltaY < 0)
      ) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();
      section.scrollTop += e.deltaY;
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // Scroll position tracking
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = section.scrollTop;
        setScrollPosition(scrollTop);
        rafRef.current = null;
      });
    };

    section.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      section.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollStages = useMemo(
    () => ({
      stage1Active: scrollPosition >= 0 && scrollPosition < 800,
      stage2Active: scrollPosition >= 800 && scrollPosition < 1600,
      stage3Active: scrollPosition >= 1600 && scrollPosition < 2400,
      stage4Active: scrollPosition >= 2400 && scrollPosition < 3200,
      stage5Active: scrollPosition >= 3200,
    }),
    [scrollPosition]
  );

  const services = useMemo(
    () => [
      { title: "Mobile Experience Engineering", desc: "Scalable and intuitive mobile apps for iOS & Android." },
      { title: "Next-Gen Web Solutions", desc: "High-performance web platforms tailored for growth" },
      { title: "SaaS Product Innovation", desc: "Build and scale subscription-based SaaS products with ease." },
      { title: "Experience Design (UI/UX Studio)", desc: "Human-first designs that engage and convert." },
      { title: "Intelligent Automation", desc: "Smarter workflows and insights powered by AI." },
      { title: "API Ecosystem & Integrations", desc: "Connect your business with secure, seamless integrations." },
    ],
    []
  );

  const hiringServices = useMemo(
    () => [
      { title: "Talent Acquisition & Workforce Strategy", desc: "Find the right talent aligned with your business goals." },
      { title: "Executive Leadership Hiring", desc: "Secure leaders who can drive growth and transformation." },
      { title: "Recruitment Process Outsourcing (RPO)", desc: "End-to-end hiring handled by our experts, saving time and costs." },
      { title: "Employer Branding & Culture Design", desc: "Position your brand as the workplace of choice." },
      { title: "HR Automation & Digital Systems", desc: "Streamline HR with smart, tech-enabled solutions." },
      { title: "Payroll & Compliance Management", desc: "Hassle-free payroll and 100% compliance guaranteed." },
      { title: "Onboarding & Employee Experience", desc: "Deliver seamless employee journeys from day one." },
    ],
    []
  );

  const { stage1Active, stage2Active, stage3Active, stage4Active, stage5Active } = scrollStages;

  return (
    <div ref={containerRef} className="skpx-services-container">
      <section ref={sectionRef} className="skpx-services-section">
        <div className="skpx-services-content">

          {/* TOP HEADING */}
          <div className="whychoose-top" ref={titleRef}>
            <img src={titleImage} alt="Title Icon" className="whychoose-top-icon" />
            <h2 className="whychoose-top-title skpx-main-heading">
              Our{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #FAA706 0%, #FF6700 82%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                Services
              </span>
            </h2>
          </div>
           <div className="skpx-main-subtitle">
           <p>Where smart technology meets smarter teams — we help businesses turn bold ideas 
            <br/> into scalable solutions and sustained growth through innovation and talent.</p>
            </div>

          {/* Stage 1 - Three Cards */}
          <div
            className={`skpx-stage-1 ${stage2Active || stage3Active || stage4Active || stage5Active ? "hidden" : ""}`}
          >
            <div className={`skpx-card skpx-card-left ${stage1Active ? "active" : ""}`}>
              <img src={LogoImage} alt="Logo" className="skpx-logo-img" />
            </div>

            <div className={`skpx-card skpx-card-center ${stage1Active ? "active" : ""}`}>
              <img src={LogoImage} alt="Logo" className="skpx-logo-img" />
            </div>

            <div className={`skpx-card skpx-card-right ${stage1Active ? "active" : ""}`}>
              <img src={LogoImage} alt="Logo" className="skpx-logo-img" />
            </div>
          </div>

          {/* Stage 2 - Tech Solutions */}
          <div className={`skpx-stage-2 ${stage2Active ? "active" : ""}`}>
            <div className="skpx-info-card">
              <div className="skpx-icon-box-1">
                <img src={LogoImage} alt="Logo" className="skpx-logo-img" />
              </div>
              <div className="skpx-info-content">
                <h1 className="skpx-title">
                  <span className="skpx-title-purple">Tech</span>{" "}
                  <span className="skpx-title-orange">Solutions</span>
                </h1>
                <p className="skpx-description">
                  From mobile apps to SaaS platforms, SkapX helps businesses transform ideas into scalable digital solutions. Our focus is on building technology that is future-ready, user-friendly, and business-driven.
                </p>
              </div>
            </div>
          </div>

          {/* Stage 3 – Services List */}
          <div className={`skpx-stage-3 ${stage3Active ? "active" : ""}`}>
            <div className="skpx-services-card">
              <div className="skpx-icon-box-2">
                <img src={LogoImage2} alt="Logo" className="skpx-logo-img" />
              </div>

              <div className="skpx-services-list">
                {services.map((s, i) => (
                  <div key={i} className="skpx-service-item">
                    <img src={ServiceIcon} alt="icon" className="skpx-service-icon" />
                    <div className="skpx-service-text">
                      <h3 className="skpx-service-title">{s.title}</h3>
                      <p className="skpx-service-desc">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stage 4 - Hiring Solutions */}
          <div className={`skpx-stage-4 ${stage4Active ? "active" : ""}`}>
            <div className="skpx-info-card">
              <div className="skpx-icon-box">
                <img src={LogoImage3} alt="Logo" className="skpx-logo-img" />
              </div>
              <div className="skpx-info-content">
                <h1 className="skpx-title">
                  <span className="skpx-title-purple">Hiring</span>{" "}
                  <span className="skpx-title-orange">Solutions</span>
                </h1>
                <p className="skpx-description">
              At SkapX, we go beyond recruitment — we help you find the right people who drive growth. Whether you need a lean startup team, executive leadership, or end-to-end HR support, our solutions are designed to scale with your business.
                </p>
              </div>
            </div>
          </div>

          {/* Stage 5 – Hiring List */}
          <div className={`skpx-stage-5 ${stage5Active ? "active" : ""}`}>
            <div className="skpx-services-card">
              <div className="skpx-icon-box">
                <img src={LogoImage3} alt="Logo" className="skpx-logo-img" />
              </div>

              <div className="skpx-services-list">
                {hiringServices.map((s, i) => (
                  <div key={i} className="skpx-service-item">
                    <img src={ServiceIcon} alt="icon" className="skpx-service-icon" />
                    <div className="skpx-service-text">
                      <h3 className="skpx-service-title">{s.title}</h3>
                      <p className="skpx-service-desc">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}