import productCate1 from "../../../../assets/images/category/img_item_category_1.webp";
import productCate2 from "../../../../assets/images/category/img_item_category_2.webp";
import productCate3 from "../../../../assets/images/category/img_item_category_3.webp";
import productCate4 from "../../../../assets/images/category/img_item_category_4.webp";
import CategoryItem from "./components/category-item/CategoryItem";
import "./style.scss";

const cateArr = [
    {
        path: '/cate1',
        title: 'AO DAI',
        image: productCate1
    },
    {
        path: '/cate2',
        title: 'PARTY DRESS',
        image: productCate2
    },
    {
        path: '/cate3',
        title: 'TRAVEL/OCCASION',
        image: productCate3
    },
    {
        path: '/cate4',
        title: 'OFFICE/BUSINESS',
        image: productCate4
    },
];

const ProductCategories = () => {
    return (
        <section className="product-categories section-home">
            <div className="container">
                <div className="product-categories__inner">
                    <h2 className="section__title">Category</h2>
                    <div className="row row-cols-4">
                        {
                            cateArr.map((item, idx) => (
                                <div className="col">
                                  <CategoryItem {...item} key={idx} />  
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ProductCategories;