import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Tag from '../components/ui/Tag';
import { truncate } from '../utils/helpers';

function PostsPage() {
  // Set document title
  useDocumentTitle('Posts - Kiran Panta | React Intern');

  const [posts, setPosts] = useState([]); // state for posts array
  const [loading, setLoading] = useState(true); // loading state for spinner
  const [error, setError] = useState(null); // error state for API failures
  const [searchTerm, setSearchTerm] = useState(''); // search functionality

  // useEffect runs after component mounts - fetches data once
  useEffect(() => {
    fetchPosts();
  }, []);

  // Auto-scroll to top when search changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [searchTerm]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=9');
      if (!response.ok) throw new Error('Failed to fetch posts');
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Filter posts based on search term
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="container my-5">
        <h1>Posts</h1>
        {/* Skeleton loading for posts */}
        <div className="row">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <div className="skeleton h-6 w-3/4 mb-3 rounded"></div>
                  <div className="skeleton h-4 w-full mb-2 rounded"></div>
                  <div className="skeleton h-4 w-5/6 mb-2 rounded"></div>
                  <div className="skeleton h-4 w-4/6 mb-4 rounded"></div>
                  <div className="skeleton h-8 w-24 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger d-flex align-items-center">
          <span className="me-2">⚠️</span>
          <div>
            <strong>Error loading posts:</strong> {error}
            <button
              className="btn btn-outline-danger btn-sm ms-3"
              onClick={fetchPosts}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h1>Posts</h1>

      {/* Filter tags */}
      <div className="mb-4">
        <div className="d-flex gap-2 flex-wrap">
          <Tag variant="primary" size="sm">All Posts</Tag>
          <Tag variant="secondary" size="sm">Recent</Tag>
          <Tag variant="success" size="sm">Popular</Tag>
          <Tag variant="info" size="sm">Technology</Tag>
          <Tag variant="warning" size="sm">Lifestyle</Tag>
        </div>
      </div>

      {/* Search input */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search posts by title or content..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Results count */}
      <div className="mb-3 text-muted">
        Showing {filteredPosts.length} of {posts.length} posts
        {searchTerm && ` for "${searchTerm}"`}
      </div>

      <div className="row">
        {filteredPosts.length === 0 ? (
          <div className="col-12 text-center py-5">
            <div className="text-muted">
              <div className="mb-3" style={{fontSize: '3rem'}}>🔍</div>
              <h4>No posts found</h4>
              <p>Try adjusting your search terms</p>
              {searchTerm && (
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => setSearchTerm('')}
                >
                  Clear Search
                </button>
              )}
            </div>
          </div>
        ) : (
          filteredPosts.map(post => (
            <div key={post.id} className="col-md-4 mb-4">
              <div className="card h-100 hover:shadow-lg transition-shadow duration-300">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{truncate(post.body, 100)}</p>
                  {/* Link navigates to post detail page */}
                  <Link to={`/posts/${post.id}`} className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default PostsPage;