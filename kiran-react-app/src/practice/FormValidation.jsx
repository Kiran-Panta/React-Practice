import React, { useState } from 'react';

function FormValidation() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: '',
    terms: false
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showToast, setShowToast] = useState(false);

  // Handle input changes - single state object pattern
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Handle blur validation - better UX than validating while typing
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name);
  };

  // Validate individual field
  const validateField = (fieldName) => {
    const newErrors = { ...errors };

    switch (fieldName) {
      case 'fullName':
        if (formData.fullName.length < 3) {
          newErrors.fullName = 'Name must be at least 3 characters';
        } else {
          delete newErrors.fullName;
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          newErrors.email = 'Please enter a valid email';
        } else {
          delete newErrors.email;
        }
        break;
      case 'phone':
        if (formData.phone.length !== 10 || !/^\d+$/.test(formData.phone)) {
          newErrors.phone = 'Phone must be 10 digits';
        } else {
          delete newErrors.phone;
        }
        break;
      case 'password':
        if (formData.password.length < 8) {
          newErrors.password = 'Password must be at least 8 characters';
        } else if (!/\d/.test(formData.password)) {
          newErrors.password = 'Password must contain at least one number';
        } else {
          delete newErrors.password;
        }
        break;
      case 'confirmPassword':
        if (formData.confirmPassword !== formData.password) {
          newErrors.confirmPassword = 'Passwords do not match';
        } else {
          delete newErrors.confirmPassword;
        }
        break;
      case 'role':
        if (!formData.role) {
          newErrors.role = 'Please select a role';
        } else {
          delete newErrors.role;
        }
        break;
      case 'terms':
        if (!formData.terms) {
          newErrors.terms = 'You must accept the terms';
        } else {
          delete newErrors.terms;
        }
        break;
    }

    setErrors(newErrors);
  };

  // Password strength calculation
  const getPasswordStrength = () => {
    const pwd = formData.password;
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (/[A-Z]/.test(pwd)) strength++;
    if (/[a-z]/.test(pwd)) strength++;
    if (/\d/.test(pwd)) strength++;
    if (/[^A-Za-z\d]/.test(pwd)) strength++;
    return strength;
  };

  // Check if form is valid
  const isFormValid = () => {
    return formData.fullName.length >= 3 &&
           /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
           formData.phone.length === 10 && /^\d+$/.test(formData.phone) &&
           formData.password.length >= 8 && /\d/.test(formData.password) &&
           formData.confirmPassword === formData.password &&
           formData.role &&
           formData.terms;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Auto-hide toast
      // Reset form
      setFormData({
        fullName: '', email: '', phone: '', password: '', confirmPassword: '', role: '', terms: false
      });
      setErrors({});
      setTouched({});
    }
  };

  return (
    <div className="container my-5">
      <h1>Form Validation Practice</h1>
      <form onSubmit={handleSubmit} className="row g-3">
        {/* Full Name */}
        <div className="col-md-6">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-control ${touched.fullName && errors.fullName ? 'is-invalid' : touched.fullName && !errors.fullName ? 'is-valid' : ''}`}
          />
          {touched.fullName && errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
          {touched.fullName && !errors.fullName && <div className="valid-feedback">Looks good!</div>}
        </div>

        {/* Email */}
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-control ${touched.email && errors.email ? 'is-invalid' : touched.email && !errors.email ? 'is-valid' : ''}`}
          />
          {touched.email && errors.email && <div className="invalid-feedback">{errors.email}</div>}
          {touched.email && !errors.email && <div className="valid-feedback">Valid email!</div>}
        </div>

        {/* Phone */}
        <div className="col-md-6">
          <label className="form-label">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-control ${touched.phone && errors.phone ? 'is-invalid' : touched.phone && !errors.phone ? 'is-valid' : ''}`}
          />
          {touched.phone && errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
          {touched.phone && !errors.phone && <div className="valid-feedback">Valid phone!</div>}
        </div>

        {/* Role */}
        <div className="col-md-6">
          <label className="form-label">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-select ${touched.role && errors.role ? 'is-invalid' : touched.role && !errors.role ? 'is-valid' : ''}`}
          >
            <option value="">Select role</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
          </select>
          {touched.role && errors.role && <div className="invalid-feedback">{errors.role}</div>}
        </div>

        {/* Password */}
        <div className="col-md-6">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-control ${touched.password && errors.password ? 'is-invalid' : touched.password && !errors.password ? 'is-valid' : ''}`}
          />
          {touched.password && errors.password && <div className="invalid-feedback">{errors.password}</div>}
          {touched.password && !errors.password && <div className="valid-feedback">Strong password!</div>}
          {/* Password strength meter */}
          {formData.password && (
            <div className="mt-2">
              <small>Strength:</small>
              <div className="progress" style={{height: '5px'}}>
                <div
                  className={`progress-bar ${getPasswordStrength() >= 4 ? 'bg-success' : getPasswordStrength() >= 3 ? 'bg-warning' : 'bg-danger'}`}
                  style={{width: `${(getPasswordStrength() / 5) * 100}%`}}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* Confirm Password */}
        <div className="col-md-6">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-control ${touched.confirmPassword && errors.confirmPassword ? 'is-invalid' : touched.confirmPassword && !errors.confirmPassword ? 'is-valid' : ''}`}
          />
          {touched.confirmPassword && errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
          {touched.confirmPassword && !errors.confirmPassword && <div className="valid-feedback">Passwords match!</div>}
        </div>

        {/* Terms */}
        <div className="col-12">
          <div className="form-check">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-check-input ${touched.terms && errors.terms ? 'is-invalid' : ''}`}
              id="terms"
            />
            <label className="form-check-label" htmlFor="terms">
              I accept the terms and conditions
            </label>
            {touched.terms && errors.terms && <div className="invalid-feedback d-block">{errors.terms}</div>}
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-12">
          <button type="submit" className="btn btn-primary" disabled={!isFormValid()}>
            Submit
          </button>
        </div>
      </form>

      {/* Success Toast */}
      {showToast && (
        <div className="toast show position-fixed top-0 end-0 m-3" style={{zIndex: 9999}}>
          <div className="toast-body bg-success text-white">
            Form submitted successfully!
          </div>
        </div>
      )}

      {/* Defense question */}
      <div className="mt-5 p-3 bg-light">
        <strong>Defense Q: Form validation garda onBlur ra onChange duwai use garne reason ke ho?</strong>
        <p>onBlur validates when user leaves field - better UX as it doesn't interrupt typing. onChange validates on every keystroke - can be annoying but gives immediate feedback. We use both: onChange clears errors, onBlur validates.</p>
      </div>
    </div>
  );
}

export default FormValidation;