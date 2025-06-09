import React, { useState, useEffect } from 'react';
import '../OrderManagement.scss';

export const CancelledOrders: React.FC = () => {
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
    <div className="cancelled-orders">
      <div className="page-header">
        <div className="header-content">
          <h1>
            <span className="material-icons">cancel</span>
            Đơn hàng đã hủy
          </h1>
          <p>Danh sách đơn hàng đã bị hủy</p>
        </div>
      </div>

      <div className="content-card">
        <div className="empty-state">
          <span className="material-icons">cancel_presentation</span>
          <h3>Không có đơn hàng đã hủy</h3>
          <p>Các đơn hàng bị hủy sẽ xuất hiện ở đây</p>
        </div>
      </div>
    </div>
  );
}; 