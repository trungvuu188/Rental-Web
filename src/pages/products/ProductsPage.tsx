import React, { useState, useEffect } from 'react';
import Breadcrumb from '../../components/ui/breadcrumb';
import ProductCard from '../../components/ui/product-card';
import { mockUiProducts, productFilterOptions, type UiProduct } from '../../data';
import './style.scss';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<UiProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<UiProduct[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const productsPerPage = 24;

  const { brands, colors, categories } = productFilterOptions;

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProducts(mockUiProducts);
      setFilteredProducts(mockUiProducts);
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