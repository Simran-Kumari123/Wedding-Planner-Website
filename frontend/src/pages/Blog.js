import React from 'react';
import './Blog.css';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Planning Your Dream Wedding: A Complete Guide',
      date: '2025-01-15',
      excerpt: 'Learn the essential steps to plan your perfect wedding day...',
      image: 'https://images.pexels.com/photos/11925938/pexels-photo-11925938.jpeg'
    },
    {
      id: 2,
      title: 'Top Wedding Trends for 2025',
      date: '2025-01-10',
      excerpt: 'Discover the latest wedding trends that will make your day special...',
      image: 'https://images.pexels.com/photos/10076774/pexels-photo-10076774.jpeg'
    },
    {
      id: 3,
      title: 'Budget-Friendly Wedding Tips',
      date: '2025-01-05',
      excerpt: 'Save money without compromising on your dream wedding...',
      image: 'https://images.pexels.com/photos/18245252/pexels-photo-18245252.jpeg'
    }
  ];

  return (
    <div className="blog-container">
      <div className="container py-5">
        <div className="blog-header">
          <h1 className="blog-title">Wedding Blog</h1>
          <div className="title-decoration"></div>
          <p className="blog-subtitle">Stay updated with the latest wedding planning tips, trends, and advice.</p>
        </div>

        <div className="row">
          {blogPosts.map((post, index) => (
            <div key={post.id} className="col-md-4 mb-4">
              <div className={`blog-card-wrapper animate-card delay-${index}`}>
                <div className="blog-card">
                  <div className="card-image-wrapper">
                    <img src={post.image} className="card-image" alt={post.title} />
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <i className="fas fa-heart pulse-heart"></i>
                      </div>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="post-date">{post.date}</div>
                    <h5 className="post-title">{post.title}</h5>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <button className="read-more-btn" onClick={() => alert(`Read more about: ${post.title}`)}>
                      <span>Read More</span>
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
