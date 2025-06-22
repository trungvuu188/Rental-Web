import React, { useEffect, useState } from 'react';
import './RelatedProducts.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import StoreData, { categoryWears } from '../../../data/StoreData';

import { FiHeart } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useSearchParams } from 'react-router-dom';
import { useViewProductDetail } from '../../../utils/productDetail';

const RelatedProducts = () => {
  const [wishList, setWishList] = useState({});
  const [searchParams] = useSearchParams();
  const [productList, setProductList] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const viewProductDetail = useViewProductDetail();

  useEffect(() => {
    const cateId = searchParams.get('cate');
    const filteredCateArr = categoryWears.filter(
      (category) => category.id === Number.parseInt(cateId)
    );
    setProductList(filteredCateArr[0].data);
  }, []);

  const handleWishlistClick = (productID) => {
    setWishList((prevWishlist) => ({
      ...prevWishlist,
      [productID]: !prevWishlist[productID],
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
;
  const handleViewProductDetail = (productId) => {
    viewProductDetail({ categoryId: searchParams.get('cate'), productId})
  }

  return (
    <>
      <div className='relatedProductSection'>
        <div className='relatedProducts'>
          <h2>
            RELATED <span>PRODUCTS</span>
          </h2>
        </div>
        <div className='relatedProductSlider'>
          <div className='swiper-button image-swiper-button-next'>
            <IoIosArrowForward />
          </div>
          <div className='swiper-button image-swiper-button-prev'>
            <IoIosArrowBack />
          </div>
          <Swiper
            slidesPerView={4}
            slidesPerGroup={4}
            spaceBetween={30}
            loop={true}
            navigation={{
              nextEl: '.image-swiper-button-next',
              prevEl: '.image-swiper-button-prev',
            }}
            modules={[Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 14,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 30,
              },
            }}
          >
            {productList?.slice(0, 8).map((product) => {
              return (
                <SwiperSlide key={product.productID}>
                  <div className='rpContainer'>
                    <div className='rpImages' onClick={() => handleViewProductDetail(product.productID)}>
                      <img
                        src={product.frontImg}
                        alt={product.productName}
                        className='rpFrontImg'
                      />
                      <img
                        src={product.backImg}
                        className='rpBackImg'
                        alt={product.productName}
                      />
                      <h4>Add to Cart</h4>
                    </div>

                    <div className='relatedProductInfo'>
                      <div className='rpCategoryWishlist'>
                        <p>Tiem CoMin</p>
                        <FiHeart
                          onClick={() => handleWishlistClick(product.productID)}
                          style={{
                            color: wishList[product.productID]
                              ? 'red'
                              : '#767676',
                            cursor: 'pointer',
                          }}
                        />
                      </div>
                      <div className='productNameInfo'>
                        <h5 onClick={scrollToTop}>{product.productName}</h5>
                        <p>{product.productPrice}VND</p>
                        <div className='productRatingReviews'>
                          <div className='productRatingStar'>
                            <FaStar color='#FEC78A' size={10} />
                            <FaStar color='#FEC78A' size={10} />
                            <FaStar color='#FEC78A' size={10} />
                            <FaStar color='#FEC78A' size={10} />
                            <FaStar color='#FEC78A' size={10} />
                          </div>

                          <span>{product.productReviews}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
