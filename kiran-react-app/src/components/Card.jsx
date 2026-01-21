import React from 'react';

function Card({ children, className = '' }) {
  return (
    <div className={`relative bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:p-0.5 before:bg-gradient-to-r before:from-blue-500 before:to-purple-500 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 ${className}`}>
      <div className="relative bg-white rounded-lg p-4">
        {children}
      </div>
    </div>
  );
}

export default Card;