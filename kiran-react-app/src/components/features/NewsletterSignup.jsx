import React, { useState } from 'react';

const NewsletterSignup = () => {
    // State for email input and form status
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Handle email input change
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        // Clear error when user starts typing
        if (status === 'error') {
            setStatus('idle');
            setErrorMessage('');
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate email format
        if (!email.trim()) {
            setStatus('error');
            setErrorMessage('Email address is required');
            return;
        }

        if (!emailRegex.test(email)) {
            setStatus('error');
            setErrorMessage('Please enter a valid email address');
            return;
        }

        // Set loading state
        setStatus('loading');

        try {
            // Simulate API call - in real app this would send to backend
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Success state
            setStatus('success');

            // Clear email after successful subscription
            setEmail('');

            // Reset to idle after 3 seconds to allow re-subscription
            setTimeout(() => {
                setStatus('idle');
            }, 3000);

        } catch (error) {
            // Error state
            setStatus('error');
            setErrorMessage('Failed to subscribe. Please try again.');
        }
    };

    return (
        <div className="newsletter-signup">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="text-center">
                            <h4 className="mb-3">Stay Updated</h4>
                            <p className="text-muted mb-4">
                                Subscribe to our newsletter for the latest updates, tips, and exclusive content.
                            </p>

                            <form onSubmit={handleSubmit} className="d-flex gap-2 justify-content-center">
                                <div className="input-group" style={{ maxWidth: '400px' }}>
                                    <input
                                        type="email"
                                        className={`form-control ${status === 'error' ? 'is-invalid' : ''}`}
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        disabled={status === 'loading' || status === 'success'}
                                        aria-label="Email address"
                                    />

                                    <button
                                        type="submit"
                                        className={`btn ${status === 'success' ? 'btn-success' : 'btn-primary'}`}
                                        disabled={status === 'loading' || status === 'success'}
                                    >
                                        {status === 'loading' && (
                                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                        )}
                                        {status === 'success' && (
                                            <i className="bi bi-check-circle me-2"></i>
                                        )}
                                        {status === 'idle' && (
                                            <i className="bi bi-envelope me-2"></i>
                                        )}
                                        {status === 'loading' ? 'Subscribing...' :
                                         status === 'success' ? 'Subscribed!' : 'Subscribe'}
                                    </button>
                                </div>
                            </form>

                            {/* Error message */}
                            {status === 'error' && (
                                <div className="text-danger mt-2 small">
                                    <i className="bi bi-exclamation-triangle me-1"></i>
                                    {errorMessage}
                                </div>
                            )}

                            {/* Success message with animation */}
                            {status === 'success' && (
                                <div className="text-success mt-2 small animate__animated animate__bounceIn">
                                    <i className="bi bi-check-circle-fill me-1"></i>
                                    Thank you for subscribing! Check your email for confirmation.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSignup;