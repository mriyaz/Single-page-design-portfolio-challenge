import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prevImg from '../assets/icon-arrow-left.svg';
import nextImg from '../assets/icon-arrow-right.svg';


type ImageCarouselProps = {
    images: string[]; // Array of image URLs
};
const SlickButton: React.FC<{ onClick?: () => void, arrImg: string }> = ({ onClick, arrImg }) => (
    <img
        onClick={onClick}
        src={arrImg}
        className='bg-black p-5 rounded-full hover:bg-custom-purple' 
        
        />
);

const Carousel: React.FC<ImageCarouselProps> = ({ images }) => {
    // Custom ref to control the slider
    const sliderRef = React.useRef<Slider>(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ],

    };

    // Custom functions to go to next and previous slides
    const goToNext = () => {
        sliderRef.current?.slickNext();
    };

    const goToPrevious = () => {
        sliderRef.current?.slickPrev();
    };

    return (
        <div className="carousel-container ">
            <Slider ref={sliderRef} {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="image-container">
                        <img src={image} alt={`Slide ${index}`} className="w-full h-full rounded-lg" />
                    </div>
                ))}
            </Slider>

            <div className="flex justify-center mt-4 gap-5">
                <SlickButton onClick={goToPrevious} arrImg={prevImg} />
                <SlickButton onClick={goToNext} arrImg={nextImg} />
            </div>
        </div>

    );
}

export default Carousel;