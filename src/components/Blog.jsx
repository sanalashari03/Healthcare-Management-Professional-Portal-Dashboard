import React from 'react';
import './Blog.css';

const Blog = () => {
  const posts = [
    {
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
      category: "Category",
      date: "Oct 24, 2025",
      readTime: "5 min read",
      title: "The Future of Healthcare Staffing",
      desc: "How technology is changing the way nurses find work and facilities manage shifts."
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-21735999181c?auto=format&fit=crop&q=80&w=400",
      category: "Category",
      date: "Oct 24, 2025",
      readTime: "5 min read",
      title: "The Future of Healthcare Staffing",
      desc: "How technology is changing the way nurses find work and facilities manage shifts."
    },
    {
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400",
      category: "Category",
      date: "Oct 24, 2025",
      readTime: "5 min read",
      title: "The Future of Healthcare Staffing",
      desc: "How technology is changing the way nurses find work and facilities manage shifts."
    }
  ];

  return (
    <section className="blog-section container">
      <div className="blog-header">
        <div className="badge blue-badge">Blog & News</div>
        <h2 className="blog-title">Latest Updates</h2>
        <p className="blog-subtitle">Insights, trends, and news from the world of healthcare staffing.</p>
      </div>

      <div className="blog-grid">
        {posts.map((post, index) => (
          <div key={index} className="blog-card">
            <div className="blog-image-box">
              <img src={post.image} alt={post.title} />
              <div className="blog-badge">{post.category}</div>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                {post.date} • {post.readTime}
              </div>
              <h3 className="blog-post-title">{post.title}</h3>
              <p className="blog-post-desc">{post.desc}</p>
              <a href="#" className="read-more">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
