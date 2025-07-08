import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductForm.scss';

interface Category {
  id: string;
  name: string;
}

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

interface ProductForm {
  name: string;
  description: string;
  price: number;
  categoryId: string;
  image: string;
  stock: number;
  status: 'active' | 'inactive' | 'out_of_stock';
}

export const AddProduct: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [formData, setFormData] = useState<ProductForm>({
    name: '',
    description: '',
    price: 0,
    categoryId: '',
    image: '',
    stock: 0,
    status: 'active'
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setCategories([
      { id: '1', name: 'Couple' },
      { id: '2', name: 'Women' },
      { id: '3', name: 'Men' },
      { id: '4', name: 'Swimsuit' }
    ]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'stock' ? Number(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const id = `prod_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const currentDate = new Date().toISOString();
      const category = categories.find(cat => cat.id === formData.categoryId)?.name || '';

      const newProduct: Product = {
        id,
        name: formData.name,
        category,
        price: formData.price,
        stock: formData.stock,
        status: formData.status,
        image: formData.image || 'https://via.placeholder.com/80',
        description: formData.description,
        created_at: currentDate,
        updated_at: currentDate
      };

      const existingProducts = JSON.parse(localStorage.getItem('newProducts') || '[]');
      localStorage.setItem('newProducts', JSON.stringify([newProduct, ...existingProducts]));

      console.log('Product created:', newProduct);
      navigate('/admin/products/list');
    } catch (error) {
      console.error('Error creating product:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-product">
      <div className="page-header">
        <div className="header-content">
          <h1>
            <span className="material-icons">add_circle</span>
            Thêm sản phẩm mới
          </h1>
          <p>Tạo sản phẩm mới trong hệ thống</p>
        </div>
        <div className="header-actions">
          <button 
            type="button" 
            className="btn btn-outline"
            onClick={() => navigate('/admin/products/list')}
          >
            <span className="material-icons">arrow_back</span>
            Quay lại
          </button>
        </div>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="product-form">
          <div className="form-section">
            <h3>Thông tin cơ bản</h3>

            <div className="form-group">
              <label htmlFor="name">Tên sản phẩm *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Nhập tên sản phẩm"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Mô tả</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                placeholder="Nhập mô tả sản phẩm"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="price">Giá (VNĐ) *</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                  min="0"
                  placeholder="0"
                />
              </div>

              <div className="form-group">
                <label htmlFor="stock">Số lượng tồn kho *</label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  required
                  min="0"
                  placeholder="0"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="categoryId">Danh mục *</label>
              <select
                id="categoryId"
                name="categoryId"
                value={formData.categoryId}
                onChange={handleInputChange}
                required
              >
                <option value="">Chọn danh mục</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="status">Trạng thái *</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                required
              >
                <option value="active">Hoạt động</option>
                <option value="inactive">Tạm dừng</option>
                <option value="out_of_stock">Hết hàng</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="image">URL hình ảnh</label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>

          <div className="form-actions">
            <button 
              type="button" 
              className="btn btn-outline"
              onClick={() => navigate('/admin/products/list')}
            >
              Hủy
            </button>
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="material-icons rotating">refresh</span>
                  Đang tạo...
                </>
              ) : (
                <>
                  <span className="material-icons">save</span>
                  Tạo sản phẩm
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
