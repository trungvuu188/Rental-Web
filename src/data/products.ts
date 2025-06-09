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
    "providerName": "user499225",
    "name": "Máy khoan Bosch",
    "description": "Máy khoan da năng dùng trong xây dựng",
    "category": "Công cụ",
    "size": "Vừa",
    "color": "Xanh",
    "pricePerDay": 150000.00,
    "availabilityStatus": "available",
    "isPromoted": true,
    "rentCount": 5,
    "createdAt": "2025-06-04T09:39:35.69",
    "updatedAt": null,
    "primaryImagesUrl": "https://www.workmanjsc.vn/wp-content/uploads/2024/04/may-khoan-bosch-gbh-220-kem-phu-kien-06112a60k1.jpg",
    "images": [
      {
        "id": "a9b8a2f4-f87a-4a2d-aaa1-222222222222",
        "productId": "e1c9d78f-9e15-4c8c-b76d-111111111111",
        "imageUrl": "https://www.workmanjsc.vn/wp-content/uploads/2024/04/may-khoan-bosch-gbh-220-kem-phu-kien-06112a60k1.jpg",
        "isPrimary": true
      }
    ]
  },
  {
    "id": "33333333-3333-3333-3333-333333333333",
    "providerId": "5517537f-3a3d-4a05-85dc-08dd9f29066f",
    "providerName": "user499225",
    "name": "Máy khoan bê tông Makita HR2470",
    "description": "Máy khoan bê tông công suất lớn, phù hợp thi công",
    "category": "Dụng cụ điện",
    "size": "Vừa",
    "color": "Xanh đen",
    "pricePerDay": 120000.00,
    "availabilityStatus": "available",
    "isPromoted": false,
    "rentCount": 3,
    "createdAt": "2025-05-30T03:26:47.56",
    "updatedAt": null,
    "primaryImagesUrl": "https://via.placeholder.com/300x300?text=Makita+HR2470",
    "images": []
  },
  {
    "id": "44444444-4444-4444-4444-444444444444",
    "providerId": "5517537f-3a3d-4a05-85dc-08dd9f29066f",
    "providerName": "user499225",
    "name": "Máy cắt gạch Bosch GDC 121",
    "description": "Máy cắt gạch chuyên dụng, độ chính xác cao",
    "category": "Dụng cụ cắt",
    "size": "Nhỏ",
    "color": "Xanh",
    "pricePerDay": 80000.00,
    "availabilityStatus": "available",
    "isPromoted": true,
    "rentCount": 8,
    "createdAt": "2025-06-01T10:15:20.45",
    "updatedAt": null,
    "primaryImagesUrl": "https://via.placeholder.com/300x300?text=Bosch+GDC+121",
    "images": []
  },
  {
    "id": "55555555-5555-5555-5555-555555555555",
    "providerId": "5517537f-3a3d-4a05-85dc-08dd9f29066f",
    "providerName": "user499225",
    "name": "Máy mài góc DeWalt DWE4157",
    "description": "Máy mài góc 125mm công suất 900W",
    "category": "Máy mài",
    "size": "Vừa",
    "color": "Vàng",
    "pricePerDay": 90000.00,
    "availabilityStatus": "available",
    "isPromoted": true,
    "rentCount": 12,
    "createdAt": "2025-05-28T08:15:30.25",
    "updatedAt": null,
    "primaryImagesUrl": "https://via.placeholder.com/300x300?text=DeWalt+DWE4157",
    "images": []
  },
  {
    "id": "66666666-6666-6666-6666-666666666666",
    "providerId": "5517537f-3a3d-4a05-85dc-08dd9f29066f",
    "providerName": "user499225",
    "name": "Máy bào gỗ Stanley SB90",
    "description": "Máy bào gỗ điện 900W chuyên nghiệp",
    "category": "Máy bào",
    "size": "Vừa",
    "color": "Đen vàng",
    "pricePerDay": 70000.00,
    "availabilityStatus": "available",
    "isPromoted": false,
    "rentCount": 6,
    "createdAt": "2025-05-25T14:30:45.78",
    "updatedAt": null,
    "primaryImagesUrl": "https://via.placeholder.com/300x300?text=Stanley+SB90",
    "images": []
  }
];

