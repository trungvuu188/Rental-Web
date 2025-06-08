import React from 'react';
import { PromotionSectionProps } from '../../../types/product';

const PromotionSection: React.FC<PromotionSectionProps> = ({
  promotions = [
    'Giảm 10% cho đơn hàng trên 1 triệu',
    'Miễn phí giao hàng trong nội thành',
    'Tặng phụ kiện kèm theo'
  ],
  policies = [
    'Đổi trả trong 7 ngày',
    'Bảo hành chất lượng',
    'Vệ sinh sạch sẽ trước khi giao'
  ]
}) => {
  return (
    <div className="promotion-section">
      {/* Promotions */}
      <div className="promotion-section__group">
        <h3 className="promotion-section__title">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M3.33333 10L8.33333 15L16.6667 6.66667"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Ưu đãi đặc biệt
        </h3>
        <ul className="promotion-section__list">
          {promotions.map((promotion, index) => (
            <li key={index} className="promotion-section__item promotion-section__item--promotion">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M5.5 8L7 9.5L10.5 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{promotion}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Policies */}
      <div className="promotion-section__group">
        <h3 className="promotion-section__title">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 2.5L13.75 4.375L17.5 2.5V15.625L13.75 17.5L10 15.625L6.25 17.5L2.5 15.625V2.5L6.25 4.375L10 2.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Chính sách dịch vụ
        </h3>
        <ul className="promotion-section__list">
          {policies.map((policy, index) => (
            <li key={index} className="promotion-section__item promotion-section__item--policy">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 14.5C8 14.5 13.5 11.5 13.5 7.5C13.5 4.46243 11.0376 2 8 2C4.96243 2 2.5 4.46243 2.5 7.5C2.5 11.5 8 14.5 8 14.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M6 7.5L7.5 9L10 6.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{policy}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div className="promotion-section__contact">
        <div className="promotion-section__contact-item">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M18.3333 14.1667V16.6667C18.3344 16.9169 18.2866 17.1649 18.1928 17.3958C18.0989 17.6267 17.9607 17.8356 17.7865 18.0098C17.6123 18.184 17.4058 18.3199 17.1765 18.4115C16.9473 18.5032 16.7007 18.5484 16.4533 18.5458C13.9048 18.2952 11.4515 17.4058 9.32 15.9458C7.34174 14.6232 5.71093 12.9924 4.38833 11.0142C2.91667 8.86703 2.02633 6.39769 1.78833 3.83333C1.78574 3.58832 1.8302 3.34425 1.92049 3.11708C2.01078 2.88991 2.14558 2.68498 2.31767 2.51243C2.48976 2.33988 2.69665 2.20321 2.92499 2.11047C3.15333 2.01773 3.39894 1.97053 3.64667 1.97083H6.14667C6.55619 1.96652 6.95421 2.10692 7.27178 2.36804C7.58935 2.62916 7.80611 2.99418 7.88 3.39583C8.01779 4.20102 8.24522 4.98847 8.55833 5.74583C8.6689 6.00291 8.70015 6.28801 8.64823 6.56398C8.59631 6.83995 8.46354 7.09458 8.26667 7.29167L7.175 8.38333C8.42608 10.4516 10.215 12.2405 12.2833 13.4917L13.375 12.4C13.5721 12.2031 13.8267 12.0704 14.1027 12.0184C14.3787 11.9665 14.6638 11.9978 14.9208 12.1083C15.6782 12.4215 16.4656 12.6489 17.2708 12.7867C17.6797 12.8625 18.0492 13.0849 18.3111 13.4106C18.5729 13.7364 18.7102 14.1433 18.7 14.5583"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <span className="promotion-section__contact-label">Hotline:</span>
            <span className="promotion-section__contact-value">1900 1234</span>
          </div>
        </div>

        <div className="promotion-section__contact-item">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M3.33333 3.33333H16.6667C17.5833 3.33333 18.3333 4.08333 18.3333 5V15C18.3333 15.9167 17.5833 16.6667 16.6667 16.6667H3.33333C2.41667 16.6667 1.66667 15.9167 1.66667 15V5C1.66667 4.08333 2.41667 3.33333 3.33333 3.33333Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.3333 5L10 10.8333L1.66667 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <span className="promotion-section__contact-label">Email:</span>
            <span className="promotion-section__contact-value">support@example.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionSection;