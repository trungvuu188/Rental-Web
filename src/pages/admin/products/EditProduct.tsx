import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductForm.scss';

interface Category {
  id: string;
  name: string;
}

interface ProductForm {
  name: string;
  description: string;
  price: number;
  categoryId: string;
  imageUrl: string;
  stock: number;
  specifications: Record<string, string>;
  tags: string[];
}

export const EditProduct: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [formData, setFormData] = useState<ProductForm>({
    name: '',
    description: '',
    price: 0,
    categoryId: '',
    imageUrl: '',
    stock: 0,
    specifications: {},
    tags: []
  });

  useEffect(() => {
    fetchProduct();
    fetchCategories();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setInitialLoading(true);
      // Mock API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data
      setFormData({
        name: 'Máy khoan Bosch GSB 13 RE',
        description: 'Máy khoan động lực chuyên nghiệp với công suất 600W',
        price: 1500000,
        categoryId: '1',
        imageUrl: 'https://example.com/drill.jpg',
        stock: 25,
        specifications: {},
        tags: []
      });
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setInitialLoading(false);
    }
  };

  const fetchCategories = async () => {
    // Only show the four allowed categories
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
      // Mock API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Product updated:', formData);
      navigate('/admin/products/list');
    } catch (error) {
      console.error('Error updating product:', error);
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <span className="material-icons rotating">refresh</span>
          <span>Đang tải sản phẩm...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="edit-product">
      <div className="page-header">
        <div className="header-content">
          <h1>
            <span className="material-icons">edit</span>
            Chỉnh sửa sản phẩm
          </h1>
          <p>Cập nhật thông tin sản phẩm #{id}</p>
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
              <label htmlFor="imageUrl">URL hình ảnh</label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
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
                  Đang cập nhật...
                </>
              ) : (
                <>
                  <span className="material-icons">save</span>
                  Cập nhật sản phẩm
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}; 