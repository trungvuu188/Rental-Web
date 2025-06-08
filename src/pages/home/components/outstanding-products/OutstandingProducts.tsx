import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../../store';
import { fetchOutstandingProductsAsync } from '../../../../store/slices/productsSlice';
import ApiProductCard from '../../../../components/ui/api-product-card';
import './style.scss';

const OutstandingProducts: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: products, loading, error } = useSelector(
    (state: RootState) => state.products.outstandingProducts
  );

  useEffect(() => {
    dispatch(fetchOutstandingProductsAsync());
  }, [dispatch]);

  if (loading) {
    return (
      <section className="outstanding-products section-home">
        <div className="container">
          <div className="outstanding-products__inner">
            <div className="section__title">Outstanding Products</div>
            <div className="outstanding-products__loading">
              <div className="loading-spinner">Loading...</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="outstanding-products section-home">
        <div className="container">
          <div className="outstanding-products__inner">
            <div className="section__title">Outstanding Products</div>
            <div className="outstanding-products__error">
              Error loading products: {error}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="outstanding-products section-home">
      <div className="container">
        <div className="outstanding-products__inner">
          <div className="section__title">Outstanding Products</div>
          <p className="outstanding-products__subtitle">
            Most popular products based on rental count
          </p>
          {products.length > 0 ? (
            <div className="outstanding-products__grid">
              {products.map((product, index) => (
                <div key={product.id} className="outstanding-products__item">
                  <div className="outstanding-products__rank">#{index + 1}</div>
                  <ApiProductCard 
                    product={product}
                    className="outstanding-products__card"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="outstanding-products__empty">
              No outstanding products available at the moment.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OutstandingProducts; 