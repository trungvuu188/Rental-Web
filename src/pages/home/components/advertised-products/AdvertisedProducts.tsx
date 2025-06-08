import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../../store';
import { fetchAdvertisedProductsAsync } from '../../../../store/slices/productsSlice';
import ApiProductCard from '../../../../components/ui/api-product-card';
import './style.scss';

const AdvertisedProducts: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: products, loading, error } = useSelector(
    (state: RootState) => state.products.advertisedProducts
  );

  useEffect(() => {
    dispatch(fetchAdvertisedProductsAsync());
  }, [dispatch]);

  if (loading) {
    return (
      <section className="advertised-products section-home">
        <div className="container">
          <div className="advertised-products__inner">
            <div className="section__title">Promoted Products</div>
            <div className="advertised-products__loading">
              <div className="loading-spinner">Loading...</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="advertised-products section-home">
        <div className="container">
          <div className="advertised-products__inner">
            <div className="section__title">Promoted Products</div>
            <div className="advertised-products__error">
              Error loading products: {error}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="advertised-products section-home">
      <div className="container">
        <div className="advertised-products__inner">
          <div className="section__title">Promoted Products</div>
          {products.length > 0 ? (
            <div className="advertised-products__grid">
              {products.map((product) => (
                <ApiProductCard 
                  key={product.id} 
                  product={product}
                  className="advertised-products__card"
                />
              ))}
            </div>
          ) : (
            <div className="advertised-products__empty">
              No promoted products available at the moment.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdvertisedProducts; 