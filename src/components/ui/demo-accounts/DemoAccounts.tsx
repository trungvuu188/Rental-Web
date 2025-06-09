import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store';
import { loginUser } from '../../../store/slices/authSlice';
import './DemoAccounts.scss';

interface DemoAccount {
  id: string;
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
  description: string;
}

const DemoAccounts: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const demoAccounts: DemoAccount[] = [
    {
      id: 'admin-1',
      username: 'admin',
      email: 'admin@toolrental.com',
      password: 'admin123',
      firstName: 'Quản Trị',
      lastName: 'Viên',
      role: 'admin',
      description: 'Quản trị viên - quản lý toàn bộ hệ thống'
    },
    {
      id: 'user-1',
      username: 'user',
      email: 'user@example.com',
      password: 'user123',
      firstName: 'Nguyễn',
      lastName: 'Văn A',
      role: 'user',
      description: 'Người dùng thường - thuê sản phẩm'
    },
    {
      id: 'demo-admin',
      username: 'demo.admin',
      email: 'demo.admin@toolrental.com',
      password: 'demo123',
      firstName: 'Demo',
      lastName: 'Admin',
      role: 'admin',
      description: 'Tài khoản demo admin'
    },
    {
      id: 'demo-user',
      username: 'demo.user',
      email: 'demo.user@example.com',
      password: 'demo123',
      firstName: 'Demo',
      lastName: 'User',
      role: 'user',
      description: 'Tài khoản demo user'
    }
  ];

  const handleQuickLogin = async (account: DemoAccount) => {
    if (loading) return;
    
    try {
      setLoading(true);
      const result = await dispatch(loginUser({
        username: account.username,
        password: account.password
      }));

      if (loginUser.fulfilled.match(result)) {
        // Close modal and let login page navigation handle redirect
        setIsVisible(false);
        
        // Navigate based on role
        const redirectTo = account.role === 'admin' ? '/admin' : '/';
        window.location.href = redirectTo;
      } else {
        alert('Đăng nhập thất bại: ' + (result.payload || 'Unknown error'));
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Đăng nhập thất bại: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return '#3498db';
      case 'user': return '#95a5a6';
      default: return '#7f8c8d';
    }
  };

  const getRoleDisplayName = (role: string) => {
    switch (role) {
      case 'admin': return 'Admin';
      case 'user': return 'User';
      default: return role;
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <button 
        className="demo-accounts-toggle"
        onClick={() => setIsVisible(!isVisible)}
        title="Xem tài khoản demo"
      >
        🔐 Demo Accounts
      </button>

      {isVisible && (
        <div className="demo-accounts-overlay">
          <div className="demo-accounts-modal">
            <div className="demo-accounts-header">
              <h2>Tài Khoản Demo</h2>
              <button 
                className="close-btn"
                onClick={() => setIsVisible(false)}
              >
                ×
              </button>
            </div>
            
            <div className="demo-accounts-content">
              <p className="demo-description">
                Sử dụng các tài khoản sau để test các role khác nhau trong hệ thống:
              </p>
              
              <div className="accounts-grid">
                {demoAccounts.map((account) => (
                  <div key={account.id} className="account-card">
                    <div className="account-header">
                      <div className="account-name">
                        {account.firstName} {account.lastName}
                      </div>
                      <div 
                        className="role-badge"
                        style={{ backgroundColor: getRoleColor(account.role) }}
                      >
                        {getRoleDisplayName(account.role)}
                      </div>
                    </div>
                    
                    <div className="account-description">
                      {account.description}
                    </div>
                    
                    <div className="account-credentials">
                      <div className="credential-item">
                        <strong>Username:</strong> 
                        <span 
                          className="credential-value"
                          onClick={() => copyToClipboard(account.username)}
                          title="Click để copy"
                        >
                          {account.username}
                        </span>
                      </div>
                      <div className="credential-item">
                        <strong>Email:</strong> 
                        <span 
                          className="credential-value"
                          onClick={() => copyToClipboard(account.email)}
                          title="Click để copy"
                        >
                          {account.email}
                        </span>
                      </div>
                      <div className="credential-item">
                        <strong>Password:</strong> 
                        <span 
                          className="credential-value"
                          onClick={() => copyToClipboard(account.password)}
                          title="Click để copy"
                        >
                          {account.password}
                        </span>
                      </div>
                    </div>
                    
                    <button 
                      className="quick-login-btn"
                      onClick={() => handleQuickLogin(account)}
                      disabled={loading}
                    >
                      {loading ? 'Đang đăng nhập...' : 'Đăng nhập nhanh'}
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="demo-note">
                <p><strong>Lưu ý:</strong></p>
                <ul>
                  <li>Các tài khoản này chỉ dùng để demo và test</li>
                  <li>Click vào username/email/password để copy</li>
                  <li>Mỗi role sẽ có quyền truy cập khác nhau</li>
                  <li>Admin/SuperAdmin có thể truy cập trang quản trị</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DemoAccounts; 