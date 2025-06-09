import React, { useState, useEffect } from 'react';
import './CategoryManagement.scss';

interface Category {
  id: string;
  name: string;
  description: string;
  productCount: number;
  status: 'active' | 'inactive';
  createdAt: string;
}

export const CategoryManagement: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setCategories([
        {
          id: '1',
          name: 'Máy khoan',
          description: 'Các loại máy khoan điện và pin',
          productCount: 25,
          status: 'active',
          createdAt: '2024-01-15'
        },
        {
          id: '2',
          name: 'Máy cưa',
          description: 'Máy cưa gỗ, sắt và các vật liệu khác',
          productCount: 18,
          status: 'active',
          createdAt: '2024-01-10'
        },
        {
          id: '3',
          name: 'Máy mài',
          description: 'Máy mài góc và máy mài thẳng',
          productCount: 12,
          status: 'active',
          createdAt: '2024-01-08'
        },
        {
          id: '4',
          name: 'Dụng cụ cầm tay',
          description: 'Búa, kìm, tua vít và các dụng cụ cầm tay',
          productCount: 45,
          status: 'active',
          createdAt: '2024-01-05'
        }
      ]);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa danh mục này?')) {
      try {
        // Mock API call
        await new Promise(resolve => setTimeout(resolve, 500));
        setCategories(prev => prev.filter(cat => cat.id !== id));
      } catch (error) {
        console.error('Error deleting category:', error);
      }
    }
  };

  const handleToggleStatus = async (id: string) => {
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setCategories(prev => prev.map(cat => 
        cat.id === id 
          ? { ...cat, status: cat.status === 'active' ? 'inactive' : 'active' }
          : cat
      ));
    } catch (error) {
      console.error('Error updating category status:', error);
    }
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <span className="material-icons rotating">refresh</span>
          <span>Đang tải danh mục...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="category-management">
      <div className="page-header">
        <div className="header-content">
          <h1>
            <span className="material-icons">category</span>
            Quản lý danh mục
          </h1>
          <p>Quản lý danh mục sản phẩm và phân loại</p>
        </div>
        <div className="header-actions">
          <button 
            className="btn btn-primary"
            onClick={() => setShowAddModal(true)}
          >
            <span className="material-icons">add</span>
            Thêm danh mục
          </button>
        </div>
      </div>

      <div className="content-card">
        <div className="table-header">
          <div className="search-box">
            <span className="material-icons">search</span>
            <input
              type="text"
              placeholder="Tìm kiếm danh mục..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="table-info">
            Tổng cộng: {filteredCategories.length} danh mục
          </div>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Tên danh mục</th>
                <th>Mô tả</th>
                <th>Số sản phẩm</th>
                <th>Trạng thái</th>
                <th>Ngày tạo</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {filteredCategories.map(category => (
                <tr key={category.id}>
                  <td>
                    <div className="category-name">
                      <span className="material-icons">folder</span>
                      {category.name}
                    </div>
                  </td>
                  <td className="description">{category.description}</td>
                  <td>
                    <span className="product-count">{category.productCount}</span>
                  </td>
                  <td>
                    <span className={`status-badge ${category.status}`}>
                      {category.status === 'active' ? 'Hoạt động' : 'Tạm dừng'}
                    </span>
                  </td>
                  <td>{new Date(category.createdAt).toLocaleDateString('vi-VN')}</td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="btn-icon"
                        onClick={() => setEditingCategory(category)}
                        title="Chỉnh sửa"
                      >
                        <span className="material-icons">edit</span>
                      </button>
                      <button
                        className="btn-icon"
                        onClick={() => handleToggleStatus(category.id)}
                        title={category.status === 'active' ? 'Tạm dừng' : 'Kích hoạt'}
                      >
                        <span className="material-icons">
                          {category.status === 'active' ? 'pause' : 'play_arrow'}
                        </span>
                      </button>
                      <button
                        className="btn-icon danger"
                        onClick={() => handleDelete(category.id)}
                        title="Xóa"
                      >
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