import React from 'react';
import { ProductInfoProps } from '../../../types/product';

const ProductInfo: React.FC<ProductInfoProps> = ({
  product,
  selectedVariant
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`product-info__star ${
          index < rating ? 'product-info__star--filled' : ''
        }`}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M8 1L9.854 4.764L14 5.382L11 8.236L11.708 12.382L8 10.5L4.292 12.382L5 8.236L2 5.382L6.146 4.764L8 1Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.5"
        />
      </svg>
    ));
  };

  return (
    <div className="product-info">
      {/* Product Code */}
      <div className="product-info__code">
        Mã sản phẩm: <span>{product.code}</span>
      </div>

      {/* Product Name */}
      <h1 className="product-info__title">{product.name}</h1>

      {/* Brand */}
      <div className="product-info__brand">
        Thương hiệu: <span>{product.brand}</span>
      </div>

      {/* Rating */}
      <div className="product-info__rating">
        <div className="product-info__stars">
          {renderStars(product.rating)}
        </div>
        <span className="product-info__rating-text">
          {product.rating.toFixed(1)} ({product.reviewCount} đánh giá)
        </span>
      </div>

      {/* Prices */}
      <div className="product-info__prices">
        <div className="product-info__price-item product-info__price-item--rental">
          <span className="product-info__price-label">Giá thuê:</span>
          <span className="product-info__price-value">
            {selectedVariant
              ? formatPrice(selectedVariant.rentalPrice)
              : formatPrice(product.baseRentalPrice)
            }
          </span>
          <span className="product-info__price-period">/ngày</span>
        </div>
      </div>

      {/* Stock Status */}
      <div className="product-info__stock">
        {selectedVariant ? (
          selectedVariant.stock > 0 ? (
            <span className="product-info__stock-available">
              Còn {selectedVariant.stock} sản phẩm
            </span>
          ) : (
            <span className="product-info__stock-unavailable">
              Hết hàng
            </span>
          )
        ) : (
          product.isAvailable ? (
            <span className="product-info__stock-available">
              Còn hàng
            </span>
          ) : (
            <span className="product-info__stock-unavailable">
              Hết hàng
            </span>
          )
        )}
      </div>

      {/* Short Description */}
      <div className="product-info__description">
        <p>{product.shortDescription}</p>
      </div>

      {/* Tags */}
      {product.tags.length > 0 && (
        <div className="product-info__tags">
          {product.tags.map((tag, index) => (
            <span key={index} className="product-info__tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductInfo;