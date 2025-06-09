import React, { useState, useEffect } from 'react';
import './UserManagement.scss';

interface Admin {
  id: string;
  email: string;
  fullName: string;
  role: 'admin' | 'superadmin';
  lastLogin: string;
  status: 'active' | 'inactive';
  createdAt: string;
}

export const AdminManagement: React.FC = () => {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setAdmins([
        {
          id: '1',
          email: 'admin@company.com',
          fullName: 'Super Admin',
          role: 'superadmin',
          lastLogin: '2024-01-20T10:00:00Z',
          status: 'active',
          createdAt: '2023-01-01'
        },
        {
          id: '2',
          email: 'admin2@company.com',
          fullName: 'Quản trị viên',
          role: 'admin',
          lastLogin: '2024-01-19T15:30:00Z',
          status: 'active',
          createdAt: '2023-06-15'
        }
      ]);
    } catch (error) {
      console.error('Error fetching admins:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredAdmins = admins.filter(admin =>
    admin.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    admin.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <span className="material-icons rotating">refresh</span>
          <span>Đang tải quản trị viên...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-management">
      <div className="page-header">
        <div className="header-content">
          <h1>
            <span className="material-icons">admin_panel_settings</span>
            Quản lý Admin
          </h1>
          <p>Danh sách quản trị viên hệ thống</p>
        </div>
      </div>

      <div className="content-card">
        <div className="table-header">
          <div className="search-box">
            <span className="material-icons">search</span>
            <input
              type="text"
              placeholder="Tìm kiếm admin..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="table-info">
            Tổng cộng: {filteredAdmins.length} admin
          </div>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Admin</th>
                <th>Email</th>
                <th>Vai trò</th>
                <th>Đăng nhập cuối</th>
                <th>Ngày tạo</th>
                <th>Trạng thái</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {filteredAdmins.map(admin => (
                <tr key={admin.id}>
                  <td>
                    <div className="user-info">
                      <div className="user-avatar">
                        <span className="material-icons">admin_panel_settings</span>
                      </div>
                      <div className="user-details">
                        <div className="user-name">{admin.fullName}</div>
                        <div className="user-id">#{admin.id}</div>
                      </div>
                    </div>
                  </td>
                  <td>{admin.email}</td>
                  <td>
                    <span className={`role-badge ${admin.role}`}>
                      {admin.role === 'superadmin' ? 'Super Admin' : 'Admin'}
                    </span>
                  </td>
                  <td>{new Date(admin.lastLogin).toLocaleDateString('vi-VN')}</td>
                  <td>{new Date(admin.createdAt).toLocaleDateString('vi-VN')}</td>
                  <td>
                    <span className={`status-badge ${admin.status}`}>
                      {admin.status === 'active' ? 'Hoạt động' : 'Tạm dừng'}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-icon" title="Chỉnh sửa">
                        <span className="material-icons">edit</span>
                      </button>
                      {admin.role !== 'superadmin' && (
                        <button className="btn-icon danger" title="Xóa">
                          <span className="material-icons">delete</span>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}; 