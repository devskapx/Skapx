import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/WhyChoose.css";
import titleImage from "../../public/images/circle.png";
import bgImage from "../../public/images/Property1V.svg";
import featureVideo1 from "../../public/videos/whychooseskapx-unscreen-g.gif";

gsap.registerPlugin(ScrollTrigger);

const FeatureLogo = () => (
  <svg
    width="70"
    height="52"
    viewBox="0 0 90 63"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background Card Design (Old Design) */}
    <g filter="url(#filter0_d_5_14)">
      <rect
        x="10.1032"
        y="6.47998"
        width="69.7936"
        height="42.4"
        rx="16"
        fill="url(#paint0_linear_5_14)"
        shapeRendering="crispEdges"
      />
      <rect
        x="11.1032"
        y="7.47998"
        width="67.7936"
        height="40.4"
        rx="15"
        stroke="white"
        strokeOpacity="0.15"
        strokeWidth="2"
        shapeRendering="crispEdges"
      />
    </g>

    {/* ⬇️ Your Custom SVG Icon Inserted Here */}
    <g transform="translate(28, 15)"> 
      <svg
        width="34"
        height="25"
        viewBox="0 0 34 25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="mask0_1371_12824" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="-1" width="24" height="26">
          <path d="M10.7444 0.00839935H1.70613L13.5535 12.0234L1.58398 24.0385H10.0115C10.0115 24.0385 11.2282 24.0122 11.9658 23.7933C12.6207 23.5989 13.5535 23.0578 13.5535 23.0578L21.3705 15.0885C21.3705 15.0885 22.4583 13.2181 22.4699 11.9008C22.4821 10.4774 21.2483 8.46798 21.2483 8.46798L13.4316 0.866611C13.4316 0.866611 12.7389 0.304259 12.2101 0.130996C11.6641 -0.0478955 10.7444 0.00839935 10.7444 0.00839935Z" fill="#670BFF" stroke="black" strokeWidth="1.31587" />
        </mask>

        <g mask="url(#mask0_1371_12824)">
          <path d="M23.8117 0H0.849609V24.0301H23.8117V0Z" fill="white" />
          <g filter="url(#filter0_i_1371_12824)">
            <path d="M12.1963 11.3891C7.26517 8.48452 0.921978 10.1426 -1.97158 15.0925C-4.86514 20.0423 -3.21333 26.4096 1.71783 29.3141C6.64899 32.2187 12.9922 30.5606 15.8857 25.6107C18.7793 20.6608 17.1275 14.2936 12.1963 11.3891Z" fill="url(#paint0_linear_1371_12824)" />
          </g>
        </g>

        <path d="M23.5682 14.3444C23.7969 13.6984 23.9346 12.6279 23.9346 12.6279L33.5835 22.1909H25.1559L24.1787 21.9457L23.446 21.4553L20.3926 18.3903C20.3926 18.3903 22.1036 16.994 22.8352 15.8155C23.1739 15.2705 23.3537 14.9496 23.5682 14.3444Z" fill="white" />

        <path d="M22.7142 7.96953C22.0067 6.89463 20.5156 5.51747 20.5156 5.51747L23.2028 2.57501C23.2028 2.57501 23.6845 2.13317 24.0578 1.96199C24.4156 1.79791 25.0349 1.7168 25.0349 1.7168H33.4624L23.9357 11.4024C23.9357 11.4024 23.8765 10.4103 23.6914 9.80857C23.4521 9.03087 23.1612 8.64864 22.7142 7.96953Z" fill="white" />
      </svg>
    </g>

    {/* Background Filters */}
    <defs>
      <filter
        id="filter0_d_5_14"
        x="0.10318"
        y="0.47998"
        width="89.7936"
        height="62.4"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_14" result="shape" />
      </filter>

      <linearGradient id="paint0_linear_5_14" x1="45" y1="6.48" x2="45" y2="48.88" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A27CEE" />
        <stop offset="1" stopColor="#670BFF" />
      </linearGradient>
    </defs>
  </svg>
);

const FeatureCard = ({ title, description, icon, videoSrc }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
          end: "bottom 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="feature-card" ref={cardRef}>
      <div className="feature-card-bg" />

      <div className="feature-content">
        <div className="feature-icon">{icon}</div>
        <div className="feature-title">{title}</div>
        <div className="feature-description">{description}</div>
      </div>

      {/* 🎥 GIF section */}
      <div className="feature-video-container">
        <img
          src={videoSrc}
          alt="Feature animation"
          className="feature-video"
        />
      </div>
    </div>
  );
};

export const WhyChoose = () => {
  const topRef = useRef(null);

  useEffect(() => {
    const el = topRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const features = [
    {
      title: "Your Growth\nOur Priority",
      description:
        "We measure our success by yours. With SkapX as your concierge for startups, you gain a dedicated partner invested in your long-term growth.",
      icon: <FeatureLogo />,
      videoSrc: featureVideo1,
    },
    {
      title: "Comprehensive\nSupport",
      description:
        "From the first spark of your idea to achieving your milestones, we're here for every stage of your journey with personalized, concierge-level care.",
      icon: <FeatureLogo />,
      videoSrc: featureVideo1,
    },
    {
      title: "Created for\nEntrepreneurs",
      description:
        "Our solutions are crafted by entrepreneurs, for entrepreneurs. We understand the hustle, the challenges, and the dreams — and provide tailored concierge services to help you succeed.",
      icon: <FeatureLogo />,
      videoSrc: featureVideo1,
    },
  ];

  return (
    <section
      className="whychoose-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="whychoose-top" ref={topRef}>
        <img src={titleImage} alt="Title Icon" className="whychoose-top-icon" />
        <h2 className="whychoose-top-title">
          Why Choose{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #FAA706 0%, #FF6700 82%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Skapx
          </span>
        </h2>
      </div>

      <div className="whychoose-container">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            videoSrc={feature.videoSrc}
          />
        ))}
      </div>
    </section>
  );
};
