import About from "./components/about/About";
import Hero from "./components/hero/hero";
import NewProducts from "./components/new-products/NewProducts";
import ProductCategories from "./components/product-category/ProductCategories";
import SubHero from "./components/sub-hero/SubHero";
import Warranty from "./components/warranty/Warranty";
import AdvertisedProducts from "./components/advertised-products/AdvertisedProducts";
import OutstandingProducts from "./components/outstanding-products/OutstandingProducts";
import "./style.scss";

const Home = () => {
    
    return (
        <div className="home">
            <Hero />
            <SubHero />
            <ProductCategories />
            <AdvertisedProducts />
            <OutstandingProducts />
            <NewProducts />
            <About />
            <Warranty />
        </div>
    )
};

export default Home;