import React from 'react';
import ProductCard from '../../../components/ui/product-card';
import { RelatedProductsProps } from '../../../types/product';
import { mockRelatedProducts } from '../../../data';

const RelatedProducts: React.FC<RelatedProductsProps> = ({ productIds }) => {
  // Trong thực tế, sẽ filter theo productIds
  const products = mockRelatedProducts;

  return (
    <div className="related-products">
      <div className="related-products__header">
        <h2 className="related-products__title">Sản phẩm liên quan</h2>
        <p className="related-products__subtitle">
          Các sản phẩm tương tự có thể bạn quan tâm
        </p>
      </div>

      <div className="related-products__grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="related-products__card"
          />
        ))}
      </div>

      {/* View All Button */}
      <div className="related-products__footer">
        <button
          type="button"
          className="related-products__view-all"
        >
          Xem thêm sản phẩm
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M7.5 15L12.5 10L7.5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RelatedProducts;