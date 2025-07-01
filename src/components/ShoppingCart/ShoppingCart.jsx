import React, { useState } from 'react';
import './ShoppingCart.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  updateQuantity,
  selectCartTotalAmount,
} from '../../Features/Cart/cartSlice';
import { MdOutlineClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import success from '../../assets/success.png';
import Calendar from '../ui/date-picker/DatePicker';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState('cartTab1');
  const [payments, setPayments] = useState(false);
  const [selectedDates, setSelectedDates] = useState(new Set());
  const [showBankDialog, setShowBankDialog] = useState(false);
  const [customerFirstName, setCustomerFirstName] = useState('');
  const [customerLastName, setCustomerLastName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');

  const handleTabClick = (tab) => {
    if (tab === 'cartTab1' || cartItems.length > 0) {
      setActiveTab(tab);
    }
  };

  const handleQuantityChange = (productId, quantity) => {
    if (quantity >= 1 && quantity <= 20) {
      dispatch(updateQuantity({ productID: productId, quantity: quantity }));
    }
  };

  const totalPrice = useSelector(selectCartTotalAmount);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Current Date
  const currentDate = new Date();

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Random number
  const orderNumber = Math.floor(Math.random() * 100000);

  // Radio Button Data
  const [selectedPayment, setSelectedPayment] = useState('Direct Bank Transfer');

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  // Handle date selection from Calendar
  const handleDateChange = (dates) => {
    setSelectedDates(dates);
  };

  // Format selected dates for input display
  const formattedSelectedDates = Array.from(selectedDates)
    .sort((a, b) => a - b)
    .map((day) => String(day).padStart(2, '0'))
    .join(', ');

  // Handle "Đặt hàng" button click
  const handlePlaceOrder = () => {
    const orderData = {
      orderNumber,
      date: formatDate(currentDate),
      selectedDates: formattedSelectedDates,
      totalPrice: totalPrice === 0 ? 0 : totalPrice * selectedDates.size + 20000,
      paymentMethod: selectedPayment,
      customerName: `${customerFirstName} ${customerLastName}`.trim(),
      customerEmail,
      products: cartItems.map((item) => ({
        productID: item.productID,
        productName: item.productName,
        quantity: item.quantity,
        productPrice: item.productPrice,
        subtotal: item.quantity * item.productPrice,
      })),
    };

    try {
      // Retrieve existing orders from localStorage
      const existingOrders = JSON.parse(localStorage.getItem('orderProductData') || '[]');
      // Append new order
      existingOrders.push(orderData);
      // Save back to localStorage
      localStorage.setItem('orderProductData', JSON.stringify(existingOrders, null, 2));

      // // Create and download JSON file
      // const blob = new Blob([JSON.stringify(existingOrders, null, 2)], { type: 'application/json' });
      // const url = URL.createObjectURL(blob);
      // const link = document.createElement('a');
      // link.href = url;
      // link.download = 'orderProductData.json';
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);
      // URL.revokeObjectURL(url);

      if (selectedPayment === 'Direct Bank Transfer') {
        setShowBankDialog(true); // Show dialog if Direct Bank Transfer is selected
      } else {
        handleTabClick('cartTab3');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setPayments(true);
      }
    } catch (error) {
      console.error('Error saving order to localStorage:', error);
      alert('Có lỗi xảy ra khi lưu đơn hàng. Vui lòng thử lại.');
    }
  };

  // Close dialog and navigate to cartTab3
  const handleCloseDialog = () => {
    setShowBankDialog(false);
    handleTabClick('cartTab3');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPayments(true);
  };

  return (
    <>
      <div className='shoppingCartSection'>
        <h2>Giỏ hàng</h2>

        <div className='shoppingCartTabsContainer'>
          <div className={`shoppingCartTabs ${activeTab}`}>
            <button
              className={activeTab === 'cartTab1' ? 'active' : ''}
              onClick={() => {
                handleTabClick('cartTab1');
                setPayments(false);
              }}
            >
              <div className='shoppingCartTabsNumber'>
                <h3>01</h3>
                <div className='shoppingCartTabsHeading'>
                  <h3>Giỏ hàng</h3>
                  <p>Quản lý danh sách sản phẩm</p>
                </div>
              </div>
            </button>
            <button
              className={activeTab === 'cartTab2' ? 'active' : ''}
              onClick={() => {
                handleTabClick('cartTab2');
                setPayments(false);
              }}
              disabled={cartItems.length === 0}
            >
              <div className='shoppingCartTabsNumber'>
                <h3>02</h3>
                <div className='shoppingCartTabsHeading'>
                  <h3>Vận chuyển và thanh toán</h3>
                  <p>Thanh toán danh sách sản phẩm</p>
                </div>
              </div>
            </button>
            <button
              className={activeTab === 'cartTab3' ? 'active' : ''}
              onClick={() => {
                handleTabClick('cartTab3');
              }}
              disabled={cartItems.length === 0 || payments === false}
            >
              <div className='shoppingCartTabsNumber'>
                <h3>03</h3>
                <div className='shoppingCartTabsHeading'>
                  <h3>Xác nhận</h3>
                  <p>Xem lại và gửi đơn hàng</p>
                </div>
              </div>
            </button>
          </div>
          <div className='shoppingCartTabsContent'>
            {/* tab1 */}
            {activeTab === 'cartTab1' && (
              <div className='shoppingBagSection'>
                <div className='shoppingBagTableSection'>
                  {/* For Desktop Devices */}
                  <table className='shoppingBagTable'>
                    <thead>
                      <tr>
                        <th>Sản phẩm</th>
                        <th></th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tổng phụ</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                          <tr key={item.productID}>
                            <td data-label='Sản phẩm'>
                              <div className='shoppingBagTableImg'>
                                <Link to='/product' onClick={scrollToTop}>
                                  <img src={item.frontImg} alt='' />
                                </Link>
                              </div>
                            </td>
                            <td data-label=''>
                              <div className='shoppingBagTableProductDetail'>
                                <Link to='/product' onClick={scrollToTop}>
                                  <h4>{item.productName}</h4>
                                </Link>
                                <p>{item.productReviews}</p>
                              </div>
                            </td>
                            <td
                              data-label='Giá'
                              style={{ textAlign: 'center' }}
                            >
                              {item.productPrice} VND
                            </td>
                            <td data-label='Số lượng'>
                              <div className='ShoppingBagTableQuantity'>
                                <button
                                  onClick={() =>
                                    handleQuantityChange(
                                      item.productID,
                                      item.quantity - 1
                                    )
                                  }
                                >
                                  -
                                </button>
                                <input
                                  type='text'
                                  min='1'
                                  max='20'
                                  value={item.quantity}
                                  onChange={(e) =>
                                    handleQuantityChange(
                                      item.productID,
                                      parseInt(e.target.value)
                                    )
                                  }
                                />
                                <button
                                  onClick={() =>
                                    handleQuantityChange(
                                      item.productID,
                                      item.quantity + 1
                                    )
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td data-label='Tổng phụ'>
                              <p
                                style={{
                                  textAlign: 'center',
                                  fontWeight: '500',
                                }}
                              >
                                {item.quantity * item.productPrice}VND
                              </p>
                            </td>
                            <td data-label=''>
                              <MdOutlineClose
                                onClick={() =>
                                  dispatch(removeFromCart(item.productID))
                                }
                              />
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan='6'>
                            <div className='shoppingCartEmpty'>
                              <span>Giỏ hàng của bạn trống!</span>
                              <Link to='/shop' onClick={scrollToTop}>
                                <button>Mua sắm ngay</button>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                    <tfoot>
                      <th
                        colSpan='6'
                        className='shopCartFooter'
                        style={{
                          borderBottom: 'none',
                          padding: '20px 0px',
                        }}
                      >
                        {cartItems.length > 0 && (
                          <div className='shopCartFooterContainer'>
                            <form>
                              <input
                                type='text'
                                placeholder='Mã giảm giá'
                              ></input>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                              >
                                Áp dụng mã
                              </button>
                            </form>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                              className='shopCartFooterbutton'
                            >
                              Cập nhật giỏ hàng
                            </button>
                          </div>
                        )}
                      </th>
                    </tfoot>
                  </table>

                  {/* For Mobile devices */}
                  <div className='shoppingBagTableMobile'>
                    {cartItems.length > 0 ? (
                      <>
                        {cartItems.map((item) => (
                          <div key={item.productID}>
                            <div className='shoppingBagTableMobileItems'>
                              <div className='shoppingBagTableMobileItemsImg'>
                                <Link to='/product' onClick={scrollToTop}>
                                  <img src={item.frontImg} alt='' />
                                </Link>
                              </div>
                              <div className='shoppingBagTableMobileItemsDetail'>
                                <div className='shoppingBagTableMobileItemsDetailMain'>
                                  <Link to='/product' onClick={scrollToTop}>
                                    <h4>{item.productName}</h4>
                                  </Link>
                                  <p>{item.productReviews}</p>
                                  <div className='shoppingBagTableMobileQuantity'>
                                    <button
                                      onClick={() =>
                                        handleQuantityChange(
                                          item.productID,
                                          item.quantity - 1
                                        )
                                      }
                                    >
                                      -
                                    </button>
                                    <input
                                      type='text'
                                      min='1'
                                      max='20'
                                      value={item.quantity}
                                      onChange={(e) =>
                                        handleQuantityChange(
                                          item.productID,
                                          parseInt(e.target.value)
                                        )
                                      }
                                    />
                                    <button
                                      onClick={() =>
                                        handleQuantityChange(
                                          item.productID,
                                          item.quantity + 1
                                        )
                                      }
                                    >
                                      +
                                    </button>
                                  </div>
                                  <span>{item.productPrice}VND</span>
                                </div>
                                <div className='shoppingBagTableMobileItemsDetailTotal'>
                                  <MdOutlineClose
                                    size={20}
                                    onClick={() =>
                                      dispatch(removeFromCart(item.productID))
                                    }
                                  />
                                  <p>{item.quantity * item.productPrice}VND</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                        <div className='shopCartFooter'>
                          <div className='shopCartFooterContainer'>
                            <form>
                              <input
                                type='text'
                                placeholder='Mã giảm giá'
                              ></input>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                              >
                                Áp dụng mã
                              </button>
                            </form>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                              className='shopCartFooterbutton'
                            >
                              Cập nhật giỏ hàng
                            </button>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className='shoppingCartEmpty'>
                        <span>Giỏ hàng của bạn trống!</span>
                        <Link to='/shop' onClick={scrollToTop}>
                          <button>Mua sắm ngay</button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
                <div className='shoppingBagTotal'>
                  <h3>Tổng giỏ hàng</h3>
                  <table className='shoppingBagTotalTable'>
                    <tbody>
                      <tr>
                        <th>Tổng phụ</th>
                        <td>{totalPrice} VND</td>
                      </tr>
                      <tr>
                        <th>Vận chuyển</th>
                        <td>
                          <div className='shoppingBagTotalTableCheck'>
                            <p>20000 VND</p>
                            <p>Vận chuyển đến Al..</p>
                            <p
                              onClick={scrollToTop}
                              style={{
                                cursor: 'pointer',
                              }}
                            >
                              THAY ĐỔI ĐỊA CHỈ
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>Tổng cộng</th>
                        <td>{totalPrice === 0 ? 0 : totalPrice + 20000} VND</td>
                      </tr>
                    </tbody>
                  </table>
                  <button
                    onClick={() => {
                      handleTabClick('cartTab2');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    disabled={cartItems.length === 0}
                  >
                    Tiến hành thanh toán
                  </button>
                </div>
              </div>
            )}

            {/* tab2 */}
            {activeTab === 'cartTab2' && (
              <div className='checkoutSection'>
                <div className='checkoutDetailsSection'>
                  <h4>Thông tin thanh toán</h4>
                  <div className='checkoutDetailsForm'>
                    <form>
                    <div className='checkoutDetailsFormRow'>
                      <input
                        type='text'
                        placeholder='Tên'
                        value={customerFirstName}
                        onChange={(e) => setCustomerFirstName(e.target.value)}
                      />
                      <input
                        type='text'
                        placeholder='Họ'
                        value={customerLastName}
                        onChange={(e) => setCustomerLastName(e.target.value)}
                      />
                    </div>
                    <input
                      type='email'
                      placeholder='Email *'
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                    />
                      <div className='checkoutDetailsFormRow'>
                        <Calendar onDateChange={handleDateChange} />
                        <input
                          type='text'
                          value={formattedSelectedDates}
                          placeholder='Ngày thuê'
                          readOnly
                        />
                      </div>
                      <input type='text' placeholder='Địa chỉ đường*' />
                      <input type='text' placeholder='Thành phố / Tỉnh *' />
                      <input type='text' placeholder='Số điện thoại *' />
                      <div className='checkoutDetailsFormCheck'>
                      </div>
                      <textarea
                        cols={30}
                        rows={8}
                        placeholder='Ghi chú đơn hàng (Tùy chọn)'
                      />
                    </form>
                  </div>
                </div>
                <div className='checkoutPaymentSection'>
                  <div className='checkoutTotalContainer'>
                    <h3>Đơn hàng của bạn</h3>
                    <div className='checkoutItems'>
                      <table>
                        <thead>
                          <tr>
                            <th>SẢN PHẨM</th>
                            <th>TỔNG PHỤ</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.map((items) => (
                            <tr>
                              <td>
                                {items.productName} x {items.quantity}
                              </td>
                              <td>{items.productPrice * items.quantity}VND</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className='checkoutTotal'>
                      <table>
                        <tbody>
                          <tr>
                            <th>Tổng phụ</th>
                            <td>{totalPrice} VND</td>
 XXIII
                            <th>Ngày thuê</th>
                            <td>{selectedDates?.size}</td>
                          </tr>
                          <tr>
                            <th>Vận chuyển</th>
                            <td>20000 VND</td>
                          </tr>
                          <tr>
                            <th>Tổng cộng</th>
                            <td>
                              {totalPrice === 0 ? 0 : totalPrice * selectedDates.size + 20000} VND
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className='checkoutPaymentContainer'>
                    <label>
                      <input
                        type='radio'
                        name='payment'
                        value='Direct Bank Transfer'
                        defaultChecked
                        onChange={handlePaymentChange}
                      />
                      <div className='checkoutPaymentMethod'>
                        <span>Chuyển khoản ngân hàng</span>
                      </div>
                    </label>
                    <label>
                      <input
                        type='radio'
                        name='payment'
                        value='Cash on delivery'
                        onChange={handlePaymentChange}
                      />
                      <div className='checkoutPaymentMethod'>
                        <span>Thanh toán khi nhận hàng</span>
                      </div>
                    </label>
                    <div className='policyText'>
                      Dữ liệu cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng,
                      hỗ trợ trải nghiệm của bạn trên trang web này và cho
                      các mục đích khác được mô tả trong{' '}
                      <Link to='/terms' onClick={scrollToTop}>
                        Chính sách bảo mật
                      </Link>
                      của chúng tôi.
                    </div>
                  </div>
                  <button
                    onClick={handlePlaceOrder}  
                  >
                    Đặt hàng
                  </button>
                </div>
              </div>
            )}

            {/* Bank Transfer Dialog */}
            {showBankDialog && (
              <div className="bank-dialog-overlay">
                <div className="bank-dialog">
                  <div className="bank-dialog-header">
                    <h3>Thông tin chuyển khoản</h3>
                    <MdOutlineClose
                      size={24}
                      className="bank-dialog-close"
                      onClick={handleCloseDialog}
                    />
                  </div>
                  <div className="bank-dialog-content">
                    <p><strong>Ngân hàng:</strong> Vietcombank</p>
                    <p><strong>Số tài khoản:</strong> 1234 5678 9012 3456</p>
                    <p><strong>Chủ tài khoản:</strong> Công ty ABC</p>
                    <p><strong>Nội dung chuyển khoản:</strong> Thanh toán đơn hàng #{orderNumber}</p>
                  </div>
                  <div className="bank-dialog-qr">
                    <img
                      src="data:image/png;base64,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" // Replace with your QR code image path
                      alt="QR Code"
                      className="bank-dialog-qr-image"
                    />
                  </div>
                  <p className="bank-dialog-instruction">
                    Vui lòng quét mã Avenue hoặc chuyển khoản theo thông tin trên. Sau khi hoàn tất, nhấn "Xác nhận" để tiếp tục.
                  </p>
                  <button
                    className="bank-dialog-button"
                    onClick={handleCloseDialog}
                  >
                    Xác nhận
                  </button>
                </div>
              </div>
            )}

            {/* tab3 */}
            {activeTab === 'cartTab3' && (
              <div className='orderCompleteSection'>
                <div className='orderComplete'>
                  <div className='orderCompleteMessage'>
                    <div className='orderCompleteMessageImg'>
                      <img src={success} alt='' />
                    </div>
                    <h3>Đơn hàng của bạn đã hoàn thành!</h3>
                    <p>Cảm ơn bạn. Đơn hàng của bạn đã được nhận.</p>
                  </div>
                  <div className='orderInfo'>
                    <div className='orderInfoItem'>
                      <p>Số đơn hàng</p>
                      <h4>{orderNumber}</h4>
                    </div>
                    <div className='orderInfoItem'>
                      <p>Ngày</p>
                      <h4>{formatDate(currentDate)}</h4>
                    </div>
                    <div className='orderInfoItem'>
                      <p>Ngày thuê</p>
                      <h4>{formattedSelectedDates || 'Chưa chọn'}</h4>
                    </div>
                    <div className='orderInfoItem'>
                      <p>Tổng cộng</p>
                      <h4>{(totalPrice === 0 ? 0 : totalPrice * selectedDates.size + 20000).toFixed(2)}VND</h4>
                    </div>
                    <div className='orderInfoItem'>
                      <p>Phương thức thanh toán</p>
                      <h4>{selectedPayment}</h4>
                    </div>
                  </div>
                  <div className='orderTotalContainer'>
                    <h3>Chi tiết đơn hàng</h3>
                    <div className='orderItems'>
                      <table>
                        <thead>
                          <tr>
                            <th>SẢN PHẨM</th>
                            <th>TỔNG PHỤ</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.map((items) => (
                            <tr>
                              <td>
                                {items.productName} x {items.quantity}
                              </td>
                              <td>{items.productPrice * items.quantity}VND</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className='orderTotal'>
                      <table>
                        <tbody>
                          <tr>
                            <th>Tổng phụ</th>
                            <td>{totalPrice} VND</td>
                          </tr>
                          <tr>
                            <th>Vận chuyển</th>
                            <td>20000 VND</td>
                          </tr>
                          <tr>
                            <th>Ngày thuê</th>
                            <td>{formattedSelectedDates}</td>
                          </tr>
                          <tr>
                            <th>Tổng cộng</th>
                            <td>
                              {(totalPrice === 0 ? 0 : totalPrice * selectedDates.size + 20000)} VND
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;