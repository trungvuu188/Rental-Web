import slide3 from "../../../../../../assets/images/slides/slide_3_img.webp";
import slide4 from "../../../../../../assets/images/slides/slide_4_img.webp";
import "./style.scss";

const slideArray = [
    {
        slide: slide3
    },
    {
        slide: slide4
    }
];

const Slider = () => {

      

    return (
        <div className="slider">
            <div className="slider__container">
                <img src={slide3} alt="" className="slider--img" />
            </div>
        </div>
    )
};

export default Slider;