import React from "react";
import brandOne from "../../../assets/images/home-01/brand/footer-logo-01.png";
import brandTwo from "../../../assets/images/home-01/brand/footer-logo-02.png";
import brandThree from "../../../assets/images/home-01/brand/footer-logo-03.png";
import brandFour from "../../../assets/images/home-01/brand/footer-logo-04 (1).png";
import brandFive from "../../../assets/images/home-01/brand/footer-logo-04.png";
import brandSix from "../../../assets/images/home-01/brand/footer-logo-05.png";
import brandSeven from "../../../assets/images/home-01/brand/footer-logo-06.png";

const BrandPage = () => {
  return (
    <div className="brand style-two pb-100 pt-50">
      <div className="container">
        <div className="brand-slider">
          <img src={brandOne} alt="img" />
          <img src={brandTwo} alt="img" />
          <img src={brandThree} alt="img" />
          <img src={brandFour} alt="img" />
          <img src={brandFive} alt="img" />
          <img src={brandSix} alt="img" />
          <img src={brandSeven} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
