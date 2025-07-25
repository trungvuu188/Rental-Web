import React, { useEffect, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../Features/Cart/cartSlice';

import { GoChevronLeft } from 'react-icons/go';
import { GoChevronRight } from 'react-icons/go';
import { FaStar } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { PiShareNetworkLight } from 'react-icons/pi';

import { Link, useSearchParams } from 'react-router-dom';

import toast from 'react-hot-toast';

import './Product.css';
import { categoryWears } from '../../../data/StoreData';

const Product = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const [searchParams] = useSearchParams();
  const [productDetail, setProductDetail] = useState();
  const productImg = [productDetail?.frontImg, productDetail?.backImg];
  const product1 = productDetail?.frontImg;
  const product2 = productDetail?.backImg;

  const prevImg = () => {
    setCurrentImg(currentImg === 0 ? productImg.length - 1 : currentImg - 1);
  };

  const nextImg = () => {
    setCurrentImg(currentImg === productImg.length - 1 ? 0 : currentImg + 1);
  };

  // Product Quantity

  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const cateId = searchParams.get('cate');
    const proId = searchParams.get('id');
    const filteredCateArr = categoryWears.filter(
      (category) => category.id === Number.parseInt(cateId)
    );
    const productDetailArr = filteredCateArr[0].data.filter(
      (pro) => pro.productID === Number.parseInt(proId)
    );
    setProductDetail(productDetailArr[0]);
  }, [searchParams.get('id')]);

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  // Product WishList

  const [clicked, setClicked] = useState(false);

  const handleWishClick = () => {
    setClicked(!clicked);
  };

  // Product Sizes

  // const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const sizes = ['L'];
  const sizesFullName = [
    // 'Extra Small',
    // 'Small',
    'Medium',
    // 'Large',
    // 'Extra Large',
  ];
  const [selectSize, setSelectSize] = useState('L');

  // Product Colors

  const [highlightedColor, setHighlightedColor] = useState('#E4E4E4');
  const colors = ['#E4E4E4'];
  const colorsName = ['Grey'];

  // Product Detail to Redux

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = () => {
    const productDetails = {
      productID: 14,
      productName: 'Lightweight Puffer Jacket',
      productPrice: 90,
      frontImg: productImg[0],
      productReviews: '8k+ reviews',
    };

    const productInCart = cartItems.find(
      (item) => item.productID === productDetails.productID
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
      dispatch(addToCart(productDetails));
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

  return (
    <>
      <div className='productSection'>
        <div className='productShowCase'>
          <div className='productGallery'>
            <div className='productThumb'>
              <img src={product1} onClick={() => setCurrentImg(0)} alt='' />
              <img src={product2} onClick={() => setCurrentImg(1)} alt='' />
            </div>
            <div className='productFullImg'>
              <img src={productImg[currentImg]} alt='' />
              <div className='buttonsGroup'>
                <button onClick={prevImg} className='directionBtn'>
                  <GoChevronLeft size={18} />
                </button>
                <button onClick={nextImg} className='directionBtn'>
                  <GoChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
          <div className='productDetails'>
            <div className='productBreadcrumb'>
              <div className='breadcrumbLink'>
                <Link to='/'>Home</Link>&nbsp;/&nbsp;
                <Link to='/shop'>The Shop</Link>
              </div>
              <div className='prevNextLink'>
                <Link to='/product'>
                  <GoChevronLeft />
                  <p>Prev</p>
                </Link>
                <Link to='/product'>
                  <p>Next</p>
                  <GoChevronRight />
                </Link>
              </div>
            </div>
            <div className='productName'>
              <h1>{productDetail?.productName}</h1>
            </div>
            <div className='productRating'>
              <FaStar color='#FEC78A' size={10} />
              <FaStar color='#FEC78A' size={10} />
              <FaStar color='#FEC78A' size={10} />
              <FaStar color='#FEC78A' size={10} />
              <FaStar color='#FEC78A' size={10} />
              <p>{productDetail?.productReviews}</p>
            </div>
            <div className='productPrice'>
              <h3>{productDetail?.productPrice} VND</h3>
            </div>
            <div className='productDescription'>
              <p>
                {productDetail?.productDesc
                  ? productDetail.productDesc
                  : 'Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, aliquet magna posuere eget.'}
              </p>
            </div>
            <div className='productSizeColor'>
              <div className='productSize'>
                <p>Sizes</p>
                <div className='sizeBtn'>
                  {sizes.map((size, index) => (
                    <Tooltip
                      key={size}
                      title={sizesFullName[index]}
                      placement='top'
                      TransitionComponent={Zoom}
                      enterTouchDelay={0}
                      arrow
                    >
                      <button
                        style={{
                          borderColor: selectSize === size ? '#000' : '#e0e0e0',
                        }}
                        onClick={() => setSelectSize(size)}
                      >
                        {size}
                      </button>
                    </Tooltip>
                  ))}
                </div>
              </div>
            </div>
            <div className='productCartQuantity'>
              <div className='productQuantity'>
                <button onClick={decrement}>-</button>
                <input
                  type='text'
                  value={quantity}
                  onChange={handleInputChange}
                />
                <button onClick={increment}>+</button>
              </div>
              <div className='productCartBtn'>
                <button onClick={handleAddToCart}>Add to Cart</button>
              </div>
            </div>
            <div className='productWishShare'>
              <div className='productWishList'>
                <button onClick={handleWishClick}>
                  <FiHeart color={clicked ? 'red' : ''} size={17} />
                  <p>Add to Wishlist</p>
                </button>
              </div>
              <div className='productShare'>
                <PiShareNetworkLight size={22} />
                <p>Share</p>
              </div>
            </div>
            {/* <div className="productTags">
              <p>
                <span>SKU: </span>N/A
              </p>
              <p>
                <span>CATEGORIES: </span>Casual & Urban Wear, Jackets, Men
              </p>
              <p>
                <span>TAGS: </span>biker, black, bomber, leather
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
