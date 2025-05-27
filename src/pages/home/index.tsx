import About from "./components/about/About";
import Hero from "./components/hero/hero";
import NewProducts from "./components/new-products/NewProducts";
import ProductCategories from "./components/product-category/ProductCategories";
import SubHero from "./components/sub-hero/SubHero";
import Warranty from "./components/warranty/Warranty";
import "./style.scss";

const Home = () => {
    
    return (
        <div className="home">
            <Hero />
            <SubHero />
            <ProductCategories />
            <NewProducts />
            <About />
            <Warranty />
        </div>
    )
};

export default Home;