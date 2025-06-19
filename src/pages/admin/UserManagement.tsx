import React, { useState, useEffect } from 'react';
import { DataTable, Column } from '../../components/ui/data-table';
import './UserManagement.scss';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: 'admin' | 'user' | 'provider';
  status: 'active' | 'inactive' | 'banned';
  createdAt: string;
  lastLogin: string | null;
  totalOrders: number;
  totalSpent: number;
  avatar?: string;
}

interface UserFormData {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: 'admin' | 'user' | 'provider';
  status: 'active' | 'inactive' | 'banned';
}

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  const [formData, setFormData] = useState<UserFormData>({
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    role: 'user',
    status: 'active',
  });

  const roles = [
    { value: 'user', label: 'Người dùng' },
    { value: 'provider', label: 'Nhà cung cấp' },
    { value: 'admin', label: 'Quản trị viên' },
  ];

  const statuses = [
    { value: 'active', label: 'Hoạt động' },
    { value: 'inactive', label: 'Không hoạt động' },
    { value: 'banned', label: 'Bị cấm' },
  ];

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      // Mock data - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      const mockUsers: User[] = [
        {
          id: "1",
          email: "admin@example.com",
          firstName: "Quản",
          lastName: "Trị",
          phoneNumber: "0123456789",
          role: "admin",
          status: "active",
          createdAt: "2024-01-01T00:00:00Z",
          lastLogin: "2024-01-15T10:30:00Z",
          totalOrders: 0,
          totalSpent: 0,
          avatar: "https://via.placeholder.com/40x40/1976d2/ffffff?text=QT"
        },
        {
          id: "2",
          email: "user1@example.com",
          firstName: "Nguyễn",
          lastName: "Văn A",
          phoneNumber: "0987654321",
          role: "user",
          status: "active",
          createdAt: "2024-01-05T00:00:00Z",
          lastLogin: "2024-01-14T15:20:00Z",
          totalOrders: 5,
          totalSpent: 2500000,
          avatar: "https://via.placeholder.com/40x40/4caf50/ffffff?text=NA"
        },
        {
          id: "3",
          email: "provider1@example.com",
          firstName: "Trần",
          lastName: "Thị B",
          phoneNumber: "0912345678",
          role: "provider",
          status: "active",
          createdAt: "2024-01-03T00:00:00Z",
          lastLogin: "2024-01-13T09:15:00Z",
          totalOrders: 12,
          totalSpent: 0,
          avatar: "https://via.placeholder.com/40x40/ff9800/ffffff?text=TB"
        },
        {
          id: "4",
          email: "user2@example.com",
          firstName: "Lê",
          lastName: "Văn C",
          phoneNumber: "0934567890",
          role: "user",
          status: "inactive",
          createdAt: "2023-12-20T00:00:00Z",
          lastLogin: "2023-12-25T12:00:00Z",
          totalOrders: 2,
          totalSpent: 800000,
          avatar: "https://via.placeholder.com/40x40/9c27b0/ffffff?text=LC"
        },
        {
          id: "5",
          email: "provider2@example.com",
          firstName: "Phạm",
          lastName: "Minh D",
          phoneNumber: "0945678901",
          role: "provider",
          status: "banned",
          createdAt: "2023-11-10T00:00:00Z",
          lastLogin: "2024-01-10T08:45:00Z",
          totalOrders: 8,
          totalSpent: 0,
          avatar: "https://via.placeholder.com/40x40/f44336/ffffff?text=PD"
        },
        {
          id: "6",
          email: "user3@example.com",
          firstName: "Hoàng",
          lastName: "Thị E",
          phoneNumber: "0956789012",
          role: "user",
          status: "active",
          createdAt: "2024-01-10T00:00:00Z",
          lastLogin: "2024-01-15T16:30:00Z",
          totalOrders: 3,
          totalSpent: 1200000,
          avatar: "https://via.placeholder.com/40x40/2196f3/ffffff?text=HE"
        },
      ];

      setUsers(mockUsers);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingUser) {
        // Update user
        const updatedUser: User = {
          ...editingUser,
          ...formData,
        };
        setUsers(users.map(u => u.id === editingUser.id ? updatedUser : u));
      } else {
        // Create new user
        const newUser: User = {
          id: Date.now().toString(),
          ...formData,
          createdAt: new Date().toISOString(),
          lastLogin: null,
          totalOrders: 0,
          totalSpent: 0,
          avatar: `https://via.placeholder.com/40x40/1976d2/ffffff?text=${formData.firstName.charAt(0)}${formData.lastName.charAt(0)}`
        };
        setUsers([...users, newUser]);
      }
      resetForm();
      setShowModal(false);
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const handleEdit = (user: User) => {
    setEditingUser(user);
    setFormData({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      role: user.role,
      status: user.status,
    });
    setShowModal(true);
  };

  const handleDelete = async (userId: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa người dùng này?')) {
      try {
        setUsers(users.filter(u => u.id !== userId));
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  const handleBulkAction = async (action: string, userIds: string[]) => {
    if (userIds.length === 0) return;

    const confirmMessage = {
      'activate': `Bạn có chắc chắn muốn kích hoạt ${userIds.length} người dùng?`,
      'deactivate': `Bạn có chắc chắn muốn tạm ngưng ${userIds.length} người dùng?`,
      'ban': `Bạn có chắc chắn muốn cấm ${userIds.length} người dùng?`,
      'delete': `Bạn có chắc chắn muốn xóa ${userIds.length} người dùng?`
    }[action];

    if (window.confirm(confirmMessage)) {
      try {
        if (action === 'delete') {
          setUsers(users.filter(u => !userIds.includes(u.id)));
        } else {
          const newStatus = action === 'activate' ? 'active' : action === 'deactivate' ? 'inactive' : 'banned';
          setUsers(users.map(u =>
            userIds.includes(u.id) ? { ...u, status: newStatus as any } : u
          ));
        }
        setSelectedUsers([]);
      } catch (error) {
        console.error(`Error performing bulk ${action}:`, error);
      }
    }
  };

  const handleStatusChange = async (userId: string, newStatus: string) => {
    try {
      setUsers(users.map(u =>
        u.id === userId ? { ...u, status: newStatus as any } : u
      ));
    } catch (error) {
      console.error('Error updating user status:', error);
    }
  };

  const resetForm = () => {
    setEditingUser(null);
    setFormData({
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      role: 'user',
      status: 'active',
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Chưa từng đăng nhập';
    return new Intl.DateTimeFormat('vi-VN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(dateString));
  };

  const getRoleLabel = (role: string) => {
    return roles.find(r => r.value === role)?.label || role;
  };

  const getStatusLabel = (status: string) => {
    return statuses.find(s => s.value === status)?.label || status;
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'active': return 'status-badge status-active';
      case 'inactive': return 'status-badge status-inactive';
      case 'banned': return 'status-badge status-banned';
      default: return 'status-badge';
    }
  };

  const getRoleBadgeClass = (role: string) => {
    switch (role) {
      case 'admin': return 'role-badge role-admin';
      case 'provider': return 'role-badge role-provider';
      case 'user': return 'role-badge role-user';
      default: return 'role-badge';
    }
  };

  const columns: Column<User>[] = [
    {
      key: 'user',
      title: 'Người dùng',
      render: (value: any, user: User) => (
        <div className="user-info">
          <img src={user.avatar} alt={`${user.firstName} ${user.lastName}`} className="user-avatar" />
          <div className="user-details">
            <div className="user-name">{user.firstName} {user.lastName}</div>
            <div className="user-email">{user.email}</div>
            <div className="user-phone">{user.phoneNumber}</div>
          </div>
        </div>
      ),
    },
    {
      key: 'role',
      title: 'Vai trò',
      render: (value: any, user: User) => (
        <span className={getRoleBadgeClass(user.role)}>
          {getRoleLabel(user.role)}
        </span>
      ),
      filterable: true,
      filterType: 'select',
      filterOptions: [
        { value: '', label: 'Tất cả vai trò' },
        ...roles,
      ],
    },
    {
      key: 'status',
      title: 'Trạng thái',
      render: (value: any, user: User) => (
        <div className="status-dropdown">
          <select
            value={user.status}
            onChange={(e) => handleStatusChange(user.id, e.target.value)}
            className="status-select"
          >
            {statuses.map(status => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        </div>
      ),
      filterable: true,
      filterType: 'select',
      filterOptions: [
        { value: '', label: 'Tất cả trạng thái' },
        ...statuses,
      ],
    },
    {
      key: 'activity',
      title: 'Hoạt động',
      render: (value: any, user: User) => (
        <div className="user-activity">
          <div className="activity-stat">
            <span className="stat-label">Đơn hàng:</span>
            <span className="stat-value">{user.totalOrders}</span>
          </div>
          <div className="activity-stat">
            <span className="stat-label">Chi tiêu:</span>
            <span className="stat-value">{formatCurrency(user.totalSpent)}</span>
          </div>
        </div>
      ),
    },
    {
      key: 'lastLogin',
      title: 'Lần đăng nhập cuối',
      render: (value: any, user: User) => (
        <div className="login-info">
          <div className="login-date">{formatDate(user.lastLogin)}</div>
        </div>
      ),
      sortable: true,
    },
    {
      key: 'createdAt',
      title: 'Ngày tạo',
      render: (value: any, user: User) => formatDate(user.createdAt),
      sortable: true,
    },
    {
      key: 'actions',
      title: 'Thao tác',
      align: 'center',
      width: 120,
      render: (value: any, user: User) => (
        <div className="action-buttons">
          <button
            className="action-btn view"
            title="Xem chi tiết"
            onClick={() => {
              setSelectedUser(user);
              setShowDetailModal(true);
            }}
          >
            <span className="material-icons">visibility</span>
          </button>
          <button
            className="action-btn edit"
            title="Chỉnh sửa"
            onClick={() => handleEdit(user)}
          >
            <span className="material-icons">edit</span>
          </button>
          <button
            className="action-btn delete"
            title="Xóa"
            onClick={() => handleDelete(user.id)}
          >
            <span className="material-icons">delete</span>
          </button>
        </div>
      )
    },
  ];

  return (
    <div className="user-management">
      <div className="page-header">
        <div className="header-content">
          <h1>
            <span className="material-icons">people</span>
            Quản lý người dùng
          </h1>
          <p>Quản lý thông tin và quyền hạn người dùng trong hệ thống</p>
        </div>
        <div className="header-actions">
          <button
            className="btn btn-outline"
            onClick={() => {
              resetForm();
              setShowModal(true);
            }}
          >
            <span className="material-icons">add</span>
            Thêm người dùng
          </button>
        </div>
      </div>

      <div className="page-content">
        <div className="table-toolbar">
          <div className="toolbar-left">
            {selectedUsers.length > 0 && (
              <div className="bulk-actions">
                <span className="selected-info">
                  Đã chọn {selectedUsers.length} người dùng
                </span>
                <button
                  className="btn btn-sm btn-outline"
                  onClick={() => handleBulkAction('activate', selectedUsers)}
                >
                  <span className="material-icons">check_circle</span>
                  Kích hoạt
                </button>
                <button
                  className="btn btn-sm btn-outline"
                  onClick={() => handleBulkAction('deactivate', selectedUsers)}
                >
                  <span className="material-icons">pause_circle</span>
                  Tạm ngưng
                </button>
                <button
                  className="btn btn-sm btn-outline"
                  onClick={() => handleBulkAction('ban', selectedUsers)}
                >
                  <span className="material-icons">block</span>
                  Cấm
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleBulkAction('delete', selectedUsers)}
                >
                  <span className="material-icons">delete</span>
                  Xóa
                </button>
              </div>
            )}
          </div>
          <div className="toolbar-right">
            <div className="view-options">
              <button className="btn-ghost">
                <span className="material-icons">refresh</span>
                Làm mới
              </button>
              <button className="btn-ghost">
                <span className="material-icons">download</span>
                Xuất Excel
              </button>
            </div>
          </div>
        </div>

        <DataTable
          data={users}
          columns={columns}
          loading={loading}
          rowSelection={{
            selectedRowKeys: selectedUsers,
            onChange: (keys) => setSelectedUsers(keys as string[])
          }}
          expandable={{
            expandedRowRender: (record: User) => (
              <div className="expanded-details">
                <div className="detail-grid">
                  <div className="detail-section">
                    <h4>Thông tin cá nhân</h4>
                    <div className="personal-info">
                      <div><strong>Email:</strong> {record.email}</div>
                      <div><strong>Số điện thoại:</strong> {record.phoneNumber}</div>
                      <div><strong>Vai trò:</strong> {getRoleLabel(record.role)}</div>
                      <div><strong>Trạng thái:</strong> {getStatusLabel(record.status)}</div>
                    </div>
                  </div>
                  <div className="detail-section">
                    <h4>Thống kê hoạt động</h4>
                    <div className="activity-stats">
                      <div><strong>Tổng đơn hàng:</strong> {record.totalOrders}</div>
                      <div><strong>Tổng chi tiêu:</strong> {formatCurrency(record.totalSpent)}</div>
                      <div><strong>Ngày tạo tài khoản:</strong> {formatDate(record.createdAt)}</div>
                      <div><strong>Lần đăng nhập cuối:</strong> {formatDate(record.lastLogin)}</div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }}
          onRow={(record) => ({
            onDoubleClick: () => {
              setSelectedUser(record);
              setShowDetailModal(true);
            }
          })}
          size="medium"
          bordered
        />
      </div>

      {/* Add/Edit User Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{editingUser ? 'Chỉnh sửa người dùng' : 'Thêm người dùng mới'}</h3>
              <button className="modal-close" onClick={() => setShowModal(false)}>
                <span className="material-icons">close</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">Họ</label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Tên</label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumber">Số điện thoại</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="role">Vai trò</label>
                    <select
                      id="role"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value as any })}
                    >
                      {roles.map(role => (
                        <option key={role.value} value={role.value}>
                          {role.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="status">Trạng thái</label>
                    <select
                      id="status"
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                    >
                      {statuses.map(status => (
                        <option key={status.value} value={status.value}>
                          {status.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="button" className="btn btn-outline" onClick={() => setShowModal(false)}>
                    Hủy
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {editingUser ? 'Cập nhật' : 'Thêm mới'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* User Detail Modal */}
      {showDetailModal && selectedUser && (
        <div className="modal-overlay" onClick={() => setShowDetailModal(false)}>
          <div className="modal-content large" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Chi tiết người dùng: {selectedUser.firstName} {selectedUser.lastName}</h3>
              <button className="modal-close" onClick={() => setShowDetailModal(false)}>
                <span className="material-icons">close</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="user-detail-content">
                <div className="detail-row">
                  <div className="detail-col">
                    <h4>Thông tin cá nhân</h4>
                    <div className="user-detail">
                      <div><strong>Họ tên:</strong> {selectedUser.firstName} {selectedUser.lastName}</div>
                      <div><strong>Email:</strong> {selectedUser.email}</div>
                      <div><strong>Số điện thoại:</strong> {selectedUser.phoneNumber}</div>
                      <div><strong>Vai trò:</strong> <span className={getRoleBadgeClass(selectedUser.role)}>{getRoleLabel(selectedUser.role)}</span></div>
                      <div><strong>Trạng thái:</strong> <span className={getStatusBadgeClass(selectedUser.status)}>{getStatusLabel(selectedUser.status)}</span></div>
                    </div>
                  </div>
                  <div className="detail-col">
                    <h4>Thông tin hệ thống</h4>
                    <div className="system-detail">
                      <div><strong>Ngày tạo tài khoản:</strong> {formatDate(selectedUser.createdAt)}</div>
                      <div><strong>Lần đăng nhập cuối:</strong> {formatDate(selectedUser.lastLogin)}</div>
                      <div><strong>Tổng số đơn hàng:</strong> {selectedUser.totalOrders}</div>
                      <div><strong>Tổng chi tiêu:</strong> {formatCurrency(selectedUser.totalSpent)}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement; 