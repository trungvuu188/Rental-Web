import { ApiProduct } from '../types/api';
import CPL001_img from '../assets/Products/couple/IMG_7242.JPG';
import CPL002_img from '../assets/Products/couple/371EDEB2-2B27-40C0-B34C-39FC174C1C11.jpeg';
import MEN001_img from '../assets/CoupleWears/front3.JPG';
import WMN001_img from '../assets/Products/hoian1-1.JPG';
import WMN002_img from '../assets/Products/IMG_5579.JPG';
import NEW001_img from '../assets/Products/new-arrival/new1.JPG';
import NEW002_img from '../assets/Products/new-arrival/new2.JPG';
import LTD001_img from '../assets/Products/limited/limited1.JPG';
import LTD002_img from '../assets/Products/limited/limited2.JPG';

// Interface cho Admin Product
export interface AdminProduct {
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
  sortOrder?: 'asc' | 'desc';
}

// Interface cho Order
export interface Order {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  products: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
  }>;
  total_amount: number;
  status: 'pending' | 'processing' | 'shipping' | 'completed' | 'cancelled';
  payment_status: 'pending' | 'paid' | 'failed' | 'refunded';
  payment_method: 'cod' | 'bank_transfer' | 'credit_card' | 'momo';
  shipping_address: string;
  order_date: string;
  updated_at: string;
  notes?: string;
}

// Interface cho Category
export interface Category {
  id: string;
  name: string;
  description: string;
  productCount: number;
  status: 'active' | 'inactive';
  createdAt: string;
}

// Interface cho Dashboard Stats
export interface DashboardStats {
  totalProducts: number;
  totalUsers: number;
  totalOrders: number;
  totalRevenue: number;
  newOrdersToday: number;
  activeUsers: number;
  growthRate?: {
    products: number;
    users: number;
    orders: number;
    revenue: number;
  };
}

// Interface cho Recent Activity
export interface RecentActivity {
  id: string;
  type: 'order' | 'user' | 'product';
  title: string;
  description: string;
  timestamp: string;
  status?: string;
}

// Mock data cho Admin Products
export const mockAdminProducts: AdminProduct[] = [
  // Couple Wears
  {
    id: 'CPL001',
    name: 'Set Váy Dài Áo Cúp Ngực và Áo Sơ Mi Nam Màu Hồng Pastel',
    category: 'Couple',
    price: 99000,
    stock: 10,
    status: 'active',
    image: CPL001_img,
    description: "Set đồ đôi gồm váy dài cúp ngực cho nữ và áo sơ mi nam màu hồng pastel.",
    created_at: '2024-01-20',
    updated_at: '2024-01-25'
  },
  {
    id: 'CPL002',
    name: 'Set Váy Dài Cúp Ngực và Áo Sơ Mi Nam Màu Xanh Pastel',
    category: 'Couple',
    price: 99000,
    stock: 8,
    status: 'active',
    image: CPL002_img,
    description: "Set đồ đôi gồm váy dài cúp ngực và áo sơ mi nam màu xanh pastel.",
    created_at: '2024-01-18',
    updated_at: '2024-01-24'
  },
  // Men Wears
  {
    id: 'MEN001',
    name: 'Áo Sơ Mi Nam Đi Biển Màu Nâu',
    category: 'Men',
    price: 99000,
    stock: 15,
    status: 'active',
    image: MEN001_img,
    description: "Áo sơ mi nam đi biển màu nâu, chất liệu thoáng mát.",
    created_at: '2024-01-15',
    updated_at: '2024-01-22'
  },
  // Women Wears
  {
    id: 'WMN001',
    name: 'Váy trắng trễ vai tay bồng cổ điển',
    category: 'Women',
    price: 99000,
    stock: 20,
    status: 'active',
    image: WMN001_img,
    description: "Váy trắng trễ vai tay bồng theo phong cách cổ điển.",
    created_at: '2024-01-12',
    updated_at: '2024-01-20'
  },
  {
    id: 'WMN002',
    name: 'Váy trắng trễ vai ren xoè nhẹ',
    category: 'Women',
    price: 99000,
    stock: 18,
    status: 'active',
    image: WMN002_img,
    description: "Váy trắng trễ vai phối ren, dáng xòe nhẹ nhàng.",
    created_at: '2024-01-10',
    updated_at: '2024-01-19'
  },
  // New Arrivals
  {
    id: 'NEW001',
    name: 'Váy Trắng Cổ Vuông & Nón Cói',
    category: 'Women',
    price: 99000,
    stock: 25,
    status: 'active',
    image: NEW001_img,
    description: "Váy trắng cổ vuông kết hợp nón cói, phong cách vintage.",
    created_at: '2024-01-08',
    updated_at: '2024-01-18'
  },
  {
    id: 'NEW002',
    name: 'Váy Ren Trắng Dài Thanh Lịch',
    category: 'Women',
    price: 99000,
    stock: 0,
    status: 'out_of_stock',
    image: NEW002_img,
    description: "Váy ren trắng dáng dài, mang lại vẻ thanh lịch.",
    created_at: '2024-01-05',
    updated_at: '2024-01-15'
  },
  // Limiteds
  {
    id: 'LTD001',
    name: 'Áo Yếm In Họa Tiết & Váy Lụa Xanh Hoàng Gia',
    category: 'Women',
    price: 99000,
    stock: 5,
    status: 'active',
    image: LTD001_img,
    description: "Áo yếm in họa tiết kết hợp cùng váy lụa màu xanh hoàng gia.",
    created_at: '2024-01-02',
    updated_at: '2024-01-10'
  },
    {
    id: 'LTD002',
    name: 'Váy Corset Đen Quyến Rũ',
    category: 'Women',
    price: 99000,
    stock: 7,
    status: 'active',
    image: LTD002_img,
    description: "Váy corset đen quyến rũ, phù hợp cho các buổi tiệc tối.",
    created_at: '2024-01-01',
    updated_at: '2024-01-09'
  },
];

