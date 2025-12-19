import React, { useState, useEffect } from 'react';

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

export default function BlogInnerPage() {
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
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
      <div className="relative">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-64 object-cover"
        />
        <span className="absolute bottom-4 left-4 bg-orange-500 text-white px-4 py-1 rounded text-sm font-semibold">
          {blog.category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
          <span>{blog.date}</span>
          <span>|</span>
          <span>{blog.reviews} Reviews</span>
        </div>
        <h3 className="text-2xl font-bold text-orange-500 mb-3">
          {blog.title}
        </h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          {blog.excerpt}
        </p>
        <button 
          onClick={() => handleBlogClick(blog)}
          className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2"
        >
          Read more
          <span>→</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Meta Info */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-purple-400 font-semibold uppercase text-sm tracking-wider">{currentBlog.category}</span>
          <span className="text-gray-400 text-sm">{currentBlog.date}</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-16 leading-tight">
          {currentBlog.title}
        </h1>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden mb-16 shadow-2xl">
          <img 
            src={currentBlog.image} 
            alt={currentBlog.title}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-300 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur. Viverra nisl magna condimentum elit nunc. In enim nec turpis sagittis quam phasellus lobortis amet ultricies. Magna consequat gravida viverra donec pellentesque massa. Purus dolor turpis phasellus augue. Sit eu id cras eget amet eu accumsan suspendisse aenean. Pulvinar in donec pellentesque velit arcu nibh sollicitudin sagittis adipiscing. Cursus aliquet pellentesque cras amet. Cras at interdum purus ornare ac nec. Orci proin aliquam tincidunt eu tellus. Velit eleifend pharetra elementum viverra morbi lectus.
          </p>

          <p className="text-gray-300 leading-relaxed mb-12">
            Molestie eu dictumst quam ultricies enim. Amet malesuada commodo faucibus libero sit. Mattis et at penatibus sed. Sit ac nunc diam blandit dictum. Aliquam donec interdum duis molestie eu at scelerisque. Neque ullamcorper vitae at libero quam donec a mattis. Risus enim sit lorem vitae vitae. Orci massa enim leo nibh facilisis auctor. Nibh ridiculus quam senectus viverra quis. Faucibus venenatis eget sed id. Non dignissim nulla cras nunc sed etiam risus netus vel. Adipiscing fusce quis fusce velit venenatis ac vitae blandit sit. Vitae scelerisque gravida arcu aliquam mauris eu non justo tellus.
          </p>

          {/* Quote Block */}
          <div className="border-l-4 border-purple-500 pl-6 py-4 my-12 bg-slate-800/50 rounded-r-lg">
            <p className="text-xl italic text-gray-200 mb-4">
              Lorem ipsum dolor sit amet consectetur. Arcu nec at vel massa. Lorem vel orci auctor proin interdum sed at tempor nulla. Vitae viverra urna vel dui feugiat nec.
            </p>
            <p className="text-sm text-gray-400 font-semibold">— Pedro Xavi</p>
          </div>

          <p className="text-gray-300 leading-relaxed mb-12">
            Lorem ipsum dolor sit amet consectetur. Tempor volutpat a sit arcu in morbi nisl. Quam hendrerit sed a risus nibh eu phasellus ultricies lacus. Bibendum lectus libero vitae risus eget velit eget semper mi. Et quisque in congue pulvinar. Ullamcorper at integer tellus vitae augue pellentesque vitae et pulvinar. Et maecenas at nulla quisque consequat et posuere cursus. Lectus nunc proin est nisi sed maecenas imperdiet dictumst faucibus. Purus tellus nunc malesuada accumsan elementum dictumst. In sed scelerisque morbi aliquam nisi id nam quis lectus.
          </p>

          <p className="text-gray-300 leading-relaxed mb-12">
            Laoreet ipsum aenean est donec nascetur lobortis vulputate. Nulla dictum sit pharetra maecenas sed malesuada praesent.
          </p>

          {/* Second Image */}
          <div className="rounded-3xl overflow-hidden my-12 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1200&h=600&fit=crop" 
              alt="VR Gaming Experience"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <p className="text-gray-300 leading-relaxed mb-16">
            Lorem ipsum dolor sit amet consectetur. Mauris commodo sed mattis pharetra. Neque dui ultricies tellus phasellus sem enim dictumst. Cras sed non pellentesque enim dictum amet a. Amet tellus duis vitae commodo quis pellentesque nisi. Volutpat orci id felis tortor.
          </p>
        </div>
      </div>

      {/* Recent Blogs Section - Full Width Dark Background */}
      <div className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">More you might find interesting</h2>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
              View All
            </button>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
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