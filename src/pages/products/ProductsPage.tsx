import React, { useState, useEffect } from 'react';
import Breadcrumb from '../../components/ui/breadcrumb';
import ProductCard from '../../components/ui/product-card';
import './style.scss';

interface Product {
  id: string;
  name: string;
  brand: string;
  image: string;
  rentalPrice: number;
  membershipPrice: number;
  depositPrice: number;
  clearancePrice?: number;
  colors: string[];
  sizes: string[];
  isOutOfStock?: boolean;
  category: string;
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const productsPerPage = 24;

  // Mock data based on Hizu website
  const mockProducts: Product[] = [
    {
      id: '1',
      name: 'Áo dài Bạch Diệp quần đỏ XÉO XỌ',
      brand: 'XÉO XỌ',
      image: '/images/ao-dai-placeholder.svg',
      rentalPrice: 730000,
      membershipPrice: 547500,
      depositPrice: 3230000,
      clearancePrice: 1825000,
      colors: ['Đỏ', 'Trắng'],
      sizes: ['S', 'M', 'L'],
      category: 'Áo dài nữ'
    },
    {
      id: '2',
      name: 'Áo dài Bích Chi quần xanh lá đậm XÉO XỌ',
      brand: 'XÉO XỌ',
      image: '/images/ao-dai-placeholder.svg',
      rentalPrice: 1200000,
      membershipPrice: 900000,
      depositPrice: 4700000,
      colors: ['Xanh lá'],
      sizes: ['S', 'M', 'L'],
      category: 'Áo dài nữ'
    },
    {
      id: '3',
      name: 'Áo dài cách tân trắng Nam LAMUSE',
      brand: 'LAMUSE',
      image: '/images/ao-dai-placeholder.svg',
      rentalPrice: 290000,
      membershipPrice: 217500,
      depositPrice: 1090000,
      colors: ['Trắng'],
      sizes: ['M', 'L', 'XL'],
      category: 'Áo dài nam'
    },
    {
      id: '4',
      name: 'Áo dài cam AMY',
      brand: 'AMY STORE',
      image: '/images/ao-dai-placeholder.svg',
      rentalPrice: 600000,
      membershipPrice: 450000,
      depositPrice: 2600000,
      clearancePrice: 950000,
      colors: ['Cam'],
      sizes: ['S', 'M'],
      category: 'Áo dài nữ'
    },
    {
      id: '5',
      name: 'Áo dài cam đào LESART',
      brand: 'LESART',
      image: '/images/ao-dai-placeholder.svg',
      rentalPrice: 900000,
      membershipPrice: 675000,
      depositPrice: 3900000,
      clearancePrice: 1500000,
      colors: ['Cam'],
      sizes: ['S', 'M', 'L'],
      isOutOfStock: true,
      category: 'Áo dài nữ'
    },
    {
      id: '6',
      name: 'Áo dài cam quần vàng HUONG BOUTIQUE',
      brand: 'HUONG BOUTIQUE',
      image: '/images/ao-dai-placeholder.svg',
      rentalPrice: 1200000,
      membershipPrice: 900000,
      depositPrice: 5200000,
      colors: ['Cam', 'Vàng'],
      sizes: ['M', 'L'],
      category: 'Áo dài nữ'
    },
    {
      id: '7',
      name: 'Áo dài đỏ truyền thống LALIN',
      brand: 'LALIN',
      image: '/images/ao-dai-placeholder.svg',
      rentalPrice: 800000,
      membershipPrice: 600000,
      depositPrice: 3500000,
      colors: ['Đỏ'],
      sizes: ['S', 'M', 'L', 'XL'],
      category: 'Áo dài nữ'
    },
    {
      id: '8',
      name: 'Áo dài hồng pastel XÉO XỌ',
      brand: 'XÉO XỌ',
      image: '/images/ao-dai-placeholder.svg',
      rentalPrice: 650000,
      membershipPrice: 487500,
      depositPrice: 2900000,
      clearancePrice: 1200000,
      colors: ['Hồng'],
      sizes: ['S', 'M'],
      category: 'Áo dài nữ'
    },
    {
      id: '9',
      name: 'Áo dài xanh dương nam LAMUSE',
      brand: 'LAMUSE',
      image: '/images/ao-dai-placeholder.svg',
      rentalPrice: 350000,
      membershipPrice: 262500,
      depositPrice: 1200000,
      colors: ['Xanh dương'],
      sizes: ['M', 'L', 'XL'],
      category: 'Áo dài nam'
    },
    {
      id: '10',
      name: 'Áo dài tím lavender LESART',
      brand: 'LESART',
      image: '/images/ao-dai-placeholder.svg',
      rentalPrice: 950000,
      membershipPrice: 712500,
      depositPrice: 4200000,
      colors: ['Tím'],
      sizes: ['S', 'M', 'L'],
      category: 'Áo dài nữ'
    },
    {
      id: '11',
      name: 'Áo dài vàng gold HUONG BOUTIQUE',
      brand: 'HUONG BOUTIQUE',
      image: '/images/ao-dai-placeholder.svg',
      rentalPrice: 1100000,
      membershipPrice: 825000,
      depositPrice: 4800000,
      clearancePrice: 1800000,
      colors: ['Vàng'],
      sizes: ['M', 'L'],
      category: 'Áo dài nữ'
    },
    {
      id: '12',
      name: 'Áo dài đen elegant AMY STORE',
      brand: 'AMY STORE',
      image: '/images/ao-dai-placeholder.svg',
      rentalPrice: 750000,
      membershipPrice: 562500,
      depositPrice: 3300000,
      colors: ['Đen'],
      sizes: ['S', 'M', 'L'],
      category: 'Áo dài nữ'
    }
  ];

