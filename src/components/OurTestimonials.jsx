import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import titleImage from "../../public/images/circle.png";
import bgImage from "../../public/images/Property1V.svg";
import "../styles/OurTestimonials.css";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "Professional, creative, and incredibly easy to work with. They didn’t just design—they brought our brand to life. Our clients love the new look!",
    name: "Karan M",
    role: "Founder, EcoNest Interiors",
    image: "/images/user1.png",
  },
  {
    text: "They just got us. The design reflects exactly what we imagined—and more. Super collaborative and always open to feedback.",
    name: "Tara V",
    role: "Creative Director, HelloChai",
    image: "/images/user2.png",
  },
  {
    text: "Skapx was the missing piece for our brand. They delivered high-impact visuals that tell our story beautifully.",
    name: "Arjun R",
    role: "Marketing Lead, NovaTech",
    image: "/images/user3.png",
  },
  {
    text: "Absolutely fantastic team! Their attention to detail is unmatched.",
    name: "Priya S",
    role: "CEO, Craftsy",
    image: "/images/user4.png",
  },
  {
    text: "They transformed our digital presence completely. Highly recommended!",
    name: "Vikram N",
    role: "Founder, BloomAI",
    image: "/images/user1.png",
  },
];

export default function OurTestimonials() {
  const titleRef = useRef(null);

  // GSAP animation for the heading
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

  // Duplicate testimonials for smooth continuous scroll
  const repeatedTestimonials = [...testimonials, ...testimonials];

  // Animation variants for continuous vertical scrolling
  const scrollVariantUp = {
    animate: {
      y: ["0%", "-50%"],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    },
  };

  const scrollVariantDown = {
    animate: {
      y: ["-50%", "0%"],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section
      className="testimonials-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Our Testimonials Title with Scroll Animation */}
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
            Testimonials
          </span>
        </h2>
      </div>

      <h3 className="testimonial-subheading">
        Click the button to add in the list by starting the work together.
      </h3>

      <div className="testimonial-rows">
        {/* Row 1 - bottom to top */}
        <motion.div
          className="testimonial-row"
          variants={scrollVariantUp}
          animate="animate"
        >
          {repeatedTestimonials.map((t, i) => (
            <div className="testimonial-card" key={`up-${i}`}>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-footer">
                <img src={t.image} alt={t.name} className="testimonial-image" />
                <div className="testimonial-info">
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Row 2 - top to bottom */}
        <motion.div
          className="testimonial-row"
          variants={scrollVariantDown}
          animate="animate"
        >
          {repeatedTestimonials.map((t, i) => (
            <div className="testimonial-card" key={`down-${i}`}>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-footer">
                <img src={t.image} alt={t.name} className="testimonial-image" />
                <div className="testimonial-info">
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Row 3 - bottom to top */}
        <motion.div
          className="testimonial-row"
          variants={scrollVariantUp}
          animate="animate"
        >
          {repeatedTestimonials.map((t, i) => (
            <div className="testimonial-card" key={`up2-${i}`}>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-footer">
                <img src={t.image} alt={t.name} className="testimonial-image" />
                <div className="testimonial-info">
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}