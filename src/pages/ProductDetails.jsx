import React from 'react';
import AdditionalInfo from '../components/Product/AdditonInfo/AdditionalInfo';
import Product from '../components/Product/ProductMain/Product';
import RelatedProducts from '../components/Product/RelatedProducts/RelatedProducts';

const ProductDetails = () => {
  return (
    <>
      <Product />
      <AdditionalInfo />
      <RelatedProducts />
    </>
  );
};

export default ProductDetails;
