import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import AdditionalInfo from '../components/Product/AdditonInfo/AdditionalInfo';
import Product from '../components/Product/ProductMain/Product';
import RelatedProducts from '../components/Product/RelatedProducts/RelatedProducts';

const ProductDetails = () => {

  const [searchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [searchParams.get('id')]);

  return (
    <>
      <Product />
      <AdditionalInfo />
      <RelatedProducts />
    </>
  );
};

export default ProductDetails;
