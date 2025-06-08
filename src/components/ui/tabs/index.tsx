import React, { useState } from 'react';
import './style.scss';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  items: TabItem[];
  defaultActiveTab?: string;
  onChange?: (tabId: string) => void;
  className?: string;
  variant?: 'default' | 'pills';
}

const Tabs: React.FC<TabsProps> = ({
  items,
  defaultActiveTab,
  onChange,
  className = '',
  variant = 'default'
}) => {
  const [activeTab, setActiveTab] = useState(
    defaultActiveTab || items[0]?.id || ''
  );

  const handleTabChange = (tabId: string) => {
    if (items.find(item => item.id === tabId)?.disabled) {
      return;
    }
    
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  const activeTabContent = items.find(item => item.id === activeTab)?.content;

  return (
    <div className={`tabs tabs--${variant} ${className}`}>
      {/* Tab Navigation */}
      <div className="tabs__nav" role="tablist">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={activeTab === item.id}
            aria-controls={`tabpanel-${item.id}`}
            className={`tabs__tab ${
              activeTab === item.id ? 'tabs__tab--active' : ''
            } ${item.disabled ? 'tabs__tab--disabled' : ''}`}
            onClick={() => handleTabChange(item.id)}
            disabled={item.disabled}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tabs__content">
        {items.map((item) => (
          <div
            key={item.id}
            id={`tabpanel-${item.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${item.id}`}
            className={`tabs__panel ${
              activeTab === item.id ? 'tabs__panel--active' : ''
            }`}
            hidden={activeTab !== item.id}
          >
            {activeTab === item.id && item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;