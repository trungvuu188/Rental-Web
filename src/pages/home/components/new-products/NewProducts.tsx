import "./style.scss";

const NewProducts = () => {
    return (
        <section className="new-products section-home">
            <div className="container">
                <div className="new-products__inner">
                    <div className="section__title">New Product</div>
                    <div className="row row-cols-5">
                        <div className="col">1</div>
                        <div className="col">2</div>
                        <div className="col">3</div>
                        <div className="col">4</div>
                        <div className="col">5</div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default NewProducts;