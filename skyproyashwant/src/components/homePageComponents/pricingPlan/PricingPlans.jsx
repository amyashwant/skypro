import React from "react";
import planOne from "../../../assets/images/home-01/pricing/pricing-bg.png";
import planTwo from "../../../assets/images/home-01/pricing/pricing-01.png";
import planThree from "../../../assets/images/home-01/pricing/pricing-02.jpg";
import planFour from "../../../assets/images/home-01/pricing/pricing-03.jpg";
import { Link } from "react-router-dom";

const PricingPlans = () => {
  return (
    <section className="pricing pt-100 pb-50 bg-img">
      <div className="pricing-background-img">
        <img src={planOne} alt="img" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-header">
              <h4 className="subtitle">PRICING PLAN</h4>
              <h2 className="title">Skypro Packages Detail</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-4">
          <div className="col-xl-4 col-md-6">
            <div className="price-wrapper">
              <div className="pricing-item">
                <div className="background-img">  
                  <img src={planTwo} alt="img" />
                </div>
                <h2 className="title">Hindi Bronze SD</h2>
                {/* <p className="para">
                  For 12 mos when bundled, + taxes & equip fee
                </p> */}
                 <ul className="pricing-icons d-flex flex-wrap align-items-center justify-content-start">
                  <li>
                    <span className="icon-wifi-2"></span>
                  </li>
                  <li>
                    <span className="icon-antena"></span>
                  </li>
                  <li>
                    <span className="icon-monitor"></span>
                  </li>
                </ul>
                <ul className="price-list">
                  <li>Home Broadband</li>
                  <li>Internet with a 1000 Mbps</li>
                  <li>99% Internet Uptime</li>
                  <li>Unlimited devices</li>
                </ul>
                <div className="price-amount-icon d-flex flex-wrap align-items-center justify-content-between">
                  <h2 className="price">
                    $30.00 <span>/ Month</span>
                  </h2>
                  <div className="icon-plus">
                    <Link to="/packages">
                      <span className="icon-add-1"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="price-wrapper">
              <div className="pricing-item">
                <div className="background-img">
                  <img src={planThree} alt="img" />
                </div>
                <h2 className="title">Hindi Silver SD</h2>
                {/* <p className="para">
                  For 12 mos when bundled, + taxes & equip fee
                </p> */}
                <ul className="pricing-icons d-flex flex-wrap align-items-center justify-content-start">
                  <li>
                    <span className="icon-wifi-2"></span>
                  </li>
                  <li>
                    <span className="icon-antena"></span>
                  </li>
                  <li>
                    <span className="icon-monitor"></span>
                  </li>
                </ul>
                <ul className="price-list">
                  <li>Home Broadband</li>
                  <li>Internet with a 1000 Mbps</li>
                  <li>99% Internet Uptime</li>
                  <li>Unlimited devices</li>
                </ul>
                <div className="price-amount-icon d-flex flex-wrap align-items-center justify-content-between">
                  <h2 className="price">
                    $59.00 <span>/ Month</span>
                  </h2>
                  <div className="icon-plus">
                    <Link to="/packages">
                      <span className="icon-add-1"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="price-wrapper">
              <div className="pricing-item">
                <div className="background-img">
                  <img src={planFour} alt="img" />
                </div>
                <h2 className="title">Hindi Gold SD</h2>
                {/* <p className="para">
                  For 12 mos when bundled, + taxes & equip fee
                </p> */}
               <ul className="pricing-icons d-flex flex-wrap align-items-center justify-content-start">
                  <li>
                    <span className="icon-wifi-2"></span>
                  </li>
                  <li>
                    <span className="icon-antena"></span>
                  </li>
                  <li>
                    <span className="icon-monitor"></span>
                  </li>
                </ul>
                <ul className="price-list">
                  <li>Home Broadband</li>
                  <li>Internet with a 1000 Mbps</li>
                  <li>99% Internet Uptime</li>
                  <li>Unlimited devices</li>
                </ul>
                <div className="price-amount-icon d-flex flex-wrap align-items-center justify-content-between">
                  <h2 className="price">
                    $30.00 <span>/ Month</span>
                  </h2>
                  <div className="icon-plus">
                    <Link to="/packages">
                      <span className="icon-add-1"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
