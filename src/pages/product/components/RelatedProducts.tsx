import React from 'react';
import ProductCard from '../../../components/ui/product-card';
import { RelatedProductsProps } from '../../../types/product';

// Mock data cho related products - trong thực tế sẽ fetch từ API
const mockRelatedProducts = [
  {
    id: '1',
    name: 'Áo dài truyền thống cao cấp',
    brand: 'XÉO XỌ',
    image: '/images/ao-dai-placeholder.svg',
    rentalPrice: 500000,
    membershipPrice: 375000,
    depositPrice: 2500000,
    colors: ['Đỏ', 'Vàng'],
    sizes: ['S', 'M', 'L'],
    isOutOfStock: false,
    category: 'Áo dài nữ'
  },
  {
    id: '2',
    name: 'Váy cưới công chúa ren hoa',
    brand: 'LAMUSE',
    image: '/images/ao-dai-placeholder.svg',
    rentalPrice: 1200000,
    membershipPrice: 900000,
    depositPrice: 8000000,
    colors: ['Trắng'],
    sizes: ['S', 'M', 'L'],
    isOutOfStock: false,
    category: 'Váy cưới'
  },
  {
    id: '3',
    name: 'Vest nam sang trọng',
    brand: 'AMY STORE',
    image: '/images/ao-dai-placeholder.svg',
    rentalPrice: 800000,
    membershipPrice: 600000,
    depositPrice: 3500000,
    colors: ['Đen', 'Xanh dương'],
    sizes: ['M', 'L', 'XL'],
    isOutOfStock: true,
    category: 'Vest nam'
  },
  {
    id: '4',
    name: 'Đầm dạ hội lệch vai',
    brand: 'LESART',
    image: '/images/ao-dai-placeholder.svg',
    rentalPrice: 600000,
    membershipPrice: 450000,
    depositPrice: 2800000,
    clearancePrice: 1200000,
    colors: ['Hồng', 'Tím'],
    sizes: ['S', 'M'],
    isOutOfStock: false,
    category: 'Đầm dạ hội'
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