import { User } from '../types/auth';

// Interface cho Management Users (Admin Panel)
export interface ManagementUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  role: 'admin' | 'user' | 'staff' | 'provider';
  status: 'active' | 'inactive' | 'banned';
  createdAt: string;
  lastLogin?: string;
  totalOrders?: number;
  totalSpent?: number;
  avatar?: string;
}

// Mock data cho Authentication Users
export const mockAuthUsers = [
  // Admin users
  {
    id: 'admin-1',
    username: 'admin',
    email: 'admin@toolrental.com',
    password: 'admin123',
    firstName: 'Quản Trị',
    lastName: 'Viên',
    role: 'admin',
    permissions: ['all'],
    phoneNumber: '0900000001',
    status: 'active',
    avatar: null,
    lastLogin: null,
    createdAt: '2024-01-01T00:00:00Z'
  },
  // Regular users
  {
    id: 'user-1',
    username: 'user',
    email: 'user@example.com',
    password: 'user123',
    firstName: 'Nguyễn',
    lastName: 'Văn A',
    role: 'user',
    permissions: ['rent_products', 'view_orders', 'profile_edit'],
    phoneNumber: '0900000007',
    status: 'active',
    avatar: null,
    lastLogin: null,
    createdAt: '2024-01-01T00:00:00Z'
  },
  // Demo accounts
  {
    id: 'demo-admin',
    username: 'demo.admin',
    email: 'demo.admin@toolrental.com',
    password: 'demo123',
    firstName: 'Demo',
    lastName: 'Admin',
    role: 'admin',
    permissions: ['all'],
    phoneNumber: '0900000099',
    status: 'active',
    avatar: null,
    lastLogin: null,
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'demo-user',
    username: 'demo.user',
    email: 'demo.user@example.com',
    password: 'demo123',
    firstName: 'Demo',
    lastName: 'User',
    role: 'user',
    permissions: ['rent_products', 'view_orders', 'profile_edit'],
    phoneNumber: '0900000098',
    status: 'active',
    avatar: null,
    lastLogin: null,
    createdAt: '2024-01-01T00:00:00Z'
  }
];

// Mock data cho User Management (Admin Panel)
export const mockManagementUsers: ManagementUser[] = [
  {
    id: "1",
    email: "admin@example.com",
    firstName: "Quản",
    lastName: "Trị",
    phoneNumber: "0123456789",
    role: "admin",
    status: "active",
    createdAt: "2024-01-01T00:00:00Z",
    lastLogin: "2024-01-15T10:30:00Z",
    totalOrders: 0,
    totalSpent: 0,
    avatar: "https://via.placeholder.com/40x40/1976d2/ffffff?text=QT"
  },
  {
    id: "2",
    email: "user1@example.com",
    firstName: "Nguyễn",
    lastName: "Văn A",
    phoneNumber: "0987654321",
    role: "user",
    status: "active",
    createdAt: "2024-01-05T00:00:00Z",
    lastLogin: "2024-01-14T15:20:00Z",
    totalOrders: 5,
    totalSpent: 2500000,
    avatar: "https://via.placeholder.com/40x40/4caf50/ffffff?text=NA"
  },
  {
    id: "3",
    email: "provider1@example.com",
    firstName: "Trần",
    lastName: "Thị B",
    phoneNumber: "0912345678",
    role: "provider",
    status: "active",
    createdAt: "2024-01-03T00:00:00Z",
    lastLogin: "2024-01-13T09:15:00Z",
    totalOrders: 12,
    totalSpent: 0,
    avatar: "https://via.placeholder.com/40x40/ff9800/ffffff?text=TB"
  },
  {
    id: "4",
    email: "user2@example.com",
    firstName: "Lê",
    lastName: "Văn C",
    phoneNumber: "0934567890",
    role: "user",
    status: "inactive",
    createdAt: "2023-12-20T00:00:00Z",
    lastLogin: "2023-12-25T12:00:00Z",
    totalOrders: 2,
    totalSpent: 800000,
    avatar: "https://via.placeholder.com/40x40/9c27b0/ffffff?text=LC"
  },
  {
    id: "5",
    email: "provider2@example.com",
    firstName: "Phạm",
    lastName: "Minh D",
    phoneNumber: "0945678901",
    role: "provider",
    status: "banned",
    createdAt: "2023-11-10T00:00:00Z",
    lastLogin: "2024-01-10T08:45:00Z",
    totalOrders: 8,
    totalSpent: 0,
    avatar: "https://via.placeholder.com/40x40/f44336/ffffff?text=PD"
  },
  {
    id: "6",
    email: "user3@example.com",
    firstName: "Hoàng",
    lastName: "Thị E",
    phoneNumber: "0956789012",
    role: "user",
    status: "active",
    createdAt: "2024-01-10T00:00:00Z",
    lastLogin: "2024-01-15T16:30:00Z",
    totalOrders: 3,
    totalSpent: 1200000,
    avatar: "https://via.placeholder.com/40x40/2196f3/ffffff?text=HE"
  }
];

// Role-based access definitions
export const roleAccess = {
  admin: {
    canAccess: ['admin', 'all'],
    redirectTo: '/admin',
    displayName: 'Quản Trị Viên'
  },
  user: {
    canAccess: ['user'],
    redirectTo: '/',
    displayName: 'Người Dùng'
  }
}; 