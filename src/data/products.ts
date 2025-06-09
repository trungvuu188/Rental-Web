import { ApiProduct } from '../types/api';
import { Product } from '../types/product';

// Interface cho UI Products (dùng trong Products Page)
export interface UiProduct {
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

// Mock data cho API Products (dùng cho home page sections và API calls)
export const mockApiProducts: ApiProduct[] = [
  {
    "id": "e1c9d78f-9e15-4c8c-b76d-111111111111",
    "providerId": "5517537f-3a3d-4a05-85dc-08dd9f29066f",
    "providerName": "FashionTrend",
    "name": "Áo sơ mi trắng basic",
    "description": "Áo sơ mi trắng cơ bản, chất liệu cotton mềm mại, phù hợp cho công sở",
    "category": "Áo sơ mi",
    "size": "M",
    "color": "Trắng",
    "pricePerDay": 180000.00,
    "availabilityStatus": "available",
    "isPromoted": true,
    "rentCount": 25,
    "createdAt": "2025-06-04T09:39:35.69",
    "updatedAt": null,
    "primaryImagesUrl": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
    "images": [
      {
        "id": "a9b8a2f4-f87a-4a2d-aaa1-222222222222",
        "productId": "e1c9d78f-9e15-4c8c-b76d-111111111111",
        "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
        "isPrimary": true
      }
    ]
  },
  {
    "id": "33333333-3333-3333-3333-333333333333",
    "providerId": "5517537f-3a3d-4a05-85dc-08dd9f29066f",
    "providerName": "StyleHub",
    "name": "Quần jean skinny đen",
    "description": "Quần jean skinny màu đen, co giãn tốt, form ôm vừa vặn",
    "category": "Quần jean",
    "size": "L",
    "color": "Đen",
    "pricePerDay": 150000.00,
    "availabilityStatus": "available",
    "isPromoted": false,
    "rentCount": 18,
    "createdAt": "2025-05-30T03:26:47.56",
    "updatedAt": null,
    "primaryImagesUrl": "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
    "images": []
  },
  {
    "id": "44444444-4444-4444-4444-444444444444",
    "providerId": "5517537f-3a3d-4a05-85dc-08dd9f29066f",
    "providerName": "ElegantStyle",
    "name": "Váy maxi hoa nhí",
    "description": "Váy maxi họa tiết hoa nhí, phong cách vintage, thích hợp dạo phố",
    "category": "Váy",
    "size": "S",
    "color": "Hoa nhí",
    "pricePerDay": 220000.00,
    "availabilityStatus": "available",
    "isPromoted": true,
    "rentCount": 32,
    "createdAt": "2025-06-01T10:15:20.45",
    "updatedAt": null,
    "primaryImagesUrl": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
    "images": []
  },
  {
    "id": "55555555-5555-5555-5555-555555555555",
    "providerId": "5517537f-3a3d-4a05-85dc-08dd9f29066f",
    "providerName": "ModernFashion",
    "name": "Blazer nữ công sở",
    "description": "Áo blazer nữ thiết kế hiện đại, phù hợp cho môi trường công sở",
    "category": "Blazer",
    "size": "M",
    "color": "Xám",
    "pricePerDay": 280000.00,
    "availabilityStatus": "available",
    "isPromoted": true,
    "rentCount": 15,
    "createdAt": "2025-05-28T08:15:30.25",
    "updatedAt": null,
    "primaryImagesUrl": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
    "images": []
  },
  {
    "id": "66666666-6666-6666-6666-666666666666",
    "providerId": "5517537f-3a3d-4a05-85dc-08dd9f29066f",
    "providerName": "TrendyWear",
    "name": "Đầm cocktail ren",
    "description": "Đầm cocktail chất liệu ren cao cấp, phù hợp cho tiệc tối",
    "category": "Đầm dạ hội",
    "size": "M",
    "color": "Đen",
    "pricePerDay": 450000.00,
    "availabilityStatus": "available",
    "isPromoted": false,
    "rentCount": 8,
    "createdAt": "2025-05-25T14:30:45.78",
    "updatedAt": null,
    "primaryImagesUrl": "https://images.unsplash.com/photo-1566479179817-1e0e5d2cbee0?w=400",
    "images": []
  }
];

// Mock data cho Products Page (UI Products)
export const mockUiProducts: UiProduct[] = [
  // Áo sơ mi & Blouse
  {
    id: '1',
    name: 'Áo sơ mi trắng premium',
    brand: 'ZARA',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400',
    rentalPrice: 180000,
    membershipPrice: 135000,
    depositPrice: 800000,
    colors: ['Trắng', 'Xanh nhạt'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Áo sơ mi'
  },
  {
    id: '2',
    name: 'Blouse hoa vintage',
    brand: 'MANGO',
    image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=400',
    rentalPrice: 200000,
    membershipPrice: 150000,
    depositPrice: 950000,
    colors: ['Hoa nhí', 'Hoa lớn'],
    sizes: ['S', 'M', 'L'],
    category: 'Blouse'
  },
  {
    id: '3',
    name: 'Áo sơ mi oversize denim',
    brand: 'H&M',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    rentalPrice: 160000,
    membershipPrice: 120000,
    depositPrice: 720000,
    clearancePrice: 280000,
    colors: ['Xanh denim', 'Xanh nhạt'],
    sizes: ['S', 'M', 'L'],
    category: 'Áo sơ mi'
  },

  // Quần
  {
    id: '4',
    name: 'Quần jean skinny đen',
    brand: 'LEVI\'S',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
    rentalPrice: 250000,
    membershipPrice: 187500,
    depositPrice: 1200000,
    colors: ['Đen', 'Xanh đậm'],
    sizes: ['26', '27', '28', '29', '30'],
    category: 'Quần jean'
  },
  {
    id: '5',
    name: 'Quần âu ống rộng',
    brand: 'UNIQLO',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400',
    rentalPrice: 220000,
    membershipPrice: 165000,
    depositPrice: 1000000,
    colors: ['Đen', 'Xám', 'Navy'],
    sizes: ['S', 'M', 'L'],
    category: 'Quần âu'
  },
  {
    id: '6',
    name: 'Quần short thể thao',
    brand: 'ADIDAS',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    rentalPrice: 120000,
    membershipPrice: 90000,
    depositPrice: 500000,
    colors: ['Đen', 'Xám', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Quần short'
  },

  // Váy & Đầm
  {
    id: '7',
    name: 'Váy maxi hoa bohemian',
    brand: 'FREE PEOPLE',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400',
    rentalPrice: 350000,
    membershipPrice: 262500,
    depositPrice: 1600000,
    colors: ['Hoa đỏ', 'Hoa xanh'],
    sizes: ['S', 'M', 'L'],
    category: 'Váy maxi'
  },
  {
    id: '8',
    name: 'Đầm cocktail ren đen',
    brand: 'BCBG',
    image: 'https://images.unsplash.com/photo-1566479179817-1e0e5d2cbee0?w=400',
    rentalPrice: 450000,
    membershipPrice: 337500,
    depositPrice: 2200000,
    clearancePrice: 800000,
    colors: ['Đen', 'Navy'],
    sizes: ['S', 'M', 'L'],
    category: 'Đầm dạ hội'
  },
  {
    id: '9',
    name: 'Váy mini denim',
    brand: 'AMERICAN EAGLE',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400',
    rentalPrice: 180000,
    membershipPrice: 135000,
    depositPrice: 800000,
    colors: ['Xanh denim'],
    sizes: ['S', 'M', 'L'],
    category: 'Váy mini'
  },
  {
    id: '10',
    name: 'Đầm midi thanh lịch',
    brand: 'BANANA REPUBLIC',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400',
    rentalPrice: 320000,
    membershipPrice: 240000,
    depositPrice: 1500000,
    colors: ['Đen', 'Navy', 'Đỏ đô'],
    sizes: ['S', 'M', 'L'],
    category: 'Đầm midi'
  },

  // Áo khoác & Blazer
  {
    id: '11',
    name: 'Blazer nữ công sở',
    brand: 'THEORY',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400',
    rentalPrice: 380000,
    membershipPrice: 285000,
    depositPrice: 1800000,
    colors: ['Đen', 'Xám', 'Navy'],
    sizes: ['S', 'M', 'L'],
    category: 'Blazer'
  },
  {
    id: '12',
    name: 'Áo khoác denim oversized',
    brand: 'LEVIS',
    image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=400',
    rentalPrice: 280000,
    membershipPrice: 210000,
    depositPrice: 1300000,
    clearancePrice: 500000,
    colors: ['Xanh denim', 'Trắng'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Áo khoác'
  },
  {
    id: '13',
    name: 'Cardigan len mềm',
    brand: 'COS',
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400',
    rentalPrice: 220000,
    membershipPrice: 165000,
    depositPrice: 1000000,
    colors: ['Beige', 'Xám', 'Navy'],
    sizes: ['S', 'M', 'L'],
    category: 'Cardigan'
  },

  // Trang phục dạ hội & sự kiện
  {
    id: '14',
    name: 'Áo dài cách tân cao cấp',
    brand: 'MINH HANH',
    image: 'https://images.unsplash.com/photo-1594736797933-d0301ba4cdf9?w=400',
    rentalPrice: 800000,
    membershipPrice: 600000,
    depositPrice: 4000000,
    colors: ['Đỏ', 'Vàng', 'Xanh'],
    sizes: ['S', 'M', 'L'],
    category: 'Áo dài'
  },
  {
    id: '15',
    name: 'Đầm dạ hội lệch vai',
    brand: 'VERA WANG',
    image: 'https://images.unsplash.com/photo-1566479179817-1e0e5d2cbee0?w=400',
    rentalPrice: 1200000,
    membershipPrice: 900000,
    depositPrice: 6000000,
    colors: ['Đen', 'Navy', 'Đỏ đô'],
    sizes: ['S', 'M', 'L'],
    isOutOfStock: true,
    category: 'Đầm dạ hội'
  },

  // Trang phục thể thao & casual
  {
    id: '16',
    name: 'Hoodie unisex premium',
    brand: 'NIKE',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400',
    rentalPrice: 150000,
    membershipPrice: 112500,
    depositPrice: 700000,
    colors: ['Đen', 'Xám', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Hoodie'
  },
  {
    id: '17',
    name: 'Áo thun basic cotton',
    brand: 'MUJI',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    rentalPrice: 80000,
    membershipPrice: 60000,
    depositPrice: 350000,
    colors: ['Trắng', 'Đen', 'Xám', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Áo thun'
  },
  {
    id: '18',
    name: 'Jumpsuit công sở',
    brand: 'BANANA REPUBLIC',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400',
    rentalPrice: 420000,
    membershipPrice: 315000,
    depositPrice: 2000000,
    colors: ['Đen', 'Navy'],
    sizes: ['S', 'M', 'L'],
    category: 'Jumpsuit'
  }
];

// Mock data cho Product Detail Page
export const mockProductDetail: Product = {
  id: '1',
  name: 'Áo sơ mi trắng premium',
  code: 'SP001',
  brand: 'ZARA',
  category: 'Áo sơ mi',
  description: 'Áo sơ mi trắng cao cấp với thiết kế hiện đại, chất liệu cotton premium thoáng mát, phù hợp cho mọi dịp từ công sở đến dạo phố.',
  shortDescription: 'Áo sơ mi trắng premium với chất liệu cotton cao cấp, thiết kế thanh lịch, phù hợp cho mọi phong cách từ formal đến casual.',
  images: [
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600',
      alt: 'Áo sơ mi trắng premium - Hình chính',
      isMain: true
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&flip=h',
      alt: 'Áo sơ mi trắng premium - Mặt trước'
    },
    {
      id: '3',
      url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600',
      alt: 'Áo sơ mi trắng premium - Mặt sau'
    },
    {
      id: '4',
      url: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=600',
      alt: 'Áo sơ mi trắng premium - Chi tiết'
    }
  ],
  variants: [
    {
      id: 'v1',
      size: 'S',
      color: 'Trắng',
      colorCode: '#FFFFFF',
      stock: 5,
      rentalPrice: 180000
    },
    {
      id: 'v2',
      size: 'M',
      color: 'Trắng',
      colorCode: '#FFFFFF',
      stock: 8,
      rentalPrice: 180000
    },
    {
      id: 'v3',
      size: 'L',
      color: 'Trắng',
      colorCode: '#FFFFFF',
      stock: 6,
      rentalPrice: 180000
    },
    {
      id: 'v4',
      size: 'S',
      color: 'Xanh nhạt',
      colorCode: '#E3F2FD',
      stock: 4,
      rentalPrice: 190000
    },
    {
      id: 'v5',
      size: 'M',
      color: 'Xanh nhạt',
      colorCode: '#E3F2FD',
      stock: 0,
      rentalPrice: 190000
    }
  ],
  baseRentalPrice: 180000,
  rating: 4.8,
  reviewCount: 42,
  isAvailable: true,
  tags: ['Công sở', 'Thanh lịch', 'Cotton premium', 'Dễ phối đồ', 'Basic'],
  tabs: [
    {
      id: 'description',
      title: 'Mô tả sản phẩm',
      content: `
        <h3>Thông tin sản phẩm</h3>
        <p>Áo sơ mi trắng premium được thiết kế với phong cách hiện đại, thanh lịch. Sản phẩm được may từ chất liệu cotton cao cấp 100%, đảm bảo độ bền và thoải mái khi mặc.</p>
        
        <h4>Đặc điểm nổi bật:</h4>
        <ul>
          <li>Chất liệu: Cotton premium 100%, thoáng mát</li>
          <li>Thiết kế: Cổ vest, tay dài, form regular fit</li>
          <li>Màu sắc: Trắng classic, xanh nhạt pastel</li>
          <li>Kích cỡ: S, M, L, XL</li>
          <li>Phù hợp: Môi trường công sở, dạo phố, gặp gỡ</li>
          <li>Xuất xứ: Tây Ban Nha</li>
        </ul>
        
        <h4>Hướng dẫn bảo quản:</h4>
        <ul>
          <li>Giặt máy ở nhiệt độ dưới 30°C</li>
          <li>Không sử dụng chất tẩy</li>
          <li>Phơi nơi thoáng mát, tránh ánh nắng trực tiếp</li>
          <li>Ủi ở nhiệt độ trung bình</li>
        </ul>
      `
    },
    {
      id: 'size-guide',
      title: 'Hướng dẫn chọn size',
      content: `
        <h3>Bảng size chi tiết</h3>
        <table>
          <tr><th>Size</th><th>Vòng ngực (cm)</th><th>Vòng eo (cm)</th><th>Chiều dài tay (cm)</th><th>Chiều dài áo (cm)</th></tr>
          <tr><td>S</td><td>88-92</td><td>72-76</td><td>58</td><td>65</td></tr>
          <tr><td>M</td><td>92-96</td><td>76-80</td><td>60</td><td>67</td></tr>
          <tr><td>L</td><td>96-100</td><td>80-84</td><td>62</td><td>69</td></tr>
          <tr><td>XL</td><td>100-104</td><td>84-88</td><td>64</td><td>71</td></tr>
        </table>
        
        <h4>Lưu ý:</h4>
        <p>Sản phẩm có form regular fit, vừa vặn thoải mái. Nếu bạn thích form rộng hơn, có thể chọn size lớn hơn 1 size.</p>
        
        <h4>Cách đo:</h4>
        <ul>
          <li>Vòng ngực: Đo ngang qua điểm đầy đặn nhất của ngực</li>
          <li>Vòng eo: Đo ngang qua phần thắt nhỏ nhất của eo</li>
          <li>Chiều dài tay: Từ vai đến cổ tay</li>
        </ul>
      `
    },
    {
      id: 'rental-policy',
      title: 'Chính sách thuê',
      content: `
        <h3>Điều khoản thuê sản phẩm</h3>
        <ul>
          <li>Thời gian thuê tối thiểu: 3 ngày</li>
          <li>Thời gian thuê tối đa: 30 ngày</li>
          <li>Đặt cọc: 50% giá trị sản phẩm mới</li>
          <li>Giao nhận: Miễn phí trong nội thành TP.HCM và Hà Nội</li>
          <li>Vệ sinh: Sản phẩm đã được vệ sinh trước khi giao</li>
          <li>Bồi thường: Theo giá trị thực tế nếu có hư hỏng</li>
        </ul>
        
        <h4>Dịch vụ thêm:</h4>
        <ul>
          <li>Giao hàng ngoài thành: Phí theo khoảng cách</li>
          <li>Giao hàng khẩn cấp (trong 2h): +50,000 VNĐ</li>
          <li>Gia hạn thuê: Liên hệ ít nhất 1 ngày trước</li>
        </ul>
      `
    }
  ],
  faqs: [
    {
      id: 'faq1',
      question: 'Làm thế nào để chọn size phù hợp?',
      answer: 'Vui lòng tham khảo bảng size chi tiết và đo các số đo cơ thể để chọn size phù hợp nhất. Chúng tôi cũng hỗ trợ tư vấn qua hotline.'
    },
    {
      id: 'faq2',
      question: 'Chính sách đổi size như thế nào?',
      answer: 'Chúng tôi hỗ trợ đổi size miễn phí trong vòng 24h sau khi nhận hàng, với điều kiện sản phẩm chưa sử dụng.'
    },
    {
      id: 'faq3',
      question: 'Sản phẩm có được vệ sinh sạch sẽ không?',
      answer: 'Tất cả sản phẩm đều được vệ sinh, khử trùng bằng công nghệ ozone và hơi nước trước khi giao đến khách hàng.'
    },
    {
      id: 'faq4',
      question: 'Có thể gia hạn thời gian thuê không?',
      answer: 'Có, bạn có thể gia hạn thuê bằng cách liên hệ với chúng tôi ít nhất 1 ngày trước khi hết hạn thuê.'
    }
  ],
  relatedProducts: ['2', '3', '11', '17']
};

// Mock data cho Related Products
export const mockRelatedProducts: UiProduct[] = [
  {
    id: '2',
    name: 'Blouse hoa vintage',
    brand: 'MANGO',
    image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=400',
    rentalPrice: 200000,
    membershipPrice: 150000,
    depositPrice: 950000,
    colors: ['Hoa nhí', 'Hoa lớn'],
    sizes: ['S', 'M', 'L'],
    isOutOfStock: false,
    category: 'Blouse'
  },
  {
    id: '11',
    name: 'Blazer nữ công sở',
    brand: 'THEORY',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400',
    rentalPrice: 380000,
    membershipPrice: 285000,
    depositPrice: 1800000,
    colors: ['Đen', 'Xám', 'Navy'],
    sizes: ['S', 'M', 'L'],
    isOutOfStock: false,
    category: 'Blazer'
  },
  {
    id: '5',
    name: 'Quần âu ống rộng',
    brand: 'UNIQLO',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400',
    rentalPrice: 220000,
    membershipPrice: 165000,
    depositPrice: 1000000,
    colors: ['Đen', 'Xám', 'Navy'],
    sizes: ['S', 'M', 'L'],
    isOutOfStock: false,
    category: 'Quần âu'
  },
  {
    id: '17',
    name: 'Áo thun basic cotton',
    brand: 'MUJI',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    rentalPrice: 80000,
    membershipPrice: 60000,
    depositPrice: 350000,
    colors: ['Trắng', 'Đen', 'Xám', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL'],
    isOutOfStock: false,
    category: 'Áo thun'
  }
];

// Filter options cho Products Page
export const productFilterOptions = {
  brands: [
    'ZARA', 'H&M', 'UNIQLO', 'MANGO', 'COS', 
    'LEVI\'S', 'NIKE', 'ADIDAS', 'THEORY', 'BANANA REPUBLIC',
    'FREE PEOPLE', 'BCBG', 'VERA WANG', 'AMERICAN EAGLE', 'MUJI',
    'MINH HANH'
  ],
  colors: [
    'Trắng', 'Đen', 'Xám', 'Navy', 'Xanh denim', 'Xanh nhạt',
    'Đỏ', 'Đỏ đô', 'Hồng', 'Cam', 'Vàng', 'Tím', 'Beige',
    'Hoa nhí', 'Hoa lớn', 'Hoa đỏ', 'Hoa xanh'
  ],
  categories: [
    'Áo sơ mi', 'Blouse', 'Áo thun', 'Hoodie', 'Cardigan',
    'Quần jean', 'Quần âu', 'Quần short', 'Váy mini', 'Váy maxi', 
    'Đầm midi', 'Đầm dạ hội', 'Jumpsuit', 'Blazer', 'Áo khoác',
    'Áo dài'
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '26', '27', '28', '29', '30', '31', '32'],
  priceRanges: [
    { label: 'Dưới 100,000đ', min: 0, max: 100000 },
    { label: '100,000đ - 200,000đ', min: 100000, max: 200000 },
    { label: '200,000đ - 400,000đ', min: 200000, max: 400000 },
    { label: '400,000đ - 600,000đ', min: 400000, max: 600000 },
    { label: 'Trên 600,000đ', min: 600000, max: Infinity }
  ]
}; 