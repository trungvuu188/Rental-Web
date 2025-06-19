import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/ui/breadcrumb';
import ProductGallery from './components/ProductGallery';
import ProductInfo from './components/ProductInfo';
import ProductActions from './components/ProductActions';
import PromotionSection from './components/PromotionSection';
import ProductTabs from './components/ProductTabs';
import FAQSection from './components/FAQSection';
import RelatedProducts from './components/RelatedProducts';
import { Product, ProductVariant } from '../../types/product';
import { mockProductDetail } from '../../data';
import './style.scss';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const loadProduct = async () => {
      setLoading(true);
      try {
        // In thực tế sẽ fetch từ API theo id
        await new Promise(resolve => setTimeout(resolve, 500));
        setProduct(mockProductDetail);
        setSelectedVariant(mockProductDetail.variants[0]);
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  const handleVariantChange = (variant: ProductVariant) => {
    setSelectedVariant(variant);
  };

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = (type: 'rental') => {
    if (!selectedVariant) return;

    console.log('Add to cart:', {
      productId: product?.id,
      variantId: selectedVariant.id,
      quantity,
      type
    });

    // Implement add to cart logic
    alert(`Đã thêm ${quantity} sản phẩm vào giỏ hàng để thuê`);
  };

  const breadcrumbItems = [
    { label: 'Trang chủ', path: '/' },
    { label: 'Sản phẩm', path: '/products' },
    { label: product?.name || 'Chi tiết sản phẩm' }
  ];

  if (loading) {
    return (
      <div className="product-page">
        <div className="product-page__loading">
          <div className="product-page__spinner">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p>Đang tải sản phẩm...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-page">
        <div className="product-page__error">
          <h2>Không tìm thấy sản phẩm</h2>
          <p>Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="product-page">
      <div className="container">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Main Product Section */}
        <div className="product-page__main">
          <div className="product-page__gallery">
            <ProductGallery
              images={product.images}
              productName={product.name}
            />
          </div>

          <div className="product-page__info">
            <ProductInfo
              product={product}
              selectedVariant={selectedVariant}
            />
          </div>

          <div className="product-page__actions">
            <ProductActions
              product={product}
              selectedVariant={selectedVariant}
              onVariantChange={handleVariantChange}
              onQuantityChange={handleQuantityChange}
              onAddToCart={handleAddToCart}
            />

            <PromotionSection />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="product-page__details">
          <ProductTabs
            tabs={product.tabs}
            activeTab="description"
            onTabChange={(tabId) => console.log('Tab changed:', tabId)}
          />
        </div>

        {/* FAQ Section */}
        <div className="product-page__faq">
          <FAQSection faqs={product.faqs} />
        </div>

        {/* Related Products */}
        <div className="product-page__related">
          <RelatedProducts productIds={product.relatedProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;