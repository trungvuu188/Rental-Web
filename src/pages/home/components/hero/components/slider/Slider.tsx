import React, { useState, useEffect } from "react";
import banner1 from "../../../../../../assets/images/banner/img_home_banner_desktop_1.webp";
import banner2 from "../../../../../../assets/images/banner/img_home_banner_desktop_2.webp";
import banner3 from "../../../../../../assets/images/banner/img_home_banner_desktop_3.webp";
import "./style.scss";

const slideArray = [
    {
        id: 1,
        image: banner1,
        title: "Bộ sưu tập thời trang mới",
        subtitle: "Khám phá những xu hướng thời trang mới nhất",
        cta: "Xem ngay"
    },
    {
        id: 2,
        image: banner2,
        title: "Thuê trang phục cao cấp",
        subtitle: "Phong cách sang trọng cho mọi dịp đặc biệt",
        cta: "Thuê ngay"
    },
    {
        id: 3,
        image: banner3,
        title: "Ưu đãi đặc biệt",
        subtitle: "Giảm giá lên đến 50% cho khách hàng mới",
        cta: "Mua ngay"
    }
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Auto-play slider (pause when hovered)
    useEffect(() => {
        if (isHovered) return;
        
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slideArray.length);
        }, 5000); // Chuyển slide mỗi 5 giây

        return () => clearInterval(interval);
    }, [isHovered]);

    // Touch handlers for mobile swipe
    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slideArray.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slideArray.length) % slideArray.length);
    };

    // Debug log
    console.log('Current slide:', currentSlide);

    return (
        <div
            className="slider"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <div className="slider__container">
                {/* Slides */}
                <div
                    className="slider__track"
                    style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
                >
                    {slideArray.map((slide, index) => (
                        <div key={slide.id} className="slider__slide">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="slider__image"
                            />
                            <div className="slider__content">
                                <h2 className="slider__title">{slide.title}</h2>
                                <p className="slider__subtitle">{slide.subtitle}</p>
                                <button className="slider__cta">{slide.cta}</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    className="slider__nav slider__nav--prev"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M15 18L9 12L15 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                
                <button
                    className="slider__nav slider__nav--next"
                    onClick={nextSlide}
                    aria-label="Next slide"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M9 18L15 12L9 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                {/* Dots Indicator */}
                <div className="slider__dots">
                    {slideArray.map((_, index) => (
                        <button
                            key={index}
                            className={`slider__dot ${currentSlide === index ? 'slider__dot--active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;