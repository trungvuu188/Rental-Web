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
      providerName: "Provider 1",
      name: "Máy khoan Bosch GSB 550",
      description: "Máy khoan đa năng cho mọi công việc xây dựng",
      category: "Công cụ",
      size: "Vừa",
      color: "Xanh",
      pricePerDay: 150000,
      availabilityStatus: "available",
      isPromoted: true,
      rentCount: 25,
      createdAt: "2024-01-15T10:30:00Z",
      updatedAt: null,
      primaryImagesUrl: "https://via.placeholder.com/300x300?text=Bosch+GSB+550",
      images: []
    },
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