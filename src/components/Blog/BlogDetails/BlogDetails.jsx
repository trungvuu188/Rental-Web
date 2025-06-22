import React, { useState } from 'react';
import './BlogDetails.css';
import blogdetail1 from '../../../assets/Blog/blogDetail1.jpg';
import blogimage1 from '../../../assets/Blog/blogDetail2.jpg';
import blogimage2 from '../../../assets/Blog/blogDetail3.jpg';

import { FaFacebookF } from 'react-icons/fa';
import { GoChevronLeft } from 'react-icons/go';
import { GoChevronRight } from 'react-icons/go';
import { useSearchParams } from 'react-router-dom';

const BlogDetails = () => {
  const [searchParams] = useSearchParams();
  const [blogId, setBlogId] = useState(searchParams.get('id'))
  const scrollToTop = () => {
    const randomN = Math.floor(Math.random() * 6) + 1; 
    setBlogId(randomN + '');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  if(blogId === '1') return (<>
      <div className='blogDetailsSection'>
        <div className='blogDetailsSectionContainer'>
          <div className='blogDetailsHeading'>
            <h2> Top địa điểm du lịch Đà Nẵng - Sẵn sàng du lịch phong cách</h2>
            <div className='blogDetailsMetaData'>
              <span>by admin</span>
              <span>May 19, 2024</span>
              <span>Trends</span>
            </div>
          </div>
          <div className='blogDetailsFeaturedImg'>
            <img src={blogdetail1} alt='' />
          </div>
          <div className='blogDetailsContent'>
            <p>
            Nếu bạn là Gen Z đam mê khám phá, yêu thích sống ảo và không thể ngồi yên trong những ngày nghỉ thì Đà Nẵng chính là tọa độ bạn không nên bỏ qua. Thành phố biển xinh đẹp này không chỉ nổi bật bởi thiên nhiên hùng vĩ mà còn gây sốt bởi những địa điểm du lịch cực chất, “lên hình auto đẹp”, vừa hợp túi tiền vừa đúng chất chill. Cùng khám phá ngay top địa điểm du lịch tại Đà Nẵng để chuẩn bị cho hành trình du lịch phong cách, cá tính và đậm chất Gen Z nhé!
            </p>
            <h5>1. Bà Nà Hills - Check in giữa trời Âu</h5>
            <p>
            Nếu ai hỏi “Du lịch Đà Nẵng đi đâu đầu tiên?” thì câu trả lời không gì khác ngoài Bà Nà Hills. Nằm trên đỉnh núi Chúa với độ cao hơn 1400 mét, nơi đây mang đến trải nghiệm như lạc bước vào châu Âu thu nhỏ. Điểm nhấn khiến Gen Z mê mệt chính là Cầu Vàng, cây cầu độc đáo được nâng đỡ bởi đôi bàn tay khổng lồ. Background này từng lọt vào top địa điểm check-in nổi bật nhất thế giới, nên chắc chắn không thể thiếu trong bộ ảnh du lịch của bạn. Ngoài ra, bạn có thể thả mình giữa không gian cổ điển kiểu Pháp, tham gia lễ hội đường phố sôi động hoặc thưởng thức ẩm thực tại các nhà hàng phong cách châu Âu trong khu làng Pháp.
            </p>
            <h5>2. Bãi biển Mỹ Khê - Nơi nắng vàng, biển xanh chờ đón</h5>
            <p>
            Không thể nói đến du lịch Đà Nẵng mà bỏ qua bãi biển Mỹ Khê – một trong những bãi biển đẹp nhất hành tinh. Với làn nước trong vắt, cát trắng mịn, nắng nhẹ nhàng và không gian cực chill, đây là nơi lý tưởng để Gen Z tha hồ “sống chậm” hay tổ chức những buổi picnic vui nhộn. Bạn có thể trải nghiệm các hoạt động như lướt sóng, chèo SUP, chơi bóng chuyền bãi biển hoặc đơn giản là dạo bước trên bờ cát lúc hoàng hôn, chill cùng tiếng sóng vỗ rì rào.</p>
            <h5>3. Ngũ Hành Sơn - Hành trình khám phá tâm linh và thiên nhiên</h5>
            <p>
            Ngũ Hành Sơn gồm 5 ngọn núi đá vôi với tên gọi tượng trưng cho ngũ hành: Kim, Mộc, Thủy, Hỏa, Thổ. Đây là địa điểm vừa mang ý nghĩa tâm linh vừa cực kỳ “đáng khám phá” cho những bạn trẻ yêu thích trekking nhẹ nhàng. Bạn có thể leo núi, ghé thăm các chùa cổ như chùa Linh Ứng, động Huyền Không, động Âm Phủ… và đừng quên lên đến đỉnh để ngắm toàn cảnh Đà Nẵng từ trên cao.</p>
            <h5>4. Cầu Rồng - Biểu tượng sống động của thành phố
</h5>
            <p>Một trong những biểu tượng không thể thiếu của Đà Nẵng chính là Cầu Rồng. Vào mỗi tối cuối tuần, bạn sẽ được chiêm ngưỡng màn trình diễn Rồng phun lửa và phun nước cực kỳ mãn nhãn – trải nghiệm “đậm chất Gen Z” không nên bỏ lỡ. Đây cũng là nơi tụ tập quen thuộc của nhiều bạn trẻ vào buổi tối để hóng mát, trò chuyện và ngắm cảnh thành phố lên đèn.
            </p>
            <h5>5. Đỉnh Bàn Cờ - Săn mây và “ngồi đánh cờ” với tiên
</h5>
            <p>Nếu bạn thích những nơi “chill tận nóc” và có chút mạo hiểm, hãy thử trekking lên đỉnh Bàn Cờ. Với độ cao gần 700 mét, đây là nơi có view toàn thành phố Đà Nẵng đẹp nhất. Hình tượng ông Tiên ngồi đánh cờ trên đỉnh núi là điểm nhấn thú vị, tạo nên không gian huyền ảo, rất hợp cho những bức hình đậm chất phiêu lưu, tự do.</p>
            <h5>6. Bán đảo Sơn Trà - “Lá phổi xanh” giữa lòng thành phố
</h5>
            <p>Sơn Trà là nơi giao hòa giữa núi rừng và biển cả, nơi lý tưởng để vừa chill, vừa khám phá thiên nhiên. Bạn có thể thuê xe máy để chạy dọc các cung đường ven biển cực thơ, ghé thăm chùa Linh Ứng với tượng Phật Quan Âm cao nhất Việt Nam, hoặc thử thách bản thân với đèo Hải Vân sát cạnh. Đặc biệt, khu vực này còn là nơi sinh sống của loài voọc chà vá chân nâu quý hiếm – một “đặc sản sinh học” mà Gen Z yêu môi trường chắc chắn sẽ yêu thích.
</p>          
            <h5>7. Bảo tàng 3D Trick Eye - Không gian sống ảo đỉnh cao
            </h5>
                        <p>Nếu bạn là tín đồ của nghệ thuật và ảnh ảo diệu, thì bảo tàng 3D là điểm đến không thể bỏ qua. Với hàng trăm bức tranh 3D sống động mô phỏng thế giới cổ tích, viễn tưởng, lịch sử… nơi đây cho bạn thỏa sức sáng tạo với những concept ảnh siêu chất. Không cần app chỉnh sửa cầu kỳ, chỉ cần một chiếc điện thoại và góc chụp khéo léo, bạn sẽ có ngay bộ ảnh trăm nghìn like trên Instagram.            </p> 
                        <h5>8. Chợ Cồn - Ăn sập đặc sản Đà Nẵng
            </h5>
                        <p>Du lịch mà không ăn thì quá thiếu sót, đặc biệt là khi bạn đang ở giữa “thiên đường ẩm thực” như chợ Cồn. Đây là nơi bạn có thể thử đủ món ăn vặt trứ danh của Đà Nẵng như mì Quảng, bánh tráng cuốn thịt heo, bún mắm nêm, ốc hút, chè xoa xoa… Không chỉ ngon mà giá cả ở đây cũng cực kỳ hợp lý với học sinh sinh viên và Gen Z muốn “ăn sang mà không tốn kém”.</p>  
          </div>
          <div className='blogDetailsContentImg'>
            <img src={blogimage1} alt='' />
            <img src={blogimage2} alt='' />
          </div>
          <div className='blogDetailsContent'>
            <p>
            Đà Nẵng không chỉ là một thành phố đáng sống mà còn là điểm đến cực kỳ lý tưởng cho giới trẻ hiện đại. Với những địa điểm du lịch đậm chất riêng, dễ check-in, dễ chill và cực kỳ “ăn ảnh”, bạn hoàn toàn có thể tự tạo nên chuyến đi mang dấu ấn cá nhân.
            </p>
            <p>
            Hãy lên kế hoạch thật chỉn chu, rủ hội bạn thân cùng khám phá top địa điểm du lịch tại Đà Nẵng, và biến kỳ nghỉ tiếp theo trở thành hành trình đáng nhớ nhất. Sẵn sàng du lịch phong cách chưa nào?
            </p>
          </div>
          <div className='share-buttons'>
            <button className='share-button facebook'>
              <FaFacebookF /> Share on Facebook
            </button>
          </div>
          <div className='blogDetailsNextPrev'>
            <div className='blogDetailsNextPrevContainer'>
              <div
                className='blogDetailsNextPrevContainerIcon'
                onClick={scrollToTop}
              >
                <GoChevronLeft size={20} />
                <p>PREVIOUS POST</p>
              </div>
            </div>
            <div className='blogDetailsNextPrevContainer'>
              <div
                className='blogDetailsNextPrevContainerIcon2'
                onClick={scrollToTop}
              >
                <p>NEXT POST</p>
                <GoChevronRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  if(blogId === '2') return (
    <>
      <div className='blogDetailsSection'>
        <div className='blogDetailsSectionContainer'>
          <div className='blogDetailsHeading'>
            <h2> Top địa điểm du lịch Đà Nẵng - Sẵn sàng du lịch phong cách 2</h2>
            <div className='blogDetailsMetaData'>
              <span>by admin</span>
              <span>May 19, 2024</span>
              <span>Trends</span>
            </div>
          </div>
          <div className='blogDetailsFeaturedImg'>
            <img src={blogdetail1} alt='' />
          </div>
          <div className='blogDetailsContent'>
            <p>
            Nếu bạn là Gen Z đam mê khám phá, yêu thích sống ảo và không thể ngồi yên trong những ngày nghỉ thì Đà Nẵng chính là tọa độ bạn không nên bỏ qua. Thành phố biển xinh đẹp này không chỉ nổi bật bởi thiên nhiên hùng vĩ mà còn gây sốt bởi những địa điểm du lịch cực chất, “lên hình auto đẹp”, vừa hợp túi tiền vừa đúng chất chill. Cùng khám phá ngay top địa điểm du lịch tại Đà Nẵng để chuẩn bị cho hành trình du lịch phong cách, cá tính và đậm chất Gen Z nhé!
            </p>
            <h5>1. Bà Nà Hills - Check in giữa trời Âu</h5>
            <p>
            Nếu ai hỏi “Du lịch Đà Nẵng đi đâu đầu tiên?” thì câu trả lời không gì khác ngoài Bà Nà Hills. Nằm trên đỉnh núi Chúa với độ cao hơn 1400 mét, nơi đây mang đến trải nghiệm như lạc bước vào châu Âu thu nhỏ. Điểm nhấn khiến Gen Z mê mệt chính là Cầu Vàng, cây cầu độc đáo được nâng đỡ bởi đôi bàn tay khổng lồ. Background này từng lọt vào top địa điểm check-in nổi bật nhất thế giới, nên chắc chắn không thể thiếu trong bộ ảnh du lịch của bạn. Ngoài ra, bạn có thể thả mình giữa không gian cổ điển kiểu Pháp, tham gia lễ hội đường phố sôi động hoặc thưởng thức ẩm thực tại các nhà hàng phong cách châu Âu trong khu làng Pháp.
            </p>
            <h5>2. Bãi biển Mỹ Khê - Nơi nắng vàng, biển xanh chờ đón</h5>
            <p>
            Không thể nói đến du lịch Đà Nẵng mà bỏ qua bãi biển Mỹ Khê – một trong những bãi biển đẹp nhất hành tinh. Với làn nước trong vắt, cát trắng mịn, nắng nhẹ nhàng và không gian cực chill, đây là nơi lý tưởng để Gen Z tha hồ “sống chậm” hay tổ chức những buổi picnic vui nhộn. Bạn có thể trải nghiệm các hoạt động như lướt sóng, chèo SUP, chơi bóng chuyền bãi biển hoặc đơn giản là dạo bước trên bờ cát lúc hoàng hôn, chill cùng tiếng sóng vỗ rì rào.</p>
            <h5>3. Ngũ Hành Sơn - Hành trình khám phá tâm linh và thiên nhiên</h5>
            <p>
            Ngũ Hành Sơn gồm 5 ngọn núi đá vôi với tên gọi tượng trưng cho ngũ hành: Kim, Mộc, Thủy, Hỏa, Thổ. Đây là địa điểm vừa mang ý nghĩa tâm linh vừa cực kỳ “đáng khám phá” cho những bạn trẻ yêu thích trekking nhẹ nhàng. Bạn có thể leo núi, ghé thăm các chùa cổ như chùa Linh Ứng, động Huyền Không, động Âm Phủ… và đừng quên lên đến đỉnh để ngắm toàn cảnh Đà Nẵng từ trên cao.</p>
            <h5>4. Cầu Rồng - Biểu tượng sống động của thành phố
</h5>
            <p>Một trong những biểu tượng không thể thiếu của Đà Nẵng chính là Cầu Rồng. Vào mỗi tối cuối tuần, bạn sẽ được chiêm ngưỡng màn trình diễn Rồng phun lửa và phun nước cực kỳ mãn nhãn – trải nghiệm “đậm chất Gen Z” không nên bỏ lỡ. Đây cũng là nơi tụ tập quen thuộc của nhiều bạn trẻ vào buổi tối để hóng mát, trò chuyện và ngắm cảnh thành phố lên đèn.
            </p>
            <h5>5. Đỉnh Bàn Cờ - Săn mây và “ngồi đánh cờ” với tiên
</h5>
            <p>Nếu bạn thích những nơi “chill tận nóc” và có chút mạo hiểm, hãy thử trekking lên đỉnh Bàn Cờ. Với độ cao gần 700 mét, đây là nơi có view toàn thành phố Đà Nẵng đẹp nhất. Hình tượng ông Tiên ngồi đánh cờ trên đỉnh núi là điểm nhấn thú vị, tạo nên không gian huyền ảo, rất hợp cho những bức hình đậm chất phiêu lưu, tự do.</p>
            <h5>6. Bán đảo Sơn Trà - “Lá phổi xanh” giữa lòng thành phố
</h5>
            <p>Sơn Trà là nơi giao hòa giữa núi rừng và biển cả, nơi lý tưởng để vừa chill, vừa khám phá thiên nhiên. Bạn có thể thuê xe máy để chạy dọc các cung đường ven biển cực thơ, ghé thăm chùa Linh Ứng với tượng Phật Quan Âm cao nhất Việt Nam, hoặc thử thách bản thân với đèo Hải Vân sát cạnh. Đặc biệt, khu vực này còn là nơi sinh sống của loài voọc chà vá chân nâu quý hiếm – một “đặc sản sinh học” mà Gen Z yêu môi trường chắc chắn sẽ yêu thích.
</p>          
            <h5>7. Bảo tàng 3D Trick Eye - Không gian sống ảo đỉnh cao
            </h5>
                        <p>Nếu bạn là tín đồ của nghệ thuật và ảnh ảo diệu, thì bảo tàng 3D là điểm đến không thể bỏ qua. Với hàng trăm bức tranh 3D sống động mô phỏng thế giới cổ tích, viễn tưởng, lịch sử… nơi đây cho bạn thỏa sức sáng tạo với những concept ảnh siêu chất. Không cần app chỉnh sửa cầu kỳ, chỉ cần một chiếc điện thoại và góc chụp khéo léo, bạn sẽ có ngay bộ ảnh trăm nghìn like trên Instagram.            </p> 
                        <h5>8. Chợ Cồn - Ăn sập đặc sản Đà Nẵng
            </h5>
                        <p>Du lịch mà không ăn thì quá thiếu sót, đặc biệt là khi bạn đang ở giữa “thiên đường ẩm thực” như chợ Cồn. Đây là nơi bạn có thể thử đủ món ăn vặt trứ danh của Đà Nẵng như mì Quảng, bánh tráng cuốn thịt heo, bún mắm nêm, ốc hút, chè xoa xoa… Không chỉ ngon mà giá cả ở đây cũng cực kỳ hợp lý với học sinh sinh viên và Gen Z muốn “ăn sang mà không tốn kém”.</p>  
          </div>
          <div className='blogDetailsContentImg'>
            <img src={blogimage1} alt='' />
            <img src={blogimage2} alt='' />
          </div>
          <div className='blogDetailsContent'>
            <p>
            Đà Nẵng không chỉ là một thành phố đáng sống mà còn là điểm đến cực kỳ lý tưởng cho giới trẻ hiện đại. Với những địa điểm du lịch đậm chất riêng, dễ check-in, dễ chill và cực kỳ “ăn ảnh”, bạn hoàn toàn có thể tự tạo nên chuyến đi mang dấu ấn cá nhân.
            </p>
            <p>
            Hãy lên kế hoạch thật chỉn chu, rủ hội bạn thân cùng khám phá top địa điểm du lịch tại Đà Nẵng, và biến kỳ nghỉ tiếp theo trở thành hành trình đáng nhớ nhất. Sẵn sàng du lịch phong cách chưa nào?
            </p>
          </div>
          <div className='share-buttons'>
            <button className='share-button facebook'>
              <FaFacebookF /> Share on Facebook
            </button>
            {/* <button className='share-button twitter'>
              <FaXTwitter />
              Share on Twitter
            </button>
            <button className='share-button pinterest'>
              <FaPinterest /> Share on Pinterest
            </button>
            <button className='share-button more'>
              <FaPlus size={20} />
            </button> */}
          </div>
          <div className='blogDetailsNextPrev'>
            <div className='blogDetailsNextPrevContainer'>
              <div
                className='blogDetailsNextPrevContainerIcon'
                onClick={scrollToTop}
              >
                <GoChevronLeft size={20} />
                <p>PREVIOUS POST</p>
              </div>
            </div>
            <div className='blogDetailsNextPrevContainer'>
              <div
                className='blogDetailsNextPrevContainerIcon2'
                onClick={scrollToTop}
              >
                <p>NEXT POST</p>
                <GoChevronRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  if(blogId === '3') return (
    <>
      <div className='blogDetailsSection'>
        <div className='blogDetailsSectionContainer'>
          <div className='blogDetailsHeading'>
            <h2> Top địa điểm du lịch Đà Nẵng - Sẵn sàng du lịch phong cách 3</h2>
            <div className='blogDetailsMetaData'>
              <span>by admin</span>
              <span>May 19, 2024</span>
              <span>Trends</span>
            </div>
          </div>
          <div className='blogDetailsFeaturedImg'>
            <img src={blogdetail1} alt='' />
          </div>
          <div className='blogDetailsContent'>
            <p>
            Nếu bạn là Gen Z đam mê khám phá, yêu thích sống ảo và không thể ngồi yên trong những ngày nghỉ thì Đà Nẵng chính là tọa độ bạn không nên bỏ qua. Thành phố biển xinh đẹp này không chỉ nổi bật bởi thiên nhiên hùng vĩ mà còn gây sốt bởi những địa điểm du lịch cực chất, “lên hình auto đẹp”, vừa hợp túi tiền vừa đúng chất chill. Cùng khám phá ngay top địa điểm du lịch tại Đà Nẵng để chuẩn bị cho hành trình du lịch phong cách, cá tính và đậm chất Gen Z nhé!
            </p>
            <h5>1. Bà Nà Hills - Check in giữa trời Âu</h5>
            <p>
            Nếu ai hỏi “Du lịch Đà Nẵng đi đâu đầu tiên?” thì câu trả lời không gì khác ngoài Bà Nà Hills. Nằm trên đỉnh núi Chúa với độ cao hơn 1400 mét, nơi đây mang đến trải nghiệm như lạc bước vào châu Âu thu nhỏ. Điểm nhấn khiến Gen Z mê mệt chính là Cầu Vàng, cây cầu độc đáo được nâng đỡ bởi đôi bàn tay khổng lồ. Background này từng lọt vào top địa điểm check-in nổi bật nhất thế giới, nên chắc chắn không thể thiếu trong bộ ảnh du lịch của bạn. Ngoài ra, bạn có thể thả mình giữa không gian cổ điển kiểu Pháp, tham gia lễ hội đường phố sôi động hoặc thưởng thức ẩm thực tại các nhà hàng phong cách châu Âu trong khu làng Pháp.
            </p>
            <h5>2. Bãi biển Mỹ Khê - Nơi nắng vàng, biển xanh chờ đón</h5>
            <p>
            Không thể nói đến du lịch Đà Nẵng mà bỏ qua bãi biển Mỹ Khê – một trong những bãi biển đẹp nhất hành tinh. Với làn nước trong vắt, cát trắng mịn, nắng nhẹ nhàng và không gian cực chill, đây là nơi lý tưởng để Gen Z tha hồ “sống chậm” hay tổ chức những buổi picnic vui nhộn. Bạn có thể trải nghiệm các hoạt động như lướt sóng, chèo SUP, chơi bóng chuyền bãi biển hoặc đơn giản là dạo bước trên bờ cát lúc hoàng hôn, chill cùng tiếng sóng vỗ rì rào.</p>
            <h5>3. Ngũ Hành Sơn - Hành trình khám phá tâm linh và thiên nhiên</h5>
            <p>
            Ngũ Hành Sơn gồm 5 ngọn núi đá vôi với tên gọi tượng trưng cho ngũ hành: Kim, Mộc, Thủy, Hỏa, Thổ. Đây là địa điểm vừa mang ý nghĩa tâm linh vừa cực kỳ “đáng khám phá” cho những bạn trẻ yêu thích trekking nhẹ nhàng. Bạn có thể leo núi, ghé thăm các chùa cổ như chùa Linh Ứng, động Huyền Không, động Âm Phủ… và đừng quên lên đến đỉnh để ngắm toàn cảnh Đà Nẵng từ trên cao.</p>
            <h5>4. Cầu Rồng - Biểu tượng sống động của thành phố
</h5>
            <p>Một trong những biểu tượng không thể thiếu của Đà Nẵng chính là Cầu Rồng. Vào mỗi tối cuối tuần, bạn sẽ được chiêm ngưỡng màn trình diễn Rồng phun lửa và phun nước cực kỳ mãn nhãn – trải nghiệm “đậm chất Gen Z” không nên bỏ lỡ. Đây cũng là nơi tụ tập quen thuộc của nhiều bạn trẻ vào buổi tối để hóng mát, trò chuyện và ngắm cảnh thành phố lên đèn.
            </p>
            <h5>5. Đỉnh Bàn Cờ - Săn mây và “ngồi đánh cờ” với tiên
</h5>
            <p>Nếu bạn thích những nơi “chill tận nóc” và có chút mạo hiểm, hãy thử trekking lên đỉnh Bàn Cờ. Với độ cao gần 700 mét, đây là nơi có view toàn thành phố Đà Nẵng đẹp nhất. Hình tượng ông Tiên ngồi đánh cờ trên đỉnh núi là điểm nhấn thú vị, tạo nên không gian huyền ảo, rất hợp cho những bức hình đậm chất phiêu lưu, tự do.</p>
            <h5>6. Bán đảo Sơn Trà - “Lá phổi xanh” giữa lòng thành phố
</h5>
            <p>Sơn Trà là nơi giao hòa giữa núi rừng và biển cả, nơi lý tưởng để vừa chill, vừa khám phá thiên nhiên. Bạn có thể thuê xe máy để chạy dọc các cung đường ven biển cực thơ, ghé thăm chùa Linh Ứng với tượng Phật Quan Âm cao nhất Việt Nam, hoặc thử thách bản thân với đèo Hải Vân sát cạnh. Đặc biệt, khu vực này còn là nơi sinh sống của loài voọc chà vá chân nâu quý hiếm – một “đặc sản sinh học” mà Gen Z yêu môi trường chắc chắn sẽ yêu thích.
</p>          
            <h5>7. Bảo tàng 3D Trick Eye - Không gian sống ảo đỉnh cao
            </h5>
                        <p>Nếu bạn là tín đồ của nghệ thuật và ảnh ảo diệu, thì bảo tàng 3D là điểm đến không thể bỏ qua. Với hàng trăm bức tranh 3D sống động mô phỏng thế giới cổ tích, viễn tưởng, lịch sử… nơi đây cho bạn thỏa sức sáng tạo với những concept ảnh siêu chất. Không cần app chỉnh sửa cầu kỳ, chỉ cần một chiếc điện thoại và góc chụp khéo léo, bạn sẽ có ngay bộ ảnh trăm nghìn like trên Instagram.            </p> 
                        <h5>8. Chợ Cồn - Ăn sập đặc sản Đà Nẵng
            </h5>
                        <p>Du lịch mà không ăn thì quá thiếu sót, đặc biệt là khi bạn đang ở giữa “thiên đường ẩm thực” như chợ Cồn. Đây là nơi bạn có thể thử đủ món ăn vặt trứ danh của Đà Nẵng như mì Quảng, bánh tráng cuốn thịt heo, bún mắm nêm, ốc hút, chè xoa xoa… Không chỉ ngon mà giá cả ở đây cũng cực kỳ hợp lý với học sinh sinh viên và Gen Z muốn “ăn sang mà không tốn kém”.</p>  
          </div>
          <div className='blogDetailsContentImg'>
            <img src={blogimage1} alt='' />
            <img src={blogimage2} alt='' />
          </div>
          <div className='blogDetailsContent'>
            <p>
            Đà Nẵng không chỉ là một thành phố đáng sống mà còn là điểm đến cực kỳ lý tưởng cho giới trẻ hiện đại. Với những địa điểm du lịch đậm chất riêng, dễ check-in, dễ chill và cực kỳ “ăn ảnh”, bạn hoàn toàn có thể tự tạo nên chuyến đi mang dấu ấn cá nhân.
            </p>
            <p>
            Hãy lên kế hoạch thật chỉn chu, rủ hội bạn thân cùng khám phá top địa điểm du lịch tại Đà Nẵng, và biến kỳ nghỉ tiếp theo trở thành hành trình đáng nhớ nhất. Sẵn sàng du lịch phong cách chưa nào?
            </p>
          </div>
          <div className='share-buttons'>
            <button className='share-button facebook'>
              <FaFacebookF /> Share on Facebook
            </button>
            {/* <button className='share-button twitter'>
              <FaXTwitter />
              Share on Twitter
            </button>
            <button className='share-button pinterest'>
              <FaPinterest /> Share on Pinterest
            </button>
            <button className='share-button more'>
              <FaPlus size={20} />
            </button> */}
          </div>
          <div className='blogDetailsNextPrev'>
            <div className='blogDetailsNextPrevContainer'>
              <div
                className='blogDetailsNextPrevContainerIcon'
                onClick={scrollToTop}
              >
                <GoChevronLeft size={20} />
                <p>PREVIOUS POST</p>
              </div>
            </div>
            <div className='blogDetailsNextPrevContainer'>
              <div
                className='blogDetailsNextPrevContainerIcon2'
                onClick={scrollToTop}
              >
                <p>NEXT POST</p>
                <GoChevronRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  if(blogId === '4') return (
    <>
      <div className='blogDetailsSection'>
        <div className='blogDetailsSectionContainer'>
          <div className='blogDetailsHeading'>
            <h2> Top địa điểm du lịch Đà Nẵng - Sẵn sàng du lịch phong cách 4</h2>
            <div className='blogDetailsMetaData'>
              <span>by admin</span>
              <span>May 19, 2024</span>
              <span>Trends</span>
            </div>
          </div>
          <div className='blogDetailsFeaturedImg'>
            <img src={blogdetail1} alt='' />
          </div>
          <div className='blogDetailsContent'>
            <p>
            Nếu bạn là Gen Z đam mê khám phá, yêu thích sống ảo và không thể ngồi yên trong những ngày nghỉ thì Đà Nẵng chính là tọa độ bạn không nên bỏ qua. Thành phố biển xinh đẹp này không chỉ nổi bật bởi thiên nhiên hùng vĩ mà còn gây sốt bởi những địa điểm du lịch cực chất, “lên hình auto đẹp”, vừa hợp túi tiền vừa đúng chất chill. Cùng khám phá ngay top địa điểm du lịch tại Đà Nẵng để chuẩn bị cho hành trình du lịch phong cách, cá tính và đậm chất Gen Z nhé!
            </p>
            <h5>1. Bà Nà Hills - Check in giữa trời Âu</h5>
            <p>
            Nếu ai hỏi “Du lịch Đà Nẵng đi đâu đầu tiên?” thì câu trả lời không gì khác ngoài Bà Nà Hills. Nằm trên đỉnh núi Chúa với độ cao hơn 1400 mét, nơi đây mang đến trải nghiệm như lạc bước vào châu Âu thu nhỏ. Điểm nhấn khiến Gen Z mê mệt chính là Cầu Vàng, cây cầu độc đáo được nâng đỡ bởi đôi bàn tay khổng lồ. Background này từng lọt vào top địa điểm check-in nổi bật nhất thế giới, nên chắc chắn không thể thiếu trong bộ ảnh du lịch của bạn. Ngoài ra, bạn có thể thả mình giữa không gian cổ điển kiểu Pháp, tham gia lễ hội đường phố sôi động hoặc thưởng thức ẩm thực tại các nhà hàng phong cách châu Âu trong khu làng Pháp.
            </p>
            <h5>2. Bãi biển Mỹ Khê - Nơi nắng vàng, biển xanh chờ đón</h5>
            <p>
            Không thể nói đến du lịch Đà Nẵng mà bỏ qua bãi biển Mỹ Khê – một trong những bãi biển đẹp nhất hành tinh. Với làn nước trong vắt, cát trắng mịn, nắng nhẹ nhàng và không gian cực chill, đây là nơi lý tưởng để Gen Z tha hồ “sống chậm” hay tổ chức những buổi picnic vui nhộn. Bạn có thể trải nghiệm các hoạt động như lướt sóng, chèo SUP, chơi bóng chuyền bãi biển hoặc đơn giản là dạo bước trên bờ cát lúc hoàng hôn, chill cùng tiếng sóng vỗ rì rào.</p>
            <h5>3. Ngũ Hành Sơn - Hành trình khám phá tâm linh và thiên nhiên</h5>
            <p>
            Ngũ Hành Sơn gồm 5 ngọn núi đá vôi với tên gọi tượng trưng cho ngũ hành: Kim, Mộc, Thủy, Hỏa, Thổ. Đây là địa điểm vừa mang ý nghĩa tâm linh vừa cực kỳ “đáng khám phá” cho những bạn trẻ yêu thích trekking nhẹ nhàng. Bạn có thể leo núi, ghé thăm các chùa cổ như chùa Linh Ứng, động Huyền Không, động Âm Phủ… và đừng quên lên đến đỉnh để ngắm toàn cảnh Đà Nẵng từ trên cao.</p>
            <h5>4. Cầu Rồng - Biểu tượng sống động của thành phố
</h5>
            <p>Một trong những biểu tượng không thể thiếu của Đà Nẵng chính là Cầu Rồng. Vào mỗi tối cuối tuần, bạn sẽ được chiêm ngưỡng màn trình diễn Rồng phun lửa và phun nước cực kỳ mãn nhãn – trải nghiệm “đậm chất Gen Z” không nên bỏ lỡ. Đây cũng là nơi tụ tập quen thuộc của nhiều bạn trẻ vào buổi tối để hóng mát, trò chuyện và ngắm cảnh thành phố lên đèn.
            </p>
            <h5>5. Đỉnh Bàn Cờ - Săn mây và “ngồi đánh cờ” với tiên
</h5>
            <p>Nếu bạn thích những nơi “chill tận nóc” và có chút mạo hiểm, hãy thử trekking lên đỉnh Bàn Cờ. Với độ cao gần 700 mét, đây là nơi có view toàn thành phố Đà Nẵng đẹp nhất. Hình tượng ông Tiên ngồi đánh cờ trên đỉnh núi là điểm nhấn thú vị, tạo nên không gian huyền ảo, rất hợp cho những bức hình đậm chất phiêu lưu, tự do.</p>
            <h5>6. Bán đảo Sơn Trà - “Lá phổi xanh” giữa lòng thành phố
</h5>
            <p>Sơn Trà là nơi giao hòa giữa núi rừng và biển cả, nơi lý tưởng để vừa chill, vừa khám phá thiên nhiên. Bạn có thể thuê xe máy để chạy dọc các cung đường ven biển cực thơ, ghé thăm chùa Linh Ứng với tượng Phật Quan Âm cao nhất Việt Nam, hoặc thử thách bản thân với đèo Hải Vân sát cạnh. Đặc biệt, khu vực này còn là nơi sinh sống của loài voọc chà vá chân nâu quý hiếm – một “đặc sản sinh học” mà Gen Z yêu môi trường chắc chắn sẽ yêu thích.
</p>          
            <h5>7. Bảo tàng 3D Trick Eye - Không gian sống ảo đỉnh cao
            </h5>
                        <p>Nếu bạn là tín đồ của nghệ thuật và ảnh ảo diệu, thì bảo tàng 3D là điểm đến không thể bỏ qua. Với hàng trăm bức tranh 3D sống động mô phỏng thế giới cổ tích, viễn tưởng, lịch sử… nơi đây cho bạn thỏa sức sáng tạo với những concept ảnh siêu chất. Không cần app chỉnh sửa cầu kỳ, chỉ cần một chiếc điện thoại và góc chụp khéo léo, bạn sẽ có ngay bộ ảnh trăm nghìn like trên Instagram.            </p> 
                        <h5>8. Chợ Cồn - Ăn sập đặc sản Đà Nẵng
            </h5>
                        <p>Du lịch mà không ăn thì quá thiếu sót, đặc biệt là khi bạn đang ở giữa “thiên đường ẩm thực” như chợ Cồn. Đây là nơi bạn có thể thử đủ món ăn vặt trứ danh của Đà Nẵng như mì Quảng, bánh tráng cuốn thịt heo, bún mắm nêm, ốc hút, chè xoa xoa… Không chỉ ngon mà giá cả ở đây cũng cực kỳ hợp lý với học sinh sinh viên và Gen Z muốn “ăn sang mà không tốn kém”.</p>  
          </div>
          <div className='blogDetailsContentImg'>
            <img src={blogimage1} alt='' />
            <img src={blogimage2} alt='' />
          </div>
          <div className='blogDetailsContent'>
            <p>
            Đà Nẵng không chỉ là một thành phố đáng sống mà còn là điểm đến cực kỳ lý tưởng cho giới trẻ hiện đại. Với những địa điểm du lịch đậm chất riêng, dễ check-in, dễ chill và cực kỳ “ăn ảnh”, bạn hoàn toàn có thể tự tạo nên chuyến đi mang dấu ấn cá nhân.
            </p>
            <p>
            Hãy lên kế hoạch thật chỉn chu, rủ hội bạn thân cùng khám phá top địa điểm du lịch tại Đà Nẵng, và biến kỳ nghỉ tiếp theo trở thành hành trình đáng nhớ nhất. Sẵn sàng du lịch phong cách chưa nào?
            </p>
          </div>
          <div className='share-buttons'>
            <button className='share-button facebook'>
              <FaFacebookF /> Share on Facebook
            </button>
            {/* <button className='share-button twitter'>
              <FaXTwitter />
              Share on Twitter
            </button>
            <button className='share-button pinterest'>
              <FaPinterest /> Share on Pinterest
            </button>
            <button className='share-button more'>
              <FaPlus size={20} />
            </button> */}
          </div>
          <div className='blogDetailsNextPrev'>
            <div className='blogDetailsNextPrevContainer'>
              <div
                className='blogDetailsNextPrevContainerIcon'
                onClick={scrollToTop}
              >
                <GoChevronLeft size={20} />
                <p>PREVIOUS POST</p>
              </div>
            </div>
            <div className='blogDetailsNextPrevContainer'>
              <div
                className='blogDetailsNextPrevContainerIcon2'
                onClick={scrollToTop}
              >
                <p>NEXT POST</p>
                <GoChevronRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  if(blogId === '5') return (
    <>
      <div className='blogDetailsSection'>
        <div className='blogDetailsSectionContainer'>
          <div className='blogDetailsHeading'>
            <h2> Top địa điểm du lịch Đà Nẵng - Sẵn sàng du lịch phong cách 5</h2>
            <div className='blogDetailsMetaData'>
              <span>by admin</span>
              <span>May 19, 2024</span>
              <span>Trends</span>
            </div>
          </div>
          <div className='blogDetailsFeaturedImg'>
            <img src={blogdetail1} alt='' />
          </div>
          <div className='blogDetailsContent'>
            <p>
            Nếu bạn là Gen Z đam mê khám phá, yêu thích sống ảo và không thể ngồi yên trong những ngày nghỉ thì Đà Nẵng chính là tọa độ bạn không nên bỏ qua. Thành phố biển xinh đẹp này không chỉ nổi bật bởi thiên nhiên hùng vĩ mà còn gây sốt bởi những địa điểm du lịch cực chất, “lên hình auto đẹp”, vừa hợp túi tiền vừa đúng chất chill. Cùng khám phá ngay top địa điểm du lịch tại Đà Nẵng để chuẩn bị cho hành trình du lịch phong cách, cá tính và đậm chất Gen Z nhé!
            </p>
            <h5>1. Bà Nà Hills - Check in giữa trời Âu</h5>
            <p>
            Nếu ai hỏi “Du lịch Đà Nẵng đi đâu đầu tiên?” thì câu trả lời không gì khác ngoài Bà Nà Hills. Nằm trên đỉnh núi Chúa với độ cao hơn 1400 mét, nơi đây mang đến trải nghiệm như lạc bước vào châu Âu thu nhỏ. Điểm nhấn khiến Gen Z mê mệt chính là Cầu Vàng, cây cầu độc đáo được nâng đỡ bởi đôi bàn tay khổng lồ. Background này từng lọt vào top địa điểm check-in nổi bật nhất thế giới, nên chắc chắn không thể thiếu trong bộ ảnh du lịch của bạn. Ngoài ra, bạn có thể thả mình giữa không gian cổ điển kiểu Pháp, tham gia lễ hội đường phố sôi động hoặc thưởng thức ẩm thực tại các nhà hàng phong cách châu Âu trong khu làng Pháp.
            </p>
            <h5>2. Bãi biển Mỹ Khê - Nơi nắng vàng, biển xanh chờ đón</h5>
            <p>
            Không thể nói đến du lịch Đà Nẵng mà bỏ qua bãi biển Mỹ Khê – một trong những bãi biển đẹp nhất hành tinh. Với làn nước trong vắt, cát trắng mịn, nắng nhẹ nhàng và không gian cực chill, đây là nơi lý tưởng để Gen Z tha hồ “sống chậm” hay tổ chức những buổi picnic vui nhộn. Bạn có thể trải nghiệm các hoạt động như lướt sóng, chèo SUP, chơi bóng chuyền bãi biển hoặc đơn giản là dạo bước trên bờ cát lúc hoàng hôn, chill cùng tiếng sóng vỗ rì rào.</p>
            <h5>3. Ngũ Hành Sơn - Hành trình khám phá tâm linh và thiên nhiên</h5>
            <p>
            Ngũ Hành Sơn gồm 5 ngọn núi đá vôi với tên gọi tượng trưng cho ngũ hành: Kim, Mộc, Thủy, Hỏa, Thổ. Đây là địa điểm vừa mang ý nghĩa tâm linh vừa cực kỳ “đáng khám phá” cho những bạn trẻ yêu thích trekking nhẹ nhàng. Bạn có thể leo núi, ghé thăm các chùa cổ như chùa Linh Ứng, động Huyền Không, động Âm Phủ… và đừng quên lên đến đỉnh để ngắm toàn cảnh Đà Nẵng từ trên cao.</p>
            <h5>4. Cầu Rồng - Biểu tượng sống động của thành phố
</h5>
            <p>Một trong những biểu tượng không thể thiếu của Đà Nẵng chính là Cầu Rồng. Vào mỗi tối cuối tuần, bạn sẽ được chiêm ngưỡng màn trình diễn Rồng phun lửa và phun nước cực kỳ mãn nhãn – trải nghiệm “đậm chất Gen Z” không nên bỏ lỡ. Đây cũng là nơi tụ tập quen thuộc của nhiều bạn trẻ vào buổi tối để hóng mát, trò chuyện và ngắm cảnh thành phố lên đèn.
            </p>
            <h5>5. Đỉnh Bàn Cờ - Săn mây và “ngồi đánh cờ” với tiên
</h5>
            <p>Nếu bạn thích những nơi “chill tận nóc” và có chút mạo hiểm, hãy thử trekking lên đỉnh Bàn Cờ. Với độ cao gần 700 mét, đây là nơi có view toàn thành phố Đà Nẵng đẹp nhất. Hình tượng ông Tiên ngồi đánh cờ trên đỉnh núi là điểm nhấn thú vị, tạo nên không gian huyền ảo, rất hợp cho những bức hình đậm chất phiêu lưu, tự do.</p>
            <h5>6. Bán đảo Sơn Trà - “Lá phổi xanh” giữa lòng thành phố
</h5>
            <p>Sơn Trà là nơi giao hòa giữa núi rừng và biển cả, nơi lý tưởng để vừa chill, vừa khám phá thiên nhiên. Bạn có thể thuê xe máy để chạy dọc các cung đường ven biển cực thơ, ghé thăm chùa Linh Ứng với tượng Phật Quan Âm cao nhất Việt Nam, hoặc thử thách bản thân với đèo Hải Vân sát cạnh. Đặc biệt, khu vực này còn là nơi sinh sống của loài voọc chà vá chân nâu quý hiếm – một “đặc sản sinh học” mà Gen Z yêu môi trường chắc chắn sẽ yêu thích.
</p>          
            <h5>7. Bảo tàng 3D Trick Eye - Không gian sống ảo đỉnh cao
            </h5>
                        <p>Nếu bạn là tín đồ của nghệ thuật và ảnh ảo diệu, thì bảo tàng 3D là điểm đến không thể bỏ qua. Với hàng trăm bức tranh 3D sống động mô phỏng thế giới cổ tích, viễn tưởng, lịch sử… nơi đây cho bạn thỏa sức sáng tạo với những concept ảnh siêu chất. Không cần app chỉnh sửa cầu kỳ, chỉ cần một chiếc điện thoại và góc chụp khéo léo, bạn sẽ có ngay bộ ảnh trăm nghìn like trên Instagram.            </p> 
                        <h5>8. Chợ Cồn - Ăn sập đặc sản Đà Nẵng
            </h5>
                        <p>Du lịch mà không ăn thì quá thiếu sót, đặc biệt là khi bạn đang ở giữa “thiên đường ẩm thực” như chợ Cồn. Đây là nơi bạn có thể thử đủ món ăn vặt trứ danh của Đà Nẵng như mì Quảng, bánh tráng cuốn thịt heo, bún mắm nêm, ốc hút, chè xoa xoa… Không chỉ ngon mà giá cả ở đây cũng cực kỳ hợp lý với học sinh sinh viên và Gen Z muốn “ăn sang mà không tốn kém”.</p>  
          </div>
          <div className='blogDetailsContentImg'>
            <img src={blogimage1} alt='' />
            <img src={blogimage2} alt='' />
          </div>
          <div className='blogDetailsContent'>
            <p>
            Đà Nẵng không chỉ là một thành phố đáng sống mà còn là điểm đến cực kỳ lý tưởng cho giới trẻ hiện đại. Với những địa điểm du lịch đậm chất riêng, dễ check-in, dễ chill và cực kỳ “ăn ảnh”, bạn hoàn toàn có thể tự tạo nên chuyến đi mang dấu ấn cá nhân.
            </p>
            <p>
            Hãy lên kế hoạch thật chỉn chu, rủ hội bạn thân cùng khám phá top địa điểm du lịch tại Đà Nẵng, và biến kỳ nghỉ tiếp theo trở thành hành trình đáng nhớ nhất. Sẵn sàng du lịch phong cách chưa nào?
            </p>
          </div>
          <div className='share-buttons'>
            <button className='share-button facebook'>
              <FaFacebookF /> Share on Facebook
            </button>
            {/* <button className='share-button twitter'>
              <FaXTwitter />
              Share on Twitter
            </button>
            <button className='share-button pinterest'>
              <FaPinterest /> Share on Pinterest
            </button>
            <button className='share-button more'>
              <FaPlus size={20} />
            </button> */}
          </div>
          <div className='blogDetailsNextPrev'>
            <div className='blogDetailsNextPrevContainer'>
              <div
                className='blogDetailsNextPrevContainerIcon'
                onClick={scrollToTop}
              >
                <GoChevronLeft size={20} />
                <p>PREVIOUS POST</p>
              </div>
            </div>
            <div className='blogDetailsNextPrevContainer'>
              <div
                className='blogDetailsNextPrevContainerIcon2'
                onClick={scrollToTop}
              >
                <p>NEXT POST</p>
                <GoChevronRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  if(blogId === '6') return (
    <>
      <div className='blogDetailsSection'>
        <div className='blogDetailsSectionContainer'>
          <div className='blogDetailsHeading'>
            <h2> Top địa điểm du lịch Đà Nẵng - Sẵn sàng du lịch phong cách 6</h2>
            <div className='blogDetailsMetaData'>
              <span>by admin</span>
              <span>May 19, 2024</span>
              <span>Trends</span>
            </div>
          </div>
          <div className='blogDetailsFeaturedImg'>
            <img src={blogdetail1} alt='' />
          </div>
          <div className='blogDetailsContent'>
            <p>
            Nếu bạn là Gen Z đam mê khám phá, yêu thích sống ảo và không thể ngồi yên trong những ngày nghỉ thì Đà Nẵng chính là tọa độ bạn không nên bỏ qua. Thành phố biển xinh đẹp này không chỉ nổi bật bởi thiên nhiên hùng vĩ mà còn gây sốt bởi những địa điểm du lịch cực chất, “lên hình auto đẹp”, vừa hợp túi tiền vừa đúng chất chill. Cùng khám phá ngay top địa điểm du lịch tại Đà Nẵng để chuẩn bị cho hành trình du lịch phong cách, cá tính và đậm chất Gen Z nhé!
            </p>
            <h5>1. Bà Nà Hills - Check in giữa trời Âu</h5>
            <p>
            Nếu ai hỏi “Du lịch Đà Nẵng đi đâu đầu tiên?” thì câu trả lời không gì khác ngoài Bà Nà Hills. Nằm trên đỉnh núi Chúa với độ cao hơn 1400 mét, nơi đây mang đến trải nghiệm như lạc bước vào châu Âu thu nhỏ. Điểm nhấn khiến Gen Z mê mệt chính là Cầu Vàng, cây cầu độc đáo được nâng đỡ bởi đôi bàn tay khổng lồ. Background này từng lọt vào top địa điểm check-in nổi bật nhất thế giới, nên chắc chắn không thể thiếu trong bộ ảnh du lịch của bạn. Ngoài ra, bạn có thể thả mình giữa không gian cổ điển kiểu Pháp, tham gia lễ hội đường phố sôi động hoặc thưởng thức ẩm thực tại các nhà hàng phong cách châu Âu trong khu làng Pháp.
            </p>
            <h5>2. Bãi biển Mỹ Khê - Nơi nắng vàng, biển xanh chờ đón</h5>
            <p>
            Không thể nói đến du lịch Đà Nẵng mà bỏ qua bãi biển Mỹ Khê – một trong những bãi biển đẹp nhất hành tinh. Với làn nước trong vắt, cát trắng mịn, nắng nhẹ nhàng và không gian cực chill, đây là nơi lý tưởng để Gen Z tha hồ “sống chậm” hay tổ chức những buổi picnic vui nhộn. Bạn có thể trải nghiệm các hoạt động như lướt sóng, chèo SUP, chơi bóng chuyền bãi biển hoặc đơn giản là dạo bước trên bờ cát lúc hoàng hôn, chill cùng tiếng sóng vỗ rì rào.</p>
            <h5>3. Ngũ Hành Sơn - Hành trình khám phá tâm linh và thiên nhiên</h5>
            <p>
            Ngũ Hành Sơn gồm 5 ngọn núi đá vôi với tên gọi tượng trưng cho ngũ hành: Kim, Mộc, Thủy, Hỏa, Thổ. Đây là địa điểm vừa mang ý nghĩa tâm linh vừa cực kỳ “đáng khám phá” cho những bạn trẻ yêu thích trekking nhẹ nhàng. Bạn có thể leo núi, ghé thăm các chùa cổ như chùa Linh Ứng, động Huyền Không, động Âm Phủ… và đừng quên lên đến đỉnh để ngắm toàn cảnh Đà Nẵng từ trên cao.</p>
            <h5>4. Cầu Rồng - Biểu tượng sống động của thành phố
</h5>
            <p>Một trong những biểu tượng không thể thiếu của Đà Nẵng chính là Cầu Rồng. Vào mỗi tối cuối tuần, bạn sẽ được chiêm ngưỡng màn trình diễn Rồng phun lửa và phun nước cực kỳ mãn nhãn – trải nghiệm “đậm chất Gen Z” không nên bỏ lỡ. Đây cũng là nơi tụ tập quen thuộc của nhiều bạn trẻ vào buổi tối để hóng mát, trò chuyện và ngắm cảnh thành phố lên đèn.
            </p>
            <h5>5. Đỉnh Bàn Cờ - Săn mây và “ngồi đánh cờ” với tiên
</h5>
            <p>Nếu bạn thích những nơi “chill tận nóc” và có chút mạo hiểm, hãy thử trekking lên đỉnh Bàn Cờ. Với độ cao gần 700 mét, đây là nơi có view toàn thành phố Đà Nẵng đẹp nhất. Hình tượng ông Tiên ngồi đánh cờ trên đỉnh núi là điểm nhấn thú vị, tạo nên không gian huyền ảo, rất hợp cho những bức hình đậm chất phiêu lưu, tự do.</p>
            <h5>6. Bán đảo Sơn Trà - “Lá phổi xanh” giữa lòng thành phố
</h5>
            <p>Sơn Trà là nơi giao hòa giữa núi rừng và biển cả, nơi lý tưởng để vừa chill, vừa khám phá thiên nhiên. Bạn có thể thuê xe máy để chạy dọc các cung đường ven biển cực thơ, ghé thăm chùa Linh Ứng với tượng Phật Quan Âm cao nhất Việt Nam, hoặc thử thách bản thân với đèo Hải Vân sát cạnh. Đặc biệt, khu vực này còn là nơi sinh sống của loài voọc chà vá chân nâu quý hiếm – một “đặc sản sinh học” mà Gen Z yêu môi trường chắc chắn sẽ yêu thích.
</p>          
            <h5>7. Bảo tàng 3D Trick Eye - Không gian sống ảo đỉnh cao
            </h5>
                        <p>Nếu bạn là tín đồ của nghệ thuật và ảnh ảo diệu, thì bảo tàng 3D là điểm đến không thể bỏ qua. Với hàng trăm bức tranh 3D sống động mô phỏng thế giới cổ tích, viễn tưởng, lịch sử… nơi đây cho bạn thỏa sức sáng tạo với những concept ảnh siêu chất. Không cần app chỉnh sửa cầu kỳ, chỉ cần một chiếc điện thoại và góc chụp khéo léo, bạn sẽ có ngay bộ ảnh trăm nghìn like trên Instagram.            </p> 
                        <h5>8. Chợ Cồn - Ăn sập đặc sản Đà Nẵng
            </h5>
                        <p>Du lịch mà không ăn thì quá thiếu sót, đặc biệt là khi bạn đang ở giữa “thiên đường ẩm thực” như chợ Cồn. Đây là nơi bạn có thể thử đủ món ăn vặt trứ danh của Đà Nẵng như mì Quảng, bánh tráng cuốn thịt heo, bún mắm nêm, ốc hút, chè xoa xoa… Không chỉ ngon mà giá cả ở đây cũng cực kỳ hợp lý với học sinh sinh viên và Gen Z muốn “ăn sang mà không tốn kém”.</p>  
          </div>
          <div className='blogDetailsContentImg'>
            <img src={blogimage1} alt='' />
            <img src={blogimage2} alt='' />
          </div>
          <div className='blogDetailsContent'>
            <p>
            Đà Nẵng không chỉ là một thành phố đáng sống mà còn là điểm đến cực kỳ lý tưởng cho giới trẻ hiện đại. Với những địa điểm du lịch đậm chất riêng, dễ check-in, dễ chill và cực kỳ “ăn ảnh”, bạn hoàn toàn có thể tự tạo nên chuyến đi mang dấu ấn cá nhân.
            </p>
            <p>
            Hãy lên kế hoạch thật chỉn chu, rủ hội bạn thân cùng khám phá top địa điểm du lịch tại Đà Nẵng, và biến kỳ nghỉ tiếp theo trở thành hành trình đáng nhớ nhất. Sẵn sàng du lịch phong cách chưa nào?
            </p>
          </div>
          <div className='share-buttons'>
            <button className='share-button facebook'>
              <FaFacebookF /> Share on Facebook
            </button>
            {/* <button className='share-button twitter'>
              <FaXTwitter />
              Share on Twitter
            </button>
            <button className='share-button pinterest'>
              <FaPinterest /> Share on Pinterest
            </button>
            <button className='share-button more'>
              <FaPlus size={20} />
            </button> */}
          </div>
          <div className='blogDetailsNextPrev'>
            <div className='blogDetailsNextPrevContainer'>
              <div
                className='blogDetailsNextPrevContainerIcon'
                onClick={scrollToTop}
              >
                <GoChevronLeft size={20} />
                <p>PREVIOUS POST</p>
              </div>
            </div>
            <div className='blogDetailsNextPrevContainer'>
              <div
                className='blogDetailsNextPrevContainerIcon2'
                onClick={scrollToTop}
              >
                <p>NEXT POST</p>
                <GoChevronRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <>
    </>
  )

};

export default BlogDetails;