// Mock data cho Products Page (UI Products)
export const mockUiProducts: UiProduct[] = [
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

// Mock data cho Product Detail Page
export const mockProductDetail: Product = {
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
        <table>
          <tr><th>Size</th><th>Vòng ngực (cm)</th><th>Vòng eo (cm)</th><th>Vòng mông (cm)</th></tr>
          <tr><td>S</td><td>80-84</td><td>64-68</td><td>86-90</td></tr>
          <tr><td>M</td><td>84-88</td><td>68-72</td><td>90-94</td></tr>
          <tr><td>L</td><td>88-92</td><td>72-76</td><td>94-98</td></tr>
        </table>
        
        <h4>Lưu ý:</h4>
        <p>Vui lòng đo 3 vòng cơ thể và đối chiếu với bảng size để chọn size phù hợp nhất.</p>
      `
    },
    {
      id: 'rental-policy',
      title: 'Chính sách thuê',
      content: `
        <h3>Điều khoản thuê sản phẩm</h3>
        <ul>
          <li>Thời gian thuê tối thiểu: 3 ngày</li>
          <li>Đặt cọc: 50% giá trị sản phẩm</li>
          <li>Giao nhận: Miễn phí trong nội thành</li>
          <li>Vệ sinh: Khách hàng trả về sạch sẽ</li>
          <li>Bồi thường: Theo giá trị thực tế nếu có hư hỏng</li>
        </ul>
      `
    }
  ],
  faqs: [
    {
      id: 'faq1',
      question: 'Làm thế nào để chọn size phù hợp?',
      answer: 'Vui lòng tham khảo bảng size chi tiết và đo 3 vòng cơ thể để chọn size phù hợp nhất.'
    },
    {
      id: 'faq2',
      question: 'Chính sách đổi trả như thế nào?',
      answer: 'Chúng tôi hỗ trợ đổi size miễn phí trong vòng 24h sau khi nhận hàng.'
    }
  ],
  relatedProducts: ['2', '3', '4', '5']
};

// Mock data cho Related Products
export const mockRelatedProducts: UiProduct[] = [
  {
    id: '1',
    name: 'Áo dài truyền thống cao cấp',
    brand: 'XÉO XỌ',
    image: '/images/ao-dai-placeholder.svg',
    rentalPrice: 500000,
    membershipPrice: 375000,
    depositPrice: 2500000,
    colors: ['Đỏ', 'Vàng'],
    sizes: ['S', 'M', 'L'],
    isOutOfStock: false,
    category: 'Áo dài nữ'
  },
  {
    id: '2',
    name: 'Váy cưới công chúa ren hoa',
    brand: 'LAMUSE',
    image: '/images/ao-dai-placeholder.svg',
    rentalPrice: 1200000,
    membershipPrice: 900000,
    depositPrice: 8000000,
    colors: ['Trắng'],
    sizes: ['S', 'M', 'L'],
    isOutOfStock: false,
    category: 'Váy cưới'
  },
  {
    id: '3',
    name: 'Vest nam sang trọng',
    brand: 'AMY STORE',
    image: '/images/ao-dai-placeholder.svg',
    rentalPrice: 800000,
    membershipPrice: 600000,
    depositPrice: 3500000,
    colors: ['Đen', 'Xanh dương'],
    sizes: ['M', 'L', 'XL'],
    isOutOfStock: true,
    category: 'Vest nam'
  },
  {
    id: '4',
    name: 'Đầm dạ hội lệch vai',
    brand: 'LESART',
    image: '/images/ao-dai-placeholder.svg',
    rentalPrice: 600000,
    membershipPrice: 450000,
    depositPrice: 2800000,
    clearancePrice: 1200000,
    colors: ['Hồng', 'Tím'],
    sizes: ['S', 'M'],
    isOutOfStock: false,
    category: 'Đầm dạ hội'
  }
];

// Filter options cho Products Page
export const productFilterOptions = {
  brands: ['XÉO XỌ', 'LAMUSE', 'AMY STORE', 'LESART', 'HUONG BOUTIQUE', 'LALIN'],
  colors: ['Trắng', 'Đen', 'Đỏ', 'Hồng', 'Xanh lá', 'Xanh dương', 'Cam', 'Vàng', 'Tím'],
  categories: ['Áo dài nữ', 'Áo dài nam', 'Áo dài bưng quả', 'Vest nam', 'Váy cưới', 'Đầm dạ hội']
}; 