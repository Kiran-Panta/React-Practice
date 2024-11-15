import React from 'react';

/**
 * Tag Component - Small chip/tag component with optional close button
 * Used for displaying filter tags, categories, or removable items
 * Styled with Tailwind classes, supports different variants
 *
 * Defense Q: Tag component kasari reusable banaune?
 * Answer: Props le variant, size, closable control garne,
 * onClose callback le remove functionality provide garne,
 * Tailwind classes le styling flexible banaune.
 */
function Tag({
  children,
  variant = 'primary',
  size = 'medium',
  closable = false,
  onClose,
  className = '',
  ...props
}) {
  // Variant classes for different tag styles
  const variantClasses = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    success: 'bg-success text-white',
    danger: 'bg-danger text-white',
    warning: 'bg-warning text-dark',
    info: 'bg-info text-white',
    light: 'bg-light text-dark border',
    dark: 'bg-dark text-white'
  };

  // Size classes
  const sizeClasses = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-3 py-1 text-sm',
    large: 'px-4 py-2 text-base'
  };

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClose) {
      onClose();
    }
  };

  return (
    <span
      className={`
        inline-flex items-center rounded-full font-medium
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${closable ? 'pr-1' : ''}
        ${className}
      `}
      {...props}
    >
      {/* Tag content */}
      <span className="leading-none">{children}</span>

      {/* Close button if closable */}
      {closable && (
        <button
          type="button"
          className="ml-2 flex items-center justify-center w-4 h-4 rounded-full
                     hover:bg-black hover:bg-opacity-20 transition-colors
                     focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          onClick={handleClose}
          aria-label={`Remove ${children} tag`}
        >
          <span className="text-xs leading-none" aria-hidden="true">×</span>
        </button>
      )}
    </span>
  );
}

export default Tag;