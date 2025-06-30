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
      // Retrieve orders from localStorage
      const orderData = JSON.parse(localStorage.getItem('orderProductData') || '[]');
      
      // Map orderProductData to PendingOrder interface
      const mappedOrders: PendingOrder[] = orderData.map((order: any) => ({
        id: order.orderNumber.toString(),
        customerName: 'Khách hàng', // Placeholder, as customerName isn't captured in ShoppingCart
        customerEmail: 'khachhang@example.com', // Placeholder, as customerEmail isn't captured
        total: order.totalPrice,
        itemCount: order.products.reduce((sum: number, product: any) => sum + product.quantity, 0),
        createdAt: new Date(
          order.date.split('/').reverse().join('-') // Convert DD/MM/YYYY to YYYY-MM-DD
        ).toISOString(),
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
        // Update localStorage by removing the approved order
        const orderData = JSON.parse(localStorage.getItem('orderProductData') || '[]');
        const updatedOrders = orderData.filter((order: any) => order.orderNumber.toString() !== orderId);
        localStorage.setItem('orderProductData', JSON.stringify(updatedOrders, null, 2));
        
        // Update state
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