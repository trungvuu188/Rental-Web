import React, { useState } from 'react';
import { FAQSectionProps } from '../../../types/product';

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (faqId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(faqId)) {
      newExpanded.delete(faqId);
    } else {
      newExpanded.add(faqId);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="faq-section">
      <h2 className="faq-section__title">Câu hỏi thường gặp</h2>
      
      <div className="faq-section__list">
        {faqs.map((faq) => {
          const isExpanded = expandedItems.has(faq.id);
          
          return (
            <div
              key={faq.id}
              className={`faq-section__item ${
                isExpanded ? 'faq-section__item--expanded' : ''
              }`}
            >
              <button
                type="button"
                className="faq-section__question"
                onClick={() => toggleExpanded(faq.id)}
                aria-expanded={isExpanded}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="faq-section__question-text">
                  {faq.question}
                </span>
                <svg
                  className="faq-section__icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              
              <div
                id={`faq-answer-${faq.id}`}
                className="faq-section__answer"
                aria-hidden={!isExpanded}
              >
                <div className="faq-section__answer-content">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Contact for more questions */}
      <div className="faq-section__contact">
        <p className="faq-section__contact-text">
          Không tìm thấy câu trả lời bạn cần?
        </p>
        <button
          type="button"
          className="faq-section__contact-button"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M18.3333 14.1667V16.6667C18.3344 16.9169 18.2866 17.1649 18.1928 17.3958C18.0989 17.6267 17.9607 17.8356 17.7865 18.0098C17.6123 18.184 17.4058 18.3199 17.1765 18.4115C16.9473 18.5032 16.7007 18.5484 16.4533 18.5458C13.9048 18.2952 11.4515 17.4058 9.32 15.9458C7.34174 14.6232 5.71093 12.9924 4.38833 11.0142C2.91667 8.86703 2.02633 6.39769 1.78833 3.83333C1.78574 3.58832 1.8302 3.34425 1.92049 3.11708C2.01078 2.88991 2.14558 2.68498 2.31767 2.51243C2.48976 2.33988 2.69665 2.20321 2.92499 2.11047C3.15333 2.01773 3.39894 1.97053 3.64667 1.97083H6.14667C6.55619 1.96652 6.95421 2.10692 7.27178 2.36804C7.58935 2.62916 7.80611 2.99418 7.88 3.39583C8.01779 4.20102 8.24522 4.98847 8.55833 5.74583C8.6689 6.00291 8.70015 6.28801 8.64823 6.56398C8.59631 6.83995 8.46354 7.09458 8.26667 7.29167L7.175 8.38333C8.42608 10.4516 10.215 12.2405 12.2833 13.4917L13.375 12.4C13.5721 12.2031 13.8267 12.0704 14.1027 12.0184C14.3787 11.9665 14.6638 11.9978 14.9208 12.1083C15.6782 12.4215 16.4656 12.6489 17.2708 12.7867C17.6797 12.8625 18.0492 13.0849 18.3111 13.4106C18.5729 13.7364 18.7102 14.1433 18.7 14.5583"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Liên hệ tư vấn
        </button>
      </div>
    </div>
  );
};

export default FAQSection;