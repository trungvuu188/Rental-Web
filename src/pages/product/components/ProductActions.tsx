import React, { useState } from 'react';
import VariantSelector from '../../../components/ui/variant-selector';
import QuantitySelector from '../../../components/ui/quantity-selector';
import { ProductActionsProps } from '../../../types/product';

const ProductActions: React.FC<ProductActionsProps> = ({
  product,
  selectedVariant,
  onVariantChange,
  onQuantityChange,
  onAddToCart
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const isAddToCartDisabled = !selectedVariant || selectedVariant.stock < quantity;

  return (
    <div className="product-actions">
      {/* Variant Selection */}
      <div className="product-actions__variants">
        <VariantSelector
          variants={product.variants}
          selectedVariant={selectedVariant}
          onVariantChange={onVariantChange}
        />
      </div>

      {/* Quantity Selection */}
      <div className="product-actions__quantity">
        <label className="product-actions__quantity-label">
          Số lượng:
        </label>
        <QuantitySelector
          value={quantity}
          min={1}
          max={selectedVariant?.stock || 99}
          onChange={handleQuantityChange}
          disabled={!selectedVariant || selectedVariant.stock === 0}
        />
      </div>

      {/* Action Buttons */}
      <div className="product-actions__buttons">
        <button
          type="button"
          className="product-actions__button product-actions__button--rental"
          onClick={() => onAddToCart('rental')}
          disabled={isAddToCartDisabled}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M3.33333 3.33333H4.83333L6.83333 11.6667H14.1667L16.1667 6.66667H6.16667M6.83333 15C7.29357 15 7.66667 15.3731 7.66667 15.8333C7.66667 16.2936 7.29357 16.6667 6.83333 16.6667C6.37309 16.6667 6 16.2936 6 15.8333C6 15.3731 6.37309 15 6.83333 15ZM14.1667 15C14.6269 15 15 15.3731 15 15.8333C15 16.2936 14.6269 16.6667 14.1667 16.6667C13.7064 16.6667 13.3333 16.2936 13.3333 15.8333C13.3333 15.3731 13.7064 15 14.1667 15Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Thuê ngay
        </button>
      </div>

      {/* Wishlist Button */}
      <div className="product-actions__wishlist">
        <button
          type="button"
          className="product-actions__wishlist-button"
          aria-label="Thêm vào danh sách yêu thích"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10.8333 4.16667C11.875 2.91667 13.75 2.91667 14.7917 4.16667C15.8333 5.41667 15.8333 7.5 14.7917 8.75L10 14.1667L5.20833 8.75C4.16667 7.5 4.16667 5.41667 5.20833 4.16667C6.25 2.91667 8.125 2.91667 9.16667 4.16667L10 5L10.8333 4.16667Z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          Thêm vào yêu thích
        </button>
      </div>

      {/* Quick Info */}
      <div className="product-actions__info">
        <div className="product-actions__info-item">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M8 4V8L10.5 10.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span>Giao hàng trong 24h</span>
        </div>

        <div className="product-actions__info-item">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 1L9.854 4.764L14 5.382L11 8.236L11.708 12.382L8 10.5L4.292 12.382L5 8.236L2 5.382L6.146 4.764L8 1Z"
              fill="currentColor"
            />
          </svg>
          <span>Chất lượng đảm bảo</span>
        </div>

        <div className="product-actions__info-item">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M8 10.5V8M8 5.5H8.0075"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span>Hỗ trợ 24/7</span>
        </div>
      </div>
    </div>
  );
};

export default ProductActions;