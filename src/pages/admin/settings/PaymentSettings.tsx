import React, { useState, useEffect } from 'react';
import './Settings.scss';

export const PaymentSettings: React.FC = () => {
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
    <div className="payment-settings">
      <div className="page-header">
        <div className="header-content">
          <h1>
            <span className="material-icons">payment</span>
            Cài đặt thanh toán
          </h1>
          <p>Cấu hình các phương thức thanh toán</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="settings-form">
        <div className="form-section">
          <h3>Phương thức thanh toán</h3>
          
          <div className="payment-methods">
            <div className="method-card active">
              <div className="method-header">
                <div className="method-icon">
                  <span className="material-icons">account_balance</span>
                </div>
                <div className="method-info">
                  <h4>Chuyển khoản ngân hàng</h4>
                  <p>Thanh toán qua chuyển khoản</p>
                </div>
                <div className="method-toggle">
                  <label className="checkbox-label">
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="method-config">
                <div className="form-group">
                  <label>Số tài khoản</label>
                  <input type="text" defaultValue="123456789" />
                </div>
                <div className="form-group">
                  <label>Tên ngân hàng</label>
                  <input type="text" defaultValue="Vietcombank" />
                </div>
              </div>
            </div>

            <div className="method-card">
              <div className="method-header">
                <div className="method-icon">
                  <span className="material-icons">credit_card</span>
                </div>
                <div className="method-info">
                  <h4>Thẻ tín dụng</h4>
                  <p>Visa, Mastercard</p>
                </div>
                <div className="method-toggle">
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>

            <div className="method-card">
              <div className="method-header">
                <div className="method-icon">
                  <span className="material-icons">account_balance_wallet</span>
                </div>
                <div className="method-info">
                  <h4>Ví điện tử</h4>
                  <p>MoMo, ZaloPay, VNPay</p>
                </div>
                <div className="method-toggle">
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
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