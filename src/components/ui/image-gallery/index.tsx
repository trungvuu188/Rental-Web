import React, { useState } from 'react';
import { ProductImage } from '../../../types/product';
import './style.scss';

interface ImageGalleryProps {
  images: ProductImage[];
  productName: string;
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  productName,
  className = ''
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const selectedImage = images[selectedImageIndex];

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsZoomed(false);
  };

  const handleMainImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  const handlePrevious = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
    setIsZoomed(false);
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
    setIsZoomed(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrevious();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'Escape') {
      setIsZoomed(false);
    }
  };

  if (!images.length) {
    return (
      <div className={`image-gallery ${className}`}>
        <div className="image-gallery__main">
          <div className="image-gallery__placeholder">
            <span>Không có hình ảnh</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`image-gallery ${className}`} onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Main Image */}
      <div className="image-gallery__main">
        <div 
          className={`image-gallery__main-container ${isZoomed ? 'image-gallery__main-container--zoomed' : ''}`}
          onClick={handleMainImageClick}
        >
          <img
            src={selectedImage.url}
            alt={selectedImage.alt || productName}
            className="image-gallery__main-image"
          />
          
          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                className="image-gallery__nav image-gallery__nav--prev"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                aria-label="Hình ảnh trước"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <button
                type="button"
                className="image-gallery__nav image-gallery__nav--next"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Hình ảnh tiếp theo"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </>
          )}

          {/* Zoom indicator */}
          <div className="image-gallery__zoom-hint">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9 3.5C5.96243 3.5 3.5 5.96243 3.5 9C3.5 12.0376 5.96243 14.5 9 14.5C12.0376 14.5 14.5 12.0376 14.5 9C14.5 5.96243 12.0376 3.5 9 3.5Z" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M16.5 16.5L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M7 9H11M9 7V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Image counter */}
        {images.length > 1 && (
          <div className="image-gallery__counter">
            {selectedImageIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="image-gallery__thumbnails">
          {images.map((image, index) => (
            <button
              key={image.id}
              type="button"
              className={`image-gallery__thumbnail ${
                index === selectedImageIndex ? 'image-gallery__thumbnail--active' : ''
              }`}
              onClick={() => handleThumbnailClick(index)}
              aria-label={`Xem hình ảnh ${index + 1}`}
            >
              <img
                src={image.url}
                alt={image.alt || `${productName} ${index + 1}`}
                className="image-gallery__thumbnail-image"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;