import React, { useState } from 'react';
import './LimitedEdition.css';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../Features/Cart/cartSlice';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

import { Link } from 'react-router-dom';

import StoreData, { limiteds } from '../../../data/StoreData';

import { FiHeart } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaCartPlus } from 'react-icons/fa';

import toast from 'react-hot-toast';
import { useViewProductDetail } from '../../../utils/productDetail';

const LimitedEdition = () => {
  const viewProductDetail = useViewProductDetail();
  const dispatch = useDispatch();

  const [wishList, setWishList] = useState({});

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

  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    const productInCart = cartItems.find(
      (item) => item.productID === product.productID
    );

    if (productInCart && productInCart.quantity >= 20) {
      toast.error('Product limit reached', {
        duration: 2000,
        style: {
          backgroundColor: '#ff4b4b',
          color: 'white',
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#ff4b4b',
        },
      });
    } else {
      dispatch(addToCart(product));
      toast.success(`Added to cart!`, {
        duration: 2000,
        style: {
          backgroundColor: '#07bc0c',
          color: 'white',
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#07bc0c',
        },
      });
    }
  };

  const handleRentNow = (product) => {
    dispatch(addToCart({ ...product, quantity: 1, isRental: true }));
    toast.success(`Đã thêm vào giỏ hàng để thuê!`, {
      duration: 2000,
      style: {
        backgroundColor: '#07bc0c',
        color: 'white',
      },
      iconTheme: {
        primary: '#fff',
        secondary: '#07bc0c',
      },
    });
  };

  return (
    <>
      <div className='limitedProductSection'>
        <h2>
          Phiên bản <span>giới hạn</span>
        </h2>
        <div className='limitedProductSlider'>
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
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              320: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 14,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween: 30,
              },
            }}
          >
            {limiteds.map((product) => {
              return (
                <SwiperSlide key={product.productID}>
                  <div className='lpContainer'>
                    <div className='lpImageContainer'>
                      <a
                        to='/Product'
                        onClick={() =>
                          viewProductDetail({
                            categoryId: 6,
                            productId: product.productID,
                          })
                        }
                      >
                        <img
                          src={product.frontImg}
                          alt={product.productName}
                          className='lpImage'
                        />
                      </a>
                      <Link
                        to="/cart"
                        state={{ rentNowProduct: { ...product, quantity: 1, isRental: true } }}
                        onClick={scrollToTop}
                        className="rent-now-link"
                      >
                        <h4>Thuê ngay</h4>
                      </Link>
                      <h4 onClick={() => handleAddToCart(product)}>
                        Thêm vào giỏ
                      </h4>
                    </div>
                    <div
                      className='lpProductImagesCart'
                      onClick={() => handleAddToCart(product)}
                    >
                      <FaCartPlus />
                    </div>
                    <div className='limitedProductInfo'>
                      <div className='lpCategoryWishlist'>
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
                        <Link to='/Product' onClick={scrollToTop}>
                          <h5>{product.productName}</h5>
                        </Link>
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

export default LimitedEdition;