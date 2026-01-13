import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function PostDetail() {
  const { id } = useParams(); // useParams reads dynamic segment from URL
  const navigate = useNavigate(); // useNavigate for programmatic navigation
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPost();
  }, [id]); // re-fetch when id changes

  const fetchPost = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      if (!response.ok) throw new Error('Post not found');
      const data = await response.json();
      setPost(data);
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
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Back
      </button>
      {post && (
        <div>
          <h1>{post.title}</h1>
          <p className="text-muted">Post ID: {post.id}</p>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}

export default PostDetail;