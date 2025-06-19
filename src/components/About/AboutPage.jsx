import React from 'react';
import './AboutPage.css';

import about1 from '../../assets/About/about-1.jpg';
import about2 from '../../assets/About/about-2.jpg';

import Services from '../../components/Home/Services/Services';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import brand1 from '../../assets/Brands/brand1.png';
import brand2 from '../../assets/Brands/brand2.png';
import brand3 from '../../assets/Brands/brand3.png';
import brand4 from '../../assets/Brands/brand4.png';
import brand5 from '../../assets/Brands/brand5.png';
import brand6 from '../../assets/Brands/brand6.png';
import brand7 from '../../assets/Brands/brand7.png';

const AboutPage = () => {
  return (
    <>
      <div className='aboutSection'>
        <h2>About Us</h2>
        <img src={about1} alt='' />
        <div className='aboutContent'>
          <h3>Our Story</h3>
          <h4>
            ShareIt ra đời từ một câu hỏi đơn giản: Làm thế nào để chúng ta có
            thể mặc đẹp mỗi ngày mà không làm tổn hại đến môi trường? Chúng tôi
            nhận ra rằng thời trang không cần thiết phải gắn liền với sự lãng
            phí.
          </h4>
          <p>
            Với mong muốn thay đổi thói quen tiêu dùng, ShareIt trở thành nền
            tảng kết nối các shop thời trang và người thuê - tạo nên một hệ sinh
            thái thời trang bền vững, nơi quần áo được chia sẻ, tái sử dụng và
            lưu chuyển thông minh giữa những người yêu thời trang.
          </p>
          <div className='content1'>
            <div className='contentBox'>
              <h5>Our Mission</h5>
              <p>
                Sứ mệnh của ShareIt là góp phần xây dựng một nền thời trang bền
                vững, nơi mỗi chiếc áo, chiếc váy đều được tận dụng tối đa giá
                trị sử dụng. Chúng tôi giúp người dùng tiếp cận hàng ngàn sản
                phẩm thời trang chất lượng mà không cần mua mới, từ đó giảm
                thiểu rác thải dệt may, tiết kiệm tài nguyên, và hạn chế tác
                động tiêu cực đến môi trường. Đồng thời, chúng tôi hỗ trợ các
                shop gia tăng doanh thu từ mô hình thuê, không chỉ bán.
              </p>
            </div>
            {/* <div className="contentBox">
              <h5>Our Vision</h5>
              <p>
              Chúng tôi mơ về một tương lai nơi thời trang không còn đồng nghĩa với tiêu dùng quá mức. ShareIt mong muốn trở thành nền tảng thuê đồ hàng đầu Việt Nam, tiên phong trong việc thúc đẩy thời trang tuần hoàn - nơi mọi người đều có thể mặc đẹp, sống xanh, và cùng nhau góp phần bảo vệ hành tinh. Với mỗi món đồ được chia sẻ, chúng ta cùng nhau tạo nên một thế giới bền vững hơn.
              </p>
            </div> */}
          </div>
          <div className='content2'>
            <div className='imgContent'>
              <img src={about2} alt='' />
            </div>
            <div className='textContent'>
              <h5>Our Vision</h5>
              <p>
                Chúng tôi mơ về một tương lai nơi thời trang không còn đồng
                nghĩa với tiêu dùng quá mức. ShareIt mong muốn trở thành nền
                tảng thuê đồ hàng đầu Việt Nam, tiên phong trong việc thúc đẩy
                thời trang tuần hoàn - nơi mọi người đều có thể mặc đẹp, sống
                xanh, và cùng nhau góp phần bảo vệ hành tinh. Với mỗi món đồ
                được chia sẻ, chúng ta cùng nhau tạo nên một thế giới bền vững
                hơn.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Services />
    </>
  );
};

export default AboutPage;
