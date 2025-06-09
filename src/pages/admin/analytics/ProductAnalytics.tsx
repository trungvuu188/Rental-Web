import React, { useState, useEffect } from 'react';
import './Analytics.scss';

export const ProductAnalytics: React.FC = () => {
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
    <div className="product-analytics">
      <div className="page-header">
        <div className="header-content">
          <h1>
            <span className="material-icons">bar_chart</span>
            Phân tích sản phẩm
          </h1>
          <p>Thống kê hiệu suất và xu hướng sản phẩm</p>
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
        <div className="stat-card orders">
          <div className="stat-icon">
            <span className="material-icons">inventory_2</span>
          </div>
          <div className="stat-content">
            <h3>156</h3>
            <p>Tổng sản phẩm</p>
          </div>
          <div className="stat-trend positive">
            <span className="material-icons">trending_up</span>
            <span>+5.2%</span>
          </div>
        </div>

        <div className="stat-card avg-order">
          <div className="stat-icon">
            <span className="material-icons">star</span>
          </div>
          <div className="stat-content">
            <h3>45</h3>
            <p>Sản phẩm bán chạy</p>
          </div>
          <div className="stat-trend positive">
            <span className="material-icons">trending_up</span>
            <span>+12.1%</span>
          </div>
        </div>

        <div className="stat-card revenue">
          <div className="stat-icon">
            <span className="material-icons">warning</span>
          </div>
          <div className="stat-content">
            <h3>8</h3>
            <p>Sắp hết hàng</p>
          </div>
          <div className="stat-trend negative">
            <span className="material-icons">trending_down</span>
            <span>-2</span>
          </div>
        </div>
      </div>

      <div className="chart-container">
        <div className="chart-header">
          <h3>Top sản phẩm bán chạy</h3>
        </div>
        <div className="chart-placeholder">
          <span className="material-icons">leaderboard</span>
          <p>Bảng xếp hạng sản phẩm bán chạy nhất</p>
          <small>Thống kê theo số lượng bán, doanh thu và đánh giá</small>
        </div>
      </div>
    </div>
  );
}; 