// Mock data cho Orders
export const mockOrders: Order[] = [
  {
    id: 'ORD001',
    customer_name: 'Nguyễn Văn An',
    customer_email: 'nva@email.com',
    customer_phone: '0901234567',
    products: [
      { id: '1', name: 'Cropped Faux Leather Jacket', quantity: 1, price: 99000 },
      { id: '2', name: 'Calvin Shorts', quantity: 1, price: 99000 }
    ],
    total_amount: 198000,
    status: 'processing',
    payment_status: 'paid',
    payment_method: 'bank_transfer',
    shipping_address: '123 Đường ABC, Quận 1, TP.HCM',
    order_date: '2024-01-25T10:30:00Z',
    updated_at: '2024-01-25T14:20:00Z',
    notes: 'Giao hàng nhanh'
  },
  {
    id: 'ORD002',
    customer_name: 'Trần Thị Bình',
    customer_email: 'ttb@email.com',
    customer_phone: '0912345678',
    products: [
      { id: '9', name: 'Set Váy Dài Áo Cúp Ngực và Áo Sơ Mi Nam Màu Hồng Pastel', quantity: 1, price: 99000 }
    ],
    total_amount: 99000,
    status: 'completed',
    payment_status: 'paid',
    payment_method: 'credit_card',
    shipping_address: '456 Đường XYZ, Quận 3, TP.HCM',
    order_date: '2024-01-24T09:15:00Z',
    updated_at: '2024-01-24T16:45:00Z',
    notes: 'Đóng gói cẩn thận'
  },
  {
    id: 'ORD003',
    customer_name: 'Lê Văn Cường',
    customer_email: 'lvc@email.com',
    customer_phone: '0923456789',
    products: [
      { id: '10', name: 'Váy Trắng Cổ Vuông & Nón Cói', quantity: 1, price: 99000 },
      { id: '11', name: 'Áo Dài Cách Tân Hoa Nhẹ & Nón Lá', quantity: 1, price: 99000 },
      { id: '8', name: 'Kirby T-Shirt', quantity: 2, price: 37000 }
    ],
    total_amount: 272000,
    status: 'shipping',
    payment_status: 'paid',
    payment_method: 'momo',
    shipping_address: '789 Đường DEF, Quận 7, TP.HCM',
    order_date: '2024-01-23T14:20:00Z',
    updated_at: '2024-01-24T11:30:00Z',
    notes: 'Giao hàng vào buổi chiều'
  },
  {
    id: 'ORD004',
    customer_name: 'Phạm Thị Dung',
    customer_email: 'ptd@email.com',
    customer_phone: '0934567890',
    products: [
      { id: '12', name: 'Váy Corset Đen Quyến Rũ', quantity: 1, price: 99000 }
    ],
    total_amount: 99000,
    status: 'pending',
    payment_status: 'pending',
    payment_method: 'bank_transfer',
    shipping_address: '321 Đường GHI, Quận 2, TP.HCM',
    order_date: '2024-01-25T16:45:00Z',
    updated_at: '2024-01-25T16:45:00Z',
    notes: 'Chờ thanh toán'
  },
  {
    id: 'ORD005',
    customer_name: 'Hoàng Văn Em',
    customer_email: 'hve@email.com',
    customer_phone: '0945678901',
    products: [
      { id: '3', name: 'Shirt In Botanical Cheetah Print', quantity: 1, price: 99000 },
      { id: '4', name: 'Cotton Jersey T-Shirt', quantity: 1, price: 99000 },
      { id: '5', name: 'Cableknit Shawl', quantity: 1, price: 99000 }
    ],
    total_amount: 297000,
    status: 'cancelled',
    payment_status: 'refunded',
    payment_method: 'credit_card',
    shipping_address: '654 Đường JKL, Quận 5, TP.HCM',
    order_date: '2024-01-22T11:00:00Z',
    updated_at: '2024-01-23T09:30:00Z',
    notes: 'Khách hàng hủy đơn'
  }
];

