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
import './style.scss';

// Mock data cho sản phẩm
const mockProduct: Product = {
  id: '1',
  name: 'Set áo vest và chân váy màng tang',
  code: 'SP001',
  brand: 'Fashion Elite',
  category: 'Trang phục công sở',
  description: 'Set áo vest và chân váy màng tang cao cấp, thiết kế hiện đại, phù hợp cho các dịp quan trọng.',
  shortDescription: 'Set vest nữ cao cấp với thiết kế thanh lịch, chất liệu premium, phù hợp cho môi trường công sở và các sự kiện trang trọng.',
  images: [
    {
      id: '1',
      url: 'https://via.placeholder.com/600x800?text=Main+Image',
      alt: 'Set áo vest và chân váy màng tang - Hình chính',
      isMain: true
    },
    {
      id: '2',
      url: 'https://via.placeholder.com/600x800?text=Front+View',
      alt: 'Set áo vest và chân váy màng tang - Mặt trước'
    },
    {
      id: '3',
      url: 'https://via.placeholder.com/600x800?text=Back+View',
      alt: 'Set áo vest và chân váy màng tang - Mặt sau'
    },
    {
      id: '4',
      url: 'https://via.placeholder.com/600x800?text=Detail+View',
      alt: 'Set áo vest và chân váy màng tang - Chi tiết'
    }
  ],
  variants: [
    {
      id: 'v1',
      size: 'S',
      color: 'Đen',
      colorCode: '#000000',
      stock: 5,
      rentalPrice: 650000
    },
    {
      id: 'v2',
      size: 'M',
      color: 'Đen',
      colorCode: '#000000',
      stock: 3,
      rentalPrice: 650000
    },
    {
      id: 'v3',
      size: 'L',
      color: 'Đen',
      colorCode: '#000000',
      stock: 2,
      rentalPrice: 650000
    },
    {
      id: 'v4',
      size: 'S',
      color: 'Xám',
      colorCode: '#808080',
      stock: 4,
      rentalPrice: 680000
    },
    {
      id: 'v5',
      size: 'M',
      color: 'Xám',
      colorCode: '#808080',
      stock: 0,
      rentalPrice: 680000
    }
  ],
  baseRentalPrice: 650000,
  rating: 4.8,
  reviewCount: 24,
  isAvailable: true,
  tags: ['Trang phục công sở', 'Thanh lịch', 'Cao cấp', 'Dễ phối đồ'],
  tabs: [
    {
      id: 'description',
      title: 'Mô tả sản phẩm',
      content: `
        <h3>Thông tin sản phẩm</h3>
        <p>Set áo vest và chân váy màng tang được thiết kế với phong cách hiện đại, thanh lịch. Sản phẩm được may từ chất liệu cao cấp, đảm bảo độ bền và thoải mái khi mặc.</p>
        
        <h4>Đặc điểm nổi bật:</h4>
        <ul>
          <li>Chất liệu: Vải poly cao cấp, co giãn nhẹ</li>
          <li>Thiết kế: Áo vest cổ vest, chân váy ôm dáng</li>
          <li>Màu sắc: Đen, xám cơ bản dễ phối đồ</li>
          <li>Kích cỡ: S, M, L</li>
          <li>Phù hợp: Môi trường công sở, sự kiện trang trọng</li>
        </ul>
      `
    },
    {
      id: 'size-guide',
      title: 'Hướng dẫn chọn size',
      content: `
        <h3>Bảng size chi tiết</h3>
        <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
          <thead>
            <tr style="background-color: #f5f5f5;">
              <th style="border: 1px solid #ddd; padding: 8px;">Size</th>
              <th style="border: 1px solid #ddd; padding: 8px;">Vòng ngực (cm)</th>
              <th style="border: 1px solid #ddd; padding: 8px;">Vòng eo (cm)</th>
              <th style="border: 1px solid #ddd; padding: 8px;">Vòng mông (cm)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;">S</td>
              <td style="border: 1px solid #ddd; padding: 8px;">82-86</td>
              <td style="border: 1px solid #ddd; padding: 8px;">66-70</td>
              <td style="border: 1px solid #ddd; padding: 8px;">90-94</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;">M</td>
              <td style="border: 1px solid #ddd; padding: 8px;">86-90</td>
              <td style="border: 1px solid #ddd; padding: 8px;">70-74</td>
              <td style="border: 1px solid #ddd; padding: 8px;">94-98</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;">L</td>
              <td style="border: 1px solid #ddd; padding: 8px;">90-94</td>
              <td style="border: 1px solid #ddd; padding: 8px;">74-78</td>
              <td style="border: 1px solid #ddd; padding: 8px;">98-102</td>
            </tr>
          </tbody>
        </table>
        
        <p><strong>Lưu ý:</strong> Nên đo kích thước cơ thể để chọn size phù hợp nhất.</p>
      `
    },
    {
      id: 'care',
      title: 'Hướng dẫn bảo quản',
      content: `
        <h3>Cách bảo quản sản phẩm</h3>
        <ul>
          <li>Giặt tay bằng nước lạnh hoặc giặt máy ở chế độ nhẹ</li>
          <li>Không sử dụng chất tẩy có chứa clo</li>
          <li>Phơi khô tự nhiên, tránh ánh nắng trực tiếp</li>
          <li>Là ủi ở nhiệt độ trung bình</li>
          <li>Bảo quản nơi khô ráo, thoáng mát</li>
        </ul>
      `
    }
  ],
  faqs: [
    {
      id: 'faq1',
      question: 'Thời gian thuê tối thiểu là bao lâu?',
      answer: 'Thời gian thuê tối thiểu là 1 ngày. Bạn có thể thuê theo ngày, tuần hoặc tháng tùy theo nhu cầu.'
    },
    {
      id: 'faq2',
      question: 'Có dịch vụ giao hàng và nhận trả tại nhà không?',
      answer: 'Có, chúng tôi có dịch vụ giao nhận tại nhà trong nội thành. Phí giao hàng được tính theo khoảng cách.'
    },
    {
      id: 'faq3',
      question: 'Nếu sản phẩm bị hỏng trong quá trình thuê thì sao?',
      answer: 'Nếu hỏng do lỗi sản xuất, chúng tôi sẽ đổi sản phẩm miễn phí. Nếu hỏng do người dùng, sẽ có phí sửa chữa hoặc đền bù tùy mức độ.'
    },
    {
      id: 'faq4',
      question: 'Có thể đổi size sau khi thuê không?',
      answer: 'Có thể đổi size trong vòng 24h đầu nếu còn hàng. Phí đổi size là 50,000 VNĐ.'
    }
  ],
  relatedProducts: ['2', '3', '4', '5']
};

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
        setProduct(mockProduct);
        setSelectedVariant(mockProduct.variants[0]);
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