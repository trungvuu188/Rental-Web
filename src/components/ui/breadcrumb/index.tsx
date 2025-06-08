import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <nav className={`breadcrumb ${className}`} aria-label="Breadcrumb">
      <ol className="breadcrumb__list">
        {items.map((item, index) => (
          <li key={index} className="breadcrumb__item">
            {item.href && index < items.length - 1 ? (
              <Link to={item.href} className="breadcrumb__link">
                {item.label}
              </Link>
            ) : (
              <span className="breadcrumb__text" aria-current="page">
                {item.label}
              </span>
            )}
            {index < items.length - 1 && (
              <span className="breadcrumb__separator" aria-hidden="true">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;