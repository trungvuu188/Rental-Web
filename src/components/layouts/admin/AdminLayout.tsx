import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import './AdminLayout.scss';

interface MenuItem {
  path: string;
  label: string;
  icon: string;
  badge?: number;
  submenu?: MenuItem[];
}

const AdminLayout: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems: MenuItem[] = [
    { 
      path: '/admin', 
      label: 'Dashboard', 
      icon: 'dashboard'
    },
    { 
      path: '/admin/products', 
      label: 'Quản lý sản phẩm', 
      icon: 'inventory_2',
      submenu: [
        { path: '/admin/products/list', label: 'Danh sách sản phẩm', icon: 'list' },
        { path: '/admin/products/add', label: 'Thêm sản phẩm', icon: 'add_circle' },
        { path: '/admin/products/categories', label: 'Danh mục', icon: 'category' },
      ]
    },
    { 
      path: '/admin/orders', 
      label: 'Quản lý đơn hàng', 
      icon: 'shopping_cart',
      badge: 5,
      submenu: [
        { path: '/admin/orders/pending', label: 'Chờ xử lý', icon: 'pending' },
        { path: '/admin/orders/processing', label: 'Đang xử lý', icon: 'sync' },
        { path: '/admin/orders/completed', label: 'Hoàn thành', icon: 'check_circle' },
        { path: '/admin/orders/cancelled', label: 'Đã hủy', icon: 'cancel' },
      ]
    },
    { 
      path: '/admin/users', 
      label: 'Quản lý người dùng', 
      icon: 'people',
      submenu: [
        { path: '/admin/users/customers', label: 'Khách hàng', icon: 'person' },
        { path: '/admin/users/staff', label: 'Nhân viên', icon: 'badge' },
        { path: '/admin/users/admins', label: 'Quản trị viên', icon: 'admin_panel_settings' },
      ]
    },
    { 
      path: '/admin/analytics', 
      label: 'Thống kê & Báo cáo', 
      icon: 'analytics',
      submenu: [
        { path: '/admin/analytics/sales', label: 'Doanh thu', icon: 'trending_up' },
        { path: '/admin/analytics/customers', label: 'Khách hàng', icon: 'group' },
        { path: '/admin/analytics/products', label: 'Sản phẩm', icon: 'bar_chart' },
      ]
    },
    { 
      path: '/admin/settings', 
      label: 'Cài đặt', 
      icon: 'settings',
      submenu: [
        { path: '/admin/settings/general', label: 'Cài đặt chung', icon: 'tune' },
        { path: '/admin/settings/payment', label: 'Thanh toán', icon: 'payment' },
        { path: '/admin/settings/shipping', label: 'Vận chuyển', icon: 'local_shipping' },
      ]
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/auth/login');
  };

  const toggleSubmenu = (path: string) => {
    setExpandedMenus(prev => 
      prev.includes(path) 
        ? prev.filter(p => p !== path)
        : [...prev, path]
    );
  };

  const isSubmenuExpanded = (path: string) => expandedMenus.includes(path);
  
  const isMenuActive = (item: MenuItem): boolean => {
    if (item.path === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname.startsWith(item.path);
  };

  const renderMenuItem = (item: MenuItem, level = 0) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isActive = isMenuActive(item);
    const isExpanded = isSubmenuExpanded(item.path);

    return (
      <div key={item.path} className={`nav-item-wrapper level-${level}`}>
        {hasSubmenu ? (
          <button
            className={`nav-item submenu-toggle ${isActive ? 'active' : ''}`}
            onClick={() => toggleSubmenu(item.path)}
          >
            <span className="nav-icon material-icons">{item.icon}</span>
            {!sidebarCollapsed && (
              <>
                <span className="nav-label">{item.label}</span>
                {item.badge && <span className="nav-badge">{item.badge}</span>}
                <span className={`expand-icon material-icons ${isExpanded ? 'expanded' : ''}`}>
                  expand_more
                </span>
              </>
            )}
          </button>
        ) : (
          <NavLink
            to={item.path}
            end={item.path === '/admin'}
            className={({ isActive }) => 
              `nav-item ${isActive ? 'active' : ''}`
            }
          >
            <span className="nav-icon material-icons">{item.icon}</span>
            {!sidebarCollapsed && (
              <>
                <span className="nav-label">{item.label}</span>
                {item.badge && <span className="nav-badge">{item.badge}</span>}
              </>
            )}
          </NavLink>
        )}
        
        {hasSubmenu && !sidebarCollapsed && (
          <div className={`submenu ${isExpanded ? 'expanded' : ''}`}>
            {item.submenu!.map(subItem => renderMenuItem(subItem, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="admin-layout">
      <aside className={`admin-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-icon material-icons">store</span>
            {!sidebarCollapsed && <span className="logo-text">Admin Panel</span>}
          </div>
          <button 
            className="sidebar-toggle"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            title={sidebarCollapsed ? 'Mở rộng menu' : 'Thu gọn menu'}
          >
            <span className="material-icons">
              {sidebarCollapsed ? 'menu_open' : 'menu'}
            </span>
          </button>
        </div>
        
        <nav className="sidebar-nav">
          <div className="nav-section">
            {menuItems.map(item => renderMenuItem(item))}
          </div>
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">
              <span className="material-icons">account_circle</span>
            </div>
            {!sidebarCollapsed && (
              <div className="user-info">
                <span className="user-name">Admin User</span>
                <span className="user-role">Quản trị viên</span>
              </div>
            )}
          </div>
          <button 
            className="logout-btn"
            onClick={handleLogout}
            title="Đăng xuất"
          >
            <span className="material-icons">logout</span>
            {!sidebarCollapsed && <span>Đăng xuất</span>}
          </button>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <div className="header-content">
            <div className="header-left">
              <button 
                className="mobile-menu-toggle"
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              >
                <span className="material-icons">menu</span>
              </button>
              <div className="breadcrumb">
                <span className="material-icons">home</span>
                <span>Admin</span>
                <span className="separator">/</span>
                <span>Dashboard</span>
              </div>
            </div>
            <div className="header-right">
              <div className="header-actions">
                <button className="header-btn" title="Thông báo">
                  <span className="material-icons">notifications</span>
                  <span className="notification-badge">3</span>
                </button>
                <button className="header-btn" title="Tin nhắn">
                  <span className="material-icons">message</span>
                </button>
                <button className="header-btn" title="Cài đặt">
                  <span className="material-icons">settings</span>
                </button>
              </div>
              <div className="user-menu">
                <div className="user-avatar">
                  <span className="material-icons">account_circle</span>
                </div>
                <span className="user-name">Admin</span>
                <span className="material-icons">expand_more</span>
              </div>
            </div>
          </div>
        </header>

        <div className="admin-content">
          <div className="content-wrapper">
            <Outlet />
          </div>
        </div>
      </main>

      {/* Mobile overlay */}
      {!sidebarCollapsed && (
        <div 
          className="mobile-overlay"
          onClick={() => setSidebarCollapsed(true)}
        />
      )}
    </div>
  );
};

export default AdminLayout; 