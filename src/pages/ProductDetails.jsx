import React, { useEffect } from 'react';
import AdditionalInfo from '../components/Product/AdditonInfo/AdditionalInfo';
import Product from '../components/Product/ProductMain/Product';
import RelatedProducts from '../components/Product/RelatedProducts/RelatedProducts';

const ProductDetails = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <Product />
      <AdditionalInfo />
      <RelatedProducts />
    </>
  );
};

export default ProductDetails;
