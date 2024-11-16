// validators.js - Form validation functions
// This file contains validation functions for form inputs
// These functions help ensure data integrity and provide user feedback

/**
 * Validates an email address
 * @param {string} email - Email to validate
 * @returns {Object} - {isValid: boolean, message: string}
 */
export const validateEmail = (email) => {
  if (!email || email.trim() === '') {
    return { isValid: false, message: 'Email is required' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, message: 'Please enter a valid email address' };
  }

  return { isValid: true, message: '' };
};

/**
 * Validates a password
 * @param {string} password - Password to validate
 * @param {Object} options - Validation options
 * @returns {Object} - {isValid: boolean, message: string}
 */
export const validatePassword = (password, options = {}) => {
  const { minLength = 6, requireUppercase = false, requireLowercase = false, requireNumbers = false } = options;

  if (!password || password.trim() === '') {
    return { isValid: false, message: 'Password is required' };
  }

  if (password.length < minLength) {
    return { isValid: false, message: `Password must be at least ${minLength} characters long` };
  }

  if (requireUppercase && !/[A-Z]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one uppercase letter' };
  }

  if (requireLowercase && !/[a-z]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one lowercase letter' };
  }

  if (requireNumbers && !/\d/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one number' };
  }

  return { isValid: true, message: '' };
};

/**
 * Validates a required field
 * @param {*} value - Value to validate
 * @param {string} fieldName - Name of the field for error message
 * @returns {Object} - {isValid: boolean, message: string}
 */
export const validateRequired = (value, fieldName = 'Field') => {
  if (value == null || value === '' || (Array.isArray(value) && value.length === 0)) {
    return { isValid: false, message: `${fieldName} is required` };
  }
  return { isValid: true, message: '' };
};

/**
 * Validates minimum length
 * @param {string} value - String to validate
 * @param {number} minLength - Minimum length required
 * @param {string} fieldName - Name of the field for error message
 * @returns {Object} - {isValid: boolean, message: string}
 */
export const validateMinLength = (value, minLength, fieldName = 'Field') => {
  if (!value || value.length < minLength) {
    return { isValid: false, message: `${fieldName} must be at least ${minLength} characters long` };
  }
  return { isValid: true, message: '' };
};

/**
 * Validates maximum length
 * @param {string} value - String to validate
 * @param {number} maxLength - Maximum length allowed
 * @param {string} fieldName - Name of the field for error message
 * @returns {Object} - {isValid: boolean, message: string}
 */
export const validateMaxLength = (value, maxLength, fieldName = 'Field') => {
  if (value && value.length > maxLength) {
    return { isValid: false, message: `${fieldName} must not exceed ${maxLength} characters` };
  }
  return { isValid: true, message: '' };
};

/**
 * Validates a URL
 * @param {string} url - URL to validate
 * @returns {Object} - {isValid: boolean, message: string}
 */
export const validateUrl = (url) => {
  if (!url || url.trim() === '') {
    return { isValid: false, message: 'URL is required' };
  }

  try {
    new URL(url);
    return { isValid: true, message: '' };
  } catch {
    return { isValid: false, message: 'Please enter a valid URL' };
  }
};

/**
 * Validates a phone number (basic validation)
 * @param {string} phone - Phone number to validate
 * @returns {Object} - {isValid: boolean, message: string}
 */
export const validatePhone = (phone) => {
  if (!phone || phone.trim() === '') {
    return { isValid: false, message: 'Phone number is required' };
  }

  // Remove all non-digit characters
  const digitsOnly = phone.replace(/\D/g, '');

  if (digitsOnly.length < 10) {
    return { isValid: false, message: 'Phone number must be at least 10 digits' };
  }

  if (digitsOnly.length > 15) {
    return { isValid: false, message: 'Phone number must not exceed 15 digits' };
  }

  return { isValid: true, message: '' };
};

/**
 * Validates a number within a range
 * @param {number} value - Number to validate
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @param {string} fieldName - Name of the field for error message
 * @returns {Object} - {isValid: boolean, message: string}
 */
export const validateNumberRange = (value, min, max, fieldName = 'Value') => {
  const num = Number(value);
  if (isNaN(num)) {
    return { isValid: false, message: `${fieldName} must be a valid number` };
  }

  if (num < min) {
    return { isValid: false, message: `${fieldName} must be at least ${min}` };
  }

  if (num > max) {
    return { isValid: false, message: `${fieldName} must not exceed ${max}` };
  }

  return { isValid: true, message: '' };
};

/**
 * Validates multiple fields and returns combined result
 * @param {Object} validations - Object with field names as keys and validation results as values
 * @returns {Object} - {isValid: boolean, errors: Object}
 */
export const validateForm = (validations) => {
  const errors = {};
  let isValid = true;

  Object.keys(validations).forEach(field => {
    const result = validations[field];
    if (!result.isValid) {
      errors[field] = result.message;
      isValid = false;
    }
  });

  return { isValid, errors };
};

// Defense Questions:
// Q: Why separate validation logic into utility functions?
// A: Separation of concerns - keeps components focused on UI, makes validation reusable across forms, easier to test validation logic independently.

// Q: How does validateForm work?
// A: It takes an object of validation results and combines them, returning overall form validity and specific field errors for targeted error display.

// Q: What makes a good validation function?
// A: Returns consistent object format {isValid, message}, handles edge cases (null/undefined), provides clear error messages, is pure (no side effects).

// Q: How would you handle async validation (like checking if email exists)?
// A: Create async validation functions that return Promises, use them in useEffect or form submission handlers, show loading states during validation.