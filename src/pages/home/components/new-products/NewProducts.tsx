import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../../store';
import { fetchLatestProductsAsync } from '../../../../store/slices/productsSlice';
import ApiProductCard from '../../../../components/ui/api-product-card';
import "./style.scss";

const NewProducts = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data: products, loading, error } = useSelector(
        (state: RootState) => state.products.latestProducts
    );

    useEffect(() => {
        dispatch(fetchLatestProductsAsync());
    }, [dispatch]);

    if (loading) {
        return (
            <section className="new-products section-home">
                <div className="container">
                    <div className="new-products__inner">
                        <div className="section__title">Latest Products</div>
                        <div className="new-products__loading">
                            <div className="loading-spinner">Loading...</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="new-products section-home">
                <div className="container">
                    <div className="new-products__inner">
                        <div className="section__title">Latest Products</div>
                        <div className="new-products__error">
                            Error loading products: {error}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="new-products section-home">
            <div className="container">
                <div className="new-products__inner">
                    <div className="section__title">Latest Products</div>
                    <p className="new-products__subtitle">
                        Discover our newest additions
                    </p>
                    {products.length > 0 ? (
                        <div className="new-products__grid">
                            {products.map((product) => (
                                <ApiProductCard 
                                    key={product.id} 
                                    product={product}
                                    className="new-products__card"
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="new-products__empty">
                            No new products available at the moment.
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
};

export default NewProducts;