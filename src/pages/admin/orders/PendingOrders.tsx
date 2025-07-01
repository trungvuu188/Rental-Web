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

  const fetchPendingOrders = () => {
    try {
      setLoading(true);
      const orderData = JSON.parse(localStorage.getItem('orderProductData') || '[]');
      const mappedOrders: PendingOrder[] = orderData.map((order: any) => ({
        id: order.orderNumber.toString(),
        customerName: 'Khách hàng',
        customerEmail: 'khachhang@example.com',
        total: order.totalPrice,
        itemCount: order.products.reduce((sum: number, product: any) => sum + product.quantity, 0),
        createdAt: new Date(order.date.split('/').reverse().join('-')).toISOString(),
        paymentMethod: order.paymentMethod === 'Direct Bank Transfer' ? 'Chuyển khoản' : 'COD',
      }));
      setOrders(mappedOrders);
    } catch (error) {
      console.error('Error fetching pending orders from localStorage:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApproveOrder = (orderId: string) => {
    if (window.confirm('Xác nhận duyệt đơn hàng này?')) {
      try {
        const orderData = JSON.parse(localStorage.getItem('orderProductData') || '[]');
        const approvedOrder = orderData.find((order: any) => order.orderNumber.toString() === orderId);
        if (approvedOrder) {
          // Add to completed orders in localStorage
          const completedOrders = JSON.parse(localStorage.getItem('completedOrderData') || '[]');
          completedOrders.push(approvedOrder);
          localStorage.setItem('completedOrderData', JSON.stringify(completedOrders, null, 2));

          // Remove from pending orders
          const updatedOrders = orderData.filter((order: any) => order.orderNumber.toString() !== orderId);
          localStorage.setItem('orderProductData', JSON.stringify(updatedOrders, null, 2));

          // Update state
          setOrders(prev => prev.filter(order => order.id !== orderId));
        }
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
                  <td><span className="order-id">#{order.id}</span></td>
                  <td>
                    <div className="customer-info">
                      <div className="customer-name">{order.customerName}</div>
                      <div className="customer-email">{order.customerEmail}</div>
                    </div>
                  </td>
                  <td><span className="item-count">{order.itemCount} sản phẩm</span></td>
                  <td className="amount">{formatCurrency(order.total)}</td>
                  <td><span className="payment-method">{order.paymentMethod}</span></td>
                  <td>{new Date(order.createdAt).toLocaleDateString('vi-VN')}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn btn-success" onClick={() => handleApproveOrder(order.id)}>
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