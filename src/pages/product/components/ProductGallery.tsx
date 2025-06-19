import React from 'react';
import ImageGallery from '../../../components/ui/image-gallery';
import { ProductGalleryProps } from '../../../types/product';

const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  productName
}) => {
  return (
    <div className="product-gallery">
      <ImageGallery
        images={images}
        productName={productName}
        className="product-gallery__gallery"
      />
    </div>
  );
};

export default ProductGallery;