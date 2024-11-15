import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Breadcrumb Component - Navigation helper showing current page location
 * Reads pathname from useLocation, splits into segments, creates navigation links
 * Last segment is current page (plain text), others are clickable links
 *
 * Defense Q: Breadcrumb navigation kasari implement garchau React Router ma?
 * Answer: useLocation hook le pathname dincha, split('/') le segments banaucha,
 * map garera Link components banaucha, last segment plain text rakhcha.
 * URL segments lai readable banauna hyphen replace space, capitalize garne.
 */
function Breadcrumb() {
  const location = useLocation();

  // Get pathname and split into segments, filter out empty strings
  const pathSegments = location.pathname.split('/').filter(segment => segment);

  // If we're on home page, don't show breadcrumb
  if (pathSegments.length === 0) {
    return null;
  }

  // Convert URL segments to readable labels
  const segmentLabels = pathSegments.map(segment => {
    // Replace hyphens with spaces and capitalize words
    return segment
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  });

  return (
    <nav aria-label="breadcrumb" className="mb-4">
      <ol className="breadcrumb bg-light p-3 rounded">
        {/* Home link always present */}
        <li className="breadcrumb-item">
          <Link to="/" className="text-decoration-none">
            <i className="fas fa-home me-1"></i>Home
          </Link>
        </li>

        {/* Map through path segments */}
        {segmentLabels.map((label, index) => {
          const isLast = index === segmentLabels.length - 1;
          const pathToThisPoint = '/' + pathSegments.slice(0, index + 1).join('/');

          return (
            <li
              key={pathToThisPoint}
              className={`breadcrumb-item ${isLast ? 'active' : ''}`}
              aria-current={isLast ? 'page' : undefined}
            >
              {isLast ? (
                // Last segment is current page - plain text
                <span className="fw-bold">{label}</span>
              ) : (
                // Other segments are links
                <Link to={pathToThisPoint} className="text-decoration-none">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>

      <style jsx>{`
        .breadcrumb {
          margin-bottom: 0;
        }

        .breadcrumb-item + .breadcrumb-item::before {
          content: "›";
          color: #6c757d;
          font-weight: bold;
        }

        .breadcrumb-item.active span {
          color: #6c757d;
        }

        /* Defense Q: useLocation.pathname kasari use garne?
        Answer: useLocation() hook le current location object dincha,
        .pathname property ma current URL path huncha, e.g. "/posts/1"
        Split('/') garera segments banaucha, filter empty strings,
        Map garera Link components banaucha navigation ko lagi. */
      `}</style>
    </nav>
  );
}

export default Breadcrumb;