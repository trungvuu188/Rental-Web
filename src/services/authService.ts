import { LoginRequest, RegisterRequest, AuthResponse, User } from '../types/auth';
import { mockAuthUsers, roleAccess } from '../data';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

class AuthService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = `${API_BASE_URL}/auth`;
  }

  // Enhanced login method with role-based authentication
  async login(credentials: LoginRequest): Promise<AuthResponse & { redirectTo?: string }> {
    try {
      const response = await fetch(`${this.baseUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data: AuthResponse = await response.json();
      
      // Store token in localStorage
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userRole', data.user.role);
        localStorage.setItem('userId', data.user.id);
        if (data.refreshToken) {
          localStorage.setItem('refreshToken', data.refreshToken);
        }
      }

      return data;
    } catch (error) {
      
      // Mock response for development when API is not available
      console.warn('Login API call failed, using mock response:', error);
      
      // Find user by username/email and password
            const user = mockAuthUsers.find(u => 
        (u.username === credentials.username || u.email === credentials.username) && 
        u.password === credentials.password
      );

      if (!user) {
        throw new Error('Email/Username hoặc mật khẩu không đúng');
      }

      if (user.status !== 'active') {
        throw new Error('Tài khoản đã bị khóa hoặc chưa được kích hoạt');
      }

      const access = roleAccess[user.role as keyof typeof roleAccess];
      const token = `${user.role}_token_${Date.now()}`;
      
             // Update last login
       (user as any).lastLogin = new Date().toISOString();
      
             // Store auth data
       localStorage.setItem('token', token);
       localStorage.setItem('userRole', user.role);
       localStorage.setItem('userId', user.id);
       
       if (user.role === 'admin') {
         localStorage.setItem('adminToken', token);
       }

      const mockResponse: AuthResponse & { redirectTo?: string } = {
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role as any,
          createdAt: user.createdAt,
        },
        token,
        redirectTo: access.redirectTo
      };

      return mockResponse;
    }
  }

  // Register method
  async register(userData: RegisterRequest): Promise<AuthResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }

      const data: AuthResponse = await response.json();
      
      // Store token in localStorage
      if (data.token) {
        localStorage.setItem('token', data.token);
        if (data.refreshToken) {
          localStorage.setItem('refreshToken', data.refreshToken);
        }
      }

      return data;
    } catch (error) {
      // Mock response for development when API is not available
      console.warn('Register API call failed, using mock response:', error);
      
      // Mock successful registration
      const mockResponse: AuthResponse = {
        user: {
          id: '2',
          username: userData.username,
          email: userData.email,
          firstName: userData.firstName || 'User',
          lastName: userData.lastName || 'Demo',
          role: 'user',
          createdAt: new Date().toISOString(),
        },
        token: 'mock-jwt-token-' + Date.now(),
      };

      localStorage.setItem('token', mockResponse.token);
      return mockResponse;
    }
  }

  // Logout method
  async logout(): Promise<void> {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        await fetch(`${this.baseUrl}/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
      }
    } catch (error) {
      console.warn('Logout API call failed:', error);
    } finally {
      // Always clear local storage
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('userRole');
      localStorage.removeItem('userId');
      localStorage.removeItem('adminToken');
    }
  }

  // Get current user
  async getCurrentUser(): Promise<User | null> {
    try {
      const token = localStorage.getItem('token');
      if (!token) return null;

      const response = await fetch(`${this.baseUrl}/me`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to get user info');
      }

      return await response.json();
    } catch (error) {
      console.warn('Get user API call failed:', error);
      // Return mock user from localStorage if API fails but token exists
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      
      if (token && userId) {
        const user = mockAuthUsers.find(u => u.id === userId);
        if (user) {
          return {
            id: user.id,
            username: user.username,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role as any,
            createdAt: user.createdAt,
          };
        }
      }
      return null;
    }
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  // Get stored token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Check if user has permission
  hasPermission(permission: string): boolean {
    const userId = localStorage.getItem('userId');
    const user = mockAuthUsers.find(u => u.id === userId);
    
    if (!user) return false;
    
    return user.permissions.includes('all') || user.permissions.includes(permission);
  }

  // Check if user can access route
  canAccessRoute(routeType: string): boolean {
    const userRole = localStorage.getItem('userRole') as keyof typeof roleAccess;
    
    if (!userRole || !roleAccess[userRole]) return false;
    
    return roleAccess[userRole].canAccess.includes(routeType);
  }

  // Get all mock users (for testing/demo)
  getAllMockUsers() {
    return mockAuthUsers.map(user => ({
      id: user.id,
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      status: user.status,
      lastLogin: user.lastLogin
    }));
  }
}

// Role definitions for easy reference
export const ROLES = {
  ADMIN: 'admin',
  USER: 'user'
} as const;

// Permission definitions
export const PERMISSIONS = {
  ALL: 'all',
  PRODUCTS: 'products',
  ORDERS: 'orders',
  USERS_VIEW: 'users_view',
  USERS_MODERATE: 'users_moderate',
  USER_MANAGEMENT: 'user_management',
  SYSTEM_SETTINGS: 'system_settings',
  OWN_PRODUCTS: 'own_products',
  OWN_ORDERS: 'own_orders',
  ANALYTICS_VIEW: 'analytics_view',
  DATA_EXPORT: 'data_export',
  REPORTS: 'reports',
  RENT_PRODUCTS: 'rent_products',
  VIEW_ORDERS: 'view_orders',
  PROFILE_EDIT: 'profile_edit'
} as const;

export const authService = new AuthService();
export default authService; 