import React from 'react';
import ProductCard from '../../../components/ui/product-card';
import { RelatedProductsProps } from '../../../types/product';

// Mock data cho related products - trong thực tế sẽ fetch từ API
const mockRelatedProducts = [
  {
    id: '1',
    name: 'Áo dài truyền thống cao cấp',
    image: 'https://via.placeholder.com/300x400?text=Áo+dài',
    rentalPrice: 500000,
    purchasePrice: 2500000,
    rating: 4.8,
    reviewCount: 25,
    isAvailable: true
  },
  {
    id: '2',
    name: 'Váy cưới công chúa ren hoa',
    image: 'https://via.placeholder.com/300x400?text=Váy+cưới',
    rentalPrice: 1200000,
    purchasePrice: 8000000,
    rating: 4.9,
    reviewCount: 42,
    isAvailable: true
  },
  {
    id: '3',
    name: 'Vest nam sang trọng',
    image: 'https://via.placeholder.com/300x400?text=Vest+nam',
    rentalPrice: 800000,
    purchasePrice: 3500000,
    rating: 4.7,
    reviewCount: 18,
    isAvailable: false
  },
  {
    id: '4',
    name: 'Đầm dạ hội lệch vai',
    image: 'https://via.placeholder.com/300x400?text=Đầm+dạ+hội',
    rentalPrice: 600000,
    purchasePrice: 2800000,
    rating: 4.6,
    reviewCount: 31,
    isAvailable: true
  }
];

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
            id={product.id}
            name={product.name}
            image={product.image}
            rentalPrice={product.rentalPrice}
            purchasePrice={product.purchasePrice}
            rating={product.rating}
            reviewCount={product.reviewCount}
            isAvailable={product.isAvailable}
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