import { 
  DashboardStats, 
  RecentActivity, 
  AdminUser, 
  AdminNotification,
  SystemSettings,
  ApiResponse,
  PaginatedResponse,
  AdminFilters
} from '../types/admin';
import { ApiProduct } from '../types/api';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

// Helper function for API calls
const apiCall = async <T>(endpoint: string, options?: RequestInit): Promise<T> => {
  const token = localStorage.getItem('adminToken');
  
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

// Dashboard APIs
export const fetchDashboardStats = async (): Promise<DashboardStats> => {
  // Mock implementation - replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalProducts: 156,
        totalUsers: 1234,
        totalOrders: 89,
        totalRevenue: 15678000,
        newOrdersToday: 12,
        activeUsers: 45,
        pendingOrders: 8,
        completedOrders: 81,
      });
    }, 500);
  });
  // return apiCall<DashboardStats>('/admin/dashboard/stats');
};

export const fetchRecentActivity = async (): Promise<RecentActivity[]> => {
  // Mock implementation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          type: 'order',
          message: 'Đơn hàng mới #12345 từ Nguyễn Văn A',
          timestamp: '5 phút trước',
          userId: 'user1',
          userName: 'Nguyễn Văn A'
        },
        {
          id: '2',
          type: 'user',
          message: 'Người dùng mới đăng ký: tranvanb@email.com',
          timestamp: '15 phút trước',
          userId: 'user2',
          userName: 'Trần Văn B'
        },
        {
          id: '3',
          type: 'product',
          message: 'Sản phẩm "Máy khoan Bosch" được cập nhật',
          timestamp: '30 phút trước'
        },
      ]);
    }, 300);
  });
  // return apiCall<RecentActivity[]>('/admin/dashboard/activity');
};

// User Management APIs
export const fetchUsers = async (filters?: AdminFilters): Promise<PaginatedResponse<AdminUser>> => {
  // Mock implementation
  const mockUsers: AdminUser[] = [
    {
      id: '1',
      email: 'admin@example.com',
      firstName: 'Quản',
      lastName: 'Trị',
      role: 'admin',
      permissions: ['all'],
      lastLogin: '2024-01-15T10:30:00Z',
      createdAt: '2024-01-01T00:00:00Z'
    },
    {
      id: '2',
      email: 'user1@example.com',
      firstName: 'Nguyễn',
      lastName: 'Văn A',
      role: 'admin',
      permissions: ['users', 'products'],
      lastLogin: '2024-01-14T15:20:00Z',
      createdAt: '2024-01-05T00:00:00Z'
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: mockUsers,
        currentPage: 1,
        totalPages: 1,
        totalItems: mockUsers.length,
        itemsPerPage: 10
      });
    }, 500);
  });
  // const queryParams = new URLSearchParams(filters as any).toString();
  // return apiCall<PaginatedResponse<AdminUser>>(`/admin/users?${queryParams}`);
};

export const createUser = async (userData: Partial<AdminUser>): Promise<ApiResponse<AdminUser>> => {
  // Mock implementation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: {
          id: Date.now().toString(),
          ...userData,
          permissions: [],
          lastLogin: null,
          createdAt: new Date().toISOString()
        } as AdminUser,
        message: 'Người dùng được tạo thành công'
      });
    }, 1000);
  });
  // return apiCall<ApiResponse<AdminUser>>('/admin/users', {
  //   method: 'POST',
  //   body: JSON.stringify(userData)
  // });
};

export const updateUser = async (userId: string, userData: Partial<AdminUser>): Promise<ApiResponse<AdminUser>> => {
  // Mock implementation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: { id: userId, ...userData } as AdminUser,
        message: 'Người dùng được cập nhật thành công'
      });
    }, 1000);
  });
  // return apiCall<ApiResponse<AdminUser>>(`/admin/users/${userId}`, {
  //   method: 'PUT',
  //   body: JSON.stringify(userData)
  // });
};

export const deleteUser = async (userId: string): Promise<ApiResponse<void>> => {
  // Mock implementation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: undefined,
        message: 'Người dùng đã được xóa'
      });
    }, 500);
  });
  // return apiCall<ApiResponse<void>>(`/admin/users/${userId}`, {
  //   method: 'DELETE'
  // });
};

