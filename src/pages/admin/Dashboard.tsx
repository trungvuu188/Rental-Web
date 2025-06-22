import React, { useState, useEffect } from 'react';
import './Dashboard.scss';

interface DashboardStats {
  totalProducts: number;
  totalUsers: number;
  totalOrders: number;
  totalRevenue: number;
  newOrdersToday: number;
  activeUsers: number;
  growthRate: {
    products: number;
    users: number;
    orders: number;
    revenue: number;
  };
}

interface RecentActivity {
  id: string;
  type: 'order' | 'user' | 'product';
  message: string;
  timestamp: string;
  status: 'success' | 'warning' | 'info';
}

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalProducts: 0,
    totalUsers: 0,
    totalOrders: 0,
    totalRevenue: 0,
    newOrdersToday: 0,
    activeUsers: 0,
    growthRate: {
      products: 0,
      users: 0,
      orders: 0,
      revenue: 0,
    },
  });

  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Mock data - replace with actual API calls
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStats({
        totalProducts: 156,
        totalUsers: 1234,
        totalOrders: 89,
        totalRevenue: 15678000,
        newOrdersToday: 12,
        activeUsers: 45,
        growthRate: {
          products: 5.2,
          users: 12.5,
          orders: 8.1,
          revenue: 15.3,
        },
      });

      setRecentActivity([
        {
          id: '1',
          type: 'order',
          message: 'Đơn hàng mới #CPL001 từ Nguyễn Văn An',
          timestamp: '5 phút trước',
          status: 'success'
        },
        {
          id: '2',
          type: 'user',
          message: 'Người dùng mới đăng ký: tranvanb@email.com',
          timestamp: '15 phút trước',
          status: 'info'
        },
        {
          id: '3',
          type: 'product',
          message: 'Sản phẩm "Váy Trắng Cổ Vuông & Nón Cói" đã được thêm',
          timestamp: '30 phút trước',
          status: 'info'
        },
        {
          id: '4',
          type: 'order',
          message: 'Đơn hàng #WMN001 đã được giao thành công',
          timestamp: '1 giờ trước',
          status: 'success'
        },
        {
          id: '5',
          type: 'product',
          message: 'Cảnh báo: Sản phẩm "Váy Ren Trắng Dài Thanh Lịch" sắp hết hàng',
          timestamp: '2 giờ trước',
          status: 'warning'
        },
      ]);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
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

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'order': return 'shopping_cart';
      case 'user': return 'person_add';
      case 'product': return 'inventory_2';
      default: return 'info';
    }
  };

  const getActivityStatusClass = (status: string) => {
    switch (status) {
      case 'success': return 'activity-success';
      case 'warning': return 'activity-warning';
      case 'info': return 'activity-info';
      default: return 'activity-info';
    }
  };

  const getGrowthIcon = (rate: number) => {
    return rate >= 0 ? 'trending_up' : 'trending_down';
  };

  const getGrowthClass = (rate: number) => {
    return rate >= 0 ? 'growth-positive' : 'growth-negative';
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner">
          <span className="material-icons rotating">refresh</span>
          <span>Đang tải dữ liệu...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="page-header">
        <div className="header-content">
          <h1>
            <span className="material-icons">dashboard</span>
            Dashboard
          </h1>
          <p>Tổng quan hệ thống quản lý và thống kê hoạt động</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-outline" onClick={fetchDashboardData}>
            <span className="material-icons">refresh</span>
            Làm mới
          </button>
          <button className="btn btn-outline">
            <span className="material-icons">download</span>
            Xuất báo cáo
          </button>
        </div>
      </div>

      <div className="dashboard-content">
        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card products">
            <div className="stat-icon">
              <span className="material-icons">inventory_2</span>
            </div>
            <div className="stat-content">
              <h3>{stats.totalProducts.toLocaleString()}</h3>
              <p>Tổng sản phẩm</p>
            </div>
            <div className={`stat-trend ${getGrowthClass(stats.growthRate.products)}`}>
              <span className="material-icons">{getGrowthIcon(stats.growthRate.products)}</span>
              <span>{Math.abs(stats.growthRate.products)}%</span>
            </div>
          </div>

          <div className="stat-card users">
            <div className="stat-icon">
              <span className="material-icons">people</span>
            </div>
            <div className="stat-content">
              <h3>{stats.totalUsers.toLocaleString()}</h3>
              <p>Tổng người dùng</p>
            </div>
            <div className={`stat-trend ${getGrowthClass(stats.growthRate.users)}`}>
              <span className="material-icons">{getGrowthIcon(stats.growthRate.users)}</span>
              <span>{Math.abs(stats.growthRate.users)}%</span>
            </div>
          </div>

          <div className="stat-card orders">
            <div className="stat-icon">
              <span className="material-icons">shopping_cart</span>
            </div>
            <div className="stat-content">
              <h3>{stats.totalOrders.toLocaleString()}</h3>
              <p>Tổng đơn hàng</p>
            </div>
            <div className={`stat-trend ${getGrowthClass(stats.growthRate.orders)}`}>
              <span className="material-icons">{getGrowthIcon(stats.growthRate.orders)}</span>
              <span>{Math.abs(stats.growthRate.orders)}%</span>
            </div>
          </div>

          <div className="stat-card revenue">
            <div className="stat-icon">
              <span className="material-icons">monetization_on</span>
            </div>
            <div className="stat-content">
              <h3>{formatCurrency(stats.totalRevenue)}</h3>
              <p>Doanh thu</p>
            </div>
            <div className={`stat-trend ${getGrowthClass(stats.growthRate.revenue)}`}>
              <span className="material-icons">{getGrowthIcon(stats.growthRate.revenue)}</span>
              <span>{Math.abs(stats.growthRate.revenue)}%</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="dashboard-grid">
          {/* Today's Activity */}
          <div className="dashboard-card">
            <div className="card-header">
              <h2>
                <span className="material-icons">today</span>
                Hoạt động hôm nay
              </h2>
            </div>
            <div className="today-stats">
              <div className="today-item">
                <div className="today-icon">
                  <span className="material-icons">add_shopping_cart</span>
                </div>
                <div className="today-content">
                  <span className="today-value">{stats.newOrdersToday}</span>
                  <span className="today-label">Đơn hàng mới</span>
                </div>
              </div>
              <div className="today-item">
                <div className="today-icon">
                  <span className="material-icons">online_prediction</span>
                </div>
                <div className="today-content">
                  <span className="today-value">{stats.activeUsers}</span>
                  <span className="today-label">Người dùng hoạt động</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="dashboard-card">
            <div className="card-header">
              <h2>
                <span className="material-icons">history</span>
                Hoạt động gần đây
              </h2>
              <button className="btn-ghost btn-sm">
                <span className="material-icons">more_vert</span>
              </button>
            </div>
            <div className="activity-list">
              {recentActivity.map((activity) => (
                <div key={activity.id} className={`activity-item ${getActivityStatusClass(activity.status)}`}>
                  <div className="activity-icon">
                    <span className="material-icons">{getActivityIcon(activity.type)}</span>
                  </div>
                  <div className="activity-content">
                    <p>{activity.message}</p>
                    <span className="activity-time">{activity.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="dashboard-card">
            <div className="card-header">
              <h2>
                <span className="material-icons">analytics</span>
                Thống kê nhanh
              </h2>
            </div>
            <div className="quick-stats">
              <div className="quick-stat-item">
                <div className="quick-stat-icon">
                  <span className="material-icons">task_alt</span>
                </div>
                <div className="quick-stat-content">
                  <div className="quick-stat-number">85%</div>
                  <div className="quick-stat-label">Tỷ lệ hoàn thành đơn hàng</div>
                </div>
              </div>
              <div className="quick-stat-item">
                <div className="quick-stat-icon">
                  <span className="material-icons">star</span>
                </div>
                <div className="quick-stat-content">
                  <div className="quick-stat-number">4.8/5</div>
                  <div className="quick-stat-label">Đánh giá trung bình</div>
                </div>
              </div>
              <div className="quick-stat-item">
                <div className="quick-stat-icon">
                  <span className="material-icons">schedule</span>
                </div>
                <div className="quick-stat-content">
                  <div className="quick-stat-number">24h</div>
                  <div className="quick-stat-label">Thời gian xử lý TB</div>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="dashboard-card chart-card">
            <div className="card-header">
              <h2>
                <span className="material-icons">show_chart</span>
                Biểu đồ doanh thu 7 ngày
              </h2>
              <div className="chart-legend">
                <span className="legend-item revenue">
                  <span className="legend-color"></span>
                  Doanh thu
                </span>
                <span className="legend-item orders">
                  <span className="legend-color"></span>
                  Đơn hàng
                </span>
              </div>
            </div>
            <div className="chart-container">
              <div className="chart-placeholder">
                <span className="material-icons">bar_chart</span>
                <p>Biểu đồ sẽ được tích hợp ở đây</p>
                <small>Sử dụng Chart.js hoặc Recharts để hiển thị dữ liệu</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 