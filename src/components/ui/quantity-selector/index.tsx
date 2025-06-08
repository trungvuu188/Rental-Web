import React from 'react';
import './style.scss';

interface QuantitySelectorProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  disabled?: boolean;
  className?: string;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  value,
  min = 1,
  max = 99,
  onChange,
  disabled = false,
  className = ''
}) => {
  const handleDecrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrease = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  return (
    <div className={`quantity-selector ${className} ${disabled ? 'quantity-selector--disabled' : ''}`}>
      <button
        type="button"
        className="quantity-selector__button quantity-selector__button--decrease"
        onClick={handleDecrease}
        disabled={disabled || value <= min}
        aria-label="Giảm số lượng"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 8H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
      
      <input
        type="number"
        className="quantity-selector__input"
        value={value}
        onChange={handleInputChange}
        min={min}
        max={max}
        disabled={disabled}
        aria-label="Số lượng"
      />
      
      <button
        type="button"
        className="quantity-selector__button quantity-selector__button--increase"
        onClick={handleIncrease}
        disabled={disabled || value >= max}
        aria-label="Tăng số lượng"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 4V12M4 8H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
};

export default QuantitySelector;