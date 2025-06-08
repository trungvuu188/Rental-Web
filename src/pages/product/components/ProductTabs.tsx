import React from 'react';
import Tabs from '../../../components/ui/tabs';
import { ProductTabsProps } from '../../../types/product';

const ProductTabs: React.FC<ProductTabsProps> = ({
  tabs,
  activeTab,
  onTabChange
}) => {
  const tabItems = tabs.map(tab => ({
    id: tab.id,
    label: tab.title,
    content: (
      <div className="product-tabs__content">
        <div 
          className="product-tabs__text"
          dangerouslySetInnerHTML={{ __html: tab.content }}
        />
      </div>
    )
  }));

  return (
    <div className="product-tabs">
      <Tabs
        items={tabItems}
        defaultActiveTab={activeTab}
        onChange={onTabChange}
        variant="default"
      />
    </div>
  );
};

export default ProductTabs;