// Product Management APIs
export const fetchAdminProducts = async (filters?: AdminFilters): Promise<PaginatedResponse<ApiProduct>> => {
  // Mock implementation using existing product structure
  const mockProducts: ApiProduct[] = [
    {
      id: "1",
      providerId: "provider1",
      providerName: "Tiem CoMin",
      name: "Cropped Faux Leather Jacket",
      description: "Áo khoác da giả cropped phong cách hiện đại, phù hợp cho các dịp dạo phố",
      category: "Áo khoác",
      size: "M",
      color: "Đen",
      pricePerDay: 99000.00,
      availabilityStatus: "available",
      isPromoted: true,
      rentCount: 25,
      createdAt: "2024-01-15T10:30:00Z",
      updatedAt: null,
      primaryImagesUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
      images: [
        {
          id: "a9b8a2f4-f87a-4a2d-aaa1-222222222222",
          productId: "1",
          imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
          isPrimary: true
        }
      ]
    },
    {
      id: "2",
      providerId: "provider1",
      providerName: "Tiem CoMin",
      name: "Calvin Shorts",
      description: "Quần short Calvin phong cách casual, thoải mái cho mùa hè",
      category: "Quần short",
      size: "L",
      color: "Xanh",
      pricePerDay: 99000.00,
      availabilityStatus: "available",
      isPromoted: false,
      rentCount: 18,
      createdAt: "2024-01-10T03:26:47.56",
      updatedAt: null,
      primaryImagesUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
      images: []
    },
    {
      id: "3",
      providerId: "provider1",
      providerName: "Tiem CoMin",
      name: "Shirt In Botanical Cheetah Print",
      description: "Áo sơ mi họa tiết hoa và báo cheetah độc đáo",
      category: "Áo sơ mi",
      size: "S",
      color: "Hoa nhí",
      pricePerDay: 99000.00,
      availabilityStatus: "available",
      isPromoted: true,
      rentCount: 32,
      createdAt: "2024-01-08T10:15:20.45",
      updatedAt: null,
      primaryImagesUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
      images: []
    },
    {
      id: "4",
      providerId: "provider1",
      providerName: "Tiem CoMin",
      name: "Cotton Jersey T-Shirt",
      description: "Áo thun cotton jersey mềm mại, thoải mái cho mọi hoạt động",
      category: "Áo thun",
      size: "M",
      color: "Trắng",
      pricePerDay: 99000.00,
      availabilityStatus: "available",
      isPromoted: true,
      rentCount: 15,
      createdAt: "2024-01-05T08:15:30.25",
      updatedAt: null,
      primaryImagesUrl: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
      images: []
    },
    {
      id: "5",
      providerId: "provider1",
      providerName: "Tiem CoMin",
      name: "Cableknit Shawl",
      description: "Khăn choàng cableknit ấm áp, phong cách vintage",
      category: "Khăn choàng",
      size: "One Size",
      color: "Beige",
      pricePerDay: 99000.00,
      availabilityStatus: "available",
      isPromoted: false,
      rentCount: 8,
      createdAt: "2024-01-03T14:30:45.78",
      updatedAt: null,
      primaryImagesUrl: "https://images.unsplash.com/photo-1566479179817-1e0e5d2cbee0?w=400",
      images: []
    },
    {
      id: "6",
      providerId: "provider1",
      providerName: "Tiem CoMin",
      name: "Colorful Jacket",
      description: "Áo khoác nhiều màu sắc nổi bật, phong cách trẻ trung",
      category: "Áo khoác",
      size: "L",
      color: "Nhiều màu",
      pricePerDay: 69000.00,
      availabilityStatus: "available",
      isPromoted: false,
      rentCount: 12,
      createdAt: "2024-01-01T12:20:15.30",
      updatedAt: null,
      primaryImagesUrl: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400",
      images: []
    },
    {
      id: "7",
      providerId: "provider1",
      providerName: "Tiem CoMin",
      name: "Zessi Dresses",
      description: "Váy Zessi thanh lịch, phù hợp cho các dịp đặc biệt",
      category: "Váy",
      size: "M",
      color: "Đen",
      pricePerDay: 99000.00,
      availabilityStatus: "available",
      isPromoted: true,
      rentCount: 20,
      createdAt: "2023-12-28T09:45:20.10",
      updatedAt: null,
      primaryImagesUrl: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400",
      images: []
    },
    {
      id: "8",
      providerId: "provider1",
      providerName: "Tiem CoMin",
      name: "Kirby T-Shirt",
      description: "Áo thun Kirby dễ thương, phù hợp cho giới trẻ",
      category: "Áo thun",
      size: "S",
      color: "Trắng",
      pricePerDay: 37000.00,
      availabilityStatus: "available",
      isPromoted: false,
      rentCount: 35,
      createdAt: "2023-12-25T16:30:45.22",
      updatedAt: null,
      primaryImagesUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      images: []
    }
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: mockProducts,
        currentPage: 1,
        totalPages: 1,
        totalItems: mockProducts.length,
        itemsPerPage: 10
      });
    }, 500);
  });
};

