import React, { useState, useEffect } from 'react';
import './UserManagement.scss';

interface Customer {
  id: string;
  email: string;
  fullName: string;
  phone: string;
  registeredAt: string;
  status: 'active' | 'inactive';
  totalOrders: number;
  totalSpent: number;
}

export const CustomerManagement: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setCustomers([
        {
          id: '1',
          email: 'nguyen.van.a@email.com',
          fullName: 'Nguyễn Văn A',
          phone: '0123456789',
          registeredAt: '2024-01-15',
          status: 'active',
          totalOrders: 5,
          totalSpent: 2500000
        },
        {
          id: '2',
          email: 'tran.thi.b@email.com',
          fullName: 'Trần Thị B',
          phone: '0987654321',
          registeredAt: '2024-01-10',
          status: 'active',
          totalOrders: 12,
          totalSpent: 8750000
        }
      ]);
    } catch (error) {
      console.error('Error fetching customers:', error);
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

  const filteredCustomers = customers.filter(customer =>
    customer.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <span className="material-icons rotating">refresh</span>
          <span>Đang tải khách hàng...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="customer-management">
      <div className="page-header">
        <div className="header-content">
          <h1>
            <span className="material-icons">person</span>
            Quản lý khách hàng
          </h1>
          <p>Danh sách và thông tin khách hàng</p>
        </div>
      </div>

      <div className="content-card">
        <div className="table-header">
          <div className="search-box">
            <span className="material-icons">search</span>
            <input
              type="text"
              placeholder="Tìm kiếm khách hàng..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="table-info">
            Tổng cộng: {filteredCustomers.length} khách hàng
          </div>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Khách hàng</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Đăng ký</th>
                <th>Đơn hàng</th>
                <th>Tổng chi</th>
                <th>Trạng thái</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map(customer => (
                <tr key={customer.id}>
                  <td>
                    <div className="user-info">
                      <div className="user-avatar">
                        <span className="material-icons">account_circle</span>
                      </div>
                      <div className="user-details">
                        <div className="user-name">{customer.fullName}</div>
                        <div className="user-id">#{customer.id}</div>
                      </div>
                    </div>
                  </td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>{new Date(customer.registeredAt).toLocaleDateString('vi-VN')}</td>
                  <td>
                    <span className="order-count">{customer.totalOrders}</span>
                  </td>
                  <td className="amount">{formatCurrency(customer.totalSpent)}</td>
                  <td>
                    <span className={`status-badge ${customer.status}`}>
                      {customer.status === 'active' ? 'Hoạt động' : 'Tạm dừng'}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-icon" title="Xem chi tiết">
                        <span className="material-icons">visibility</span>
                      </button>
                      <button className="btn-icon" title="Chỉnh sửa">
                        <span className="material-icons">edit</span>
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