// Mock data cho Categories
export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Couple',
    description: 'Set đồ đôi cho các cặp đôi, bao gồm váy và áo phối hợp',
    productCount: 7,
    status: 'active',
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    name: 'Women',
    description: 'Trang phục nữ đa dạng từ váy, áo đến phụ kiện',
    productCount: 5,
    status: 'active',
    createdAt: '2024-01-10'
  },
  {
    id: '3',
    name: 'Men',
    description: 'Trang phục nam với nhiều kiểu dáng và phong cách',
    productCount: 1,
    status: 'active',
    createdAt: '2024-01-08'
  },
  {
    id: '4',
    name: 'Swimsuit',
    description: 'Đồ bơi và trang phục đi biển',
    productCount: 0,
    status: 'active',
    createdAt: '2024-01-05'
  }
];

// Mock data cho Dashboard Stats
export const mockDashboardStats: DashboardStats = {
  totalProducts: 156,
  totalUsers: 1234,
  totalOrders: 89,
  totalRevenue: 15678000,
  newOrdersToday: 12,
  activeUsers: 45,
  growthRate: {
    products: 5.2,
    users: 12.5,
    orders: 8.1,
    revenue: 15.3,
  },
};

// Mock data cho Recent Activities
export const mockRecentActivities: RecentActivity[] = [
  {
    id: '1',
    type: 'order',
    title: 'Đơn hàng mới',
    description: 'Khách hàng Nguyễn Văn A đã đặt đơn hàng #ORD001',
    timestamp: '2024-01-25T10:30:00Z',
    status: 'new'
  },
  {
    id: '2',
    type: 'user',
    title: 'Người dùng mới',
    description: 'Trần Thị B đã đăng ký tài khoản',
    timestamp: '2024-01-25T09:45:00Z',
    status: 'registered'
  },
  {
    id: '3',
    type: 'product',
    title: 'Sản phẩm hết hàng',
    description: 'Máy cưa lọng Makita JV0600K đã hết hàng',
    timestamp: '2024-01-25T08:20:00Z',
    status: 'out_of_stock'
  },
  {
    id: '4',
    type: 'order',
    title: 'Đơn hàng hoàn thành',
    description: 'Đơn hàng #ORD003 đã được giao thành công',
    timestamp: '2024-01-24T16:30:00Z',
    status: 'completed'
  },
  {
    id: '5',
    type: 'order',
    title: 'Đơn hàng bị hủy',
    description: 'Đơn hàng #ORD005 đã bị hủy bởi khách hàng',
    timestamp: '2024-01-24T14:15:00Z',
    status: 'cancelled'
  }
]; 