import React, { useState, useEffect } from 'react';
import { DataTable, Column } from '../../components/ui/data-table';
import { mockAdminProducts } from '../../data/admin';
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
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [totalProducts, setTotalProducts] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Load mock products
      const mockProducts: Product[] = mockAdminProducts.map(p => ({
        id: p.id,
        name: p.name,
        category: p.category,
        price: p.price,
        stock: p.stock,
        status: p.status,
        image: p.image,
        description: p.description,
        created_at: p.created_at,
        updated_at: p.updated_at,
      }));

      // Load new products from localStorage
      const newProducts = JSON.parse(localStorage.getItem('newProducts') || '[]');
      
      // Prepend new products to appear at the top
      const allProducts = [...newProducts, ...mockProducts];
      
      // Update total products
      setTotalProducts(allProducts.length);
      
      // Calculate pagination
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedProducts = allProducts.slice(startIndex, endIndex);

      setProducts(allProducts);
      setDisplayedProducts(paginatedProducts);
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
      const updatedProducts = products.filter(p => p.id !== productId);
      setProducts(updatedProducts);
      setTotalProducts(updatedProducts.length);

      // Update localStorage
      const newProducts = JSON.parse(localStorage.getItem('newProducts') || '[]');
      const updatedNewProducts = newProducts.filter((p: Product) => p.id !== productId);
      localStorage.setItem('newProducts', JSON.stringify(updatedNewProducts));

      // Update displayed products with pagination
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      setDisplayedProducts(updatedProducts.slice(startIndex, endIndex));

      // Adjust current page if necessary
      const totalPages = Math.ceil(updatedProducts.length / pageSize);
      if (currentPage > totalPages && totalPages > 0) {
        setCurrentPage(totalPages);
      }
    }
  };

  const handleBulkDelete = () => {
    if (selectedRows.length === 0) return;

    if (window.confirm(`Bạn có chắc chắn muốn xóa ${selectedRows.length} sản phẩm đã chọn?`)) {
      // Calculate actual product indices considering pagination
      const startIndex = (currentPage - 1) * pageSize;
      const selectedProductIndices = selectedRows.map(row => startIndex + Number(row));
      const updatedProducts = products.filter((_, index) => !selectedProductIndices.includes(index));
      setProducts(updatedProducts);
      setTotalProducts(updatedProducts.length);

      // Update localStorage
      const newProducts = JSON.parse(localStorage.getItem('newProducts') || '[]');
      const updatedNewProducts = newProducts.filter((p: Product) => 
        updatedProducts.some(up => up.id === p.id)
      );
      localStorage.setItem('newProducts', JSON.stringify(updatedNewProducts));
      setSelectedRows([]);

      // Update displayed products
      const newStartIndex = (currentPage - 1) * pageSize;
      const newEndIndex = newStartIndex + pageSize;
      setDisplayedProducts(updatedProducts.slice(newStartIndex, newEndIndex));

      // Adjust current page if necessary
      const totalPages = Math.ceil(updatedProducts.length / pageSize);
      if (currentPage > totalPages && totalPages > 0) {
        setCurrentPage(totalPages);
      }
    }
  };

  const handleBulkStatusChange = (status: string) => {
    if (selectedRows.length === 0) return;

    const startIndex = (currentPage - 1) * pageSize;
    const selectedProductIndices = selectedRows.map(row => startIndex + Number(row));
    
    const updatedProducts = products.map((product, index) => {
      if (selectedProductIndices.includes(index)) {
        return { ...product, status: status as any, updated_at: new Date().toISOString() };
      }
      return product;
    });

    setProducts(updatedProducts);
    setDisplayedProducts(updatedProducts.slice(startIndex, startIndex + pageSize));

    // Update localStorage
    const newProducts = JSON.parse(localStorage.getItem('newProducts') || '[]');
    const updatedNewProducts = newProducts.map((p: Product) => {
      const updated = updatedProducts.find(up => up.id === p.id);
      return updated || p;
    });
    localStorage.setItem('newProducts', JSON.stringify(updatedNewProducts));
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
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/80';
            }}
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
        { label: 'Women', value: 'Women' },
        { label: 'Men', value: 'Men' },
        { label: 'Swimsuit', value: 'Swimsuit' }
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
        <DataTable
          data={displayedProducts}
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