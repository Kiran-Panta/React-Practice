import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Breadcrumb from '../components/ui/Breadcrumb';
import { capitalize } from '../utils/helpers';
import useDocumentTitle from '../hooks/useDocumentTitle';

function PostDetail() {
  const { id } = useParams(); // useParams reads dynamic segment from URL
  const navigate = useNavigate(); // useNavigate for programmatic navigation

  // Set document title
  useDocumentTitle(`Post ${id} - Kiran Panta | React Intern`);

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
      <div className="container my-5 d-flex justify-content-center align-items-center" style={{minHeight: '50vh'}}>
        <LoadingSpinner size="lg" color="blue" />
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
      <Breadcrumb />
      {post && (
        <div>
          <h1>{capitalize(post.title)}</h1>
          <p className="text-muted">Post ID: {post.id}</p>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}

export default PostDetail;