export const updateProduct = async (productId: string, productData: Partial<ApiProduct>): Promise<ApiResponse<ApiProduct>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: { id: productId, ...productData } as ApiProduct,
        message: 'Sản phẩm được cập nhật thành công'
      });
    }, 1000);
  });
};

export const deleteProduct = async (productId: string): Promise<ApiResponse<void>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: undefined,
        message: 'Sản phẩm đã được xóa'
      });
    }, 500);
  });
};

// Notifications APIs
export const fetchNotifications = async (): Promise<AdminNotification[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          title: 'Đơn hàng mới',
          message: 'Có 5 đơn hàng mới cần xử lý',
          type: 'info',
          read: false,
          createdAt: '2024-01-15T10:30:00Z'
        },
        {
          id: '2',
          title: 'Cảnh báo hệ thống',
          message: 'Dung lượng lưu trữ sắp đầy',
          type: 'warning',
          read: false,
          createdAt: '2024-01-15T09:15:00Z'
        },
      ]);
    }, 300);
  });
};

export const markNotificationAsRead = async (notificationId: string): Promise<ApiResponse<void>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: undefined,
        message: 'Thông báo đã được đánh dấu là đã đọc'
      });
    }, 200);
  });
};

// System Settings APIs
export const fetchSystemSettings = async (): Promise<SystemSettings> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        siteName: 'Tool Rental System',
        siteDescription: 'Hệ thống cho thuê thiết bị',
        currency: 'VND',
        timezone: 'Asia/Ho_Chi_Minh',
        enableRegistration: true,
        enableEmailNotifications: true,
        maintenanceMode: false,
        maxUploadSize: 10485760, // 10MB
        allowedFileTypes: ['jpg', 'jpeg', 'png', 'gif', 'pdf']
      });
    }, 500);
  });
};

export const updateSystemSettings = async (settings: Partial<SystemSettings>): Promise<ApiResponse<SystemSettings>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: settings as SystemSettings,
        message: 'Cài đặt hệ thống được cập nhật thành công'
      });
    }, 1000);
  });
};

// Auth APIs
export const adminLogin = async (email: string, password: string): Promise<ApiResponse<{ token: string; user: AdminUser }>> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'admin@example.com' && password === 'admin123') {
        const mockResponse = {
          success: true,
          data: {
            token: 'mock_admin_token_' + Date.now(),
            user: {
              id: '1',
              email: 'admin@example.com',
              firstName: 'Admin',
              lastName: 'User',
              role: 'admin' as const,
              permissions: ['all'],
              lastLogin: new Date().toISOString(),
              createdAt: '2024-01-01T00:00:00Z'
            }
          },
          message: 'Đăng nhập thành công'
        };
        resolve(mockResponse);
      } else {
        reject(new Error('Email hoặc mật khẩu không đúng'));
      }
    }, 1000);
  });
};

export const adminLogout = async (): Promise<ApiResponse<void>> => {
  localStorage.removeItem('adminToken');
  return Promise.resolve({
    success: true,
    data: undefined,
    message: 'Đăng xuất thành công'
  });
};

export const refreshAdminToken = async (): Promise<ApiResponse<{ token: string }>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: { token: 'refreshed_token_' + Date.now() },
        message: 'Token đã được làm mới'
      });
    }, 500);
  });
}; 