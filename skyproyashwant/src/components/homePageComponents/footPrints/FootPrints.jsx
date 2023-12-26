import React from "react";
import footPrint from "../../../assets/images/home-01/footprint/map_image.png";
import { Link } from "react-router-dom";
const FootPrints = () => {
  return (
    <section className="footprint pb-100 pt-50">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6">
            <div className="footprint-left">
              <div className="section-header style-two">
                <h4 className="subtitle">OUR FOOTPRINTS</h4>
                <h2 className="title">
                  SKYPRO IS AVAILABLE TO ALL CORNERS OF THE COUNTRY
                </h2>
                <p className="para">
                  We are dedicated to serving customers. We achieve this not
                  only through our extensive portfolio of internet.
                </p>
              </div>
              <div className="footprint-contact mb-3">
                <p className="contact">Call Us Now For Connect </p>
                <Link to="tel:" className="phone">
                  +(91) 98035-96035
                </Link>
              </div>
                {/* <div className="footprint-button mt-4 pt-lg-3">
                  <Link href="index.html" className="btn--base">
                    DISCOVER MORE
                  </Link>
                </div> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footprint-map">
              <img src={footPrint} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FootPrints;
