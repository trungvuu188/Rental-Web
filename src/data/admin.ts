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
  {
    id: '1',
    name: 'Máy khoan Bosch GSB 120-LI',
    category: 'Máy khoan',
    price: 2500000,
    stock: 25,
    status: 'active',
    image: '/images/products/drill-1.jpg',
    description: 'Máy khoan pin 12V chuyên nghiệp',
    created_at: '2024-01-15',
    updated_at: '2024-01-20'
  },
  {
    id: '2',
    name: 'Máy cưa lọng Makita JV0600K',
    category: 'Máy cưa',
    price: 3200000,
    stock: 0,
    status: 'out_of_stock',
    image: '/images/products/saw-1.jpg',
    description: 'Máy cưa lọng 650W công suất cao',
    created_at: '2024-01-10',
    updated_at: '2024-01-18'
  },
  {
    id: '3',
    name: 'Máy mài góc DeWalt DWE4157',
    category: 'Máy mài',
    price: 1800000,
    stock: 15,
    status: 'active',
    image: '/images/products/grinder-1.jpg',
    description: 'Máy mài góc 125mm 900W',
    created_at: '2024-01-08',
    updated_at: '2024-01-22'
  },
  {
    id: '4',
    name: 'Máy bào Stanley SB90',
    category: 'Máy bào',
    price: 1200000,
    stock: 8,
    status: 'inactive',
    image: '/images/products/planer-1.jpg',
    description: 'Máy bào gỗ điện 900W',
    created_at: '2024-01-05',
    updated_at: '2024-01-15'
  },
  {
    id: '5',
    name: 'Máy khoan búa Hilti TE 2-A22',
    category: 'Máy khoan',
    price: 4500000,
    stock: 12,
    status: 'active',
    image: '/images/products/hammer-drill-1.jpg',
    description: 'Máy khoan búa pin 22V SDS-plus',
    created_at: '2024-01-02',
    updated_at: '2024-01-25'
  }
];

// Mock data cho Orders
export const mockOrders: Order[] = [
  {
    id: 'ORD001',
    customer_name: 'Nguyễn Văn An',
    customer_email: 'nva@email.com',
    customer_phone: '0901234567',
    products: [
      { id: '1', name: 'Máy khoan Bosch GSB 120-LI', quantity: 1, price: 2500000 },
      { id: '2', name: 'Máy cưa lọng Makita JV0600K', quantity: 1, price: 3200000 }
    ],
    total_amount: 5700000,
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
      { id: '3', name: 'Máy mài góc DeWalt DWE4157', quantity: 2, price: 1800000 }
    ],
    total_amount: 3600000,
    status: 'pending',
    payment_status: 'pending',
    payment_method: 'cod',
    shipping_address: '456 Đường XYZ, Quận 3, TP.HCM',
    order_date: '2024-01-25T09:15:00Z',
    updated_at: '2024-01-25T09:15:00Z'
  },
  {
    id: 'ORD003',
    customer_name: 'Lê Văn Cường',
    customer_email: 'lvc@email.com',
    customer_phone: '0923456789',
    products: [
      { id: '4', name: 'Máy bào Stanley SB90', quantity: 1, price: 1200000 },
      { id: '5', name: 'Máy khoan búa Hilti TE 2-A22', quantity: 1, price: 4500000 }
    ],
    total_amount: 5700000,
    status: 'completed',
    payment_status: 'paid',
    payment_method: 'credit_card',
    shipping_address: '789 Đường DEF, Quận 7, TP.HCM',
    order_date: '2024-01-24T15:45:00Z',
    updated_at: '2024-01-25T10:30:00Z'
  },
  {
    id: 'ORD004',
    customer_name: 'Phạm Thị Dung',
    customer_email: 'ptd@email.com',
    customer_phone: '0934567890',
    products: [
      { id: '1', name: 'Máy khoan Bosch GSB 120-LI', quantity: 3, price: 2500000 }
    ],
    total_amount: 7500000,
    status: 'shipping',
    payment_status: 'paid',
    payment_method: 'momo',
    shipping_address: '321 Đường GHI, Quận 5, TP.HCM',
    order_date: '2024-01-24T11:20:00Z',
    updated_at: '2024-01-25T08:15:00Z'
  },
  {
    id: 'ORD005',
    customer_name: 'Hoàng Văn Minh',
    customer_email: 'hvm@email.com',
    customer_phone: '0945678901',
    products: [
      { id: '2', name: 'Máy cưa lọng Makita JV0600K', quantity: 1, price: 3200000 },
      { id: '3', name: 'Máy mài góc DeWalt DWE4157', quantity: 1, price: 1800000 }
    ],
    total_amount: 5000000,
    status: 'cancelled',
    payment_status: 'refunded',
    payment_method: 'bank_transfer',
    shipping_address: '567 Đường JKL, Quận 9, TP.HCM',
    order_date: '2024-01-23T14:30:00Z',
    updated_at: '2024-01-24T16:45:00Z',
    notes: 'Khách hàng hủy đơn'
  }
];

// Mock data cho Categories
export const mockCategories: Category[] = [
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
  },
  {
    id: '5',
    name: 'Máy bào',
    description: 'Máy bào gỗ và các vật liệu khác',
    productCount: 8,
    status: 'inactive',
    createdAt: '2024-01-03'
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