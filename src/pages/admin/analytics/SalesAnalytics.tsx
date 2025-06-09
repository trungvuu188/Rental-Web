import React, { useState, useEffect } from 'react';
import './Analytics.scss';

export const SalesAnalytics: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('7d');
  const [salesData, setSalesData] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    averageOrderValue: 0,
    growthRate: 0
  });

  useEffect(() => {
    fetchSalesData();
  }, [timeRange]);

  const fetchSalesData = async () => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSalesData({
        totalRevenue: 125680000,
        totalOrders: 234,
        averageOrderValue: 537000,
        growthRate: 15.3
      });
    } catch (error) {
      console.error('Error fetching sales data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

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
    <div className="sales-analytics">
      <div className="page-header">
        <div className="header-content">
          <h1>
            <span className="material-icons">trending_up</span>
            Phân tích doanh thu
          </h1>
          <p>Thống kê và phân tích doanh thu bán hàng</p>
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
            <option value="365d">1 năm qua</option>
          </select>
        </div>
      </div>

      <div className="analytics-grid">
        <div className="stat-card revenue">
          <div className="stat-icon">
            <span className="material-icons">attach_money</span>
          </div>
          <div className="stat-content">
            <h3>{formatCurrency(salesData.totalRevenue)}</h3>
            <p>Tổng doanh thu</p>
          </div>
          <div className="stat-trend positive">
            <span className="material-icons">trending_up</span>
            <span>+{salesData.growthRate}%</span>
          </div>
        </div>

        <div className="stat-card orders">
          <div className="stat-icon">
            <span className="material-icons">shopping_cart</span>
          </div>
          <div className="stat-content">
            <h3>{salesData.totalOrders.toLocaleString()}</h3>
            <p>Tổng đơn hàng</p>
          </div>
          <div className="stat-trend positive">
            <span className="material-icons">trending_up</span>
            <span>+8.1%</span>
          </div>
        </div>

        <div className="stat-card avg-order">
          <div className="stat-icon">
            <span className="material-icons">receipt</span>
          </div>
          <div className="stat-content">
            <h3>{formatCurrency(salesData.averageOrderValue)}</h3>
            <p>Giá trị đơn hàng TB</p>
          </div>
          <div className="stat-trend positive">
            <span className="material-icons">trending_up</span>
            <span>+12.5%</span>
          </div>
        </div>
      </div>

      <div className="chart-container">
        <div className="chart-header">
          <h3>Biểu đồ doanh thu theo thời gian</h3>
        </div>
        <div className="chart-placeholder">
          <span className="material-icons">show_chart</span>
          <p>Biểu đồ doanh thu sẽ được hiển thị ở đây</p>
          <small>Tích hợp với thư viện biểu đồ như Chart.js hoặc Recharts</small>
        </div>
      </div>
    </div>
  );
}; 