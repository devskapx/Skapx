import React, { useState, useEffect, useRef, useMemo } from "react";
import "../styles/OurServicesCard.css";
import LogoImage from "../../public/images/SKAPX-SER-LOGO.svg";
import titleImage from "../../public/images/circle.png";
import ServiceIcon from "../../public/images/Ser-Icon.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function OurServicesCard() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef(null);
  const rafRef = useRef(null);
  const containerRef = useRef(null);

  // ⭐ NEW — Title Animation Ref
  const titleRef = useRef(null);

  // ⭐ NEW — GSAP Animation for Title
  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

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
      stage1Active: scrollPosition > 50 && scrollPosition < 800,
      stage2Active: scrollPosition >= 800 && scrollPosition < 1600,
      stage3Active: scrollPosition >= 1600 && scrollPosition < 2400,
      stage4Active: scrollPosition >= 2400 && scrollPosition < 3200,
      stage5Active: scrollPosition >= 3200,
    }),
    [scrollPosition]
  );

  const services = useMemo(
    () => [
      { title: "Mobile Experience Engineering", desc: "Native and cross-platform mobile apps built for performance" },
      { title: "Next-Gen Web Solutions", desc: "Modern web applications with cutting-edge tech stacks" },
      { title: "SaaS Product Innovation", desc: "Scalable cloud platforms engineered for growth" },
      { title: "Experience Design (UI/UX Studio)", desc: "User-centered design that drives engagement" },
      { title: "Intelligent Automation", desc: "AI-powered solutions to optimize business processes" },
      { title: "API Ecosystem & Integrations", desc: "Seamless connectivity across platforms and services" },
    ],
    []
  );

  const hiringServices = useMemo(
    () => [
      { title: "Talent Acquisition & Workforce Strategy", desc: "Full-cycle talent sourcing and workforce planning" },
      { title: "Executive Leadership Hiring", desc: "C-suite and senior leadership recruitment" },
      { title: "Recruitment Process Outsourcing (RPO)", desc: "End-to-end hiring management and optimization" },
      { title: "Employer Branding & Culture Design", desc: "Build a compelling employer brand that attracts top talent" },
      { title: "HR Automation & Digital Systems", desc: "Streamline HR operations with modern tech solutions" },
      { title: "Payroll & Compliance Management", desc: "Accurate payroll processing and regulatory compliance" },
      { title: "Onboarding & Employee Experience", desc: "Create seamless onboarding journeys for new hires" },
    ],
    []
  );

  const { stage1Active, stage2Active, stage3Active, stage4Active, stage5Active } = scrollStages;

  return (
    <div ref={containerRef} className="skpx-services-container">
      <section ref={sectionRef} className="skpx-services-section">
        <div className="skpx-services-content">

          {/* 🔥 TOP HEADING ADDED HERE */}
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

          <p className="skpx-main-subtitle">
          Where smart technology meets smarter teams — we help businesses turn bold ideas into scalable solutions and sustained growth through innovation and talent.
          </p>

          {/* Stage 1 */}
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

          {/* Stage 2 */}
          <div className={`skpx-stage-2 ${stage2Active ? "active" : ""}`}>
            <div className="skpx-info-card">
              <div className="skpx-icon-box">
                <img src={LogoImage} alt="Logo" className="skpx-logo-img" />
              </div>
              <div className="skpx-info-content">
                <h1 className="skpx-title">
                  <span className="skpx-title-purple">Tech</span>{" "}
                  <span className="skpx-title-orange">Solutions</span>
                </h1>
                <p className="skpx-description">
                  From mobile apps to SaaS platforms, SkapeX helps businesses transform ideas into scalable digital solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Stage 3 – Services List (WITH ICONS) */}
          <div className={`skpx-stage-3 ${stage3Active ? "active" : ""}`}>
            <div className="skpx-services-card">
              <div className="skpx-icon-box-2">
                <img src={LogoImage} alt="Logo" className="skpx-logo-img" />
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

          {/* Stage 4 */}
          <div className={`skpx-stage-4 ${stage4Active ? "active" : ""}`}>
            <div className="skpx-info-card">
              <div className="skpx-icon-box">
                <img src={LogoImage} alt="Logo" className="skpx-logo-img" />
              </div>
              <div className="skpx-info-content">
                <h1 className="skpx-title">
                  <span className="skpx-title-purple">Hiring</span>{" "}
                  <span className="skpx-title-orange">Solutions</span>
                </h1>
                <p className="skpx-description">
                  At SkapX, we go beyond recruitment — we help you find the right people who drive growth.
                </p>
              </div>
            </div>
          </div>

          {/* Stage 5 – Hiring List (WITH ICONS) */}
          <div className={`skpx-stage-5 ${stage5Active ? "active" : ""}`}>
            <div className="skpx-services-card">
              <div className="skpx-icon-box">
                <img src={LogoImage} alt="Logo" className="skpx-logo-img" />
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
