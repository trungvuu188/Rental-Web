export interface AdminUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'superadmin';
  permissions: string[];
  lastLogin: string | null;
  createdAt: string;
}

export interface DashboardStats {
  totalProducts: number;
  totalUsers: number;
  totalOrders: number;
  totalRevenue: number;
  newOrdersToday: number;
  activeUsers: number;
  pendingOrders: number;
  completedOrders: number;
}

export interface RecentActivity {
  id: string;
  type: 'order' | 'user' | 'product' | 'system';
  message: string;
  timestamp: string;
  userId?: string;
  userName?: string;
}

export interface AdminNotification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
  read: boolean;
  createdAt: string;
}

export interface SystemSettings {
  siteName: string;
  siteDescription: string;
  currency: string;
  timezone: string;
  enableRegistration: boolean;
  enableEmailNotifications: boolean;
  maintenanceMode: boolean;
  maxUploadSize: number;
  allowedFileTypes: string[];
}

export interface AdminPermissions {
  canManageUsers: boolean;
  canManageProducts: boolean;
  canManageOrders: boolean;
  canViewAnalytics: boolean;
  canManageSettings: boolean;
  canManageCategories: boolean;
  canManageProviders: boolean;
  canExportData: boolean;
}

export type AdminRole = 'admin' | 'superadmin' | 'moderator';

export interface AdminRouteConfig {
  path: string;
  label: string;
  icon: string;
  component: React.ComponentType;
  permissions?: string[];
  exact?: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface AdminFilters {
  search?: string;
  status?: string;
  role?: string;
  category?: string;
  dateFrom?: string;
  dateTo?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
} 