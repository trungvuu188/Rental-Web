import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  rentalPrice: number;
  purchasePrice?: number;
  rating?: number;
  reviewCount?: number;
  isAvailable?: boolean;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  image,
  rentalPrice,
  purchasePrice,
  rating = 0,
  reviewCount = 0,
  isAvailable = true,
  className = ''
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  return (
    <div className={`product-card ${className} ${!isAvailable ? 'product-card--unavailable' : ''}`}>
      <Link to={`/product/${id}`} className="product-card__link">
        {/* Image */}
        <div className="product-card__image-container">
          <img
            src={image}
            alt={name}
            className="product-card__image"
            loading="lazy"
          />
          {!isAvailable && (
            <div className="product-card__overlay">
              <span className="product-card__unavailable-text">Hết hàng</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="product-card__content">
          <h3 className="product-card__title" title={name}>
            {name}
          </h3>

          {/* Rating */}
          {rating > 0 && (
            <div className="product-card__rating">
              <div className="product-card__stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`product-card__star ${
                      star <= rating ? 'product-card__star--filled' : ''
                    }`}
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M7 1L8.854 4.764L13 5.382L10 8.236L10.708 12.382L7 10.5L3.292 12.382L4 8.236L1 5.382L5.146 4.764L7 1Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </svg>
                ))}
              </div>
              {reviewCount > 0 && (
                <span className="product-card__review-count">
                  ({reviewCount})
                </span>
              )}
            </div>
          )}

          {/* Prices */}
          <div className="product-card__prices">
            <div className="product-card__rental-price">
              <span className="product-card__price-label">Thuê:</span>
              <span className="product-card__price-value">
                {formatPrice(rentalPrice)}
              </span>
            </div>
            {purchasePrice && (
              <div className="product-card__purchase-price">
                <span className="product-card__price-label">Mua:</span>
                <span className="product-card__price-value">
                  {formatPrice(purchasePrice)}
                </span>
              </div>
            )}
          </div>
        </div>
      </Link>

      {/* Quick Actions */}
      {isAvailable && (
        <div className="product-card__actions">
          <button
            type="button"
            className="product-card__action product-card__action--heart"
            aria-label="Thêm vào yêu thích"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8.8 3.2C9.7 2.1 11.2 2.1 12.1 3.2C13 4.3 13 6 12.1 7.1L8 11.6L3.9 7.1C3 6 3 4.3 3.9 3.2C4.8 2.1 6.3 2.1 7.2 3.2L8 4L8.8 3.2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </button>
          <button
            type="button"
            className="product-card__action product-card__action--cart"
            aria-label="Thêm vào giỏ hàng"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 2H3.4L3.8 4M3.8 4H14L12.6 9H5L3.8 4ZM5 12.5C5 13.328 5.672 14 6.5 14C7.328 14 8 13.328 8 12.5C8 11.672 7.328 11 6.5 11C5.672 11 5 11.672 5 12.5ZM11 12.5C11 13.328 11.672 14 12.5 14C13.328 14 14 13.328 14 12.5C14 11.672 13.328 11 12.5 11C11.672 11 11 11.672 11 12.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;