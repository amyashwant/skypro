import React from "react";
import aboutOne from "../../../assets/images/home-01/about/about-img-01.png";
import aboutTwo from "../../../assets/images/home-01/about/about-img-02.png";
import aboutThree from "../../../assets/images/home-01/about/about-img-03.png";
import aboutFour from "../../../assets/images/home-01/about/dot-shape.png";
import aboutFive from "../../../assets/images/home-01/about/testi-01.png";
import { Link } from "react-router-dom";
const AboutPages = () => {
  return (
    <section className="about py-100">
      <div className="container">
        <div className="row gy-md-5 gy-4">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-sm-6">
                <div className="about-left-thumb">
                  <img className="w-100" src={aboutOne} alt="img" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="about-right-thumb">
                  <img className="w-100" src={aboutTwo} alt="img" />
                  <img className="w-100" src={aboutThree} alt="img" />
                  <img className="w-100" src={aboutFour} alt="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-right-content ps-lg-5">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-header style-two">
                    <h4 className="subtitle"> ABOUT US</h4>
                    <h2 className="title">
                      DISCOVER A WINDER WORD OF RERATION
                    </h2>
                  </div>
                </div>
              </div>
              <p className="para pb-4">
                Broadband Internet has progressed significantly since its
                foundation in 1997.
              </p>
              <p className="para">
                We have developed reliably and naturally as an interchange
                supplier serving an assorted arrangement of business class voice
                and information administrations
              </p>
              <div className="about-client">
                <div className="about-meta d-flex align-items-center flex-wrap">
                  <div className="meta-thumb">
                    <img src={aboutFive} alt="img" />
                  </div>
                  <div className="meta-content">
                    <h5 className="name">Wade warren</h5>
                    <span className="designation">CEO</span>
                  </div>
                </div>
                <div className="about-button">
                  <Link to="/packages" className="btn--base">
                    DISCOVER MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPages;
