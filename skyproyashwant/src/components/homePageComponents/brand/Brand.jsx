import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brandOne from "../../../assets/images/home-01/brand/logo2.png";
import brandTwo from "../../../assets/images/home-01/brand/logo2.png";
import brandThree from "../../../assets/images/home-01/brand/logo2.png";
import brandFour from "../../../assets/images/home-01/brand/logo2.png";
import brandFive from "../../../assets/images/home-01/brand/logo2.png";
import brandSix from "../../../assets/images/home-01/brand/logo2.png";
import brandSeven from "../../../assets/images/home-01/brand/logo2.png";

const Brand = () => {
  const slickSettings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 2000,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="brand brand-logo-img pt-25 pb-25">
      <div className="container">
        <Slider {...slickSettings}>
          <img src={brandOne} alt="img" className="px-2"/>
          <img src={brandTwo} alt="img" className="px-2"/>
          <img src={brandThree} alt="img" className="px-2"/>
          <img src={brandFour} alt="img" className="px-2"/>
          <img src={brandFive} alt="img" className="px-2"/>
          <img src={brandSix} alt="img" className="px-2"/>
          <img src={brandSeven} alt="img" className="px-2"/>
        </Slider>
      </div>
    </div>
  );
};

export default Brand;
