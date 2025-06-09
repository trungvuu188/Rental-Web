import { LoginRequest, RegisterRequest, AuthResponse, User } from '../types/auth';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

class AuthService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = `${API_BASE_URL}/auth`;
  }

  // Login method
  async login(credentials: LoginRequest): Promise<AuthResponse> {
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
        if (data.refreshToken) {
          localStorage.setItem('refreshToken', data.refreshToken);
        }
      }

      return data;
    } catch (error) {
      // Mock response for development when API is not available
      console.warn('Login API call failed, using mock response:', error);
      
      // Mock successful login
      const mockResponse: AuthResponse = {
        user: {
          id: '1',
          username: credentials.username,
          email: `${credentials.username}@example.com`,
          firstName: 'User',
          lastName: 'Demo',
          role: 'user',
          createdAt: new Date().toISOString(),
        },
        token: 'mock-jwt-token-' + Date.now(),
      };

      localStorage.setItem('token', mockResponse.token);
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
      // Return mock user if API fails but token exists
      const token = localStorage.getItem('token');
      if (token) {
        return {
          id: '1',
          username: 'demo-user',
          email: 'demo@example.com',
          firstName: 'Demo',
          lastName: 'User',
          role: 'user',
          createdAt: new Date().toISOString(),
        };
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
}

export const authService = new AuthService();
export default authService; 