import React from 'react';
import { ProductVariant } from '../../../types/product';
import './style.scss';

interface VariantSelectorProps {
  variants: ProductVariant[];
  selectedVariant?: ProductVariant;
  onVariantChange: (variant: ProductVariant) => void;
  className?: string;
}

const VariantSelector: React.FC<VariantSelectorProps> = ({
  variants,
  selectedVariant,
  onVariantChange,
  className = ''
}) => {
  // Nhóm variants theo size và color
  const sizes = Array.from(new Set(variants.map(v => v.size)));
  const colors = variants
    .map(v => ({ color: v.color, colorCode: v.colorCode }))
    .filter((value, index, self) =>
      self.findIndex(item => item.color === value.color) === index
    );

  const handleSizeChange = (size: string) => {
    const availableVariant = variants.find(v => 
      v.size === size && 
      (!selectedVariant || v.color === selectedVariant.color)
    );
    if (availableVariant) {
      onVariantChange(availableVariant);
    } else {
      // Nếu không có variant với color hiện tại, chọn variant đầu tiên với size này
      const firstVariant = variants.find(v => v.size === size);
      if (firstVariant) {
        onVariantChange(firstVariant);
      }
    }
  };

  const handleColorChange = (color: string) => {
    const availableVariant = variants.find(v => 
      v.color === color && 
      (!selectedVariant || v.size === selectedVariant.size)
    );
    if (availableVariant) {
      onVariantChange(availableVariant);
    } else {
      // Nếu không có variant với size hiện tại, chọn variant đầu tiên với color này
      const firstVariant = variants.find(v => v.color === color);
      if (firstVariant) {
        onVariantChange(firstVariant);
      }
    }
  };

  const isVariantAvailable = (size: string, color: string) => {
    return variants.some(v => v.size === size && v.color === color && v.stock > 0);
  };

  return (
    <div className={`variant-selector ${className}`}>
      {/* Size Selector */}
      <div className="variant-selector__group">
        <label className="variant-selector__label">
          Kích cỡ: {selectedVariant?.size && <span className="variant-selector__selected">{selectedVariant.size}</span>}
        </label>
        <div className="variant-selector__options variant-selector__options--size">
          {sizes.map((size) => {
            const isSelected = selectedVariant?.size === size;
            const hasStock = variants.some(v => v.size === size && v.stock > 0);
            
            return (
              <button
                key={size}
                type="button"
                className={`variant-selector__option variant-selector__option--size ${
                  isSelected ? 'variant-selector__option--selected' : ''
                } ${!hasStock ? 'variant-selector__option--disabled' : ''}`}
                onClick={() => handleSizeChange(size)}
                disabled={!hasStock}
                aria-label={`Chọn kích cỡ ${size}`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* Color Selector */}
      <div className="variant-selector__group">
        <label className="variant-selector__label">
          Màu sắc: {selectedVariant?.color && <span className="variant-selector__selected">{selectedVariant.color}</span>}
        </label>
        <div className="variant-selector__options variant-selector__options--color">
          {colors.map((colorItem) => {
            const isSelected = selectedVariant?.color === colorItem.color;
            const hasStock = selectedVariant 
              ? isVariantAvailable(selectedVariant.size, colorItem.color)
              : variants.some(v => v.color === colorItem.color && v.stock > 0);
            
            return (
              <button
                key={colorItem.color}
                type="button"
                className={`variant-selector__option variant-selector__option--color ${
                  isSelected ? 'variant-selector__option--selected' : ''
                } ${!hasStock ? 'variant-selector__option--disabled' : ''}`}
                onClick={() => handleColorChange(colorItem.color)}
                disabled={!hasStock}
                aria-label={`Chọn màu ${colorItem.color}`}
                title={colorItem.color}
              >
                <span 
                  className="variant-selector__color-swatch"
                  style={{ backgroundColor: colorItem.colorCode }}
                />
                <span className="variant-selector__color-name">{colorItem.color}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VariantSelector;