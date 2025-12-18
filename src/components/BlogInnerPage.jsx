import React from "react";
import "../styles/BlogInnerPage.css";

export default function BlogInnerPage() {
  return (
    <div className="blog-inner-wrapper">
      {/* Header Section */}
      <div className="blog-container">
        {/* Meta Info */}
        <div className="blog-meta">
          <span className="blog-tag">BLOG</span>
          <span className="blog-date">16 March 2026</span>
        </div>

        {/* Title */}
        <h1 className="blog-title">
          Lorem ipsum dolor sit amet consectetur.
          <br />
          Volutpat egestas malesuada sit nulla.
        </h1>

        {/* Featured Image */}
        <div className="blog-featured-image">
          <img
            src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=1200&h=600&fit=crop"
            alt="VR Technology"
          />
        </div>

        {/* Article Content */}
        <div className="blog-content">
          <p>
            Lorem ipsum dolor sit amet consectetur. Viverra nisl magna condimentum
            elit nunc. In enim nec turpis sagittis quam phasellus lobortis amet
            ultricies.
          </p>

          <p>
            Molestie eu dictumst quam ultricies enim. Amet malesuada commodo
            faucibus libero sit. Mattis et at penatibus sed.
          </p>

          {/* Quote */}
          <div className="blog-quote">
            <p>
              Lorem ipsum dolor sit amet consectetur. Arcu nec at vel massa.
              Lorem vel orci auctor proin interdum sed.
            </p>
            <span>— Pedro Xavi</span>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur. Tempor volutpat a sit arcu
            in morbi nisl. Quam hendrerit sed a risus nibh.
          </p>

          {/* Second Image */}
          <div className="blog-featured-image">
            <img
              src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1200&h=600&fit=crop"
              alt="VR Gaming"
            />
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur. Mauris commodo sed mattis
            pharetra. Neque dui ultricies tellus phasellus sem.
          </p>
        </div>
      </div>

      {/* Recent Blogs */}
      <div className="recent-blogs">
        <div className="blog-container">
          <div className="recent-header">
            <h2>More you might find interesting</h2>
            <button className="view-all-btn">View All</button>
          </div>

          <div className="recent-grid">
            {[1, 2].map((_, index) => (
              <div className="blog-card" key={index}>
                <div className="card-image">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=400&fit=crop"
                    alt="Blog"
                  />
                  <span className="card-tag">Digital Marketing</span>
                </div>

                <div className="card-content">
                  <div className="card-meta">
                    <span>23-Feb-2025</span>
                    <span>|</span>
                    <span>23 Reviews</span>
                  </div>

                  <h3>Lorem Ipsum is simply dummy text</h3>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>

                  <button className="read-more-btn">
                    Read more <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
