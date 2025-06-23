import React, { useState } from 'react';
import './AdditionalInfo.css';

import { FaStar } from 'react-icons/fa';
import Rating from '@mui/material/Rating';

const AdditionalInfo = ({ reviewDetails = [], productReviews }) => {
  const [activeTab, setActiveTab] = useState('aiTab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className='productAdditionalInfo'>
        <div className='productAdditonalInfoContainer'>
          <div className='productAdditionalInfoTabs'>
            <div className='aiTabs'>
              <p
                onClick={() => handleTabClick('aiTab1')}
                className={activeTab === 'aiTab1' ? 'aiActive' : ''}
              >
                Mô tả
              </p>
              <p
                onClick={() => handleTabClick('aiTab3')}
                className={activeTab === 'aiTab3' ? 'aiActive' : ''}
              >
                Đánh giá ({reviewDetails?.length || 0})
              </p>
            </div>
          </div>
          <div className='productAdditionalInfoContent'>
            {/* Tab1 */}
            {activeTab === 'aiTab1' && (
              <div className='aiTabDescription'>
                <div className='descriptionParaGrid'>
                  <div className='descriptionPara'>
                    <h3>Lý do nên chọn sản phẩm?</h3>
                    <ul style={{marginLeft: 16}}>
                      <li>Chất liệu cotton mềm mại, thoáng mát</li>
                      <li>Thiết kế đơn giản, dễ phối đồ, phù hợp nhiều dịp</li>
                    </ul>
                  </div>
                  <div className='descriptionPara'>
                    <h3>Lót vải</h3>
                    <p style={{ marginTop: '-10px' }}>
                      100% Polyester, Lớp chính: 100% Polyester.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* Tab3 */}
            {activeTab === 'aiTab3' && (
              <div className='aiTabReview'>
                <div className='aiTabReviewContainer'>
                  <h3>Đánh giá sản phẩm</h3>
                  <div className='userReviews'>
                    {reviewDetails && reviewDetails.length > 0 ? (
                      reviewDetails.map((review, idx) => (
                        <div className='userReview' key={idx} style={{ borderBottom: '1px solid #e4e4e4' }}>
                          <div className='userReviewImg'>
                            <img src={require('../../../assets/Users/user' + ((idx % 2) + 1) + '.jpeg')} alt='' />
                          </div>
                          <div className='userReviewContent'>
                            <div className='userReviewTopContent'>
                              <div className='userNameRating'>
                                <h6>Khách hàng {idx + 1}</h6>
                                <div className='userRating'>
                                  {[...Array(5)].map((_, i) => (
                                    <FaStar color='#FEC78A' size={10} key={i} />
                                  ))}
                                </div>
                              </div>
                              <div className='userDate'>
                                <p>2024</p>
                              </div>
                            </div>
                            <div className='userReviewBottomContent' style={{ marginBottom: '30px' }}>
                              <p>{review}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div style={{ padding: '20px', color: '#767676' }}>Chưa có đánh giá nào cho sản phẩm này.</div>
                    )}
                  </div>
                  <div className='userNewReview'>
                    <div className='userNewReviewMessage'>
                      <h5>Hãy là người đầu tiên nhận xét về sản phẩm này</h5>
                      <p>Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc được đánh dấu *</p>
                    </div>
                    <div className='userNewReviewRating'>
                      <label>Đánh giá của bạn *</label>
                      <Rating name='simple-controlled' size='small' />
                    </div>
                    <div className='userNewReviewForm'>
                      <form>
                        <textarea
                          cols={30}
                          rows={8}
                          placeholder='Nhận xét của bạn'
                        />
                        <input
                          type='text'
                          placeholder='Tên *'
                          required
                          className='userNewReviewFormInput'
                        />
                        <input
                          type='email'
                          placeholder='Email *'
                          required
                          className='userNewReviewFormInput'
                        />
                        <div className='userNewReviewFormCheck'>
                          <label>
                            <input type='checkbox' placeholder='Subject' />
                            Lưu tên, email và website của tôi cho lần nhận xét tiếp theo.
                          </label>
                        </div>
                        <button type='submit'>Gửi đánh giá</button>
                      </form>
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

export default AdditionalInfo;
