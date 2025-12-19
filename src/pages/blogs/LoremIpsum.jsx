
  import React, { useState, useEffect } from 'react';
import '../blogs/LoremIpsum.css';

// Sample blog data
const allBlogs = [
  {
    id: 1,
    title: "Lorem Ipsum is simply dummy text",
    category: "Digital Marketing",
    date: "23-Feb-2025",
    reviews: 23,
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=400&fit=crop",
    content: "Full blog content here..."
  },
  {
    id: 2,
    title: "Digital Marketing Trends 2025",
    category: "Digital Marketing",
    date: "22-Feb-2025",
    reviews: 18,
    excerpt: "Explore the latest trends in digital marketing that will shape the industry in 2025 and beyond.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    content: "Full blog content here..."
  },
  {
    id: 3,
    title: "SEO Best Practices Guide",
    category: "Digital Marketing",
    date: "21-Feb-2025",
    reviews: 32,
    excerpt: "Master the art of SEO with our comprehensive guide covering all essential best practices.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=400&fit=crop",
    content: "Full blog content here..."
  },
  {
    id: 4,
    title: "Social Media Strategy Tips",
    category: "Social Media",
    date: "20-Feb-2025",
    reviews: 27,
    excerpt: "Build an effective social media strategy that drives engagement and grows your audience.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop",
    content: "Full blog content here..."
  },
  {
    id: 5,
    title: "Content Marketing Success",
    category: "Content Marketing",
    date: "19-Feb-2025",
    reviews: 15,
    excerpt: "Learn how to create compelling content that resonates with your target audience.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop",
    content: "Full blog content here..."
  }
];

export default function LoremIpsum() {
  const [currentBlog, setCurrentBlog] = useState(allBlogs[0]);
  const [recentBlog, setRecentBlog] = useState(null);
  const [relatedBlog, setRelatedBlog] = useState(null);

  useEffect(() => {
    // Get most recent blog (excluding current blog)
    const recent = allBlogs
      .filter(blog => blog.id !== currentBlog.id)
      .sort((a, b) => new Date(b.date) - new Date(a.date))[0];
    
    setRecentBlog(recent);

    // Get related blog (same category, excluding current and recent blog)
    const related = allBlogs.find(
      blog => blog.id !== currentBlog.id && 
              blog.id !== recent?.id && 
              blog.category === currentBlog.category
    );

    // If no related blog found, use another recent blog
    const fallbackBlog = allBlogs.find(
      blog => blog.id !== currentBlog.id && blog.id !== recent?.id
    );

    setRelatedBlog(related || fallbackBlog);
  }, [currentBlog]);

  const handleBlogClick = (blog) => {
    setCurrentBlog(blog);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const BlogCard = ({ blog }) => (
    <div className="blog-card">
      <div className="blog-card-image-wrapper">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="blog-card-image"
        />
        <span className="blog-card-category">
          {blog.category}
        </span>
      </div>
      <div className="blog-card-content">
        <div className="blog-card-meta">
          <span>{blog.date}</span>
          <span>|</span>
          <span>{blog.reviews} Reviews</span>
        </div>
        <h3 className="blog-card-title">
          {blog.title}
        </h3>
        <p className="blog-card-excerpt">
          {blog.excerpt}
        </p>
        <button 
          onClick={() => handleBlogClick(blog)}
          className="blog-card-button"
        >
          Read more
          <span>→</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="blog-page">
      {/* Header Section */}
      <div className="blog-container">
        {/* Meta Info */}
        <div className="in-blog-meta">
          <span className="blog-category">{currentBlog.category}</span>
          <span className="blog-date">{currentBlog.date}</span>
        </div>

        {/* Title */}
        <h1 className="in-blog-title">
          {currentBlog.title}
        </h1>

        {/* Featured Image */}
        <div className="blog-featured-image">
          <img 
            src={currentBlog.image} 
            alt={currentBlog.title}
          />
        </div>

        {/* Article Content */}
        <div className="blog-content">
          <p>
            Lorem ipsum dolor sit amet consectetur. Viverra nisl magna condimentum elit nunc. In enim nec turpis sagittis quam phasellus lobortis amet ultricies. Magna consequat gravida viverra donec pellentesque massa. Purus dolor turpis phasellus augue. Sit eu id cras eget amet eu accumsan suspendisse aenean. Pulvinar in donec pellentesque velit arcu nibh sollicitudin sagittis adipiscing. Cursus aliquet pellentesque cras amet. Cras at interdum purus ornare ac nec. Orci proin aliquam tincidunt eu tellus. Velit eleifend pharetra elementum viverra morbi lectus.
          </p>

          <p>
            Molestie eu dictumst quam ultricies enim. Amet malesuada commodo faucibus libero sit. Mattis et at penatibus sed. Sit ac nunc diam blandit dictum. Aliquam donec interdum duis molestie eu at scelerisque. Neque ullamcorper vitae at libero quam donec a mattis. Risus enim sit lorem vitae vitae. Orci massa enim leo nibh facilisis auctor. Nibh ridiculus quam senectus viverra quis. Faucibus venenatis eget sed id. Non dignissim nulla cras nunc sed etiam risus netus vel. Adipiscing fusce quis fusce velit venenatis ac vitae blandit sit. Vitae scelerisque gravida arcu aliquam mauris eu non justo tellus.
          </p>

          {/* Quote Block */}
          <div className="blog-quote">
            <p className="blog-quote-text">
              Lorem ipsum dolor sit amet consectetur. Arcu nec at vel massa. Lorem vel orci auctor proin interdum sed at tempor nulla. Vitae viverra urna vel dui feugiat nec.
            </p>
            <p className="blog-quote-author">— Pedro Xavi</p>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur. Tempor volutpat a sit arcu in morbi nisl. Quam hendrerit sed a risus nibh eu phasellus ultricies lacus. Bibendum lectus libero vitae risus eget velit eget semper mi. Et quisque in congue pulvinar. Ullamcorper at integer tellus vitae augue pellentesque vitae et pulvinar. Et maecenas at nulla quisque consequat et posuere cursus. Lectus nunc proin est nisi sed maecenas imperdiet dictumst faucibus. Purus tellus nunc malesuada accumsan elementum dictumst. In sed scelerisque morbi aliquam nisi id nam quis lectus.
          </p>

          <p>
            Laoreet ipsum aenean est donec nascetur lobortis vulputate. Nulla dictum sit pharetra maecenas sed malesuada praesent.
          </p>

          {/* Second Image */}
          <div className="blog-secondary-image">
            <img 
              src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1200&h=600&fit=crop" 
              alt="VR Gaming Experience"
            />
          </div>

          <p className="blog-content-final">
            Lorem ipsum dolor sit amet consectetur. Mauris commodo sed mattis pharetra. Neque dui ultricies tellus phasellus sem enim dictumst. Cras sed non pellentesque enim dictum amet a. Amet tellus duis vitae commodo quis pellentesque nisi. Volutpat orci id felis tortor.
          </p>
        </div>
      </div>

      {/* Recent Blogs Section */}
      <div className="recent-blogs-section">
        <div className="blog-container">
          {/* Section Header */}
          <div className="recent-blogs-header">
            <h2>More you might find interesting</h2>
            <button className="view-all-button">
              View All
            </button>
          </div>

          {/* Blog Cards Grid */}
          <div className="blog-cards-grid">
            {/* Left Card - Most Recent Blog */}
            {recentBlog && <BlogCard blog={recentBlog} />}

            {/* Right Card - Related or Recent Blog */}
            {relatedBlog && <BlogCard blog={relatedBlog} />}
          </div>
        </div>
      </div>
    </div>
  );
}
