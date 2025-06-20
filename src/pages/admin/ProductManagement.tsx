import React, { useState, useEffect } from 'react';
import { DataTable, Column } from '../../components/ui/data-table';
import './ProductManagement.scss';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'active' | 'inactive' | 'out_of_stock';
  image: string;
  description: string;
  created_at: string;
  updated_at: string;
}

const ProductManagement: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [totalProducts] = useState(156); // Mock total
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      const mockProducts: Product[] = [
        {
          id: '1',
          name: 'Máy khoan Bosch GSB 120-LI',
          category: 'Máy khoan',
          price: 2500000,
          stock: 25,
          status: 'active',
          image: '/images/products/drill-1.jpg',
          description: 'Máy khoan pin 12V chuyên nghiệp',
          created_at: '2024-01-15',
          updated_at: '2024-01-20'
        },
        {
          id: '2',
          name: 'Máy cưa lọng Makita JV0600K',
          category: 'Máy cưa',
          price: 3200000,
          stock: 0,
          status: 'out_of_stock',
          image: '/images/products/saw-1.jpg',
          description: 'Máy cưa lọng 650W công suất cao',
          created_at: '2024-01-10',
          updated_at: '2024-01-18'
        },
        {
          id: '3',
          name: 'Máy mài góc DeWalt DWE4157',
          category: 'Máy mài',
          price: 1800000,
          stock: 15,
          status: 'active',
          image: '/images/products/grinder-1.jpg',
          description: 'Máy mài góc 125mm 900W',
          created_at: '2024-01-08',
          updated_at: '2024-01-22'
        },
        {
          id: '4',
          name: 'Máy bào Stanley SB90',
          category: 'Máy bào',
          price: 1200000,
          stock: 8,
          status: 'inactive',
          image: '/images/products/planer-1.jpg',
          description: 'Máy bào gỗ điện 900W',
          created_at: '2024-01-05',
          updated_at: '2024-01-15'
        },
        {
          id: '5',
          name: 'Máy khoan búa Hilti TE 2-A22',
          category: 'Máy khoan',
          price: 4500000,
          stock: 12,
          status: 'active',
          image: '/images/products/hammer-drill-1.jpg',
          description: 'Máy khoan búa pin 22V SDS-plus',
          created_at: '2024-01-02',
          updated_at: '2024-01-25'
        }
      ];

      setProducts(mockProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
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
      active: { label: 'Hoạt động', class: 'success' },
      inactive: { label: 'Tạm dừng', class: 'warning' },
      out_of_stock: { label: 'Hết hàng', class: 'error' }
    };

    const statusInfo = statusMap[status as keyof typeof statusMap] || { label: status, class: 'default' };

    return (
      <span className={`status-badge ${statusInfo.class}`}>
        {statusInfo.label}
      </span>
    );
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setShowEditModal(true);
  };

  const handleDelete = (productId: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
      setProducts(prev => prev.filter(p => p.id !== productId));
    }
  };

  const handleBulkDelete = () => {
    if (selectedRows.length === 0) return;

    if (window.confirm(`Bạn có chắc chắn muốn xóa ${selectedRows.length} sản phẩm đã chọn?`)) {
      setProducts(prev => prev.filter((_, index) => !selectedRows.includes(index)));
      setSelectedRows([]);
    }
  };

  const handleBulkStatusChange = (status: string) => {
    if (selectedRows.length === 0) return;

    setProducts(prev => prev.map((product, index) => {
      if (selectedRows.includes(index)) {
        return { ...product, status: status as any };
      }
      return product;
    }));
    setSelectedRows([]);
  };

  const columns: Column<Product>[] = [
    {
      key: 'image',
      title: 'Hình ảnh',
      width: 80,
      align: 'center',
      render: (value, record) => (
        <div className="product-image">
          <img
            src={record.image}
            alt={record.name}
          // onError={(e) => {
          //   (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
          // }}
          />
        </div>
      )
    },
    {
      key: 'name',
      title: 'Tên sản phẩm',
      sortable: true,
      filterable: true,
      filterType: 'text',
      render: (value, record) => (
        <div className="product-info">
          <div className="product-name">{record.name}</div>
          <div className="product-id">ID: {record.id}</div>
        </div>
      )
    },
    {
      key: 'category',
      title: 'Danh mục',
      sortable: true,
      filterable: true,
      filterType: 'select',
      filterOptions: [
        { label: 'Couple', value: 'Couple' },
        { label: 'Men', value: 'Men' },
        { label: 'Women', value: 'Women' },
        { label: 'Swim Suit', value: 'Swim Suit' }
      ]
    },
    {
      key: 'price',
      title: 'Giá',
      sortable: true,
      align: 'right',
      filterable: true,
      filterType: 'number',
      render: (value) => formatCurrency(value)
    },
    {
      key: 'stock',
      title: 'Tồn kho',
      sortable: true,
      align: 'center',
      filterable: true,
      filterType: 'number',
      render: (value, record) => (
        <div className={`stock-info ${value === 0 ? 'out-of-stock' : value < 10 ? 'low-stock' : ''}`}>
          {value}
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
        { label: 'Hoạt động', value: 'active' },
        { label: 'Tạm dừng', value: 'inactive' },
        { label: 'Hết hàng', value: 'out_of_stock' }
      ],
      render: (value) => getStatusBadge(value)
    },
    {
      key: 'updated_at',
      title: 'Cập nhật',
      sortable: true,
      filterable: true,
      filterType: 'date',
      render: (value) => new Date(value).toLocaleDateString('vi-VN')
    },
    {
      key: 'actions',
      title: 'Thao tác',
      align: 'center',
      width: 120,
      render: (_, record) => (
        <div className="action-buttons">
          <button
            className="action-btn view"
            title="Xem chi tiết"
            onClick={() => console.log('View', record)}
          >
            <span className="material-icons">visibility</span>
          </button>
          <button
            className="action-btn edit"
            title="Chỉnh sửa"
            onClick={() => handleEdit(record)}
          >
            <span className="material-icons">edit</span>
          </button>
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
    <div className="product-management">
      <div className="page-header">
        <div className="header-content">
          <h1>
            <span className="material-icons">inventory_2</span>
            Quản lý sản phẩm
          </h1>
          <p>Quản lý danh sách sản phẩm trong hệ thống</p>
        </div>
        <div className="header-actions">
          <button
            className="btn btn-primary"
            onClick={() => setShowAddModal(true)}
          >
            <span className="material-icons">add</span>
            Thêm sản phẩm
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
                    Đã chọn {selectedRows.length} sản phẩm
                  </span>
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => handleBulkStatusChange('active')}
                  >
                    Kích hoạt
                  </button>
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => handleBulkStatusChange('inactive')}
                  >
                    Tạm dừng
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
                <span className="material-icons">import_export</span>
                Xuất Excel
              </button>
              <button className="btn btn-ghost btn-sm">
                <span className="material-icons">refresh</span>
                Làm mới
              </button>
            </div>
          </div>
        </div>

        <DataTable
          data={products}
          columns={columns}
          loading={loading}
          rowSelection={{
            selectedRowKeys: selectedRows,
            onChange: (keys, rows) => setSelectedRows(keys)
          }}
          pagination={{
            current: currentPage,
            pageSize: pageSize,
            total: totalProducts,
            onChange: (page, size) => setCurrentPage(page)
          }}
          expandable={{
            expandedRowRender: (record) => (
              <div className="expanded-details">
                <div className="detail-section">
                  <h4>Mô tả sản phẩm</h4>
                  <p>{record.description}</p>
                </div>
                <div className="detail-grid">
                  <div className="detail-item">
                    <label>Ngày tạo:</label>
                    <span>{new Date(record.created_at).toLocaleDateString('vi-VN')}</span>
                  </div>
                  <div className="detail-item">
                    <label>Lần cập nhật cuối:</label>
                    <span>{new Date(record.updated_at).toLocaleDateString('vi-VN')}</span>
                  </div>
                </div>
              </div>
            )
          }}
          onRow={(record, index) => ({
            onDoubleClick: () => handleEdit(record)
          })}
          size="medium"
          bordered
        />
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Thêm sản phẩm mới</h3>
              <button
                className="modal-close"
                onClick={() => setShowAddModal(false)}
              >
                <span className="material-icons">close</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Form thêm sản phẩm sẽ được triển khai...</p>
            </div>
          </div>
        </div>
      )}

      {/* Edit Product Modal */}
      {showEditModal && editingProduct && (
        <div className="modal-overlay" onClick={() => setShowEditModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Chỉnh sửa sản phẩm</h3>
              <button
                className="modal-close"
                onClick={() => setShowEditModal(false)}
              >
                <span className="material-icons">close</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Form chỉnh sửa sản phẩm "{editingProduct.name}" sẽ được triển khai...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManagement; 