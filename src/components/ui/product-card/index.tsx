import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    brand: string;
    image: string;
    rentalPrice: number;
    membershipPrice: number;
    depositPrice: number;
    clearancePrice?: number;
    colors: string[];
    sizes: string[];
    isOutOfStock?: boolean;
    category: string;
  };
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className = ''
}) => {
  const {
    id,
    name,
    brand,
    image,
    rentalPrice,
    membershipPrice,
    depositPrice,
    clearancePrice,
    colors,
    sizes,
    isOutOfStock = false,
    category
  } = product;
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  return (
    <div className={`product-card ${className} ${isOutOfStock ? 'product-card--unavailable' : ''}`}>
      <Link to={`/product/${id}`} className="product-card__link">
        {/* Image */}
        <div className="product-card__image-container">
          <img
            src={image}
            alt={name}
            className="product-card__image"
            loading="lazy"
          />
          {isOutOfStock && (
            <div className="product-card__overlay">
              <span className="product-card__unavailable-text">Hết hàng</span>
            </div>
          )}
          {sizes.length > 1 && (
            <div className="product-card__sizes-badge">
              +{sizes.length - 1} Kích thước
            </div>
          )}
        </div>

        {/* Content */}
        <div className="product-card__content">
          {/* Brand */}
          <div className="product-card__brand">{brand}</div>
          
          <h3 className="product-card__title" title={name}>
            {name}
          </h3>

          {/* Prices */}
          <div className="product-card__prices">
            <div className="product-card__price-row">
              <span className="product-card__price-label">Giá thuê:</span>
              <span className="product-card__price-value product-card__price-value--rental">
                {formatPrice(rentalPrice)}
              </span>
            </div>
            <div className="product-card__price-row">
              <span className="product-card__price-label">Giá membership:</span>
              <span className="product-card__price-value product-card__price-value--membership">
                {formatPrice(membershipPrice)}
              </span>
            </div>
            <div className="product-card__price-row">
              <span className="product-card__price-label">Giá cọc:</span>
              <span className="product-card__price-value product-card__price-value--deposit">
                {formatPrice(depositPrice)}
              </span>
            </div>
            {clearancePrice && (
              <div className="product-card__price-row">
                <span className="product-card__price-label">Giá thanh lý:</span>
                <span className="product-card__price-value product-card__price-value--clearance">
                  {formatPrice(clearancePrice)}
                </span>
              </div>
            )}
          </div>
        </div>
      </Link>

      {/* Quick Actions */}
      {!isOutOfStock && (
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
            className="product-card__action product-card__action--rent"
            aria-label="Thuê ngay"
          >
            Thuê ngay
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;