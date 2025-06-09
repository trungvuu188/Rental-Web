import React, { useState, useEffect } from 'react';
import './Analytics.scss';

export const CustomerAnalytics: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('30d');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [timeRange]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <span className="material-icons rotating">refresh</span>
          <span>Đang tải dữ liệu...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="customer-analytics">
      <div className="page-header">
        <div className="header-content">
          <h1>
            <span className="material-icons">group</span>
            Phân tích khách hàng
          </h1>
          <p>Thống kê và phân tích hành vi khách hàng</p>
        </div>
        <div className="header-actions">
          <select 
            value={timeRange} 
            onChange={(e) => setTimeRange(e.target.value)}
            className="time-range-select"
          >
            <option value="7d">7 ngày qua</option>
            <option value="30d">30 ngày qua</option>
            <option value="90d">3 tháng qua</option>
          </select>
        </div>
      </div>

      <div className="analytics-grid">
        <div className="stat-card customers">
          <div className="stat-icon">
            <span className="material-icons">people</span>
          </div>
          <div className="stat-content">
            <h3>1,234</h3>
            <p>Tổng khách hàng</p>
          </div>
          <div className="stat-trend positive">
            <span className="material-icons">trending_up</span>
            <span>+12.5%</span>
          </div>
        </div>

        <div className="stat-card customers">
          <div className="stat-icon">
            <span className="material-icons">person_add</span>
          </div>
          <div className="stat-content">
            <h3>45</h3>
            <p>Khách hàng mới</p>
          </div>
          <div className="stat-trend positive">
            <span className="material-icons">trending_up</span>
            <span>+8.3%</span>
          </div>
        </div>

        <div className="stat-card customers">
          <div className="stat-icon">
            <span className="material-icons">repeat</span>
          </div>
          <div className="stat-content">
            <h3>67%</h3>
            <p>Tỷ lệ quay lại</p>
          </div>
          <div className="stat-trend positive">
            <span className="material-icons">trending_up</span>
            <span>+3.2%</span>
          </div>
        </div>
      </div>

      <div className="chart-container">
        <div className="chart-header">
          <h3>Phân tích hành vi khách hàng</h3>
        </div>
        <div className="chart-placeholder">
          <span className="material-icons">analytics</span>
          <p>Biểu đồ phân tích khách hàng sẽ được hiển thị ở đây</p>
          <small>Bao gồm: Độ tuổi, giới tính, vùng miền, tần suất mua hàng</small>
        </div>
      </div>
    </div>
  );
}; 