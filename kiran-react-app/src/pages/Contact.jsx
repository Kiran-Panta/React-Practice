import React, { useState } from 'react';
import { useToast } from '../hooks/useToast';
import { validateRequired, validateEmail, validateMinLength, validateForm } from '../utils/validators';
import './Contact.css'; // Custom styles for contact page
import useDocumentTitle from '../hooks/useDocumentTitle';

const Contact = () => {
    // Set document title
    useDocumentTitle('Contact - Kiran Panta | React Intern');

    // Form state management for contact form
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // Validation errors state
    const [errors, setErrors] = useState({});

    // Loading state for form submission
    const [isSubmitting, setIsSubmitting] = useState(false);

    // useToast hook from Week 7 for feedback
    const { showToast } = useToast();

    // Handle input changes and clear errors on typing
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Form validation function using utility validators
    const validateForm = () => {
        const validations = {
            name: validateMinLength(formData.name.trim(), 2, 'Name'),
            email: validateEmail(formData.email.trim()),
            subject: validateRequired(formData.subject.trim(), 'Subject'),
            message: validateMinLength(formData.message.trim(), 10, 'Message')
        };

        const result = validateForm(validations);
        setErrors(result.errors);
        return result.isValid;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate API call - in real app this would send to backend
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Show success toast using useToast hook
            showToast('Message sent successfully! We will get back to you soon.', 'success');

            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

        } catch (error) {
            // Show error toast
            showToast('Failed to send message. Please try again.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="text-center mb-5">
                            <h1 className="display-4 fw-bold text-primary mb-3">Contact Us</h1>
                            <p className="lead text-muted">
                                Have questions about our services? We'd love to hear from you.
                                Send us a message and we'll respond as soon as possible.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row g-5">
                    {/* Contact Form - Left Side */}
                    <div className="col-lg-8">
                        <div className="card shadow-sm">
                            <div className="card-body p-4">
                                <h3 className="card-title mb-4">Send us a Message</h3>

                                <form onSubmit={handleSubmit} noValidate>
                                    {/* Name Field */}
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label fw-semibold">
                                            Full Name <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Enter your full name"
                                            disabled={isSubmitting}
                                        />
                                        {errors.name && (
                                            <div className="invalid-feedback d-block">
                                                {errors.name}
                                            </div>
                                        )}
                                    </div>

                                    {/* Email Field */}
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label fw-semibold">
                                            Email Address <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Enter your email address"
                                            disabled={isSubmitting}
                                        />
                                        {errors.email && (
                                            <div className="invalid-feedback d-block">
                                                {errors.email}
                                            </div>
                                        )}
                                    </div>

                                    {/* Subject Field */}
                                    <div className="mb-3">
                                        <label htmlFor="subject" className="form-label fw-semibold">
                                            Subject <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            placeholder="What's this about?"
                                            disabled={isSubmitting}
                                        />
                                        {errors.subject && (
                                            <div className="invalid-feedback d-block">
                                                {errors.subject}
                                            </div>
                                        )}
                                    </div>

                                    {/* Message Field */}
                                    <div className="mb-4">
                                        <label htmlFor="message" className="form-label fw-semibold">
                                            Message <span className="text-danger">*</span>
                                        </label>
                                        <textarea
                                            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                            id="message"
                                            name="message"
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Tell us more about your inquiry..."
                                            disabled={isSubmitting}
                                        />
                                        {errors.message && (
                                            <div className="invalid-feedback d-block">
                                                {errors.message}
                                            </div>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg px-5"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <i className="bi bi-send me-2"></i>
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info - Right Side */}
                    <div className="col-lg-4">
                        <div className="contact-info">
                            {/* Contact Information Card */}
                            <div className="card shadow-sm mb-4">
                                <div className="card-body">
                                    <h4 className="card-title mb-4">Get in Touch</h4>

                                    <div className="d-flex align-items-start mb-3">
                                        <i className="bi bi-geo-alt-fill text-primary me-3 mt-1"></i>
                                        <div>
                                            <h6 className="mb-1">Location</h6>
                                            <p className="text-muted mb-0">Kathmandu, Nepal</p>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-start mb-3">
                                        <i className="bi bi-envelope-fill text-primary me-3 mt-1"></i>
                                        <div>
                                            <h6 className="mb-1">Email</h6>
                                            <p className="text-muted mb-0">hello@techyatra.com</p>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-start mb-3">
                                        <i className="bi bi-clock-fill text-primary me-3 mt-1"></i>
                                        <div>
                                            <h6 className="mb-1">Working Hours</h6>
                                            <p className="text-muted mb-0">
                                                Mon - Fri: 9:00 AM - 6:00 PM<br/>
                                                Sat: 10:00 AM - 4:00 PM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Google Maps Placeholder */}
                            <div className="card shadow-sm">
                                <div className="card-body p-0">
                                    <div
                                        className="bg-light d-flex align-items-center justify-content-center"
                                        style={{ height: '250px' }}
                                    >
                                        <div className="text-center">
                                            <i className="bi bi-geo-alt text-muted fs-1 mb-2"></i>
                                            <p className="text-muted mb-0">Interactive Map</p>
                                            <small className="text-muted">Google Maps integration placeholder</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;