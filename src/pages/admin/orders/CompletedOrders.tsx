import React, { useState, useEffect } from 'react';
import '../OrderManagement.scss';

export const CompletedOrders: React.FC = () => {
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
    <div className="completed-orders">
      <div className="page-header">
        <div className="header-content">
          <h1>
            <span className="material-icons">check_circle</span>
            Đơn hàng hoàn thành
          </h1>
          <p>Danh sách đơn hàng đã giao thành công</p>
        </div>
      </div>

      <div className="content-card">
        <div className="empty-state">
          <span className="material-icons">done_all</span>
          <h3>Chưa có đơn hàng hoàn thành</h3>
          <p>Các đơn hàng hoàn thành sẽ xuất hiện ở đây</p>
        </div>
      </div>
    </div>
  );
}; 