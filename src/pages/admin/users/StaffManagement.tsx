import React, { useState, useEffect } from 'react';
import './UserManagement.scss';

interface Staff {
  id: string;
  email: string;
  fullName: string;
  role: 'staff' | 'moderator';
  department: string;
  status: 'active' | 'inactive';
  joinedAt: string;
}

export const StaffManagement: React.FC = () => {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStaff([
        {
          id: '1',
          email: 'staff1@company.com',
          fullName: 'Lê Văn C',
          role: 'staff',
          department: 'Bán hàng',
          status: 'active',
          joinedAt: '2024-01-01'
        },
        {
          id: '2',
          email: 'staff2@company.com',
          fullName: 'Nguyễn Thị D',
          role: 'moderator',
          department: 'Hỗ trợ',
          status: 'active',
          joinedAt: '2023-12-15'
        }
      ]);
    } catch (error) {
      console.error('Error fetching staff:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredStaff = staff.filter(member =>
    member.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <span className="material-icons rotating">refresh</span>
          <span>Đang tải nhân viên...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="staff-management">
      <div className="page-header">
        <div className="header-content">
          <h1>
            <span className="material-icons">badge</span>
            Quản lý nhân viên
          </h1>
          <p>Danh sách nhân viên và phân quyền</p>
        </div>
      </div>

      <div className="content-card">
        <div className="table-header">
          <div className="search-box">
            <span className="material-icons">search</span>
            <input
              type="text"
              placeholder="Tìm kiếm nhân viên..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="table-info">
            Tổng cộng: {filteredStaff.length} nhân viên
          </div>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Nhân viên</th>
                <th>Email</th>
                <th>Vai trò</th>
                <th>Phòng ban</th>
                <th>Ngày vào</th>
                <th>Trạng thái</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {filteredStaff.map(member => (
                <tr key={member.id}>
                  <td>
                    <div className="user-info">
                      <div className="user-avatar">
                        <span className="material-icons">badge</span>
                      </div>
                      <div className="user-details">
                        <div className="user-name">{member.fullName}</div>
                        <div className="user-id">#{member.id}</div>
                      </div>
                    </div>
                  </td>
                  <td>{member.email}</td>
                  <td>
                    <span className={`role-badge ${member.role}`}>
                      {member.role === 'staff' ? 'Nhân viên' : 'Kiểm duyệt viên'}
                    </span>
                  </td>
                  <td>{member.department}</td>
                  <td>{new Date(member.joinedAt).toLocaleDateString('vi-VN')}</td>
                  <td>
                    <span className={`status-badge ${member.status}`}>
                      {member.status === 'active' ? 'Hoạt động' : 'Tạm dừng'}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-icon" title="Chỉnh sửa">
                        <span className="material-icons">edit</span>
                      </button>
                      <button className="btn-icon danger" title="Xóa">
                        <span className="material-icons">delete</span>
                      </button>
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