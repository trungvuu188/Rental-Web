import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
import paymentIcon from '../../assets/vnpay.jpg';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Đăng ký thành công');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const getCurrentYear = () => new Date().getFullYear();

  return (
    <>
      <footer className='footer'>
        <div className='footer__container'>
          <div className='footer_left'>
            <div className='footer_logo_container'>
              <img src={logo} alt='' Z className='logo' />
            </div>

            <p>Đà Nẵng, Việt Nam</p>

            <div className='footer_address'>
              <strong> ShareIt.com </strong>
              <strong> +84 123-123-123 </strong>
            </div>

            <div className='social_links'>
              <FaFacebookF />
              {/* <FaXTwitter />
              <FaInstagram />
              <FaYoutube />
              <FaPinterest /> */}
            </div>
          </div>

          <div className='footer_content'>
            <h5>Công ty</h5>
            <div className='links_container'>
              <ul onClick={scrollToTop}>
                <li>
                  <Link to='/about'>Về chúng tôi</Link>
                </li>
                <li>
                  <Link to='/about'>Tuyển dụng</Link>
                </li>
                <li>
                  <Link to='*'>Đối tác</Link>
                </li>
                <li>
                  <Link to='/blog'>Blog</Link>
                </li>
                <li>
                  <Link to='/contact'>Liên hệ</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer_content'>
            <h5>Cửa hàng</h5>
            <div className='links_container'>
              <ul onClick={scrollToTop}>
                <li>
                  <Link to='/shop'>Hàng mới</Link>
                </li>
                <li>
                  <Link to='/shop'>Phụ kiện</Link>
                </li>
                <li>
                  <Link to='/shop'>Nam</Link>
                </li>
                <li>
                  <Link to='/shop'>Nữ</Link>
                </li>
                <li>
                  <Link to='/shop'>Thuê tất cả</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer_content'>
            <h5>Hỗ trợ</h5>
            <div className='links_container'>
              <ul onClick={scrollToTop}>
                <li>
                  <Link to='/contact'>Dịch vụ khách hàng</Link>
                </li>
                <li>
                  <Link to='/loginSignUp'>Tài khoản của tôi</Link>
                </li>
                <li>
                  <Link to='/contact'>Tìm cửa hàng</Link>
                </li>
                <li>
                  <Link to='/terms'>Pháp lý & Bảo mật</Link>
                </li>
                <li>
                  <Link to='/contact'>Liên hệ</Link>
                </li>
                <li>
                  <Link to='/'>Thẻ quà tặng</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer_right'>
            <h5>Đăng ký</h5>
            <p>
              Hãy là người đầu tiên nhận được tin tức mới nhất về xu hướng, khuyến mãi và nhiều hơn nữa!
            </p>

            <form onSubmit={handleSubscribe}>
              <input type='email' placeholder='Địa chỉ email của bạn' required />
              <button type='submit'>Tham gia</button>
            </form>

            <h6>Thanh toán an toàn</h6>
            <div className='paymentIconContainer'>
              <img src={paymentIcon} alt='' />
            </div>
          </div>
        </div>
        <div className='footer_bottom'>
          <p>
            © {getCurrentYear()} ShareIt. Tất cả quyền được bảo lưu | Được tạo bởi{' '}
            <a
              href='https://github.com/trungvuu188'
              target='_blank'
              rel='noreferrer'
              style={{ color: '#C22928', textDecoration: 'none' }}
            >
              BirdCanSwim
            </a>{' '}
            với ❤️
          </p>
          <div className='footerLangCurrency'>
            <div className='footerLang'>
              <p>Ngôn ngữ</p>
              <select name='language' id='language'>
                <option value='vietnamese'>Tiếng Việt</option>
              </select>
            </div>
            <div className='footerCurrency'>
              <p>Tiền tệ</p>
              <select name='currency' id='currency'>
                <option value='VND'>VND</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
