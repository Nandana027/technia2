import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black', borderRadius: '50%', padding: '10px' }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black', borderRadius: '50%', padding: '10px' }}
      onClick={onClick}
    />
  );
};

const CourseCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center mt-10 w-full px-5 space-x-5">
      <Slider {...settings} className="w-full ">
        {/* {[...Array(6)].map((_, index) => (
          <div key={index} className="p-2"> */}
            <div className="border-solid border-2 shadow-lg shadow-gay-700 rounded-lg flex flex-col p-2">
              <img
                src="https://asset-cdn.learnyst.com/assets/schools/129716/courses/115265/EMFT_8iy94g.jpeg"
                className="w-full rounded-lg"
                alt="Course"
              />
              <button className="border-solid border-2 text-white rounded p-3 mt-3 w-[100%] bg-black">
                Click here
              </button>
            </div>
            <div className="border-solid border-2 shadow-lg shadow-yellow-600/90 rounded-lg flex flex-col  p-2">
              <img
                src="https://asset-cdn.learnyst.com/assets/schools/129716/courses/115265/EMFT_8iy94g.jpeg"
                className="w-full rounded-lg"
                alt="Course"
              />
              <button className="border-solid border-2 text-white rounded p-3 mt-3 w-[100%] bg-black">
                Click here
              </button>
            </div>
            <div className="border-solid border-2 shadow-lg shadow-yellow-600/90 rounded-lg flex flex-col p-2">
              <img
                src="https://asset-cdn.learnyst.com/assets/schools/129716/courses/115265/EMFT_8iy94g.jpeg"
                className="w-full rounded-lg"
                alt="Course"
              />
              <button className="border-solid border-2 text-white rounded p-3 mt-3 w-[100%] bg-black">
                Click here
              </button>
            </div>
            <div className="border-solid border-2 shadow-lg shadow-yellow-600/90 rounded-lg flex flex-col p-2">
              <img
                src="https://asset-cdn.learnyst.com/assets/schools/129716/courses/115265/EMFT_8iy94g.jpeg"
                className="w-full rounded-lg"
                alt="Course"
              />
              <button className="border-solid border-2 text-white rounded p-3 mt-3 w-[100%] bg-black ">
                Click here
              </button>
            </div>
            <div className="border-solid border-2 shadow-lg shadow-yellow-600/90 rounded-lg flex flex-col p-2">
              <img
                src="https://asset-cdn.learnyst.com/assets/schools/129716/courses/115265/EMFT_8iy94g.jpeg"
                className="w-full rounded-lg"
                alt="Course"
              />
              <button className="border-solid border-2 text-white rounded p-3 mt-3 w-[100%] bg-black">
                Click here
              </button>
            </div>
          {/* </div>
        ))} */}
      </Slider>
    </div>
  );
};

export default CourseCarousel;
