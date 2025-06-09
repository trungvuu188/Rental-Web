import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../OrderManagement.scss';

export const OrderDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
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
          <span>Đang tải thông tin đơn hàng...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="order-detail">
      <div className="page-header">
        <div className="header-content">
          <div className="header-left">
            <button 
              className="back-button"
              onClick={() => navigate('/admin/orders')}
            >
              <span className="material-icons">arrow_back</span>
              Quay lại
            </button>
            <h1>
              <span className="material-icons">receipt_long</span>
              Chi tiết đơn hàng #{id}
            </h1>
          </div>
        </div>
      </div>

      <div className="content-card">
        <div className="empty-state">
          <span className="material-icons">description</span>
          <h3>Đang tải thông tin đơn hàng</h3>
          <p>Chi tiết đơn hàng #{id} sẽ được hiển thị ở đây</p>
        </div>
      </div>
    </div>
  );
}; 