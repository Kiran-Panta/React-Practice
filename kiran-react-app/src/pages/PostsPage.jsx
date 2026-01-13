import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PostsPage() {
  const [posts, setPosts] = useState([]); // state for posts array
  const [loading, setLoading] = useState(true); // loading state for spinner
  const [error, setError] = useState(null); // error state for API failures

  // useEffect runs after component mounts - fetches data once
  useEffect(() => {
    fetchPosts();
  }, []);

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

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h1>Posts</h1>
      <div className="row">
        {posts.map(post => (
          <div key={post.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body.substring(0, 100)}...</p>
                {/* Link navigates to post detail page */}
                <Link to={`/posts/${post.id}`} className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsPage;