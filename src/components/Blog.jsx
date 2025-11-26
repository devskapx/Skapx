import React, { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import "../styles/Blog.css";

const Blog = () => {
  const [theme, setTheme] = useState("dark");
  const titleRef = useRef(null);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="blogcards-container">

      <div className="whychoose-top" ref={titleRef}>
        <img src="/images/circle.png" alt="Title Icon" className="whychoose-top-icon" />
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
            Blog
          </span>
        </h2>
      </div>

      <div className="blogcards-grid">

        <div className="blogcard-large">
          <div className="blogcard-large-header">
            <img src="/images/blog-1.svg" alt="Blog Header" className="blogcard-header-image-1" />
            <div className="tag-top-left">
              <span>Digital Marketing</span>
            </div>
          </div>

          <div className="blogcard-content">
            <div className="blog-meta">23-Feb-2025 | 23 Reviews</div>
            <h2 className="blog-title">Lorem Ipsum is simply dummy text</h2>
            <p className="blog-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <button className="blog-btn">
              Read more <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="blogcards-right">

          <div className="blogcard-small">
            <div className="blogcard-small-image yellow-gradient">
              <img src="/images/blog-2.svg" alt="Blog Header" className="blogcard-header-image-2" />
              <div className="tag-bottom-left">
                <span>Bit Coin</span>
              </div>
            </div>

            <div className="blogcard-small-content">
              <div className="blog-meta">23-Feb-2025 | 23 Reviews</div>
              <h3 className="blog-title-small">Digital Marketing</h3>
              <p className="blog-desc-small">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <button className="blog-btn-small">
                Read more <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="blogcard-small">
            <div className="blogcard-small-image pink-gradient">
              <img src="/images/blog-3.svg" alt="Blog Header" className="blogcard-header-image-3" />
              <div className="tag-bottom-left">
                <span>Gold</span>
              </div>
            </div>

            <div className="blogcard-small-content">
              <div className="blog-meta">23-Feb-2025 | 23 Reviews</div>
              <h3 className="blog-title-small">Lorem Ipsum is simply</h3>
              <p className="blog-desc-small">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <button className="blog-btn-small">
                Read more <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Blog;
