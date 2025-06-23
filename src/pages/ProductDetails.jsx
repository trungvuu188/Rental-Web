import React, { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import AdditionalInfo from '../components/Product/AdditonInfo/AdditionalInfo';
import Product from '../components/Product/ProductMain/Product';
import RelatedProducts from '../components/Product/RelatedProducts/RelatedProducts';
import { categoryWears } from '../data/StoreData';

const ProductDetails = () => {
  const [searchParams] = useSearchParams();

  // Lấy productDetail từ newArrivals (cate=5)
  const productDetail = useMemo(() => {
    const cateId = searchParams.get('cate');
    const proId = searchParams.get('id');
    const filteredCateArr = categoryWears.filter(
      (category) => category.id === Number.parseInt(cateId)
    );
    if (!filteredCateArr.length) return null;
    const productDetailArr = filteredCateArr[0].data.filter(
      (pro) => pro.productID === Number.parseInt(proId)
    );
    return productDetailArr[0] || null;
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [searchParams.get('id')]);

  return (
    <>
      <Product productDetail={productDetail} />
      <AdditionalInfo reviewDetails={productDetail?.reviewDetails} productReviews={productDetail?.productReviews} />
      <RelatedProducts />
    </>
  );
};

export default ProductDetails;
