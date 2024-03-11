import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useState, useRef } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Slide every 3 seconds
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (current) => setCurrentSlide(current),
  };

  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <BsChevronRight
        className={`${className} md:text-5xl right-4 absolute top-1/2 transform -translate-y-1/2 cursor-pointer`}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <BsChevronLeft
        className={`${className} md:text-5xl left-4 absolute top-1/2 transform -translate-y-1/2 cursor-pointer`}
        onClick={onClick}
      />
    );
  }

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      <div className="border border-gray-300 rounded overflow-hidden shadow-lg relative">
        <Slider {...sliderSettings} ref={sliderRef} className="flex-auto md:max-h-80 lg:max-h-96">
          <div className="relative h-80 md:h-96">
            <img src="1.jpg" alt="Slide 1" className="w-full h-full object-cover" />
          </div>
          <div className="relative h-80 md:h-96">
            <img src="2.jpg" alt="Slide 2" className="w-full h-full object-cover" />
          </div>
          <div className="relative h-80 md:h-96">
            <img src="3.jpg" alt="Slide 3" className="w-full h-full object-cover" />
          </div>
        </Slider>

        {/* Side Navigation Buttons */}
        <button
          onClick={handlePrevClick}
          className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 hover:bg-gray-200 ..."
        >
          <BsChevronLeft size={24} />
        </button>

        <button
          onClick={handleNextClick}
          className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 hover:bg-gray-200 ..."
        >
          <BsChevronRight size={24} />
        </button>

        <div className=" mt-2 absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`bg-${currentSlide === index ? 'green' : 'gray'}-500 w-4 h-4 rounded-full`}
            ></div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <h2 className="font-bold text-2xl">Our Product Gallery</h2>
      </div>
    </>
  );
}
