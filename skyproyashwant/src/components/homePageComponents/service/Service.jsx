import React from "react";
import featureOne from "../../../assets/images/home-02/features/featrures-01.png";
import featureTwo from "../../../assets/images/home-02/features/featrures-02.png";
import featureThree from "../../../assets/images/home-02/features/featrures-03.png";
import featureFour from "../../../assets/images/home-02/features/featrures-04.png";
const Service = () => {
  return (
    <section className="home-two-service">
      <div className="container-fluid justify-content-center p-0">
        <div className="row g-xl-0 gy-4 gx-0">
          <div className="col-xl-3 col-lg-6 col-sm-6">
            <div className="home-two-service-item">
              <div className="thumb">
                <img src={featureOne} alt="img" />
              </div>
              <div className="contents d-flex flex-wrap justify-content-between align-items-center">
                <div className="left">
                  <h5 className="title">ONE STOP SOLUTION</h5>
                  <p className="para">99% Internet Uptime</p>
                  {/* <span className="icon-right-arrow"></span> */}
                </div>
                <div className="right-icon">
                  <span className="icon-wifi-router-1"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-6">
            <div className="home-two-service-item">
              <div className="thumb">
                <img src={featureTwo} alt="img" />
              </div>
              <div className="contents d-flex flex-wrap justify-content-between align-items-center">
                <div className="left">
                  <h5 className="title">Weather Proof Signal</h5>
                  <p className="para">24/7 Customer Support</p>
                  {/* <span className="icon-right-arrow"></span> */}
                </div>
                <div className="right-icon">
                  <span className="icon-mobile-phone"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-6">
            <div className="home-two-service-item">
              <div className="thumb">
                <img src={featureThree} alt="img" />
              </div>
              <div className="contents d-flex flex-wrap justify-content-between align-items-center">
                <div className="left">
                  <h5 className="title">Unlimited New Content</h5>
                  <p className="para">99% Home Internet</p>
                  {/* <span className="icon-right-arrow"></span> */}
                </div>
                <div className="right-icon">
                  <span className="icon-home-insurance"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-6">
            <div className="home-two-service-item">
              <div className="thumb">
                <img src={featureFour} alt="img" />
              </div>
              <div className="contents d-flex flex-wrap justify-content-between align-items-center">
                <div className="left">
                  <h5 className="title">4K Ultra HD STB</h5>
                  <p className="para">99% Data Connectivity</p>
                  {/* <span className="icon-right-arrow"></span> */}
                </div>
                <div className="right-icon">
                  <span className="icon-satellite-dish"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