  const brands = ['XÉO XỌ', 'LAMUSE', 'AMY STORE', 'LESART', 'HUONG BOUTIQUE', 'LALIN'];
  const colors = ['Trắng', 'Đen', 'Đỏ', 'Hồng', 'Xanh lá', 'Xanh dương', 'Cam', 'Vàng', 'Tím'];
  const categories = ['Áo dài nữ', 'Áo dài nam', 'Áo dài bưng quả'];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProducts(mockProducts);
      setFilteredProducts(mockProducts);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = products;

    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => selectedBrands.includes(product.brand));
    }

    if (selectedColors.length > 0) {
      filtered = filtered.filter(product => 
        product.colors.some(color => selectedColors.includes(color))
      );
    }

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => selectedCategories.includes(product.category));
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [selectedBrands, selectedColors, selectedCategories, products]);

  const handleBrandFilter = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handleColorFilter = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const clearAllFilters = () => {
    setSelectedBrands([]);
    setSelectedColors([]);
    setSelectedCategories([]);
  };

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const breadcrumbItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Sản phẩm', href: '/products' },
    { label: 'Áo dài', href: '/products/ao-dai' }
  ];

  if (isLoading) {
    return (
      <div className="products-page">
        <div className="container">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Đang tải sản phẩm...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="products-page">
      <div className="container">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="products-header">
          <h1>Áo dài</h1>
          <p className="products-count">
            Hiển thị {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} 
            của {filteredProducts.length} sản phẩm
          </p>
        </div>

        <div className="products-content">
          <aside className="products-sidebar">
            <div className="filter-section">
              <div className="filter-header">
                <h3>Bộ lọc</h3>
                {(selectedBrands.length > 0 || selectedColors.length > 0 || selectedCategories.length > 0) && (
                  <button className="clear-filters" onClick={clearAllFilters}>
                    Xóa tất cả
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="filter-group">
                <h4>Dịp</h4>
                <div className="filter-options">
                  {categories.map(category => (
                    <label key={category} className="filter-option">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryFilter(category)}
                      />
                      <span>{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="filter-group">
                <h4>Thương hiệu</h4>
                <div className="filter-options">
                  {brands.map(brand => (
                    <label key={brand} className="filter-option">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandFilter(brand)}
                      />
                      <span>{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div className="filter-group">
                <h4>Màu sắc</h4>
                <div className="filter-options">
                  {colors.map(color => (
                    <label key={color} className="filter-option">
                      <input
                        type="checkbox"
                        checked={selectedColors.includes(color)}
                        onChange={() => handleColorFilter(color)}
                      />
                      <span>{color}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <main className="products-main">
            {currentProducts.length === 0 ? (
              <div className="no-products">
                <p>Không tìm thấy sản phẩm nào phù hợp với bộ lọc của bạn.</p>
              </div>
            ) : (
              <>
                <div className="products-grid">
                  {currentProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="pagination">
                    <button
                      className="pagination-btn"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(prev => prev - 1)}
                    >
                      Trước
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    ))}
                    
                    <button
                      className="pagination-btn"
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage(prev => prev + 1)}
                    >
                      Sau
                    </button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage; 