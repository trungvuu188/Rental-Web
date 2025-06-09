import React, { useState, useEffect } from 'react';
import './Settings.scss';

export const ShippingSettings: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaving(false);
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
    <div className="shipping-settings">
      <div className="page-header">
        <div className="header-content">
          <h1>
            <span className="material-icons">local_shipping</span>
            Cài đặt vận chuyển
          </h1>
          <p>Cấu hình phương thức và phí vận chuyển</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="settings-form">
        <div className="form-section">
          <h3>Cài đặt chung</h3>
          
          <div className="form-row">
            <div className="form-group">
              <label>Phí vận chuyển cơ bản (VNĐ)</label>
              <input type="number" defaultValue="30000" />
            </div>
            <div className="form-group">
              <label>Miễn phí từ (VNĐ)</label>
              <input type="number" defaultValue="500000" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Thời gian giao hàng (ngày)</label>
              <input type="number" defaultValue="3" />
            </div>
            <div className="form-group">
              <label>Khu vực giao hàng</label>
              <select defaultValue="nationwide">
                <option value="local">Nội thành</option>
                <option value="nationwide">Toàn quốc</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Đối tác vận chuyển</h3>
          
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input type="checkbox" defaultChecked />
              <span className="checkmark"></span>
              Giao hàng nhanh
            </label>
          </div>

          <div className="checkbox-group">
            <label className="checkbox-label">
              <input type="checkbox" defaultChecked />
              <span className="checkmark"></span>
              Viettel Post
            </label>
          </div>

          <div className="checkbox-group">
            <label className="checkbox-label">
              <input type="checkbox" />
              <span className="checkmark"></span>
              J&T Express
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