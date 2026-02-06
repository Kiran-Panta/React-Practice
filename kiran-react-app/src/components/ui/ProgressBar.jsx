import React from 'react';
import PropTypes from 'prop-types';

/**
 * ProgressBar Component - Reusable progress indicator with animations
 * Used for showing completion status, loading progress, or skill levels
 *
 * Defense Q: Progress bar kasari animation sanga banaune React ma?
 * Answer: CSS transitions use garera, initial width 0% rakhne, then target width set garne.
 * Smooth animation ko lagi transition property use garne, timing function ease-in-out.
 */
function ProgressBar({
  progress = 0,
  label = '',
  showPercentage = true,
  color = 'primary',
  size = 'medium',
  animated = true,
  className = ''
}) {
  // Ensure progress is between 0 and 100
  const clampedProgress = Math.min(100, Math.max(0, progress));

  // Size classes
  const sizeClasses = {
    small: 'progress-sm',
    medium: '',
    large: 'progress-lg'
  };

  // Color classes for Bootstrap
  const colorClasses = {
    primary: 'bg-primary',
    success: 'bg-success',
    warning: 'bg-warning',
    danger: 'bg-danger',
    info: 'bg-info',
    secondary: 'bg-secondary'
  };

  return (
    <div className={`progress-bar-container ${className}`}>
      {/* Label above progress bar */}
      {label && (
        <div className="d-flex justify-content-between align-items-center mb-1">
          <span className="text-muted small">{label}</span>
          {showPercentage && (
            <span className="text-muted small">{clampedProgress}%</span>
          )}
        </div>
      )}

      {/* Progress bar container */}
      <div className={`progress ${sizeClasses[size]}`}>
        <div
          className={`progress-bar ${colorClasses[color]} ${animated ? '' : 'no-transition'}`}
          style={{
            width: `${clampedProgress}%`,
            transition: animated ? 'width 1s ease-in-out' : 'none'
          }}
          role="progressbar"
          aria-valuenow={clampedProgress}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label={label || `Progress: ${clampedProgress}%`}
        >
          {/* Show percentage inside bar on larger sizes */}
          {showPercentage && size === 'large' && (
            <span className="progress-bar-text">{clampedProgress}%</span>
          )}
        </div>
      </div>

      <style jsx>{`
        .progress-bar-container {
          margin-bottom: 1rem;
        }

        .progress-sm {
          height: 0.5rem;
        }

        .progress-lg {
          height: 1.5rem;
        }

        .progress-bar-text {
          color: white;
          font-weight: bold;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }

        .no-transition {
          transition: none !important;
        }

        /* Striped animation for active progress bars */
        .progress-bar-striped {
          background-image: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.15) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.15) 50%,
            rgba(255, 255, 255, 0.15) 75%,
            transparent 75%,
            transparent
          );
          background-size: 1rem 1rem;
        }

        /* Defense Q: Progress bar ko animation kasari control garne?
        Answer: CSS transition property use garne, duration ra timing function set garne.
        Initial width 0% rakhne, then JavaScript/React ma target width set garne.
        Smooth animation ko lagi ease-in-out timing function best. */
      `}</style>
    </div>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number,
  label: PropTypes.string,
  showPercentage: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'success', 'warning', 'danger', 'info', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  animated: PropTypes.bool,
  className: PropTypes.string
};

export default ProgressBar;