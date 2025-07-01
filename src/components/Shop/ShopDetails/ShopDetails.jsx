// ShopDetails.js
import './ShopDetails.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../Features/Cart/cartSlice';
import Filter from '../Filters/Filter';
import { Link } from 'react-router-dom';
import { categoryWears } from '../../../data/StoreData';
import { FiHeart } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { IoFilterSharp, IoClose } from 'react-icons/io5';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6';
import { FaCartPlus } from 'react-icons/fa';
import toast from 'react-hot-toast';
import {
  useViewProductDetail,
  viewProductDetailUtils,
} from '../../../utils/productDetail';

const ShopDetails = () => {
  const dispatch = useDispatch();
  const viewProductDetail = useViewProductDetail();
  const [wishList, setWishList] = useState({});
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 6;

  const handleWishlistClick = (productID) => {
    setWishList((prevWishlist) => ({
      ...prevWishlist,
      [productID]: !prevWishlist[productID],
    }));
  };

  useEffect(() => {
    const selectedCategory = categoryWears.find(
      (item) => item.id === selectedCategoryId
    );
    setProductList(selectedCategory ? selectedCategory.data : []);
    setCurrentPage(0);
  }, [selectedCategoryId]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const viewDetailProduct = (productId) => {
    viewProductDetail({ categoryId: selectedCategoryId, productId });
  };

  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    const productInCart = cartItems.find(
      (item) => item.productID === product.productID
    );

    if (productInCart && productInCart.quantity >= 20) {
      toast.error('Đã đạt giới hạn sản phẩm', {
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
      toast.success(`Đã thêm vào giỏ hàng!`, {
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

  const selectedCategory = categoryWears.find(
    (item) => item.id === selectedCategoryId
  );

  // Sorting logic
  const handleSortChange = (e) => {
    const sortOption = e.target.value;
    let sortedProducts = [...productList];
    if (sortOption === 'lowToHigh') {
      sortedProducts.sort((a, b) => a.productPrice - b.productPrice);
    } else if (sortOption === 'highToLow') {
      sortedProducts.sort((a, b) => b.productPrice - a.productPrice);
    } else if (sortOption === 'a-z') {
      sortedProducts.sort((a, b) => a.productName.localeCompare(b.productName));
    } else if (sortOption === 'z-a') {
      sortedProducts.sort((a, b) => b.productName.localeCompare(a.productName));
    }
    setProductList(sortedProducts);
    setCurrentPage(0);
  };

  // Pagination
  const totalPages = Math.ceil(productList.length / productsPerPage);

  return (
    <>
      <div className='shopDetails'>
        <div className='shopDetailMain'>
          <div className='shopDetails__left'>
            <Filter handleChangeCategory={(id) => setSelectedCategoryId(id)} />
          </div>
          <div className='shopDetails__right'>
            <div className='shopDetailsSorting'>
              <div className='shopDetailsBreadcrumbLink'>
                <Link to='/' onClick={scrollToTop}>
                  Trang chủ
                </Link>
                &nbsp;/&nbsp;
                <Link to='/shop'>Cửa hàng</Link>
                &nbsp;/&nbsp;
                <span>{selectedCategory?.title || 'Cửa hàng'}</span>
              </div>
              <div className='filterLeft' onClick={toggleDrawer}>
                <IoFilterSharp />
                <p>Lọc</p>
              </div>
              <div className='shopDetailsSort'>
                <select name='sort' id='sort' onChange={handleSortChange}>
                  <option value='default'>Sắp xếp mặc định</option>
                  <option value='Featured'>Nổi bật</option>
                  <option value='bestSelling'>Bán chạy nhất</option>
                  <option value='a-z'>Theo bảng chữ cái, A-Z</option>
                  <option value='z-a'>Theo bảng chữ cái, Z-A</option>
                  <option value='lowToHigh'>Giá, thấp đến cao</option>
                  <option value='highToLow'>Giá, cao đến thấp</option>
                  <option value='oldToNew'>Ngày, cũ đến mới</option>
                  <option value='newToOld'>Ngày, mới đến cũ</option>
                </select>
                <div className='filterRight' onClick={toggleDrawer}>
                  <div className='filterSeprator'></div>
                  <IoFilterSharp />
                  <p>Lọc</p>
                </div>
              </div>
            </div>
            <div className='shopDetailsProducts'>
              <div className='shopDetailsProductsContainer'>
                {productList.length === 0 ? (
                  <p>Không có sản phẩm nào trong danh mục này.</p>
                ) : (
                  productList
                    .slice(
                      currentPage * productsPerPage,
                      (currentPage + 1) * productsPerPage
                    )
                    .map((product) => (
                      <div
                        className='sdProductContainer'
                        key={product.productID}
                      >
                        <div className='sdProductImages'>
                          <a
                            onClick={() => viewDetailProduct(product.productID)}
                            style={{ cursor: 'pointer' }}
                          >
                            <img
                              src={product.frontImg}
                              alt={product.productName}
                              className='sdProduct_front'
                            />
                            <img
                              src={product.backImg}
                              alt={product.productName}
                              className='sdProduct_back'
                            />
                          </a>
                          <h4 onClick={() => handleAddToCart(product)}>
                            Thêm vào giỏ
                          </h4>
                        </div>
                        <div
                          className='sdProductImagesCart'
                          onClick={() => handleAddToCart(product)}
                        >
                          <FaCartPlus />
                        </div>
                        <div className='sdProductInfo'>
                          <div className='sdProductCategoryWishlist'>
                            <p>{product.shopName || 'Tiệm CoMin'}</p>
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
                          <div className='sdProductNameInfo'>
                            <Link
                              to={`/product/${product.productID}`}
                              onClick={scrollToTop}
                            >
                              <h5>{product.productName}</h5>
                            </Link>
                            <p>{product.productPrice.toLocaleString()} VND</p>
                            <div className='sdProductRatingReviews'>
                              <div className='sdProductRatingStar'>
                                {[...Array(5)].map((_, i) => (
                                  <FaStar
                                    key={i}
                                    color={
                                      i < Math.floor(product.rating || 4)
                                        ? '#FEC78A'
                                        : '#e0e0e0'
                                    }
                                    size={10}
                                  />
                                ))}
                              </div>
                              <span>{product.productReviews}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                )}
              </div>
            </div>
            <div className='shopDetailsPagination'>
              <div className='sdPaginationPrev'>
                <p
                  onClick={() => {
                    if (currentPage > 0) {
                      setCurrentPage(currentPage - 1);
                      scrollToTop();
                    }
                  }}
                  style={{ cursor: currentPage > 0 ? 'pointer' : 'not-allowed' }}
                >
                  <FaAngleLeft />
                  Trước
                </p>
              </div>
              <div className='sdPaginationNumber'>
                <div className='paginationNum'>
                  {[...Array(totalPages).keys()].map((number) => (
                    <p
                      key={number}
                      onClick={() => {
                        setCurrentPage(number);
                        scrollToTop();
                      }}
                      className={currentPage === number ? 'active' : ''}
                    >
                      {number + 1}
                    </p>
                  ))}
                </div>
              </div>
              <div className='sdPaginationNext'>
                <p
                  onClick={() => {
                    if (currentPage < totalPages - 1) {
                      setCurrentPage(currentPage + 1);
                      scrollToTop();
                    }
                  }}
                  style={{
                    cursor:
                      currentPage < totalPages - 1 ? 'pointer' : 'not-allowed',
                  }}
                >
                  Tiếp
                  <FaAngleRight />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`filterDrawer ${isDrawerOpen ? 'open' : ''}`}>
        <div className='drawerHeader'>
          <p>Lọc theo</p>
          <IoClose onClick={closeDrawer} className='closeButton' size={26} />
        </div>
        <div className='drawerContent'>
          <Filter handleChangeCategory={(id) => setSelectedCategoryId(id)} />
        </div>
      </div>
    </>
  );
};

export default ShopDetails;