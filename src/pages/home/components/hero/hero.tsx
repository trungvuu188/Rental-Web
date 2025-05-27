import Slider from "./components/slider/Slider";
import arrowDown from "../../../../assets/icons/arrow-down.svg";
import "./style.scss";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__inner">
                <Slider />
                <div className="hero__arrow-down">
                    <img src={arrowDown} alt="Arrow down" className="hero__arrow-down--icon" />
                </div>
            </div>
        </section>
    )
};

export default Hero;