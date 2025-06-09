import React from 'react';
import { Link } from 'react-router-dom';
import { ApiProduct } from '../../../types/api';
import './style.scss';

interface ApiProductCardProps {
  product: ApiProduct;
  className?: string;
}

const ApiProductCard: React.FC<ApiProductCardProps> = ({ product, className = '' }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const getImageUrl = () => {
    if (product.primaryImagesUrl) {
      return product.primaryImagesUrl;
    }
    if (product.images && product.images.length > 0) {
      const primaryImage = product.images.find(img => img.isPrimary);
      return primaryImage ? primaryImage.imageUrl : product.images[0].imageUrl;
    }
    return 'https://placehold.co/400';
  };

  return (
    <div className={`api-product-card ${className}`}>
      <Link to={`/product/${product.id}`} className="api-product-card__link">
        <div className="api-product-card__image-container">
          <img 
            src={getImageUrl()} 
            alt={product.name}
            className="api-product-card__image"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/400';
            }}
          />
          {product.isPromoted && (
            <div className="api-product-card__badge">
              Promoted
            </div>
          )}
        </div>
        
        <div className="api-product-card__content">
          <h3 className="api-product-card__title">{product.name}</h3>
          <p className="api-product-card__description">{product.description}</p>
          
          <div className="api-product-card__details">
            <span className="api-product-card__category">{product.category}</span>
            <span className="api-product-card__size">Size: {product.size}</span>
            <span className="api-product-card__color">Color: {product.color}</span>
          </div>
          
          <div className="api-product-card__footer">
            <div className="api-product-card__price">
              {formatPrice(product.pricePerDay)}/day
            </div>
            <div className="api-product-card__provider">
              by {product.providerName}
            </div>
          </div>
          
          {product.rentCount > 0 && (
            <div className="api-product-card__rent-count">
              Rented {product.rentCount} times
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ApiProductCard; 