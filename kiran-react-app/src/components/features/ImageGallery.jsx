import React, { useState, useEffect } from 'react';
import Modal from '../ui/Modal';

const ImageGallery = () => {
    // Array of image URLs using Picsum for placeholder images
    const imageUrls = [
        'https://picsum.photos/300/200?random=1',
        'https://picsum.photos/300/200?random=2',
        'https://picsum.photos/300/200?random=3',
        'https://picsum.photos/300/200?random=4',
        'https://picsum.photos/300/200?random=5',
        'https://picsum.photos/300/200?random=6',
        'https://picsum.photos/300/200?random=7',
        'https://picsum.photos/300/200?random=8',
        'https://picsum.photos/300/200?random=9',
        'https://picsum.photos/300/200?random=10',
        'https://picsum.photos/300/200?random=11',
        'https://picsum.photos/300/200?random=12'
    ];

    // State for modal visibility and current image index
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // State for loaded images (for loading states)
    const [loadedImages, setLoadedImages] = useState(new Set());

    // Handle image click to open modal
    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    // Handle modal close
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (!isModalOpen) return;

            switch (event.key) {
                case 'ArrowLeft':
                    event.preventDefault();
                    setCurrentImageIndex(prev =>
                        prev > 0 ? prev - 1 : imageUrls.length - 1
                    );
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    setCurrentImageIndex(prev =>
                        prev < imageUrls.length - 1 ? prev + 1 : 0
                    );
                    break;
                case 'Escape':
                    event.preventDefault();
                    handleCloseModal();
                    break;
                default:
                    break;
            }
        };

        // Add event listener when modal is open
        if (isModalOpen) {
            document.addEventListener('keydown', handleKeyPress);
            // Focus trap: prevent tabbing outside modal
            document.body.style.overflow = 'hidden';
        }

        // Cleanup function
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen, imageUrls.length]);

    // Handle image load
    const handleImageLoad = (index) => {
        setLoadedImages(prev => new Set([...prev, index]));
    };

    return (
        <div className="image-gallery">
            <div className="text-center mb-5">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">My Gallery</h3>
                <p className="text-gray-600">Click on any image to view in full size</p>
            </div>

            {/* Masonry-style grid layout using CSS columns */}
            <div className="gallery-grid">
                {imageUrls.map((url, index) => (
                    <div
                        key={index}
                        className="gallery-item mb-4 break-inside-avoid cursor-pointer transform transition-transform duration-300 hover:scale-105"
                        onClick={() => handleImageClick(index)}
                    >
                        <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            {/* Loading placeholder */}
                            {!loadedImages.has(index) && (
                                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                                    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                </div>
                            )}

                            <img
                                src={url}
                                alt={`Gallery image ${index + 1}`}
                                className={`w-full h-auto object-cover transition-opacity duration-300 ${
                                    loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                                }`}
                                onLoad={() => handleImageLoad(index)}
                                loading="lazy"
                            />

                            {/* Overlay with zoom icon */}
                            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                                <i className="bi bi-zoom-in text-white text-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for full-size image viewing */}
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                title={`Image ${currentImageIndex + 1} of ${imageUrls.length}`}
            >
                <div className="text-center">
                    {/* Main image in modal */}
                    <img
                        src={imageUrls[currentImageIndex]}
                        alt={`Gallery image ${currentImageIndex + 1}`}
                        className="max-w-full max-h-96 mx-auto rounded-lg shadow-lg"
                    />

                    {/* Navigation buttons */}
                    <div className="flex justify-between items-center mt-4">
                        <button
                            onClick={() => setCurrentImageIndex(prev =>
                                prev > 0 ? prev - 1 : imageUrls.length - 1
                            )}
                            className="btn btn-outline-primary"
                            aria-label="Previous image"
                        >
                            <i className="bi bi-chevron-left me-1"></i>
                            Previous
                        </button>

                        <span className="text-muted">
                            {currentImageIndex + 1} / {imageUrls.length}
                        </span>

                        <button
                            onClick={() => setCurrentImageIndex(prev =>
                                prev < imageUrls.length - 1 ? prev + 1 : 0
                            )}
                            className="btn btn-outline-primary"
                            aria-label="Next image"
                        >
                            Next
                            <i className="bi bi-chevron-right ms-1"></i>
                        </button>
                    </div>

                    {/* Keyboard instructions */}
                    <div className="mt-3 text-sm text-muted">
                        <i className="bi bi-info-circle me-1"></i>
                        Use arrow keys to navigate, Escape to close
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default ImageGallery;