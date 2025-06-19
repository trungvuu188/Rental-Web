import React, { useState, useEffect } from 'react';
import { DataTable, Column } from '../../components/ui/data-table';
import './OrderManagement.scss';

interface Order {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  products: {
    id: string;
    name: string;
    quantity: number;
    price: number;
  }[];
  total_amount: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipping' | 'completed' | 'cancelled' | 'refunded';
  payment_status: 'pending' | 'paid' | 'failed' | 'refunded';
  payment_method: 'cod' | 'bank_transfer' | 'credit_card' | 'momo' | 'zalopay';
  shipping_address: string;
  order_date: string;
  updated_at: string;
  notes?: string;
}

const OrderManagement: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [totalOrders] = useState(89); // Mock total
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  useEffect(() => {
    fetchOrders();
  }, [currentPage]);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      const mockOrders: Order[] = [
        {
          id: 'ORD001',
          customer_name: 'Nguyễn Văn An',
          customer_email: 'nva@email.com',
          customer_phone: '0901234567',
          products: [
            { id: '1', name: 'Máy khoan Bosch GSB 120-LI', quantity: 1, price: 2500000 },
            { id: '2', name: 'Máy cưa lọng Makita JV0600K', quantity: 1, price: 3200000 }
          ],
          total_amount: 5700000,
          status: 'processing',
          payment_status: 'paid',
          payment_method: 'bank_transfer',
          shipping_address: '123 Đường ABC, Quận 1, TP.HCM',
          order_date: '2024-01-25T10:30:00Z',
          updated_at: '2024-01-25T14:20:00Z',
          notes: 'Giao hàng nhanh'
        },
        {
          id: 'ORD002',
          customer_name: 'Trần Thị Bình',
          customer_email: 'ttb@email.com',
          customer_phone: '0912345678',
          products: [
            { id: '3', name: 'Máy mài góc DeWalt DWE4157', quantity: 2, price: 1800000 }
          ],
          total_amount: 3600000,
          status: 'pending',
          payment_status: 'pending',
          payment_method: 'cod',
          shipping_address: '456 Đường XYZ, Quận 3, TP.HCM',
          order_date: '2024-01-25T09:15:00Z',
          updated_at: '2024-01-25T09:15:00Z'
        },
        {
          id: 'ORD003',
          customer_name: 'Lê Văn Cường',
          customer_email: 'lvc@email.com',
          customer_phone: '0923456789',
          products: [
            { id: '4', name: 'Máy bào Stanley SB90', quantity: 1, price: 1200000 },
            { id: '5', name: 'Máy khoan búa Hilti TE 2-A22', quantity: 1, price: 4500000 }
          ],
          total_amount: 5700000,
          status: 'completed',
          payment_status: 'paid',
          payment_method: 'credit_card',
          shipping_address: '789 Đường DEF, Quận 7, TP.HCM',
          order_date: '2024-01-24T15:45:00Z',
          updated_at: '2024-01-25T10:30:00Z'
        },
        {
          id: 'ORD004',
          customer_name: 'Phạm Thị Dung',
          customer_email: 'ptd@email.com',
          customer_phone: '0934567890',
          products: [
            { id: '1', name: 'Máy khoan Bosch GSB 120-LI', quantity: 3, price: 2500000 }
          ],
          total_amount: 7500000,
          status: 'shipping',
          payment_status: 'paid',
          payment_method: 'momo',
          shipping_address: '321 Đường GHI, Quận 5, TP.HCM',
          order_date: '2024-01-24T11:20:00Z',
          updated_at: '2024-01-25T08:15:00Z'
        },
        {
          id: 'ORD005',
          customer_name: 'Hoàng Văn Em',
          customer_email: 'hve@email.com',
          customer_phone: '0945678901',
          products: [
            { id: '2', name: 'Máy cưa lọng Makita JV0600K', quantity: 1, price: 3200000 }
          ],
          total_amount: 3200000,
          status: 'cancelled',
          payment_status: 'refunded',
          payment_method: 'zalopay',
          shipping_address: '654 Đường JKL, Quận 10, TP.HCM',
          order_date: '2024-01-23T16:30:00Z',
          updated_at: '2024-01-24T09:45:00Z',
          notes: 'Khách hàng hủy do thay đổi kế hoạch'
        }
      ];

      setOrders(mockOrders);
    } catch (error) {
      console.error('Error fetching orders:', error);
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

  const getStatusBadge = (status: string) => {
    const statusMap = {
      pending: { label: 'Chờ xử lý', class: 'warning' },
      confirmed: { label: 'Đã xác nhận', class: 'info' },
      processing: { label: 'Đang xử lý', class: 'info' },
      shipping: { label: 'Đang giao', class: 'info' },
      completed: { label: 'Hoàn thành', class: 'success' },
      cancelled: { label: 'Đã hủy', class: 'error' },
      refunded: { label: 'Đã hoàn tiền', class: 'default' }
    };

    const statusInfo = statusMap[status as keyof typeof statusMap] || { label: status, class: 'default' };

    return (
      <span className={`status-badge ${statusInfo.class}`}>
        {statusInfo.label}
      </span>
    );
  };

  const getPaymentStatusBadge = (status: string) => {
    const statusMap = {
      pending: { label: 'Chờ thanh toán', class: 'warning' },
      paid: { label: 'Đã thanh toán', class: 'success' },
      failed: { label: 'Thất bại', class: 'error' },
      refunded: { label: 'Đã hoàn tiền', class: 'default' }
    };

    const statusInfo = statusMap[status as keyof typeof statusMap] || { label: status, class: 'default' };

    return (
      <span className={`status-badge ${statusInfo.class}`}>
        {statusInfo.label}
      </span>
    );
  };

  const getPaymentMethodLabel = (method: string) => {
    const methodMap = {
      cod: 'Thanh toán khi nhận hàng',
      bank_transfer: 'Chuyển khoản ngân hàng',
      credit_card: 'Thẻ tín dụng',
      momo: 'Ví MoMo',
      zalopay: 'ZaloPay'
    };

    return methodMap[method as keyof typeof methodMap] || method;
  };

  const handleViewDetail = (order: Order) => {
    setSelectedOrder(order);
    setShowDetailModal(true);
  };

  const handleStatusChange = (orderId: string, newStatus: string) => {
    setOrders(prev => prev.map(order =>
      order.id === orderId
        ? { ...order, status: newStatus as any, updated_at: new Date().toISOString() }
        : order
    ));
  };

  const handleBulkStatusChange = (status: string) => {
    if (selectedRows.length === 0) return;

    setOrders(prev => prev.map((order, index) => {
      if (selectedRows.includes(index)) {
        return { ...order, status: status as any, updated_at: new Date().toISOString() };
      }
      return order;
    }));
    setSelectedRows([]);
  };

  const handleDelete = (orderId: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa đơn hàng này?')) {
      setOrders(prev => prev.filter(o => o.id !== orderId));
    }
  };

  const handleBulkDelete = () => {
    if (selectedRows.length === 0) return;

    if (window.confirm(`Bạn có chắc chắn muốn xóa ${selectedRows.length} đơn hàng đã chọn?`)) {
      setOrders(prev => prev.filter((_, index) => !selectedRows.includes(index)));
      setSelectedRows([]);
    }
  };

  const columns: Column<Order>[] = [
    {
      key: 'id',
      title: 'Mã đơn hàng',
      sortable: true,
      filterable: true,
      filterType: 'text',
      width: 120,
      render: (value) => (
        <div className="order-id">
          <strong>{value}</strong>
        </div>
      )
    },
    {
      key: 'customer_name',
      title: 'Khách hàng',
      sortable: true,
      filterable: true,
      filterType: 'text',
      render: (value, record) => (
        <div className="customer-info">
          <div className="customer-name">{record.customer_name}</div>
          <div className="customer-contact">
            <div>{record.customer_email}</div>
            <div>{record.customer_phone}</div>
          </div>
        </div>
      )
    },
    {
      key: 'products',
      title: 'Sản phẩm',
      render: (value, record) => (
        <div className="products-summary">
          <div className="product-count">{record.products.length} sản phẩm</div>
          <div className="product-preview">
            {record.products.slice(0, 2).map((product, index) => (
              <div key={index} className="product-item">
                {product.name} (x{product.quantity})
              </div>
            ))}
            {record.products.length > 2 && (
              <div className="more-products">+{record.products.length - 2} khác</div>
            )}
          </div>
        </div>
      )
    },
    {
      key: 'total_amount',
      title: 'Tổng tiền',
      sortable: true,
      align: 'right',
      filterable: true,
      filterType: 'number',
      render: (value) => (
        <div className="total-amount">
          {formatCurrency(value)}
        </div>
      )
    },
    {
      key: 'status',
      title: 'Trạng thái',
      align: 'center',
      filterable: true,
      filterType: 'select',
      filterOptions: [
        { label: 'Chờ xử lý', value: 'pending' },
        { label: 'Đã xác nhận', value: 'confirmed' },
        { label: 'Đang xử lý', value: 'processing' },
        { label: 'Đang giao', value: 'shipping' },
        { label: 'Hoàn thành', value: 'completed' },
        { label: 'Đã hủy', value: 'cancelled' },
        { label: 'Đã hoàn tiền', value: 'refunded' }
      ],
      render: (value) => getStatusBadge(value)
    },
    {
      key: 'payment_status',
      title: 'Thanh toán',
      align: 'center',
      filterable: true,
      filterType: 'select',
      filterOptions: [
        { label: 'Chờ thanh toán', value: 'pending' },
        { label: 'Đã thanh toán', value: 'paid' },
        { label: 'Thất bại', value: 'failed' },
        { label: 'Đã hoàn tiền', value: 'refunded' }
      ],
      render: (value) => getPaymentStatusBadge(value)
    },
    {
      key: 'order_date',
      title: 'Ngày đặt',
      sortable: true,
      filterable: true,
      filterType: 'date',
      render: (value) => (
        <div className="order-date">
          <div>{new Date(value).toLocaleDateString('vi-VN')}</div>
          <div className="order-time">{new Date(value).toLocaleTimeString('vi-VN')}</div>
        </div>
      )
    },
    {
      key: 'actions',
      title: 'Thao tác',
      align: 'center',
      width: 150,
      render: (_, record) => (
        <div className="action-buttons">
          <button
            className="action-btn view"
            title="Xem chi tiết"
            onClick={() => handleViewDetail(record)}
          >
            <span className="material-icons">visibility</span>
          </button>
          <div className="status-dropdown">
            <select
              value={record.status}
              onChange={(e) => handleStatusChange(record.id, e.target.value)}
              className="status-select"
              title="Thay đổi trạng thái"
            >
              <option value="pending">Chờ xử lý</option>
              <option value="confirmed">Đã xác nhận</option>
              <option value="processing">Đang xử lý</option>
              <option value="shipping">Đang giao</option>
              <option value="completed">Hoàn thành</option>
              <option value="cancelled">Đã hủy</option>
              <option value="refunded">Đã hoàn tiền</option>
            </select>
          </div>
          <button
            className="action-btn delete"
            title="Xóa"
            onClick={() => handleDelete(record.id)}
          >
            <span className="material-icons">delete</span>
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="order-management">
      <div className="page-header">
        <div className="header-content">
          <h1>
            <span className="material-icons">shopping_cart</span>
            Quản lý đơn hàng
          </h1>
          <p>Quản lý tất cả đơn hàng trong hệ thống</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-outline">
            <span className="material-icons">file_download</span>
            Xuất báo cáo
          </button>
        </div>
      </div>

      <div className="page-content">
        <div className="table-toolbar">
          <div className="toolbar-left">
            <div className="bulk-actions">
              {selectedRows.length > 0 && (
                <>
                  <span className="selected-info">
                    Đã chọn {selectedRows.length} đơn hàng
                  </span>
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => handleBulkStatusChange('confirmed')}
                  >
                    Xác nhận
                  </button>
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => handleBulkStatusChange('processing')}
                  >
                    Xử lý
                  </button>
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => handleBulkStatusChange('shipping')}
                  >
                    Giao hàng
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={handleBulkDelete}
                  >
                    <span className="material-icons">delete</span>
                    Xóa
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="toolbar-right">
            <div className="view-options">
              <button className="btn btn-ghost btn-sm">
                <span className="material-icons">print</span>
                In báo cáo
              </button>
              <button className="btn btn-ghost btn-sm">
                <span className="material-icons">refresh</span>
                Làm mới
              </button>
            </div>
          </div>
        </div>

        <DataTable
          data={orders}
          columns={columns}
          loading={loading}
          rowSelection={{
            selectedRowKeys: selectedRows,
            onChange: (keys, rows) => setSelectedRows(keys)
          }}
          pagination={{
            current: currentPage,
            pageSize: pageSize,
            total: totalOrders,
            onChange: (page, size) => setCurrentPage(page)
          }}
          expandable={{
            expandedRowRender: (record) => (
              <div className="expanded-details">
                <div className="detail-grid">
                  <div className="detail-section">
                    <h4>Thông tin giao hàng</h4>
                    <div className="shipping-info">
                      <div className="shipping-address">
                        <strong>Địa chỉ:</strong> {record.shipping_address}
                      </div>
                      <div className="payment-method">
                        <strong>Phương thức thanh toán:</strong> {getPaymentMethodLabel(record.payment_method)}
                      </div>
                      {record.notes && (
                        <div className="order-notes">
                          <strong>Ghi chú:</strong> {record.notes}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="detail-section">
                    <h4>Chi tiết sản phẩm</h4>
                    <div className="products-detail">
                      {record.products.map((product, index) => (
                        <div key={index} className="product-detail-item">
                          <div className="product-name">{product.name}</div>
                          <div className="product-quantity">Số lượng: {product.quantity}</div>
                          <div className="product-price">Giá: {formatCurrency(product.price)}</div>
                          <div className="product-total">Thành tiền: {formatCurrency(product.price * product.quantity)}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          }}
          onRow={(record, index) => ({
            onDoubleClick: () => handleViewDetail(record)
          })}
          size="medium"
          bordered
        />
      </div>

      {/* Order Detail Modal */}
      {showDetailModal && selectedOrder && (
        <div className="modal-overlay" onClick={() => setShowDetailModal(false)}>
          <div className="modal-content large" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Chi tiết đơn hàng #{selectedOrder.id}</h3>
              <button
                className="modal-close"
                onClick={() => setShowDetailModal(false)}
              >
                <span className="material-icons">close</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="order-detail-content">
                <div className="detail-row">
                  <div className="detail-col">
                    <h4>Thông tin khách hàng</h4>
                    <div className="customer-detail">
                      <div><strong>Tên:</strong> {selectedOrder.customer_name}</div>
                      <div><strong>Email:</strong> {selectedOrder.customer_email}</div>
                      <div><strong>Điện thoại:</strong> {selectedOrder.customer_phone}</div>
                      <div><strong>Địa chỉ giao hàng:</strong> {selectedOrder.shipping_address}</div>
                    </div>
                  </div>
                  <div className="detail-col">
                    <h4>Thông tin đơn hàng</h4>
                    <div className="order-detail">
                      <div><strong>Trạng thái:</strong> {getStatusBadge(selectedOrder.status)}</div>
                      <div><strong>Thanh toán:</strong> {getPaymentStatusBadge(selectedOrder.payment_status)}</div>
                      <div><strong>Phương thức:</strong> {getPaymentMethodLabel(selectedOrder.payment_method)}</div>
                      <div><strong>Ngày đặt:</strong> {new Date(selectedOrder.order_date).toLocaleString('vi-VN')}</div>
                      <div><strong>Cập nhật cuối:</strong> {new Date(selectedOrder.updated_at).toLocaleString('vi-VN')}</div>
                    </div>
                  </div>
                </div>

                <div className="products-section">
                  <h4>Sản phẩm đã đặt</h4>
                  <div className="products-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Sản phẩm</th>
                          <th>Số lượng</th>
                          <th>Đơn giá</th>
                          <th>Thành tiền</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedOrder.products.map((product, index) => (
                          <tr key={index}>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>{formatCurrency(product.price)}</td>
                            <td>{formatCurrency(product.price * product.quantity)}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan={3}><strong>Tổng cộng:</strong></td>
                          <td><strong>{formatCurrency(selectedOrder.total_amount)}</strong></td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>

                {selectedOrder.notes && (
                  <div className="notes-section">
                    <h4>Ghi chú</h4>
                    <p>{selectedOrder.notes}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderManagement; 