import React from "react";
// import shapeOne from "../../../assets/images/home-02/banner/shape-01.png";
// import shapeTwo from "../../../assets/images/home-02/banner/shape-02.png";
// import shapeThree from "../../../assets/images/home-02/banner/shape-03.png";
import banner from "../../../assets/images/home-02/banner/banner.png";

import shapeOne from "../../../assets/images/home-02/banner/shape-01.png";
import shapeTwo from "../../../assets/images/home-02/banner/fun-bg.png";
import shapeThree from "../../../assets/images/home-02/banner/unnamed.png";
// import banner from "../../../assets/images/home-02/banner/";
import { Link } from "react-router-dom";

// import shapeOne from "../../../assets/images/ilovepdf_pages-to-jpg/skyproimages_page-0001.jpg";
// import shapeTwo from "../../../assets/images/ilovepdf_pages-to-jpg/skyproimages_page-0002.jpg";
// import shapeThree from "../../../assets/images/ilovepdf_pages-to-jpg/skyproimages_page-0003.jpg";
// import shapeFour from "../../../assets/images/ilovepdf_pages-to-jpg/skyproimages_page-0004.jpg";
// import shapeFive from "../../../assets/images/ilovepdf_pages-to-jpg/skyproimages_page-0005.jpg";
// import shapeSix from "../../../assets/images/ilovepdf_pages-to-jpg/skyproimages_page-0006.jpg";
// import shapeSeven from "../../../assets/images/ilovepdf_pages-to-jpg/skyproimages_page-0007.jpg";
// import shapeEight from "../../../assets/images/ilovepdf_pages-to-jpg/skyproimages_page-0008-removebg-preview.png";
// import shapeNine from "../../../assets/images/ilovepdf_pages-to-jpg/skyproimages_page-0009.jpg";
// import shapeTen from "../../../assets/images/ilovepdf_pages-to-jpg/skyproimages_page-0010.jpg";
// import shapeEleven from "../../../assets/images/ilovepdf_pages-to-jpg/skyproimages_page-0011.jpg";

const Banner = () => {
  return (
    <section className="home-two-banner">
      <div className="banner-before-after">
        <span>
          <img src={shapeOne} alt="img" />
        </span>
        <span>
          <img src={shapeTwo} alt="img" />
        </span>
        <span>
          <img src={shapeThree} alt="img" />
        </span>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-content">
              <h6 className="subtitle">WELCOME TO BROADBAND INTERNET</h6>
              <h1 className="title">SKYPRO FOR THE FAST INTERNET</h1>
              <ul className="banner-buttons d-flex flex-wrap">
                <li className="banner-buttons__item">
                  <Link to="/signup" className="btn--base banner-buttons__link">
                    START FROM $20 <i className="icon-checked"></i>
                  </Link>
                </li>
                <li className="banner-buttons__item">
                  <Link
                    to="/contact"
                    className="btn--base style-two banner-buttons__link"
                  >
                    CONTACT US $20 <i className="icon-next"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-right-image">
              <img src= {banner} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
