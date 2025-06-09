import React, { useState, useEffect } from 'react';
import './Settings.scss';

interface GeneralSettingsData {
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  phoneNumber: string;
  address: string;
  currency: string;
  timezone: string;
  language: string;
  enableRegistration: boolean;
  enableNotifications: boolean;
  maintenanceMode: boolean;
}

export const GeneralSettings: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState<GeneralSettingsData>({
    siteName: '',
    siteDescription: '',
    contactEmail: '',
    phoneNumber: '',
    address: '',
    currency: 'VND',
    timezone: 'Asia/Ho_Chi_Minh',
    language: 'vi',
    enableRegistration: true,
    enableNotifications: true,
    maintenanceMode: false
  });

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSettings({
        siteName: 'Cửa hàng dụng cụ XYZ',
        siteDescription: 'Chuyên cung cấp dụng cụ và thiết bị chất lượng cao',
        contactEmail: 'info@toolstore.com',
        phoneNumber: '0123-456-789',
        address: '123 Đường ABC, Quận 1, TP.HCM',
        currency: 'VND',
        timezone: 'Asia/Ho_Chi_Minh',
        language: 'vi',
        enableRegistration: true,
        enableNotifications: true,
        maintenanceMode: false
      });
    } catch (error) {
      console.error('Error fetching settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Settings saved:', settings);
      // Show success message
    } catch (error) {
      console.error('Error saving settings:', error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <span className="material-icons rotating">refresh</span>
          <span>Đang tải cài đặt...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="general-settings">
      <div className="page-header">
        <div className="header-content">
          <h1>
            <span className="material-icons">tune</span>
            Cài đặt chung
          </h1>
          <p>Cấu hình thông tin cơ bản của hệ thống</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="settings-form">
        <div className="form-section">
          <h3>Thông tin cửa hàng</h3>
          
          <div className="form-group">
            <label htmlFor="siteName">Tên cửa hàng *</label>
            <input
              type="text"
              id="siteName"
              name="siteName"
              value={settings.siteName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="siteDescription">Mô tả</label>
            <textarea
              id="siteDescription"
              name="siteDescription"
              value={settings.siteDescription}
              onChange={handleInputChange}
              rows={3}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contactEmail">Email liên hệ</label>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                value={settings.contactEmail}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Số điện thoại</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={settings.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="address">Địa chỉ</label>
            <textarea
              id="address"
              name="address"
              value={settings.address}
              onChange={handleInputChange}
              rows={2}
            />
          </div>
        </div>

        <div className="form-section">
          <h3>Cài đặt hệ thống</h3>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="currency">Đơn vị tiền tệ</label>
              <select
                id="currency"
                name="currency"
                value={settings.currency}
                onChange={handleInputChange}
              >
                <option value="VND">Việt Nam Đồng (VND)</option>
                <option value="USD">US Dollar (USD)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="timezone">Múi giờ</label>
              <select
                id="timezone"
                name="timezone"
                value={settings.timezone}
                onChange={handleInputChange}
              >
                <option value="Asia/Ho_Chi_Minh">Việt Nam (GMT+7)</option>
                <option value="UTC">UTC (GMT+0)</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="language">Ngôn ngữ</label>
            <select
              id="language"
              name="language"
              value={settings.language}
              onChange={handleInputChange}
            >
              <option value="vi">Tiếng Việt</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>

        <div className="form-section">
          <h3>Tùy chọn</h3>
          
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="enableRegistration"
                checked={settings.enableRegistration}
                onChange={handleInputChange}
              />
              <span className="checkmark"></span>
              Cho phép đăng ký tài khoản mới
            </label>
          </div>

          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="enableNotifications"
                checked={settings.enableNotifications}
                onChange={handleInputChange}
              />
              <span className="checkmark"></span>
              Bật thông báo email
            </label>
          </div>

          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="maintenanceMode"
                checked={settings.maintenanceMode}
                onChange={handleInputChange}
              />
              <span className="checkmark"></span>
              Chế độ bảo trì
            </label>
          </div>
        </div>

        <div className="form-actions">
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={saving}
          >
            {saving ? (
              <>
                <span className="material-icons rotating">refresh</span>
                Đang lưu...
              </>
            ) : (
              <>
                <span className="material-icons">save</span>
                Lưu cài đặt
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}; 