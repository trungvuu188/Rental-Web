import React, { useState, useEffect } from 'react';
import '../OrderManagement.scss';

interface PendingOrder {
  id: string;
  customerName: string;
  customerEmail: string;
  total: number;
  itemCount: number;
  createdAt: string;
  paymentMethod: string;
}

export const PendingOrders: React.FC = () => {
  const [orders, setOrders] = useState<PendingOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPendingOrders();
  }, []);

  const fetchPendingOrders = async () => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setOrders([
        {
          id: 'ORD001',
          customerName: 'Nguyễn Văn A',
          customerEmail: 'a@email.com',
          total: 1500000,
          itemCount: 3,
          createdAt: '2024-01-20T10:00:00Z',
          paymentMethod: 'Chuyển khoản'
        },
        {
          id: 'ORD002',
          customerName: 'Trần Thị B',
          customerEmail: 'b@email.com',
          total: 850000,
          itemCount: 2,
          createdAt: '2024-01-20T09:30:00Z',
          paymentMethod: 'COD'
        }
      ]);
    } catch (error) {
      console.error('Error fetching pending orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApproveOrder = async (orderId: string) => {
    if (window.confirm('Xác nhận duyệt đơn hàng này?')) {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        setOrders(prev => prev.filter(order => order.id !== orderId));
      } catch (error) {
        console.error('Error approving order:', error);
      }
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  const filteredOrders = orders.filter(order =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <span className="material-icons rotating">refresh</span>
          <span>Đang tải đơn hàng...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="pending-orders">
      <div className="page-header">
        <div className="header-content">
          <h1>
            <span className="material-icons">pending</span>
            Đơn hàng chờ xử lý
          </h1>
          <p>Danh sách đơn hàng cần được duyệt</p>
        </div>
        <div className="header-actions">
          <span className="pending-count">{filteredOrders.length} đơn chờ</span>
        </div>
      </div>

      <div className="content-card">
        <div className="table-header">
          <div className="search-box">
            <span className="material-icons">search</span>
            <input
              type="text"
              placeholder="Tìm kiếm đơn hàng..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Mã đơn</th>
                <th>Khách hàng</th>
                <th>Số sản phẩm</th>
                <th>Tổng tiền</th>
                <th>Thanh toán</th>
                <th>Thời gian</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map(order => (
                <tr key={order.id}>
                  <td>
                    <span className="order-id">#{order.id}</span>
                  </td>
                  <td>
                    <div className="customer-info">
                      <div className="customer-name">{order.customerName}</div>
                      <div className="customer-email">{order.customerEmail}</div>
                    </div>
                  </td>
                  <td>
                    <span className="item-count">{order.itemCount} sản phẩm</span>
                  </td>
                  <td className="amount">{formatCurrency(order.total)}</td>
                  <td>
                    <span className="payment-method">{order.paymentMethod}</span>
                  </td>
                  <td>{new Date(order.createdAt).toLocaleString('vi-VN')}</td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        className="btn btn-success"
                        onClick={() => handleApproveOrder(order.id)}
                      >
                        <span className="material-icons">check</span>
                        Duyệt
                      </button>
                      <button className="btn btn-outline">
                        <span className="material-icons">visibility</span>
                        Xem
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