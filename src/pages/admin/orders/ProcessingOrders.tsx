import React, { useState, useEffect } from 'react';
import '../OrderManagement.scss';

export const ProcessingOrders: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <span className="material-icons rotating">refresh</span>
          <span>Đang tải đơn hàng...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="processing-orders">
      <div className="page-header">
        <div className="header-content">
          <h1>
            <span className="material-icons">sync</span>
            Đơn hàng đang xử lý
          </h1>
          <p>Danh sách đơn hàng đang được xử lý và đóng gói</p>
        </div>
      </div>

      <div className="content-card">
        <div className="empty-state">
          <span className="material-icons">inventory_2</span>
          <h3>Không có đơn hàng đang xử lý</h3>
          <p>Tất cả đơn hàng đã được xử lý hoặc hoàn thành</p>
        </div>
      </div>
    </div>
  );
}; 